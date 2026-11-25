import Link from "next/link"
import { ProjectExample } from "@/components/project-example"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { CTA } from "@/components/cta"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Persönliche IT aus Oberhasli",
  "Websites, Hosting, Business E-Mail und IT-Infrastruktur für Selbstständige, Vereine und kleine Unternehmen. Direkt mit Dominik Urbanetz.",
  "/",
)

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectExample />
      <Approach />
      <section className="founder-section">
        <div className="container founder-grid">
          <div className="founder-signature">
            <span aria-hidden="true">du.</span>
            <p>
              Dominik Urbanetz
              <br />
              <span>Gründer von Urbit</span>
            </p>
          </div>
          <div>
            <p className="section-label">Der Mensch hinter Ihrer IT</p>
            <h2>
              Ich plane nicht nur.
              <br />
              Ich kümmere mich.
            </h2>
            <p>
              Ich bin Dominik Urbanetz. Mein Schwerpunkt liegt auf Infrastruktur, Hosting,
              Webentwicklung und Automatisierung. Ich möchte, dass Sie Ihre Lösung verstehen und im
              Alltag damit arbeiten können.
            </p>
            <p>
              Sie sprechen direkt mit der Person, die Ihre Lösung plant und umsetzt. Umfang,
              Kosten und laufende Betreuung stimmen wir gemeinsam ab.
            </p>
            <Link href="/ueber-mich" className="text-link">
              Mehr über meinen Hintergrund
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
