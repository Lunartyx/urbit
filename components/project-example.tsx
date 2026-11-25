import Link from "next/link"

export function ProjectExample() {
  return (
    <section
      className="container section-space project-example"
      aria-labelledby="project-example-title"
      id="projektbeispiel"
    >
      <div className="project-specimen" aria-hidden="true">
        <span>urbit.</span>
        <strong>
          Ihre IT.
          <br />
          Ein Ansprechpartner.
        </strong>
        <div className="specimen-services">
          <span>Website</span>
          <span>E-Mail</span>
          <span>Betreuung</span>
        </div>
        <p>Vom Angebot zum direkten Kontakt.</p>
      </div>
      <div>
        <p className="section-label">Einblick · Eigenes Projekt</p>
        <h2 id="project-example-title">
          Diese Website.
          <br />
          Ein konkretes Beispiel.
        </h2>
        <p>
          Der Urbit-Auftritt zeigt, wie ein breites IT-Angebot verständlich gegliedert werden kann:
          mit einer klaren Startseite, passenden Leistungsdetails und einem direkten Weg zum
          Kontakt.
        </p>
        <dl className="project-facts">
          <div>
            <dt>Gestaltung</dt>
            <dd>
              Eigene Bildmarke, violette Farbwelt und eine für Smartphone und Desktop angepasste
              Darstellung.
            </dd>
          </div>
          <div>
            <dt>Orientierung</dt>
            <dd>
              Sprunglinks zu Leistungen, eine kurze Beschreibung der Zusammenarbeit und sichtbare
              Kontaktmöglichkeiten.
            </dd>
          </div>
          <div>
            <dt>Einordnung</dt>
            <dd>
              Eigener Unternehmensauftritt von Urbit. Konzept, Gestaltung und Umsetzung lassen sich
              direkt auf dieser Website ansehen.
            </dd>
          </div>
        </dl>
        <Link href="/leistungen#webseiten" className="text-link">
          Eine Website für Ihr Unternehmen
        </Link>
      </div>
    </section>
  )
}
