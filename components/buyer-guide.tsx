import Link from "next/link"

const questions = [
  [
    "Was kostet mein Vorhaben?",
    "Der Aufwand hängt vom Umfang ab: Bei einer Website etwa von Seiten, Inhalten und Funktionen; bei E-Mail von Konten, Geräten und einer möglichen Migration. Im Erstgespräch klären wir diese Punkte. Umfang, Kosten und Zeitplan werden vor der Umsetzung vereinbart.",
  ],
  [
    "Welche laufenden Kosten muss ich einplanen?",
    "Je nach Lösung fallen Kosten für Domain, Hosting oder Softwarelizenzen an. Laufende Betreuung wird zusätzlich nach dem vereinbarten Umfang geplant. Im Gespräch klären wir, welche Leistungen Sie selbst übernehmen und wobei Sie Unterstützung möchten.",
  ],
  [
    "Kann ich mit einer bestehenden Website oder Domain kommen?",
    "Ja. Beschreiben Sie kurz, was bereits vorhanden ist und was sich ändern soll. Vor einem Wechsel klären wir Zugänge, Abhängigkeiten und die nötigen Schritte. Bitte senden Sie in Ihrer ersten Anfrage keine Passwörter.",
  ],
  [
    "Was passiert nach der Übergabe?",
    "Sie erhalten eine dokumentierte Übergabe. Wenn Sie weitere Unterstützung wünschen, vereinbaren wir die betreuten Systeme, Aufgaben und Kosten. Updates, Sicherungen und Überwachung werden passend zu Ihrer Lösung besprochen.",
  ],
  [
    "Ich weiss nicht, welche Leistung ich brauche.",
    "Eine Beschreibung Ihres Problems genügt. Sie müssen weder die technische Ursache kennen noch ein fertiges Projektkonzept mitbringen. Im kostenlosen Erstgespräch klären wir gemeinsam den nächsten Schritt.",
  ],
]

export function BuyerGuide() {
  return (
    <section className="container section-space buyer-guide" aria-labelledby="buyer-guide-title">
      <div>
        <p className="section-label">Vor Ihrer Anfrage</p>
        <h2 id="buyer-guide-title">Gut zu wissen.</h2>
        <p>Ein klarer Umfang beginnt mit den richtigen Fragen.</p>
        <Link className="text-link" href="/kontakt">
          Anliegen besprechen
        </Link>
      </div>
      <div className="buyer-questions">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
