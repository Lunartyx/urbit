import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Impressum — Urbanetz Tech Consulting",
  description: "Impressum und Anbieterangaben von Urbanetz Tech Consulting.",
}

export default function ImpressumPage() {
  return (
    <>
      <PageIntro eyebrow="Rechtliches" title="Impressum">
        Anbieterangaben und rechtliche Hinweise zu Urbanetz Tech Consulting.
      </PageIntro>

      <section className="mx-auto max-w-4xl px-5 pb-28 md:px-8 md:pb-40">
        <div className="space-y-6">
          <div className="glass-strong rounded-3xl p-7 md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Anbieter der Website</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Urbanetz Tech Consulting</h2>
            <div className="mt-6 grid gap-4 text-muted-foreground sm:grid-cols-2">
              <ContactLine icon={MapPin} label="Verantwortliche Person">
                Dominik Urbanetz
                <br />
                Zürich, Schweiz
              </ContactLine>
              <ContactLine icon={Mail} label="E-Mail">
                <a href="mailto:kontakt@dominikurbanetz.ch" className="text-foreground transition-colors hover:text-primary">
                  kontakt@dominikurbanetz.ch
                </a>
              </ContactLine>
              <ContactLine icon={Phone} label="Telefon">
                <a href="tel:+41774632390" className="text-foreground transition-colors hover:text-primary">
                  +41 77 463 23 90
                </a>
              </ContactLine>
            </div>
          </div>

          <div className="glass rounded-3xl p-7 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Wichtige Ergänzungen vor der Veröffentlichung</h2>
            <div className="mt-5 flex gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p>
                  Für ein vollständiges Impressum sollten vor dem Livegang noch die vollständige Postadresse sowie, falls vorhanden, UID, MWST-Nummer, Rechtsform und Handelsregisterangaben ergänzt werden.
                </p>
                <p className="mt-3">
                  Aktueller Platzhalter: <span className="text-foreground">Postadresse wird vor Veröffentlichung ergänzt.</span>
                </p>
              </div>
            </div>
          </div>

          <LegalBlock title="Tätigkeitsbereich">
            Urbanetz Tech Consulting unterstützt Selbstständige, Vereine und kleinere Unternehmen bei Websites, Hosting, Business-E-Mail, Automatisierungen, technischem Support und IT-Infrastruktur.
          </LegalBlock>

          <LegalBlock title="Kein Online-Vertragsabschluss">
            Über diese Website werden Informationen bereitgestellt und unverbindliche Anfragen ermöglicht. Ein Vertrag kommt nicht automatisch durch den Besuch der Website, das Anklicken eines Links oder eine Kontaktaufnahme zustande. Umfang, Kosten und Zeitrahmen werden individuell besprochen und vereinbart.
          </LegalBlock>

          <LegalBlock title="Haftung für Inhalte">
            Die Inhalte dieser Website werden sorgfältig erstellt und gepflegt. Dennoch kann keine Gewähr für die Vollständigkeit, Richtigkeit und Aktualität sämtlicher Inhalte übernommen werden. Verbindlich sind ausschliesslich individuell vereinbarte Leistungen und Offerten.
          </LegalBlock>

          <LegalBlock title="Externe Links">
            Diese Website kann Links zu externen Websites enthalten. Für deren Inhalte und Datenschutzpraktiken sind ausschliesslich die jeweiligen Betreiber verantwortlich.
          </LegalBlock>

          <LegalBlock title="Urheberrecht">
            Die auf dieser Website veröffentlichten Inhalte, Texte, Gestaltungselemente und Grafiken sind urheberrechtlich geschützt, soweit sie nicht ausdrücklich anders gekennzeichnet sind. Eine Verwendung ausserhalb der gesetzlichen Schranken bedarf der vorgängigen Zustimmung.
          </LegalBlock>

          <div className="glass rounded-3xl p-7 text-sm leading-relaxed text-muted-foreground md:p-10">
            <p>
              Datenschutzinformationen finden Sie in der{" "}
              <Link href="/datenschutz" className="font-medium text-foreground transition-colors hover:text-primary">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <p className="mt-4">Stand: 26. Juni 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactLine({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-primary/15 bg-background/25 p-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="mt-1 font-medium leading-relaxed text-foreground">{children}</p>
      </div>
    </div>
  )
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="glass rounded-3xl p-7 md:p-10">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>
    </article>
  )
}
