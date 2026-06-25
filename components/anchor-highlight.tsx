"use client"

import { useEffect } from "react"

export function AnchorHighlight() {
  useEffect(() => {
    let timeout = 0

    const flash = (hash = window.location.hash) => {
      if (!hash) return
      const id = decodeURIComponent(hash.slice(1))
      const target = document.getElementById(id)
      if (!target?.classList.contains("target-highlight")) return

      window.clearTimeout(timeout)
      target.classList.remove("is-target-flashing")
      void target.offsetWidth
      target.classList.add("is-target-flashing")
      timeout = window.setTimeout(() => target.classList.remove("is-target-flashing"), 1700)
    }

    const handleClick = (event: MouseEvent) => {
      const origin = event.target
      if (!(origin instanceof Element)) return
      const anchor = origin.closest<HTMLAnchorElement>("a[href*='#']")
      if (!anchor) return

      const destination = new URL(anchor.href, window.location.href)
      if (destination.pathname !== window.location.pathname || !destination.hash) return
      window.setTimeout(() => flash(destination.hash), 40)
    }

    const handleHashChange = () => flash()

    document.addEventListener("click", handleClick)
    window.addEventListener("hashchange", handleHashChange)
    flash()

    return () => {
      document.removeEventListener("click", handleClick)
      window.removeEventListener("hashchange", handleHashChange)
      window.clearTimeout(timeout)
    }
  }, [])

  return null
}
