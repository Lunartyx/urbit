"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Parallax } from "./parallax"

const work = [
  { client: "Helios Fintech", result: "Zahlungsplattform für das 40-fache Spitzenvolumen neu aufgebaut", tag: "Cloud · Plattform" },
  { client: "Vantage Health", result: "DSGVO-konformen KI-Triage-Assistenten in 14 Wochen ausgeliefert", tag: "KI · Sicherheit" },
  { client: "Orbit Logistik", result: "Echtzeit-Flottenanalyse über 12.000 Fahrzeuge", tag: "Daten · Engineering" },
  { client: "Nordlicht Retail", result: "Headless-Commerce-Stack mit 3x schnellerer Time-to-Market", tag: "Produkt · Cloud" },
]

export function Showcase() {
  return (
    <section id="projekte" className="relative overflow-hidden py-20 md:py-28">
      {/* Oversized parallax word in the background */}
      <Parallax speed={-0.5} className="pointer-events-none absolute inset-x-0 top-10 -z-10 flex justify-center">
        <span className="select-none text-[24vw] font-semibold leading-none tracking-tighter text-primary/10">
          WORK
        </span>
      </Parallax>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Parallax speed={0.1} className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Ausgewählte Projekte
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Einige der Systeme, die ich mit meinen Partnern konzipiert, gebaut und skaliert habe.
          </p>
        </Parallax>

        <div className="divide-y divide-primary/15 border-y border-primary/15">
          {work.map((w, i) => (
            <Parallax key={w.client} speed={0.06 + i * 0.05}>
              <Link
                href="/kontakt"
                className="group flex flex-col gap-3 py-8 transition-colors hover:bg-primary/5 md:flex-row md:items-center md:justify-between md:px-4"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                  <span className="text-2xl font-semibold tracking-tight md:text-3xl">{w.client}</span>
                </div>
                <div className="flex flex-1 items-center justify-between gap-6 md:justify-end md:gap-16">
                  <p className="max-w-md text-muted-foreground md:text-right">{w.result}</p>
                  <span className="hidden text-xs uppercase tracking-[0.18em] text-primary lg:block">
                    {w.tag}
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
              </Link>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}
