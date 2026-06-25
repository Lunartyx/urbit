"use client"

import { Parallax } from "./parallax"

const words = ["Webseiten", "Hosting", "Business E-Mail", "Automatisierungen", "Technischer Support", "IT-Infrastruktur"]

export function Marquee() {
  const row = [...words, ...words, ...words]
  return (
    <section className="relative overflow-hidden border-y border-primary/15 py-9" aria-label="Leistungsbereiche">
      <Parallax speed={-0.18} className="flex">
        <div className="flex shrink-0 animate-[marquee_36s_linear_infinite] items-center gap-12 pr-12">
          {row.map((word, index) => (
            <span key={`${word}-${index}`} className="flex items-center gap-12 text-3xl font-medium tracking-tight text-muted-foreground md:text-4xl">
              {word}
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </Parallax>
    </section>
  )
}
