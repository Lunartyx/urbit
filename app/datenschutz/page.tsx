import privacy from "@/content/privacy.json"
import Link from "next/link"
import { BusinessAddress } from "@/components/business-address"
import { PageIntro } from "@/components/page-intro"
import { site, pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Datenschutz",
  "Informationen zur Bearbeitung von Personendaten beim Besuch von urbit.ch und bei einer Kontaktaufnahme.",
  "/datenschutz",
)

export default function DatenschutzPage() {
  return (
    <>
      <PageIntro eyebrow="Rechtliches" title="Datenschutz">
        Informationen zum Besuch dieser Website und zur Kontaktaufnahme.
      </PageIntro>
      <div className="container legal-layout">
        <aside className="legal-aside">
          <p>
            Urbit
            <br />
            Urbanetz IT Consulting
          </p>
          <p>
            <Link href="/impressum" className="text-link">
              Impressum
            </Link>
          </p>
        </aside>
        <div className="prose">
          {!privacy.reviewed && (
            <div className="notice">
              <p>
                Vorbereitete Datenschutzhinweise: Die Angaben zu den tatsächlich eingesetzten
                Diensten sind noch nicht abschliessend geprüft.
              </p>
            </div>
          )}
          <section>
            <h2>Eingesetzte Dienste und Aufbewahrung</h2>
            <p>{privacy.hosting}</p>
            <p>{privacy.email}</p>
            <p>{privacy.abuseProtection}</p>
            <p>{privacy.retention}</p>
            <p>{privacy.internationalTransfers}</p>
          </section>
          <section>
            <h2>Verantwortliche Stelle</h2>
            <p>
              Dominik Urbanetz
              <br />
              Urbit · Urbanetz IT Consulting
              <br />
              {site.postalCode} {site.locality}
            </p>
            <BusinessAddress />
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </section>
          <section>
            <h2>Zweck der Datenbearbeitung</h2>
            <p>
              Personendaten werden für den Betrieb dieser Website, die Beantwortung von Anfragen,
              die Vorbereitung und Durchführung von Aufträgen sowie die Sicherheit der Systeme
              bearbeitet. Diese Erklärung richtet sich insbesondere nach dem Schweizer
              Datenschutzgesetz (DSG).
            </p>
          </section>
          <section>
            <h2>Website und Server-Logdaten</h2>
            <p>
              Beim Besuch können technisch notwendige Zugriffsdaten verarbeitet werden, insbesondere
              IP-Adresse, Zeitpunkt, aufgerufene Seiten, Referrer-URL sowie Browser-, Geräte- und
              Betriebssysteminformationen. Sie dienen der Bereitstellung und Absicherung der Website
              sowie der Erkennung von Störungen.
            </p>
          </section>
          <section>
            <h2>Kontakt per E-Mail und Telefon</h2>
            <p>
              Wenn Sie Kontakt aufnehmen, werden Ihre mitgeteilten Angaben zur Bearbeitung der
              Anfrage verwendet. Dazu können Name, E-Mail-Adresse, Telefonnummer, Firma,
              Projektinformationen und der Inhalt Ihrer Nachricht gehören.
            </p>
            <p>
              Die Aufbewahrung erfolgt so lange, wie es für die Anfrage, die Zusammenarbeit oder
              gesetzliche Pflichten erforderlich ist. Bei aktiviertem Kontaktformular werden Name,
              E-Mail-Adresse, optionale Firma und Nachricht an den konfigurierten E-Mail-Dienst
              weitergegeben. Versandlimits speichern pseudonymisierte Kennungen für bis zu 15
              Minuten, einmalige Prüftoken für bis zu 30 Minuten. Die Anwendung protokolliert
              Versandstatus und zufällige Anfragekennungen, keine Nachrichteninhalte. E-Mail-Links
              öffnen Ihr eigenes E-Mail-Programm.
            </p>
          </section>
          <section>
            <h2>Webanalyse</h2>
            <p>
              Die Website bindet derzeit keinen Webanalyse-Dienst ein. Es sind keine Werbeprofile,
              Newsletter oder Social-Media-Pixel eingebunden. Technisch notwendige Server-Logdaten
              sind im Abschnitt zum Website-Betrieb beschrieben.
            </p>
          </section>
          <section>
            <h2>Schriftarten und externe Dienste</h2>
            <p>
              Schriftdateien werden mit der Website ausgeliefert. Beim Besuch wird dafür keine
              direkte Verbindung zu Google Fonts aufgebaut. Eingebettete Karten und
              Social-Media-Plugins werden nicht verwendet.
            </p>
          </section>
          <section>
            <h2>Dienstleister und Auslandübermittlung</h2>
            <p>
              Technische Dienstleister können Daten für Hosting, Kommunikation, Sicherheit und
              Analyse bearbeiten. Je nach Dienst kann die Bearbeitung in der Schweiz, der EU oder
              anderen Ländern erfolgen. Soweit erforderlich, werden für Übermittlungen in Länder
              ohne angemessenes Datenschutzniveau geeignete Garantien oder vertragliche
              Schutzmassnahmen verwendet.
            </p>
          </section>
          <section>
            <h2>Ihre Rechte und Datensicherheit</h2>
            <p>
              Im Rahmen des anwendbaren Rechts können Sie Auskunft, Berichtigung, Löschung,
              Einschränkung oder Herausgabe bestimmter Daten verlangen und einer Bearbeitung
              widersprechen. Für Datenschutzanfragen schreiben Sie an{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p>
              Technische und organisatorische Massnahmen schützen Personendaten vor Verlust,
              Missbrauch und unberechtigtem Zugriff. Absolute Sicherheit bei der Datenübertragung im
              Internet kann nicht garantiert werden.
            </p>
          </section>
          <section>
            <h2>Änderungen</h2>
            <p>
              Diese Erklärung wird angepasst, wenn sich die Website, eingesetzte Dienste oder
              rechtliche Anforderungen ändern. Es gilt die auf dieser Website veröffentlichte
              Version.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
