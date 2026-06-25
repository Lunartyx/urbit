import type { Metadata } from "next"
import { Clock, Languages, Mail, MapPin, Phone, Radio } from "lucide-react"
import { PageIntro } from "@/components/page-intro"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakt — Urbanetz Tech Consulting",
  description: "Kontaktieren Sie Urbanetz Tech Consulting für Ihr Website-, Hosting-, E-Mail-, Automatisierungs- oder Infrastrukturprojekt.",
}

const details = [
  { icon: Mail, label: "E-Mail", value: "kontakt@dominikurbanetz.ch", href: "mailto:kontakt@dominikurbanetz.ch" },
  { icon: Phone, label: "Telefon", value: "+41 77 463 23 90", href: "tel:+41774632390" },
  { icon: Clock, label: "Antwortzeit", value: "In der Regel innerhalb von 1–2 Werktagen" },
  { icon: Languages, label: "Sprachen", value: "Deutsch und Englisch" },
  { icon: MapPin, label: "Standort", value: "Zürich, Schweiz" },
  { icon: Radio, label: "Remote Support", value: "Schweizweit möglich" },
]

export default function KontaktPage() {
  return (
    <>
      <PageIntro eyebrow="Kontakt" title={<>Lassen Sie uns über Ihr Projekt sprechen.</>}>
        Schreiben Sie mir ein paar Zeilen zu Ihrem Anliegen. Das erste Gespräch ist kostenlos und unverbindlich — Kosten, Umfang und ein realistischer Zeitrahmen werden dort gemeinsam besprochen.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8 md:pb-40">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.2fr] md:gap-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Kontaktinformationen</h2>
            <div className="mt-6 flex flex-col gap-4">
              {details.map((detail) => (
                <div key={detail.label} className="glass flex items-center gap-4 rounded-2xl p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary"><detail.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{detail.label}</p>
                    {"href" in detail ? (
                      <a href={detail.href} className="mt-1 inline-block font-medium text-foreground transition-colors hover:text-primary">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Für eine erste Einschätzung genügen ein paar Stichworte. Technische Details können wir gemeinsam klären. Ob es um ein vollständiges IT-Setup oder nur um wenige E-Mail-Adressen geht: Der passende Aufwand richtet sich nach dem Ergebnis, das Sie erreichen möchten.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
