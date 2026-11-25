import { test, expect } from "@playwright/test"
import path from "node:path"

test("form preview: accessible controls, failure preserves message, success clears it", async ({
  page,
}) => {
  test.skip(
    !process.env.TEST_FORM_PREVIEW,
    "Run against the local development preview, with mocked delivery only.",
  )
  await page.route("**/api/enquiry/token", (route) =>
    route.fulfill({ json: { token: "mock-browser-token" } }),
  )
  let succeeds = false
  await page.route("**/api/enquiry", (route) =>
    route.fulfill({
      status: succeeds ? 200 : 502,
      json: {
        message: succeeds
          ? "Zum Versand angenommen."
          : "Versand fehlgeschlagen. Bitte nutzen Sie E-Mail.",
      },
    }),
  )
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("http://localhost:3000/kontakt")
  await page.getByLabel("Name *", { exact: true }).fill("Test Person")
  await page.getByLabel("E-Mail *", { exact: true }).fill("test@example.com")
  const message = page.getByLabel("Ihr Anliegen *", { exact: true })
  await message.fill("This is a sufficiently detailed enquiry for the browser test.")
  await page.getByRole("button", { name: "Anfrage senden", exact: true }).click()
  await expect(page.locator("form").getByRole("alert")).toContainText("Versand fehlgeschlagen")
  await expect(page.locator("form").getByRole("alert")).toBeFocused()
  await expect(message).not.toHaveValue("")
  succeeds = true
  await page.getByRole("button", { name: "Anfrage senden", exact: true }).click()
  await expect(page.getByRole("status").filter({ hasText: "Zum Versand" })).toBeFocused()
  await expect(message).toHaveValue("")
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390)
})

test("form preview: accessibility scan", async ({ page, browserName }) => {
  test.skip(!process.env.TEST_FORM_PREVIEW, "Requires local development preview")
  test.skip(
    browserName === "firefox" && process.platform === "win32",
    "Windows Firefox crashes inside axe on form controls; manual verification remains required",
  )
  await page.route("**/api/enquiry/token", (route) => route.fulfill({ json: { token: "mock" } }))
  await page.goto("http://localhost:3000/kontakt")
  await page.addScriptTag({ path: path.join(process.cwd(), "node_modules/axe-core/axe.min.js") })
  expect(
    await page.evaluate(async () =>
      (
        await window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
        })
      ).violations.map((v) => v.id),
    ),
  ).toEqual([])
})
