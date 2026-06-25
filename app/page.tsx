"use client"

import { ParallaxProvider, useScrollProgressBar } from "@/components/parallax"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import Link from "next/link"

function ProgressBar() {
  const ref = useScrollProgressBar()
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div ref={ref} className="h-full origin-left scale-x-0 bg-primary" />
    </div>
  )
}

export default function Page() {
  return (
    <ParallaxProvider>
      <ProgressBar />
      <div className="relative overflow-x-clip">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Mein Hintergrund</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">Praxis, Wettbewerb und technische Neugier.</h2>
            </div>
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <p className="text-lg leading-relaxed text-foreground/90">Cybersecurity, Infrastruktur und technische Problemlösung begleiten mich seit mehreren Jahren.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Unter anderem nahm ich an der UBS Cybersecurity Masterclass teil und qualifizierte mich für die SwissSkills.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Ein besonderes Highlight war der <span className="font-medium text-foreground">2. Platz im jährlichen Skills Battle</span> mit Teilnehmern von UBS, Swisscom, Siemens, Zürcher Kantonalbank und der Stadt Zürich.</p>
              <Link href="/ueber-mich" className="mt-7 inline-flex text-sm font-medium text-primary hover:text-accent">Mehr über mich →</Link>
            </div>
          </div>
        </section>
        <CTA />
      </div>
    </ParallaxProvider>
  )
}
