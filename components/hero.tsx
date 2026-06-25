"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Parallax } from "./parallax"

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20">
      <Parallax speed={0.55} className="pointer-events-none absolute -left-32 top-0 z-0">
        <div className="h-[40rem] w-[40rem] rounded-full bg-primary/45 blur-[120px]" />
      </Parallax>
      <Parallax speed={-0.4} driftX={0.15} className="pointer-events-none absolute -right-40 top-32 z-0">
        <div className="h-[44rem] w-[44rem] rounded-full bg-accent/35 blur-[140px]" />
      </Parallax>
      <Parallax speed={0.7} className="pointer-events-none absolute left-1/3 top-60 z-0">
        <div className="h-[30rem] w-[30rem] rounded-full bg-primary/35 blur-[130px]" />
      </Parallax>

      <Parallax speed={0.32} scale={0.18} className="pointer-events-none absolute inset-0 z-0">
        <div
          className="orb-mask absolute right-[-16%] top-[-6%] h-[135%] w-[88%] bg-contain bg-right bg-no-repeat opacity-90 mix-blend-screen"
          style={{ backgroundImage: "url(/aurora-orb.png)" }}
        />
      </Parallax>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <Parallax speed={0.08} className="max-w-3xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Persönliche IT-Lösungen aus Zürich
          </span>
        </Parallax>

        <div className="mt-8 max-w-5xl">
          <Parallax speed={0.16} className="block">
            <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]">
              Hallo, ich bin
            </h1>
          </Parallax>
          <Parallax speed={-0.12} driftX={0.05} className="block">
            <h1 className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-5xl font-semibold leading-[0.96] tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-[7rem]">
              Dominik Urbanetz.
            </h1>
          </Parallax>
        </div>

        <Parallax speed={0.05} className="mt-9 flex max-w-2xl flex-col gap-6">
          <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
            Ich unterstütze Selbstständige, Vereine und kleinere Unternehmen bei Websites,
            Hosting, Business-E-Mail, Automatisierungen und technischer Infrastruktur.
          </p>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Technologie muss nicht kompliziert sein. Mein Ziel sind zuverlässige und
            verständliche Lösungen, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              Projekt anfragen
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/leistungen"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
            >
              Mein Angebot entdecken
            </Link>
          </div>
        </Parallax>
      </div>

      <div className="relative z-10 mx-auto mt-14 flex w-full max-w-7xl items-center justify-between px-5 text-xs uppercase tracking-[0.2em] text-muted-foreground md:px-8">
        <span className="inline-flex items-center gap-2">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Mehr entdecken
        </span>
        <span className="hidden sm:block">Direkt · verständlich · zuverlässig</span>
      </div>
    </section>
  )
}
