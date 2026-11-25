import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CTA() {
  return (
    <section className="container cta-section">
      <div>
        <p className="section-label">Ihr nächster Schritt</p>
        <h2>
          Erzählen Sie mir,
          <br />
          was Sie vorhaben.
        </h2>
        <p>
          Das erste Gespräch ist kostenlos und unverbindlich.
          <br />
          Umfang, Kosten und Zeitplan klären wir gemeinsam.
        </p>
      </div>
      <Link href="/kontakt" className="button">
        Anliegen besprechen <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </section>
  )
}
