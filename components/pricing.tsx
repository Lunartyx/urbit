import Link from "next/link"
import pricing from "@/content/pricing.json"

export function Pricing() {
  return (
    <section className="light-section" id="kosten" aria-labelledby="pricing-title">
      <div className="container section-space">
        <div className="section-heading">
          <div>
            <p className="section-label">Kosten & Umfang</p>
            <h2 id="pricing-title">{pricing.heading}</h2>
          </div>
          <p>{pricing.introduction}</p>
        </div>
        <div className="pricing-grid">
          {pricing.offers.map((offer) => (
            <article key={offer.serviceId}>
              <h3>{offer.name}</h3>
              <p className="price-label">{offer.price}</p>
              <p>{offer.basis}</p>
              <p>{offer.additionalCosts}</p>
              <Link href="/kontakt" className="text-link">
                Anliegen besprechen
              </Link>
            </article>
          ))}
        </div>
        <p className="pricing-note">{pricing.note}</p>
      </div>
    </section>
  )
}
