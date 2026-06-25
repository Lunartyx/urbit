import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Globe2, Server, Mail, Workflow, LifeBuoy, Network, Check } from "lucide-react"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Leistungen — Urbanetz Tech Consulting",
  description: "Webseiten, Hosting, Business E-Mail, Automatisierungen, technischer Support und IT-Infrastruktur aus einer Hand.",
}

const offerings = [
  {
    icon: Globe2,
    title: "Webseiten",
    intro: "Ein klarer, professioneller Auftritt, der auf jedem Gerät funktioniert.",
    points: ["Unternehmenswebsites", "Vereinswebsites", "Landingpages", "Responsive Design", "Technische Betreuung"],
    steps: ["Erstgespräch", "Planung & Konzept", "Design & Entwicklung", "Feedback & Anpassungen", "Veröffentlichung", "Betreuung auf Wunsch"],
  },
  {
    icon: Server,
    title: "Hosting",
    intro: "Ein zuverlässiges technisches Fundament für Ihre Website und Dienste.",
    points: ["Domain-Verwaltung", "SSL-Zertifikate", "Backups", "Monitoring", "Updates"],
    steps: ["Analyse", "Einrichtung", "Deployment", "Überwachung", "Updates & Sicherheit", "Unterstützung"],
  },
  {
    icon: Mail,
    title: "Business E-Mail",
    intro: "Professionelle Kommunikation mit Ihrer eigenen Domain.",
    points: ["Eigene Domain", "Microsoft 365", "Spam-Schutz", "Geräteeinrichtung", "Benutzerverwaltung"],
    steps: ["Bedarfsanalyse", "Domain-Anbindung", "Einrichtung", "Gerätekonfiguration", "Sicherheit", "Übergabe"],
  },
  {
    icon: Workflow,
    title: "Automatisierungen",
    intro: "Weniger manuelle Routine, mehr Zeit für die wichtigen Aufgaben.",
    points: ["Formular → E-Mail", "E-Mail → Kalender", "Teams Benachrichtigungen", "Dokumentenprozesse", "Individuelle Workflows"],
    steps: ["Analyse", "Potenziale identifizieren", "Konzeption", "Umsetzung", "Testphase", "Optimierung"],
  },
  {
    icon: LifeBuoy,
    title: "Technischer Support",
    intro: "Direkte Hilfe, wenn Technik nicht so funktioniert, wie sie soll.",
    points: ["Microsoft 365", "Hosting", "Webseiten", "DNS & Domains", "Infrastruktur"],
    steps: ["Kontaktaufnahme", "Analyse", "Lösungsweg", "Umsetzung", "Kontrolle", "Nachbetreuung"],
  },
  {
    icon: Network,
    title: "IT-Infrastruktur",
    intro: "Abgestimmte Systeme, die sicher zusammenspielen und mitwachsen.",
    points: ["Microsoft Azure", "Microsoft 365", "Hosting", "Benutzerverwaltung", "Monitoring", "Backups", "Automatisierungen"],
    steps: ["Bedarfsanalyse", "Architekturplanung", "Cloud-Aufbau", "Systemeinrichtung", "Sicherheit & Betrieb", "Dokumentation & Betreuung"],
  },
]

export default function LeistungenPage() {
  return (
    <>
      <PageIntro eyebrow="Leistungen" title={<>Persönliche IT-Lösungen, die zu Ihrem Alltag passen.</>}>
        Von der Website bis zur Infrastruktur: klar geplant, sauber umgesetzt und auf Wunsch langfristig betreut.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <div className="glass-strong rounded-3xl p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Erstgespräch</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Das erste Gespräch ist kostenlos und unverbindlich.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Im Erstgespräch klären wir gemeinsam, was Sie erreichen möchten, welche Lösung sinnvoll ist und welche Kosten realistisch sind. Die Dauer eines Projekts hängt stark vom gewünschten Ergebnis ab: Ein vollständiges IT-Setup braucht naturgemäß mehr Planung als die Einrichtung einiger Business-E-Mail-Adressen.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "Kosten werden transparent im Gespräch besprochen.",
                "Zeitplan und Umfang richten sich nach Ihrem Ziel.",
                "Das breite Angebot bleibt bewusst erhalten, damit die einzelnen Bausteine sauber zusammenspielen.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-primary/15 bg-background/25 p-4 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mb-3 h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="space-y-6">
          {offerings.map((offering, index) => (
            <article key={offering.title} id={offering.title.toLowerCase().replaceAll(" ", "-")} className="glass target-highlight scroll-mt-24 rounded-3xl p-7 md:p-10">
              <div className="grid gap-9 lg:grid-cols-[0.7fr_1fr_1.2fr] lg:gap-12">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <offering.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-primary">Leistung {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">{offering.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{offering.intro}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Was ich anbiete</h3>
                  <ul className="mt-5 space-y-3">
                    {offering.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">So läuft es ab</h3>
                  <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                    {offering.steps.map((step, stepIndex) => (
                      <li key={step} className="flex items-center gap-3 rounded-xl border border-primary/15 bg-background/25 px-4 py-3 text-sm text-muted-foreground">
                        <span className="font-mono text-xs text-primary">{String(stepIndex + 1).padStart(2, "0")}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-28 text-center md:px-8 md:pb-40">
        <div className="glass-strong rounded-3xl p-10 md:p-14">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Nicht sicher, was Sie genau brauchen?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">In einem kurzen Erstgespräch ordnen wir Ihr Anliegen ein und finden einen sinnvollen nächsten Schritt.</p>
          <Link href="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--color-primary)] transition-transform hover:-translate-y-0.5">
            Projekt anfragen <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
