import type { Metadata } from "next"

export const site = {
  name: "Urbit",
  locality: "Oberhasli",
  postalCode: "8156",
  streetAddress: "Rebstrasse 11",
  region: "Zürich",
  country: "Schweiz",
  fullName: "Urbanetz IT Consulting",
  person: "Dominik Urbanetz",
  email: "kontakt@dominikurbanetz.ch",
  phone: "+41 77 463 23 90",
  phoneHref: "tel:+41774632390",
}
export const siteUrl = new URL(process.env.SITE_URL ?? "https://urbit.ch").origin

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | Urbit` },
    description,
    alternates: {
      canonical: new URL(path, siteUrl).href,
      ...(path === "/"
        ? { languages: { "de-CH": siteUrl, en: `${siteUrl}/en`, "x-default": siteUrl } }
        : {}),
    },
    openGraph: {
      title: `${title} | Urbit`,
      description,
      siteName: site.fullName,
      locale: "de_CH",
      type: "website",
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
    },
    twitter: { card: "summary_large_image", title: `${title} | Urbit`, description },
  }
}
