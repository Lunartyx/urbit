import Link from "next/link"
import { FileText, FolderSync, LifeBuoy, ReceiptText, Route } from "lucide-react"
import { PageIntro } from "@/components/page-intro"
import { pageMetadata } from "@/lib/site"

export const metadata = {
  ...pageMetadata(
    "Kundenbereich in Entwicklung",
    "Der Urbit Kundenbereich ist in Entwicklung. Für Projektfragen und Support erreichen Sie Dominik Urbanetz direkt.",
    "/login",
  ),
  robots: { index: false, follow: true },
}
const features = [
  { icon: LifeBuoy, label: "Support-Anfragen stellen" },
  { icon: Route, label: "Projektstatus einsehen" },
  { icon: FileText, label: "Dokumentation abrufen" },
  { icon: FolderSync, label: "Dateien austauschen" },
  { icon: ReceiptText, label: "Rechnungen einsehen" },
]

export default function LoginPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kundenbereich"
        title={
          <>
            Ein Platz für
            <br />
            Ihre Zusammenarbeit.
          </>
        }
      >
        Hier entsteht Ihr Kundenbereich für Projekte, Unterlagen und Support.
      </PageIntro>
      <section className="container portal">
        <div>
          <span className="status-badge">In Entwicklung</span>
          <h2>Wir bauen noch.</h2>
          <p>
            Der Kundenbereich ist noch nicht verfügbar. Ihre Fragen zu laufenden Projekten oder
            technische Anliegen können Sie mir weiterhin per E-Mail oder Telefon stellen.
          </p>
          <Link href="/kontakt" className="button">
            Direkt Kontakt aufnehmen
          </Link>
        </div>
        <div>
          <p className="section-label">Für den Kundenbereich geplant</p>
          <ul className="portal-features">
            {features.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={20} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
