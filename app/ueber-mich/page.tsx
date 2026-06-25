import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Trophy, Wrench, Check } from "lucide-react"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Über mich — Urbanetz Tech Consulting",
  description: "Dominik Urbanetz unterstützt Unternehmen und Projekte mit verständlichen, zuverlässigen IT-Lösungen.",
}

const experience = [
  "UBS Cybersecurity Masterclass",
  "SwissSkills Qualifikation",
  "2. Platz Skills Battle",
  "Erfahrung mit Linux, Hosting, Cloud und Automatisierung",
  "Fokus auf praktische und nachvollziehbare Lösungen",
]

export default function UeberMichPage() {
  return (
    <>
      <PageIntro eyebrow="Über mich" title={<>Technik verstehen. Probleme lösen. Verantwortung übernehmen.</>}>
        Hinter Urbanetz Tech Consulting stehe ich, Dominik Urbanetz — Ihr direkter Ansprechpartner von der ersten Idee bis zum laufenden Betrieb.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.4fr] md:items-start">
          <aside className="glass-strong rounded-3xl p-8 md:sticky md:top-28">
            <div className="grid h-24 w-24 place-items-center rounded-2xl bg-primary text-3xl font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--color-primary)]">DU</div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">Dominik Urbanetz</h2>
            <p className="mt-1 text-muted-foreground">Gründer & Tech Consultant</p>
            <div className="mt-6 border-t border-primary/15 pt-6 text-sm leading-relaxed text-muted-foreground">Zürich, Schweiz<br />Remote Support schweizweit</div>
          </aside>

          <div className="space-y-8">
            <article className="glass rounded-3xl p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Wer bin ich?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Verständliche IT, die zuverlässig funktioniert.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Ich bin Dominik Urbanetz und beschäftige mich mit Infrastruktur, Hosting, Automatisierung, Webentwicklung und technischen Lösungen.</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Mein Ziel ist es, Unternehmen und Projekten verständliche und zuverlässige IT-Lösungen bereitzustellen.</p>
            </article>

            <article className="glass rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 text-primary"><Trophy className="h-6 w-6" /><p className="text-sm font-medium uppercase tracking-[0.2em]">Erfahrung</p></div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {experience.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
            </article>

            <article className="glass rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 text-primary"><Wrench className="h-6 w-6" /><p className="text-sm font-medium uppercase tracking-[0.2em]">Meine Philosophie</p></div>
              <blockquote className="mt-6 text-balance text-2xl font-medium leading-relaxed tracking-tight">„Technologie sollte Menschen unterstützen und nicht unnötig kompliziert sein.“</blockquote>
              <p className="mt-5 leading-relaxed text-muted-foreground">Ich lege Wert auf direkte Kommunikation, saubere Dokumentation und langfristig funktionierende Lösungen.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Deshalb betrachte ich Websites, Hosting, E-Mail, Automatisierungen und Infrastruktur nicht komplett getrennt voneinander. Gerade bei kleineren Unternehmen, Vereinen oder privaten Projekten zeigt sich oft, wie wichtig es ist, dass diese Bausteine zusammenpassen und jemand den Überblick behält.
              </p>
              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-muted-foreground"><ShieldCheck className="h-5 w-5 shrink-0 text-primary" />Sicherheit und Nachvollziehbarkeit werden von Anfang an mitgedacht.</div>
            </article>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--color-primary)] transition-transform hover:-translate-y-0.5">Lernen wir uns kennen <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  )
}
