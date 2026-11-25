import Link from "next/link"

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="section-label">Seite nicht gefunden</p>
      <h1>
        Hier geht es nicht weiter.
        <br />
        Aber dort schon.
      </h1>
      <p>
        Die Adresse ist nicht verfügbar. Auf der Startseite finden Sie Leistungen und
        Kontaktmöglichkeiten.
      </p>
      <Link href="/" className="button">
        Zur Startseite
      </Link>
    </section>
  )
}
