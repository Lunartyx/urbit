import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackgroundAtmosphere } from "@/components/background-atmosphere"
import { AnchorHighlight } from "@/components/anchor-highlight"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Urbanetz Tech Consulting — Persönliche IT-Lösungen",
  description: "Webseiten, Hosting, Business-E-Mail, Automatisierungen und IT-Infrastruktur für Selbstständige, Vereine und kleinere Unternehmen.",
  icons: { icon: [{ url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" }, { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" }, { url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-icon.png" },
}

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#0b0712" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de" className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}><body className="font-sans antialiased"><BackgroundAtmosphere /><AnchorHighlight /><SiteHeader /><main className="relative z-10">{children}</main><div className="relative z-10"><SiteFooter /></div>{process.env.NODE_ENV === "production" && <Analytics />}</body></html>
}
