"use client"

import { useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("")
  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus("E-Mail-Adresse kopiert. Sie können sie in Ihr Webmail einfügen.")
    } catch {
      setStatus(
        "Kopieren ist hier nicht verfügbar. Markieren und kopieren Sie die Adresse oberhalb.",
      )
    }
  }
  return (
    <div className="copy-email">
      <button type="button" className="text-link" onClick={copy}>
        E-Mail-Adresse kopieren
      </button>
      <p role="status">{status}</p>
    </div>
  )
}
