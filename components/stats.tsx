"use client"

import { MessageCircle, RouteOff, PhoneOff, CheckCircle2 } from "lucide-react"
import { Parallax } from "./parallax"

const reasons = [
  { icon: PhoneOff, title: "Keine Hotlines", text: "Sie sprechen direkt mit mir." },
  { icon: RouteOff, title: "Keine Ticketketten", text: "Ihr Anliegen geht nicht durch mehrere Hände." },
  { icon: MessageCircle, title: "Direkte Kommunikation", text: "Kurze Wege und klare Absprachen." },
  { icon: CheckCircle2, title: "Nachvollziehbare Lösungen", text: "Verständlich erklärt und sauber dokumentiert." },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Parallax speed={0.4} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen" style={{ backgroundImage: "url(/purple-wave.png)" }} />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-background/45" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Warum direkt mit mir?</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Planung und Umsetzung aus einer Hand.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Bei Urbanetz Tech Consulting arbeiten Sie direkt mit der Person zusammen, die Ihr Projekt plant und umsetzt.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Parallax key={reason.title} speed={0.1 + index * 0.05} className="border-t border-primary/25 pt-6">
              <reason.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}
