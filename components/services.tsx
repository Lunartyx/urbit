"use client"

import { Globe2, Server, Mail, Workflow, LifeBuoy, Network } from "lucide-react"
import { Parallax } from "./parallax"

const services = [
  { icon: Globe2, title: "Webseiten", desc: "Moderne Websites für Unternehmen, Vereine und Projekte." },
  { icon: Server, title: "Hosting", desc: "Hosting, Domains, SSL-Zertifikate und laufende Betreuung." },
  { icon: Mail, title: "Business E-Mail", desc: "Professionelle E-Mail-Lösungen mit eigener Domain." },
  { icon: Workflow, title: "Automatisierungen", desc: "Wiederkehrende Abläufe automatisieren und wertvolle Zeit sparen." },
  { icon: LifeBuoy, title: "Technischer Support", desc: "Direkte Unterstützung bei technischen Problemen." },
  { icon: Network, title: "IT-Infrastruktur", desc: "Ganzheitliche Lösungen mit Microsoft 365, Azure und Hosting." },
]

export function Services() {
  return (
    <section id="leistungen" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Parallax speed={0.14} className="md:sticky md:top-28 md:h-fit">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Mein Angebot</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Technik, die im Alltag funktioniert.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Von der ersten Website bis zur betreuten Infrastruktur: Sie erhalten eine passende Lösung und einen direkten Ansprechpartner.
          </p>
        </Parallax>

        <div className="grid auto-rows-max gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Parallax key={service.title} speed={0.18}>
              <article className="glass group h-full rounded-2xl p-7 transition-colors duration-300 hover:border-primary/50 hover:bg-card/70">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.desc}</p>
              </article>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}
