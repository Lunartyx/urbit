"use client"

import { Parallax } from "./parallax"

const steps = [
  {
    no: "01",
    title: "Analyse",
    desc: "Ich verstehe zuerst das Geschäft, nicht nur das Backlog. Fundierte Audits von Architektur, Team und Rahmenbedingungen.",
  },
  {
    no: "02",
    title: "Konzept",
    desc: "Ein pragmatischer Bauplan mit klaren Trade-offs – schrittweise umsetzbar und vom ersten Tag an risikoarm.",
  },
  {
    no: "03",
    title: "Umsetzung",
    desc: "Entwicklung in engen Iterationen, an Ihrer Seite – mit Qualität und Observability von Beginn an eingebaut.",
  },
  {
    no: "04",
    title: "Skalierung",
    desc: "Ich härte ab, automatisiere und übergebe – Ihr Team besitzt am Ende ein System, das es vollständig versteht.",
  },
]

export function Approach() {
  return (
    <section id="ablauf" className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Parallax speed={0.12} className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Wie ich arbeite</p>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Eine Methode, die aus Komplexität Tempo macht.
        </h2>
      </Parallax>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-primary/15 bg-primary/10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Parallax key={s.no} speed={0.08 + i * 0.06} className="glass-strong">
            <div className="flex h-full flex-col gap-6 p-8">
              <span className="text-sm font-medium text-primary">{s.no}</span>
              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  )
}
