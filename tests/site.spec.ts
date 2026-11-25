import { test, expect } from "@playwright/test"
import path from "node:path"
import type axe from "axe-core"

declare global {
  interface Window {
    axe: typeof axe
  }
}

const routes = [
  "/",
  "/en",
  "/leistungen",
  "/leistungen/webseiten",
  "/leistungen/business-e-mail",
  "/leistungen/hosting",
  "/ueber-mich",
  "/kontakt",
  "/login",
  "/impressum",
  "/datenschutz",
]

for (const route of routes) {
  test(`${route}: responsive, accessible and canonical`, async ({ context }) => {
    for (const width of [320, 390, 768, 1440]) {
      const page = await context.newPage()
      const errors: string[] = []
      page.on("pageerror", (error) => errors.push(error.message))
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text())
      })
      await page.setViewportSize({ width, height: 900 })
      const response = await page.goto(route)
      // Finish prefetches before the next viewport navigation cancels them.
      await page.waitForLoadState("networkidle")
      // Firefox exposes a 304 for a successful cached navigation.
      expect([200, 304]).toContain(response?.status())
      await expect(page.locator("h1")).toHaveCount(1)
      await expect(page).toHaveTitle(/\| Urbit$/)
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      )
      // Catch clipped content even when the document itself hides overflow.
      const overflow = await page.locator("main").evaluate((main) =>
        [...main.querySelectorAll<HTMLElement>("h1,h2,h3,p,a,li")]
          .filter((element) => {
            const bounds = element.getBoundingClientRect()
            return bounds.width > 0 && (bounds.right > innerWidth + 1 || bounds.left < -1)
          })
          .map((element) => element.textContent),
      )
      expect(overflow, `Content overflow at ${width}px`).toEqual([])
      if (width === 320 || width === 1440) {
        await page.addScriptTag({
          path: path.join(process.cwd(), "node_modules/axe-core/axe.min.js"),
        })
        const violations = await page.evaluate(async () => {
          const result = await window.axe.run(document, {
            runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
          })
          return result.violations.map(({ id, nodes }) => ({
            id,
            targets: nodes.map((node) => node.target),
          }))
        })
        expect(violations, `Accessibility at ${width}px`).toEqual([])
      }
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://urbit.ch${route === "/" ? "" : route}`,
      )
      expect(errors).toEqual([])
      await page.close()
    }
  })
}

test("mobile menu supports Escape, keyboard and route changes", async ({ page, browserName }) => {
  test.skip(
    browserName === "webkit" && process.platform === "win32",
    "Windows WebKit does not tab into links; verify Safari keyboard navigation on a real device.",
  )
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  const toggle = page.locator(".menu-toggle")
  const navigation = page.getByRole("navigation", { name: "Mobile Navigation", exact: true })
  await toggle.click()
  await expect(navigation).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(navigation).toBeHidden()
  await expect(toggle).toBeFocused()
  await page.keyboard.press("Enter")
  await page.keyboard.press("Tab")
  await expect(navigation.getByRole("link", { name: "Leistungen", exact: true })).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(page).toHaveURL(/\/leistungen$/)
  await expect(navigation).toBeHidden()
  await toggle.click()
  await page.setViewportSize({ width: 1440, height: 900 })
  await expect(navigation).toBeHidden()
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(toggle).toHaveAttribute("aria-expanded", "false")
})

