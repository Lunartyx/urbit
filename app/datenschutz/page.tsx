import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, BarChart3, FileText, Lock, Mail, Server, UserCheck, type LucideIcon } from "lucide-react"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Datenschutz — Urbanetz Tech Consulting",
  description: "Datenschutzerklärung von Urbanetz Tech Consulting gemäss Schweizer Datenschutzgesetz.",
}

export default function DatenschutzPage() {
  return (
    <>
      <PageIntro eyebrow="Rechtliches" title="Datenschutz">
        Informationen darüber, welche Personendaten beim Besuch dieser Website und bei einer Kontaktaufnahme bearbeitet werden.
      </PageIntro>

      <section className="mx-auto max-w-4xl px-5 pb-28 md:px-8 md:pb-40">
        <div className="space-y-6">
          <div className="glass-strong rounded-3xl p-7 md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Kurzüberblick</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Datenschutz in verständlicher Form.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Keine Newsletter, keine Werbeprofile und keine Social-Media-Pixel.",
                "Das Kontaktformular ist aktuell vorbereitet, aber noch nicht live angebunden.",
                "Kontakt per E-Mail oder Telefon wird zur Bearbeitung Ihrer Anfrage verwendet.",
                "Für einfache Website-Statistiken ist Vercel Web Analytics eingebunden.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-primary/15 bg-background/25 p-4 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <PrivacyBlock icon={UserCheck} title="1. Verantwortliche Stelle">
            Verantwortlich für die Datenbearbeitung auf dieser Website ist:
            <br />
            <br />
            Dominik Urbanetz
            <br />
            Urbanetz Tech Consulting
            <br />
            Zürich, Schweiz
            <br />
            E-Mail:{" "}
            <a href="mailto:kontakt@dominikurbanetz.ch" className="text-foreground transition-colors hover:text-primary">
              kontakt@dominikurbanetz.ch
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+41774632390" className="text-foreground transition-colors hover:text-primary">
              +41 77 463 23 90
            </a>
          </PrivacyBlock>

          <PrivacyBlock icon={FileText} title="2. Grundlage und Zweck der Bearbeitung">
            Personendaten werden nur bearbeitet, soweit dies für den Betrieb der Website, die Beantwortung von Anfragen, die Anbahnung oder Durchführung von Aufträgen, die Sicherheit der Systeme oder die Erfüllung gesetzlicher Pflichten erforderlich ist. Diese Datenschutzerklärung richtet sich insbesondere nach dem Schweizer Datenschutzgesetz (DSG).
          </PrivacyBlock>

          <PrivacyBlock icon={Server} title="3. Besuch der Website und Server-Logdaten">
            Beim Aufruf dieser Website können technisch notwendige Zugriffsdaten verarbeitet werden. Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Referrer-URL, Browser- und Geräteinformationen sowie Betriebssystem. Diese Daten werden verarbeitet, um die Website bereitzustellen, Störungen zu erkennen, Missbrauch zu verhindern und die technische Sicherheit zu gewährleisten.
            <br />
            <br />
            Der konkrete Hosting-Anbieter und die Speicherdauer der Logdaten werden vor der Veröffentlichung final ergänzt, sobald das Live-Hosting definitiv feststeht.
          </PrivacyBlock>

          <PrivacyBlock icon={Mail} title="4. Kontaktaufnahme per E-Mail oder Telefon">
            Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden die von Ihnen mitgeteilten Angaben verarbeitet. Dazu können Name, E-Mail-Adresse, Telefonnummer, Firma oder Projekt, Inhalt der Anfrage und weitere Angaben gehören, die Sie freiwillig übermitteln.
            <br />
            <br />
            Diese Daten werden verwendet, um Ihre Anfrage zu beantworten, ein Erstgespräch zu koordinieren, Leistungen zu planen oder eine Offerte vorzubereiten. Die Aufbewahrung erfolgt nur so lange, wie dies für die Bearbeitung, eine mögliche Zusammenarbeit oder gesetzliche Pflichten erforderlich ist.
          </PrivacyBlock>

          <PrivacyBlock icon={Mail} title="5. Kontaktformular">
            Das Kontaktformular auf dieser Website ist aktuell sichtbar vorbereitet, aber noch nicht produktiv angebunden. Über das Formular werden derzeit keine Nachrichten versendet und keine Formulardaten an einen Server übertragen.
            <br />
            <br />
            Sobald das Kontaktformular live geschaltet wird, wird diese Datenschutzerklärung entsprechend ergänzt. Dann wird insbesondere beschrieben, welche Formularfelder verarbeitet werden, wohin die Nachricht übertragen wird und ob ein Spam-Schutz oder ein externer Dienst eingesetzt wird.
          </PrivacyBlock>

          <PrivacyBlock icon={BarChart3} title="6. Webanalyse mit Vercel Web Analytics">
            Diese Website verwendet im Produktionsbetrieb Vercel Web Analytics, um einfache, aggregierte Informationen zur Nutzung der Website zu erhalten. Vercel Web Analytics arbeitet ohne Drittanbieter-Cookies und dient dazu, Seitenaufrufe und technische Nutzungsinformationen statistisch auszuwerten.
            <br />
            <br />
            Dabei können unter anderem Informationen wie Zeitpunkt des Seitenaufrufs, aufgerufene URL, Referrer, ungefähre geografische Angaben, Gerätetyp, Browser und Betriebssystem verarbeitet werden. Die Auswertung erfolgt aggregiert und dient der Verbesserung der Website.
          </PrivacyBlock>

          <PrivacyBlock icon={Server} title="7. Schriftarten und eingebundene Dienste">
            Diese Website verwendet Schriftarten über die Next.js-Funktion zur lokalen Einbindung von Google Fonts. Die Schriftdateien werden dadurch lokal bereitgestellt; beim Besuch der Website wird nach aktuellem Stand keine direkte Verbindung zu Google Fonts hergestellt.
            <br />
            <br />
            Weitere externe Dienste, eingebettete Karten, Social-Media-Plugins, Newsletter-Tools oder Marketing-Pixel sind aktuell nicht eingebunden.
          </PrivacyBlock>

          <PrivacyBlock icon={Lock} title="8. Weitergabe an Dritte und Auslandübermittlung">
            Personendaten können an technische Dienstleister weitergegeben werden, soweit dies für Hosting, Betrieb, Sicherheit, Kommunikation oder Analyse der Website erforderlich ist. Solche Dienstleister bearbeiten Daten grundsätzlich nur im Rahmen der jeweiligen Leistung.
            <br />
            <br />
            Je nach eingesetztem Dienst kann eine Bearbeitung in der Schweiz, in der EU oder in anderen Ländern erfolgen. Bei einer Übermittlung in Länder ohne angemessenes Datenschutzniveau werden, soweit erforderlich, geeignete Garantien oder vertragliche Schutzmassnahmen verwendet.
          </PrivacyBlock>

          <PrivacyBlock icon={UserCheck} title="9. Ihre Rechte">
            Sie können im Rahmen des anwendbaren Datenschutzrechts Auskunft über die bearbeiteten Personendaten verlangen. Zudem können Sie die Berichtigung, Löschung, Einschränkung oder Herausgabe bestimmter Daten verlangen sowie einer Bearbeitung widersprechen.
            <br />
            <br />
            Für Datenschutzanfragen erreichen Sie Urbanetz Tech Consulting unter{" "}
            <a href="mailto:kontakt@dominikurbanetz.ch" className="text-foreground transition-colors hover:text-primary">
              kontakt@dominikurbanetz.ch
            </a>
            .
          </PrivacyBlock>

          <PrivacyBlock icon={Lock} title="10. Datensicherheit">
            Es werden angemessene technische und organisatorische Massnahmen getroffen, um Personendaten vor Verlust, Missbrauch, unberechtigtem Zugriff und unbefugter Veränderung zu schützen. Absolute Sicherheit kann bei der Datenübertragung im Internet jedoch nicht garantiert werden.
          </PrivacyBlock>

          <PrivacyBlock icon={FileText} title="11. Aktualität dieser Datenschutzerklärung">
            Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern. Es gilt jeweils die auf dieser Website veröffentlichte Version.
          </PrivacyBlock>

          <div className="glass rounded-3xl p-7 md:p-10">
            <div className="flex gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p>
                  Vor dem Livegang sollten Hosting-Anbieter, Log-Speicherdauer und das spätere Kontaktformular final geprüft und ergänzt werden.
                </p>
                <p className="mt-3">
                  Anbieterangaben finden Sie im{" "}
                  <Link href="/impressum" className="font-medium text-foreground transition-colors hover:text-primary">
                    Impressum
                  </Link>
                  .
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Stand: 26. Juni 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

function PrivacyBlock({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <article className="glass rounded-3xl p-7 md:p-10">
      <div className="flex items-center gap-3 text-primary">
        <Icon className="h-5 w-5" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{title}</h2>
      </div>
      <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>
    </article>
  )
}
