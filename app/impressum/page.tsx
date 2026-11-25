import Link from "next/link"
import { BusinessAddress } from "@/components/business-address"
import { PageIntro } from "@/components/page-intro"
import { site, pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Impressum",
  "Anbieterangaben und Kontaktinformationen zu Urbit, Urbanetz IT Consulting, Dominik Urbanetz in Oberhasli.",
  "/impressum",
)

export default function ImpressumPage() {
  return (
    <>
      <PageIntro eyebrow="Rechtliches" title="Impressum">
        Anbieterangaben und rechtliche Hinweise zu Urbit.
      </PageIntro>
      <div className="container legal-layout">
        <aside className="legal-aside">
          <p>
            Urbit
            <br />
            Urbanetz IT Consulting
          </p>
          <p>
            <Link href="/datenschutz" className="text-link">
              Datenschutz
            </Link>
          </p>
        </aside>
        <div className="prose">
          <section>
            <h2>Anbieter und Kontakt</h2>
            <p>
              Dominik Urbanetz
              <br />
              Urbit · Urbanetz IT Consulting
              <br />
              {site.postalCode} {site.locality}
            </p>
            <BusinessAddress />
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </section>
          <section>
            <h2>Tätigkeitsbereich</h2>
            <p>
              Urbit unterstützt Selbstständige, Vereine und kleinere Unternehmen bei Websites,
              Hosting, Business E-Mail, Automatisierungen, technischem Support und IT-Infrastruktur.
            </p>
          </section>
          <section>
            <h2>Individuelle Vereinbarungen</h2>
            <p>
              Diese Website informiert über Leistungen und ermöglicht unverbindliche Anfragen. Ein
              Vertrag kommt nicht durch den Besuch der Website oder eine Kontaktaufnahme zustande.
              Umfang, Kosten und Zeitrahmen werden individuell vereinbart.
            </p>
          </section>
          <section>
            <h2>Inhalte und externe Links</h2>
            <p>
              Die Inhalte werden sorgfältig erstellt und gepflegt. Eine Gewähr für Vollständigkeit,
              Richtigkeit und Aktualität wird nicht übernommen. Verbindlich sind individuell
              vereinbarte Leistungen und Offerten.
            </p>
            <p>
              Für Inhalte und Datenschutzpraktiken externer Websites sind die jeweiligen Betreiber
              verantwortlich.
            </p>
          </section>
          <section>
            <h2>Urheberrecht</h2>
            <p>
              Inhalte, Texte, Gestaltung und Grafiken sind urheberrechtlich geschützt, soweit nicht
              anders gekennzeichnet. Eine Verwendung ausserhalb der gesetzlichen Schranken bedarf
              der vorgängigen Zustimmung.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
