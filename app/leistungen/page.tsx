import Link from "next/link"
import { Check } from "lucide-react"
import { PageIntro } from "@/components/page-intro"
import { Approach } from "@/components/approach"
import { BuyerGuide } from "@/components/buyer-guide"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { services } from "@/lib/services"
import { serviceScope } from "@/lib/service-scope"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "IT-Leistungen",
  "Websites, Hosting, Business E-Mail, Automatisierungen und IT-Support. Persönliche Planung und Umsetzung für Ihr Unternehmen.",
  "/leistungen",
)

export default function LeistungenPage() {
  return (
    <>
      <PageIntro
        eyebrow="Leistungen"
        title={
          <>
            Was Ihre IT braucht.
            <br />
            Aus einer Hand.
          </>
        }
      >
        Von der ersten Website bis zur betreuten Infrastruktur: Wählen Sie das Thema, bei dem Sie
        Unterstützung brauchen.
      </PageIntro>
      <nav className="container service-nav" aria-label="Leistungsübersicht">
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`}>
            {service.title}
          </a>
        ))}
      </nav>
      <div className="light-section">
        <div className="container">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="service-detail"
              aria-labelledby={`${service.id}-title`}
            >
              <h2 id={`${service.id}-title`}>{service.title}</h2>
              <div>
                <p>{service.detail}</p>
                {serviceScope[service.id] && (
                  <p>
                    <strong>Passt zu Ihnen, wenn:</strong> {serviceScope[service.id].fit}
                  </p>
                )}
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {serviceScope[service.id] && (
                  <p>
                    <strong>Das klären wir vorab:</strong> {serviceScope[service.id].clarify}
                  </p>
                )}
                {serviceScope[service.id] && (
                  <p>
                    <Link href={`/leistungen/${service.id}`} className="text-link">
                      Umfang, Ablauf und Vorbereitung ansehen
                    </Link>
                  </p>
                )}
                <Link href="/kontakt" className="text-link">
                  {service.title} besprechen
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Pricing />
      <BuyerGuide />
      <Approach />
      <CTA />
    </>
  )
}
