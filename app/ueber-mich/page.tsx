import credibility from "@/content/credibility.json"
import {
  FounderIntroduction,
  Qualifications,
  TechnicalCompetencies,
  PortfolioProjects,
  CaseStudies,
  Testimonials,
} from "@/components/credibility"
import { PageIntro } from "@/components/page-intro"
import { CTA } from "@/components/cta"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Über Dominik Urbanetz",
  "Der Mensch hinter Urbit: Dominik Urbanetz. Persönliche IT-Beratung mit Erfahrung in Infrastruktur, Hosting, Cybersecurity und Automatisierung.",
  "/ueber-mich",
)

export default function UeberMichPage() {
  return (
    <>
      <PageIntro
        eyebrow="Über mich"
        title={
          <>
            Ihre IT ist persönlich.
            <br />
            Meine Arbeit auch.
          </>
        }
      >
        Ich bin Dominik Urbanetz, der Gründer von Urbit. Bei mir sprechen Sie direkt mit der Person,
        die Ihre Lösung plant und umsetzt.
      </PageIntro>
      <div className="container about-layout">
        <aside className="about-profile">
          <div className="profile-monogram" aria-hidden="true">
            du.
          </div>
          <h2>Dominik Urbanetz</h2>
          <p>Gründer & IT Consultant</p>
          <p>
            8156 Oberhasli, Schweiz
            <br />
            Remote schweizweit
            <br />
            Deutsch & Englisch
          </p>
        </aside>
        <div className="prose">
          <section>
            <h2>Technik verstehen und nutzbar machen.</h2>
            <p>
              Ich beschäftige mich mit Infrastruktur, Hosting, Cloud, Webentwicklung und
              Automatisierung. Besonders interessiert mich, wie diese Bereiche zusammenspielen und
              welche Lösung im Alltag hilft.
            </p>
            <p>
              Deshalb beginnt ein Projekt mit Ihrem Anliegen. Ich erkläre Möglichkeiten, bespreche
              den Aufwand mit Ihnen und dokumentiere die Umsetzung. Sie sollen wissen, was Sie
              erhalten und wie Sie damit weiterarbeiten.
            </p>
          </section>
          <FounderIntroduction item={credibility.founder} />
          <Qualifications items={credibility.qualifications} />
          <TechnicalCompetencies items={credibility.competencies} />
          <PortfolioProjects items={credibility.projects} />
          <CaseStudies items={credibility.caseStudies} />
          <Testimonials items={credibility.testimonials} />
          <section>
            <h2>Verantwortung über die Übergabe hinaus.</h2>
            <p>
              Eine Website braucht Hosting. Ein E-Mail-Konto braucht eine passende Domain.
              Infrastruktur braucht Pflege. Ich behalte diese Zusammenhänge im Blick und übernehme
              auf Wunsch auch die laufende Betreuung.
            </p>
            <p>Welche Unterstützung Sie brauchen und was sie umfasst, vereinbaren wir gemeinsam.</p>
          </section>
        </div>
      </div>
      <CTA />
    </>
  )
}
