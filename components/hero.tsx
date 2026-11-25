import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <p className="location">
          <span aria-hidden="true">+</span> Persönliche IT aus Oberhasli
        </p>
        <h1>
          Ihre IT.
          <br />
          Ein Ansprechpartner.
        </h1>
        <p className="hero-description">
          Websites, geschäftliche E-Mail und laufende Betreuung. Ich plane, setze um und betreue
          Ihre IT, damit Sie sich um Ihr Unternehmen kümmern können.
        </p>
        <div className="hero-actions">
          <Link href="/kontakt" className="button">
            Anliegen besprechen <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/leistungen" className="text-link">
            Leistungen ansehen
          </Link>
        </div>
        <p className="hero-note">Für Selbstständige, Vereine und kleinere Unternehmen.</p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <svg viewBox="0 0 480 510" fill="none" className="urbit-sculpture">
          <path
            d="M115 74v208c0 80 60 142 139 142s139-62 139-142V74"
            stroke="#4a226e"
            strokeWidth="68"
          />
          <path
            d="M85 54v208c0 80 60 142 139 142s139-62 139-142V54"
            stroke="#c1a0f2"
            strokeWidth="68"
          />
          <path
            d="M85 54v208c0 80 60 142 139 142s139-62 139-142V54"
            stroke="#a16ae0"
            strokeWidth="66"
            strokeDasharray="1 5"
          />
          <path d="M58 54v208c0 95 72 169 166 169" stroke="#d9bff7" strokeOpacity=".7" />
          <path
            d="M112 54v208c0 65 48 115 112 115s112-50 112-115V54"
            stroke="#ead7ff"
            strokeOpacity=".6"
          />
          <path d="M50 455h355M50 449v12m355-12v12" stroke="#715483" />
          <circle cx="224" cy="252" r="6" fill="#d6b9fb" />
          <path d="M224 246v-62m6 68h62m-68 6v62m-6-68h-62" stroke="#715483" />
        </svg>
        <div className="art-caption">
          <span>Web. Betrieb. Abläufe.</span>
          <span>Alles verbunden.</span>
        </div>
      </div>
      <div className="hero-baseline">
        <span>Dominik Urbanetz · Ihr direkter IT-Partner</span>
        <span>Vom ersten Gespräch bis zum laufenden Betrieb</span>
      </div>
    </section>
  )
}
