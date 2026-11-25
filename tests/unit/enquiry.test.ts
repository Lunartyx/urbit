import { test } from "node:test"
import assert from "node:assert/strict"
import { createEnquiryHandler, signToken } from "../../lib/enquiry/core"

const secret = "a-test-only-secret-with-at-least-32-characters"
const now = 1800000000000
const payload = () => ({
  name: "Test Person",
  email: "test@example.com",
  company: "",
  message: "A sufficiently detailed test enquiry.",
  website: "",
  token: signToken(secret, now - 5000),
})
function setup(overrides: Partial<Parameters<typeof createEnquiryHandler>[0]> = {}) {
  const deliveries: unknown[] = []
  const logs: unknown[] = []
  const handle = createEnquiryHandler({
    enabled: true,
    origin: "https://urbit.ch",
    secret,
    now: () => now,
    mail: {
      async send(data) {
        deliveries.push(data)
      },
    },
    store: {
      async accept() {
        return true
      },
    },
    log: (event, id) => logs.push({ event, id }),
    ...overrides,
  })
  const post = (data: unknown = payload(), origin = "https://urbit.ch") =>
    handle(
      new Request("https://urbit.ch/api/enquiry", {
        method: "POST",
        headers: { origin, "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    )
  return { post, deliveries, logs }
}
test("accepted delivery sends once and logs no personal information", async () => {
  const { post, deliveries, logs } = setup()
  assert.equal((await post()).status, 200)
  assert.equal(deliveries.length, 1)
  assert.equal(JSON.stringify(logs).includes("test@example.com"), false)
})
test("disabled form cannot send", async () => {
  const s = setup({ enabled: false })
  assert.equal((await s.post()).status, 503)
  assert.equal(s.deliveries.length, 0)
})
test("rejects cross-origin, malformed fields, oversized bodies and honeypot", async () => {
  const s = setup()
  assert.equal((await s.post(payload(), "https://foreign.example")).status, 403)
  for (const data of [
    { ...payload(), email: "a@example.com\r\nBcc: victim@example.com" },
    { ...payload(), message: "short" },
    { ...payload(), extra: true },
    { ...payload(), website: "spam" },
  ])
    assert.equal((await s.post(data)).status, 400)
  assert.equal((await s.post({ ...payload(), message: "x".repeat(25000) })).status, 413)
  assert.equal(s.deliveries.length, 0)
})
test("rejects forged, expired and too-fast tokens", async () => {
  const s = setup()
  for (const token of [
    signToken("other-secret", now - 5000),
    signToken(secret, now - 1800001),
    signToken(secret, now),
    "bad",
  ])
    assert.equal((await s.post({ ...payload(), token })).status, 400)
  assert.equal(s.deliveries.length, 0)
})
test("rate limit and replay rejection do not send", async () => {
  const used = new Set<string>()
  const s = setup({
    store: {
      async accept(_key, nonce) {
        if (used.has(nonce)) return false
        used.add(nonce)
        return true
      },
    },
  })
  const data = payload()
  assert.equal((await s.post(data)).status, 200)
  const limited = await s.post(data)
  assert.equal(limited.status, 429)
  assert.equal(limited.headers.get("retry-after"), "900")
  assert.equal(s.deliveries.length, 1)
})
test("unavailable abuse store fails closed", async () => {
  const s = setup({
    store: {
      async accept() {
        throw new Error("secret")
      },
    },
  })
  assert.equal((await s.post()).status, 503)
  assert.equal(s.deliveries.length, 0)
  assert.equal(JSON.stringify(s.logs).includes("secret"), false)
})
test("delivery failure never reports success or leaks exception", async () => {
  const s = setup({
    mail: {
      async send() {
        throw new Error("password private@example.com")
      },
    },
  })
  const response = await s.post()
  assert.equal(response.status, 502)
  assert.equal((await response.text()).includes("private@"), false)
  assert.equal(JSON.stringify(s.logs).includes("password"), false)
})
