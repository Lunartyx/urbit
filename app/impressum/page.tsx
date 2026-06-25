import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = { title: "Impressum — Urbanetz Tech Consulting" }

export default function ImpressumPage() {
  return <><PageIntro eyebrow="Rechtliches" title="Impressum" /><section className="mx-auto max-w-3xl px-5 pb-28 md:px-8 md:pb-40"><div className="glass rounded-3xl p-8 md:p-10"><p className="leading-relaxed text-muted-foreground">Rechtlich erforderliche Angaben gemäss Schweizer Recht.</p><div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground">Die vollständigen Unternehmens- und Kontaktangaben werden vor der Veröffentlichung ergänzt.</div></div></section></>
}
