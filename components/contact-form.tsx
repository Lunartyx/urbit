"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type FormEvent } from "react"

export function ContactForm() {
  const [token, setToken] = useState("")
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState("")
  const [failed, setFailed] = useState(false)
  const feedback = useRef<HTMLParagraphElement>(null)
  async function refreshToken() {
    try {
      const response = await fetch("/api/enquiry/token", { cache: "no-store" })
      if (!response.ok) throw new Error()
      const data = await response.json()
      setToken(data.token)
    } catch {
      setToken("")
      setFailed(true)
      setStatus("Das Formular ist momentan nicht verfügbar. Bitte nutzen Sie E-Mail oder Telefon.")
    }
  }
  useEffect(() => {
    const controller = new AbortController()
    fetch("/api/enquiry/token", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error()
        return response.json()
      })
      .then((data) => setToken(data.token))
      .catch(() => {
        if (!controller.signal.aborted) {
          setFailed(true)
          setStatus(
            "Das Formular ist momentan nicht verfügbar. Bitte nutzen Sie E-Mail oder Telefon.",
          )
        }
      })
    return () => controller.abort()
  }, [])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy || !token) return
    const form = event.currentTarget
    setBusy(true)
    setStatus("")
    const fields = Object.fromEntries(new FormData(form))
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, token }),
      })
      const data = await response.json()
      setFailed(!response.ok)
      setStatus(data.message)
      if (response.ok) form.reset()
    } catch {
      setFailed(true)
      setStatus(
        "Die Versandbestätigung fehlt. Ihre Eingaben bleiben erhalten. Bitte nutzen Sie E-Mail oder Telefon.",
      )
    } finally {
      setBusy(false)
      await refreshToken()
      requestAnimationFrame(() => feedback.current?.focus())
    }
  }
  return (
    <section className="container enquiry-next" aria-labelledby="form-title">
      <h2 id="form-title">Ihr Anliegen direkt senden.</h2>
      <p>
        Pflichtfelder sind mit * markiert. Bitte keine Passwörter oder vertraulichen Kundendaten
        senden.
      </p>
      <form className="enquiry-form" onSubmit={submit} aria-busy={busy}>
        <label htmlFor="enquiry-name">
          Name *
          <input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label htmlFor="enquiry-email">
          E-Mail *
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
        <label htmlFor="enquiry-company">
          Firma (optional)
          <input id="enquiry-company" name="company" autoComplete="organization" maxLength={150} />
        </label>
        <label htmlFor="enquiry-message">
          Ihr Anliegen *
          <textarea
            id="enquiry-message"
            name="message"
            required
            minLength={20}
            maxLength={5000}
            rows={6}
            aria-describedby="message-help"
          />
        </label>
        <p id="message-help">
          20–5000 Zeichen. Was möchten Sie erreichen? Ein gewünschter Termin oder Budgetrahmen
          hilft, ist aber nicht nötig.
        </p>
        <div hidden aria-hidden="true">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <p>
          Ihre Angaben werden zur Bearbeitung Ihrer Anfrage verwendet. Mehr dazu im{" "}
          <Link href="/datenschutz" className="text-link">
            Datenschutz
          </Link>
          .
        </p>
        <button className="button" type="submit" disabled={busy || !token}>
          {busy ? "Wird gesendet …" : "Anfrage senden"}
        </button>
        <p ref={feedback} tabIndex={-1} role={failed ? "alert" : "status"}>
          {status}
        </p>
      </form>
    </section>
  )
}
