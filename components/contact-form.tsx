import type { ReactNode } from "react"
import { Mail, Send } from "lucide-react"

export function ContactForm() {
  return (
    <form className="glass-strong flex flex-col gap-5 rounded-3xl p-7 md:p-9">
      <div id="contact-form-status" className="flex gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <p>
          Das Kontaktformular wird aktuell vorbereitet. Bitte nutzen Sie bis dahin direkt{" "}
          <a href="mailto:kontakt@dominikurbanetz.ch" className="font-medium text-foreground transition-colors hover:text-primary">
            kontakt@dominikurbanetz.ch
          </a>
          {" "}oder rufen Sie mich an.
        </p>
      </div>

      <fieldset disabled aria-describedby="contact-form-status" className="contents">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Ihr Name" className="form-control" />
        </Field>
        <Field label="Firma / Projekt" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Firma oder Projektname" className="form-control" />
        </Field>
        <Field label="E-Mail" htmlFor="email">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="name@beispiel.ch" className="form-control" />
        </Field>
        <Field label="Nachricht" htmlFor="message">
          <textarea id="message" name="message" rows={6} placeholder="Worum geht es? Beschreiben Sie kurz Ihr Vorhaben." className="form-control resize-y" />
        </Field>
        <button type="button" disabled className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--color-primary)] opacity-60">
          Formular bald verfügbar
          <Send className="h-4 w-4" />
        </button>
      </fieldset>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  )
}
