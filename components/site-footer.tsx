import Link from "next/link"
import { Brand } from "@/components/brand"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link href="/" aria-label="Urbit Startseite">
            <Brand />
          </Link>
          <p>
            Ihre IT. Persönlich betreut.
            <br />
            8156 Oberhasli, Schweiz. Remote schweizweit.
          </p>
        </div>
        <nav aria-label="Footer-Navigation">
          <Link href="/leistungen">Leistungen</Link>
          <Link href="/ueber-mich">Über mich</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/en" hrefLang="en" lang="en">English</Link>
          <Link href="/login" prefetch={false}>
            Kundenbereich <span className="nav-status">In Entwicklung</span>
          </Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <span>Deutsch & Englisch</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Urbit · Urbanetz IT Consulting</p>
        <div>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
