import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/services"

export function Services() {
  return (
    <section className="light-section" id="leistungen">
      <div className="container section-space">
        <div className="section-heading">
          <div>
            <p className="section-label">Leistungen</p>
            <h2>
              Die passende Technik.
              <br />
              Für Ihren Alltag.
            </h2>
          </div>
          <p>
            Ein einzelnes Anliegen oder die gesamte IT: Wir beginnen dort, wo Sie Unterstützung
            brauchen.
          </p>
        </div>
        <div className="service-grid">
          {services
            .filter((service) => ["webseiten", "business-e-mail", "hosting"].includes(service.id))
            .sort(
              (a, b) =>
                ["webseiten", "business-e-mail", "hosting"].indexOf(a.id) -
                ["webseiten", "business-e-mail", "hosting"].indexOf(b.id),
            )
            .map((service) => (
              <Link key={service.id} href={`/leistungen#${service.id}`} className="service-link">
                <div>
                  <h3>{service.id === "hosting" ? "Hosting & Betreuung" : service.title}</h3>
                  <ArrowUpRight aria-hidden="true" size={23} />
                </div>
                <p>{service.summary}</p>
                <span className="service-more">Leistung ansehen</span>
              </Link>
            ))}
        </div>
        <div className="supporting-services">
          <p>Sie möchten bestehende Technik verbessern?</p>
          <nav aria-label="Weitere Leistungen">
            {services
              .filter((service) =>
                ["automatisierungen", "technischer-support", "it-infrastruktur"].includes(
                  service.id,
                ),
              )
              .map((service) => (
                <Link key={service.id} href={`/leistungen#${service.id}`} className="text-link">
                  {service.title}
                </Link>
              ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
