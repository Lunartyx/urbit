import { test, expect } from "@playwright/test"
test("production form remains disabled, health and language references work", async ({
  request,
  page,
}) => {
  expect((await request.get("/api/health")).status()).toBe(200)
  expect((await request.get("/api/enquiry/token")).status()).toBe(503)
  expect((await request.post("/api/enquiry", { data: {} })).status()).toBe(503)
  await page.goto("/kontakt")
  await expect(page.locator("form")).toHaveCount(0)
  await page.goto("/")
  await expect(page.locator('link[hreflang="en"]')).toHaveAttribute("href", "https://urbit.ch/en")
  await page.goto("/en")
  await expect(page.locator('link[hreflang="de-CH"]')).toHaveAttribute("href", "https://urbit.ch")
  await expect(page.locator('main [lang="en"]')).toBeVisible()
})
