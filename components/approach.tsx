const steps = [
  {
    title: "Besprechen",
    text: "Sie schildern Ihr Anliegen. Wir klären, was Sie brauchen und welche Lösung sinnvoll ist.",
  },
  {
    title: "Umsetzen",
    text: "Sie erhalten einen vereinbarten Umfang, Kosten und Zeitplan. Ich setze die Lösung um und stimme mich mit Ihnen ab.",
  },
  {
    title: "Weiterbetreuen",
    text: "Sie erhalten eine dokumentierte Übergabe. Auf Wunsch bleibe ich für Betrieb und Unterstützung an Ihrer Seite.",
  },
]

export function Approach() {
  return (
    <section className="container section-space">
      <div className="section-heading">
        <div>
          <p className="section-label">Zusammenarbeit</p>
          <h2>
            Von der Frage
            <br />
            zur laufenden Lösung.
          </h2>
        </div>
        <p>
          Sie sprechen mit der Person, die Ihr Projekt plant und umsetzt. Ohne wechselnde
          Zuständigkeiten.
        </p>
      </div>
      <ol className="process-grid">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
