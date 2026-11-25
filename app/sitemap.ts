import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/en",
    "/leistungen",
    "/leistungen/webseiten",
    "/leistungen/business-e-mail",
    "/leistungen/hosting",
    "/ueber-mich",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({ url: `${siteUrl}${path === "/" ? "" : path}` }))
}
