import type { Metadata } from "next"
import { ExternalLink, FileText, FolderSync, LifeBuoy, ReceiptText, Route } from "lucide-react"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = { title: "Kundenbereich — Urbanetz Tech Consulting", description: "Der Kundenbereich von Urbanetz Tech Consulting befindet sich aktuell im Aufbau." }

const features = [
  { icon: LifeBuoy, label: "Support-Tickets erstellen" },
  { icon: Route, label: "Projektstatus einsehen" },
  { icon: FileText, label: "Dokumentationen abrufen" },
  { icon: FolderSync, label: "Dateien austauschen" },
  { icon: ReceiptText, label: "Rechnungen einsehen" },
]

export default function LoginPage() {
  return (
    <>
      <PageIntro eyebrow="Login" title={<>Ihr Kundenbereich entsteht gerade.</>}>
        Der Kundenbereich befindet sich aktuell im Aufbau. Zukünftig finden Sie hier alle wichtigen Informationen und Unterlagen an einem Ort.
      </PageIntro>
      <section className="mx-auto max-w-5xl px-5 pb-28 md:px-8 md:pb-40">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Zukünftig können Kunden hier</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => <div key={feature.label} className="flex items-center gap-4 rounded-2xl border border-primary/15 bg-background/25 p-5"><feature.icon className="h-5 w-5 shrink-0 text-primary" /><span className="text-muted-foreground">{feature.label}</span></div>)}
          </div>
          <button type="button" disabled className="mt-9 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground opacity-60">Kundenportal öffnen <ExternalLink className="h-4 w-4" /></button>
          <p className="mt-3 text-xs text-muted-foreground">Noch nicht verfügbar</p>
        </div>
      </section>
    </>
  )
}
