import Link from "next/link"
import { PageIntro } from "@/components/page-intro"
import { CTA } from "@/components/cta"
import { servicePages, type ServicePageId } from "@/lib/service-pages"
import pricing from "@/content/pricing.json"

export function ServicePage({ id }: { id: ServicePageId }) {
  const service = servicePages[id]
  const offer = pricing.offers.find((item) => item.serviceId === id)
  return (
    <>
      <nav className="container breadcrumbs" aria-label="Brotkrumennavigation">
        <Link href="/">Startseite</Link>
        <span aria-hidden="true">/</span>
        <Link href="/leistungen">Leistungen</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{offer?.name ?? service.title}</span>
      </nav>
      <PageIntro eyebrow="Persönlich begleitet aus Oberhasli" title={service.title}>
        {service.intro}
      </PageIntro>
      <div className="container service-page-actions">
        <Link href="/kontakt" className="button">
          Anliegen besprechen
        </Link>
        <a href="#service-kosten" className="text-link">
          Kosten & Vorbereitung
        </a>
      </div>
      <div className="light-section">
        <div className="container">
          {service.sections.map((section) => (
            <section className="service-detail" key={section.title}>
              <h2>{section.title}</h2>
              <div>
                <p>{section.text}</p>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
      <section
        className="container section-space buyer-guide"
        id="service-kosten"
        aria-labelledby="service-cost-title"
      >
        <div>
          <p className="section-label">Kosten & Vorbereitung</p>
          <h2 id="service-cost-title">{offer?.price ?? "Individuelle Offerte"}</h2>
          <p>{offer?.basis}</p>
          <p>{offer?.additionalCosts}</p>
          <p>
            Das Erstgespräch ist kostenlos und unverbindlich. Verbindlich ist die vereinbarte
            Offerte.
          </p>
        </div>
        <div>
          <h2>Das hilft für den Anfang.</h2>
          <p>{service.preparation}</p>
          <Link href="/kontakt" className="text-link">
            Anliegen besprechen
          </Link>
        </div>
      </section>
      <section className="container service-example">
        <h2>
          {id === "webseiten" ? "Einblick in ein eigenes Projekt" : "Ein Beispiel aus dem Alltag"}
        </h2>
        <p>{service.example}</p>
        {id === "webseiten" && (
          <Link href="/#projektbeispiel" className="text-link">
            Urbit als eigenes Projekt ansehen
          </Link>
        )}
      </section>
      <nav className="container related-services" aria-label="Weitere Leistungen">
        <h2>Was dazugehört</h2>
        {Object.entries(servicePages)
          .filter(([key]) => key !== id)
          .map(([key, value]) => (
            <Link key={key} href={`/leistungen/${key}`} className="text-link">
              {value.title}
            </Link>
          ))}
      </nav>
      <CTA />
    </>
  )
}
