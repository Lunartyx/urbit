import { createHmac, randomUUID, timingSafeEqual } from "node:crypto"
import { z } from "zod"

export const enquirySchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    email: z
      .string()
      .trim()
      .email()
      .max(254)
      .regex(/^[^\r\n]+$/),
    company: z.string().trim().max(150).default(""),
    message: z.string().trim().min(20).max(5000),
    website: z.string().max(200).default(""),
    token: z.string().max(300),
  })
  .strict()
export type Enquiry = z.infer<typeof enquirySchema>
export interface MailDelivery {
  send(data: Enquiry): Promise<void>
}
export interface AbuseStore {
  accept(emailKey: string, nonce: string): Promise<boolean>
}
export function signToken(secret: string, now = Date.now()) {
  const payload = `${now}.${randomUUID()}`
  return `${payload}.${createHmac("sha256", secret).update(payload).digest("hex")}`
}
function validToken(token: string, secret: string, now: number) {
  const [timestamp, nonce, signature, extra] = token.split(".")
  if (
    extra ||
    !/^\d{13}$/.test(timestamp ?? "") ||
    !/^[a-f0-9-]{36}$/.test(nonce ?? "") ||
    !/^[a-f0-9]{64}$/.test(signature ?? "")
  )
    return false
  const age = now - Number(timestamp)
  const expected = createHmac("sha256", secret).update(`${timestamp}.${nonce}`).digest("hex")
  return (
    age >= 3000 && age <= 1800000 && timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  )
}
export function createEnquiryHandler(deps: {
  enabled: boolean
  origin: string
  secret: string
  mail: MailDelivery
  store: AbuseStore
  now?: () => number
  log: (event: string, requestId: string) => void
}) {
  return async (request: Request) => {
    const id = randomUUID()
    const reply = (status: number, message: string) =>
      Response.json(
        { message, requestId: id },
        {
          status,
          headers: {
            "Cache-Control": "no-store",
            ...(status === 429 ? { "Retry-After": "900" } : {}),
          },
        },
      )
    if (!deps.enabled)
      return reply(
        503,
        "Das Formular ist noch nicht verfügbar. Bitte nutzen Sie E-Mail oder Telefon.",
      )
    if (
      request.headers.get("origin") !== deps.origin ||
      request.headers.get("content-type")?.split(";")[0] !== "application/json"
    )
      return reply(403, "Diese Anfrage konnte nicht geprüft werden.")
    let input: unknown
    try {
      const reader = request.body?.getReader()
      if (!reader) return reply(400, "Bitte füllen Sie das Formular aus.")
      const chunks: Uint8Array[] = []
      let length = 0
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        length += value.length
        if (length > 24000) {
          await reader.cancel()
          return reply(413, "Ihre Nachricht ist zu lang.")
        }
        chunks.push(value)
      }
      input = JSON.parse(Buffer.concat(chunks).toString("utf8"))
    } catch {
      return reply(400, "Die Anfrage konnte nicht gelesen werden.")
    }
    const parsed = enquirySchema.safeParse(input)
    if (!parsed.success)
      return reply(400, "Bitte prüfen Sie Name, E-Mail-Adresse und Nachricht (20–5000 Zeichen).")
    const data = parsed.data
    if (data.website || !validToken(data.token, deps.secret, (deps.now ?? Date.now)()))
      return reply(400, "Bitte laden Sie das Formular neu und versuchen Sie es erneut.")
    const emailKey = createHmac("sha256", deps.secret)
      .update(data.email.toLowerCase())
      .digest("hex")
    try {
      if (!(await deps.store.accept(emailKey, data.token.split(".")[1])))
        return reply(
          429,
          "Bitte warten Sie 15 Minuten vor einer weiteren Anfrage oder kontaktieren Sie uns direkt.",
        )
    } catch {
      deps.log("abuse_store_unavailable", id)
      return reply(
        503,
        "Das Formular ist vorübergehend nicht verfügbar. Bitte nutzen Sie E-Mail oder Telefon.",
      )
    }
    try {
      await deps.mail.send(data)
    } catch {
      deps.log("delivery_failed", id)
      return reply(
        502,
        "Die Versandbestätigung fehlt. Bitte kontaktieren Sie uns per E-Mail; Ihre Nachricht bleibt hier erhalten.",
      )
    }
    deps.log("delivery_accepted", id)
    return reply(
      200,
      "Der E-Mail-Dienst hat Ihre Anfrage zum Versand angenommen. Falls Sie keine Rückmeldung erhalten, kontaktieren Sie uns bitte direkt.",
    )
  }
}
