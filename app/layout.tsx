import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { site, siteUrl } from "@/lib/site"
import "./globals.css"

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" })
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Urbit | Persönliche IT aus Oberhasli", template: "%s | Urbit" },
  description:
    "Persönliche IT-Beratung, Websites, Hosting und Infrastruktur aus Oberhasli. Direkt mit Dominik Urbanetz.",
  icons: { icon: "/icon.svg" },
  openGraph: { siteName: site.fullName, locale: "de_CH", type: "website" },
  twitter: { card: "summary_large_image" },
}
export const viewport: Viewport = { colorScheme: "dark light", themeColor: "#160f20" }
const business = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.fullName,
  url: siteUrl,
  email: site.email,
  telephone: site.phone,
  areaServed: "CH",
  founder: { "@type": "Person", name: site.person },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    streetAddress: site.streetAddress,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "CH",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className={`${geist.variable} dark`}>
      <body>
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  )
}
