"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Parallax } from "./parallax"

export function CTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Parallax speed={0.18}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Nächster Schritt</p>
        </Parallax>
        <Parallax speed={0.1}>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1] tracking-tight md:text-7xl">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
        </Parallax>
        <Parallax speed={0.04}>
          <Link href="/kontakt" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--color-primary)] transition-transform hover:-translate-y-0.5">
            Kontakt aufnehmen
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Parallax>
      </div>
    </section>
  )
}
