import { ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { enquiryConfig } from "@/lib/enquiry/server"
import { CopyEmail } from "@/components/copy-email"
import { PageIntro } from "@/components/page-intro"
import { site, pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Kontakt",
  "Besprechen Sie Ihr IT-Projekt direkt mit Dominik Urbanetz. Kostenloses, unverbindliches Erstgespräch per E-Mail oder Telefon anfragen.",
  "/kontakt",
)

export const dynamic = "force-dynamic"

export default function KontaktPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kontakt"
        title={
          <>
            Eine Idee. Eine Frage.
            <br />
            Lassen Sie uns sprechen.
          </>
        }
      >
        Eine kurze Beschreibung genügt. Im kostenlosen Erstgespräch klären wir Ihr Anliegen, den
        passenden Umfang und die nächsten Schritte.
      </PageIntro>
      <section className="container contact-layout" aria-label="Kontaktmöglichkeiten">
        <div className="contact-primary">
          <h2>Schreiben Sie mir.</h2>
          <p>Was möchten Sie umsetzen oder verbessern?</p>
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email}
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Projektanfrage über Urbit")}`}
            className="button"
          >
            E-Mail schreiben <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="contact-hint">
            Öffnet Ihr E-Mail-Programm. Sie können die Adresse auch in Ihr Webmail kopieren.
          </p>
          <CopyEmail email={site.email} />
        </div>
        <div className="contact-secondary">
          <h2>Lieber persönlich besprechen?</h2>
          <a href={site.phoneHref} className="contact-phone">
            {site.phone}
          </a>
          <dl className="contact-facts">
            <div>
              <dt>Rückmeldung auf Ihre Anfrage</dt>
              <dd>In der Regel innerhalb von 1–2 Werktagen</dd>
            </div>
            <div>
              <dt>Standort & Zusammenarbeit</dt>
              <dd>8156 Oberhasli, Schweiz. Remote schweizweit.</dd>
            </div>
            <div>
              <dt>Sprachen</dt>
              <dd>Deutsch und Englisch</dd>
            </div>
          </dl>
        </div>
      </section>
      {(enquiryConfig() ||
        (process.env.NODE_ENV === "development" &&
          process.env.ENQUIRY_FORM_PREVIEW === "true")) && <ContactForm />}
      <section className="container enquiry-next" aria-labelledby="enquiry-next-title">
        <h2 id="enquiry-next-title">So geht es nach Ihrer Anfrage weiter.</h2>
        <p>
          Ich schaue mir Ihr Anliegen an und kläre offene Fragen mit Ihnen. Im kostenlosen
          Erstgespräch besprechen wir, welche Unterstützung sinnvoll ist. Vor der Umsetzung
          vereinbaren wir Umfang, Kosten und Zeitplan.
        </p>
        <p>
          Sie müssen noch keine technischen Details kennen. Bitte schicken Sie keine Passwörter oder
          vertraulichen Kundendaten mit Ihrer ersten Nachricht.
        </p>
      </section>
      <section className="light-section">
        <div className="container contact-help">
          <h2>Das hilft für eine erste Einschätzung.</h2>
          <ul>
            <li>Was möchten Sie erreichen, oder welches Problem gibt es?</li>
            <li>Welche Website oder Systeme nutzen Sie bereits?</li>
            <li>Gibt es einen gewünschten Termin oder einen Budgetrahmen?</li>
          </ul>
        </div>
      </section>
    </>
  )
}