test("skip link, service links and reduced motion", async ({ page, browserName }) => {
  test.skip(
    browserName === "webkit" && process.platform === "win32",
    "Windows WebKit does not tab into links; real Safari keyboard verification remains a human task.",
  )
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/")
  await page.keyboard.press("Tab")
  await expect(page.getByRole("link", { name: "Zum Inhalt springen" })).toBeFocused()
  await page.keyboard.press("Enter")
  await expect(page.locator("main")).toBeFocused()
  const animations = await page.evaluate(
    () => document.getAnimations().filter((animation) => animation.playState === "running").length,
  )
  expect(animations).toBe(0)
  await page.locator('.service-link[href="/leistungen#hosting"]').click()
  await expect(page).toHaveURL(/\/leistungen#hosting$/)
  await expect(page.locator("#hosting")).toBeInViewport()
  expect(
    await page.locator("#hosting").evaluate((el) => el.getBoundingClientRect().top),
  ).toBeGreaterThanOrEqual(90)
})

test("contact paths and work-in-progress portal are explicit", async ({ page }) => {
  await page.goto("/kontakt")
  await expect(page.getByRole("link", { name: "E-Mail schreiben", exact: true })).toHaveAttribute(
    "href",
    /^mailto:kontakt@dominikurbanetz.ch\?subject=/,
  )
  await expect(page.locator("main a[href='tel:+41774632390']")).toBeVisible()
  await expect(page.locator("main input:disabled,main button:disabled")).toHaveCount(0)
  await page.goto("/login")
  await expect(page.locator("main").getByText("In Entwicklung", { exact: true })).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/)
  await page.getByRole("link", { name: "Direkt Kontakt aufnehmen" }).click()
  await expect(page).toHaveURL(/\/kontakt$/)
})

test("service discovery, pricing and copy-email feedback", async ({ page }) => {
  await page.goto("/leistungen")
  await page.locator('a[href="/leistungen/webseiten"]').click()
  await expect(page).toHaveURL(/\/leistungen\/webseiten$/)
  await page.getByRole("link", { name: "Kosten & Vorbereitung", exact: true }).click()
  await expect(page.locator("#service-kosten")).toBeInViewport()
  await expect(page.locator("#service-kosten")).toContainText("Individuelle Offerte")
  await page.goto("/kontakt")
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("denied")
        },
      },
    }),
  )
  await page.getByRole("button", { name: "E-Mail-Adresse kopieren" }).click()
  await expect(page.getByRole("status")).toContainText("Markieren und kopieren")
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          document.body.dataset.copiedEmail = text
        },
      },
    }),
  )
  await page.getByRole("button", { name: "E-Mail-Adresse kopieren" }).click()
  await expect(page.getByRole("status")).toContainText("E-Mail-Adresse kopiert")
  expect(await page.locator("body").getAttribute("data-copied-email")).toBe(
    "kontakt@dominikurbanetz.ch",
  )
})

test("mobile pointer menu and full business address", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.getByRole("button", { name: "Menü öffnen" }).click()
  await page
    .getByRole("navigation", { name: "Mobile Navigation", exact: true })
    .getByRole("link", { name: "Kontakt", exact: true })
    .click()
  await expect(page).toHaveURL(/\/kontakt$/)
  await expect(page.locator("#mobile-navigation")).toBeHidden()
  await page.goto("/impressum")
  await expect(page.locator("address")).toContainText("Rebstrasse 11")
  await expect(page.locator("address")).toContainText("8156 Oberhasli")
  const data = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText())
  expect(data.address.streetAddress).toBe("Rebstrasse 11")
  expect(data.address.postalCode).toBe("8156")
})

test("SEO endpoints, social image, redirects and not found", async ({ request, page }) => {
  const sitemap = await request.get("/sitemap.xml")
  expect(sitemap.status()).toBe(200)
  expect(await sitemap.text()).toContain("https://urbit.ch/leistungen")
  expect(await sitemap.text()).not.toContain("/login")
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Sitemap: https://urbit.ch/sitemap.xml",
  )
  const redirect = await request.get("/leistungen?from=www", {
    headers: { host: "www.urbit.ch" },
    maxRedirects: 0,
  })
  expect(redirect.status()).toBe(308)
  expect(redirect.headers().location).toBe("https://urbit.ch/leistungen?from=www")
  await page.goto("/")
  const image = await page.locator('meta[property="og:image"]').getAttribute("content")
  expect(image).toBeTruthy()
  const imageResponse = await request.get(new URL(image!).pathname)
  expect(imageResponse.status()).toBe(200)
  expect(imageResponse.headers()["content-type"]).toContain("image/png")
  expect((await page.goto("/diese-seite-existiert-nicht"))?.status()).toBe(404)
  await expect(page.getByRole("link", { name: "Zur Startseite", exact: true })).toBeVisible()
})
