"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

function getVariant(pathname: string) {
  if (pathname === "/") return "home"
  if (pathname.startsWith("/leistungen")) return "services"
  if (pathname.startsWith("/ueber-mich")) return "about"
  if (pathname.startsWith("/kontakt")) return "contact"
  if (pathname.startsWith("/login")) return "portal"
  if (pathname.startsWith("/impressum") || pathname.startsWith("/datenschutz")) return "legal"
  return "home"
}

export function BackgroundAtmosphere() {
  const pathname = usePathname()
  const slowLayer = useRef<HTMLDivElement>(null)
  const fastLayer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    let frame = 0
    const update = () => {
      frame = 0
      const scroll = window.scrollY
      const slowOffset = Math.max(-90, scroll * -0.018)
      const fastOffset = Math.min(130, scroll * 0.026)
      if (slowLayer.current) slowLayer.current.style.transform = `translate3d(0, ${slowOffset}px, 0)`
      if (fastLayer.current) fastLayer.current.style.transform = `translate3d(0, ${fastOffset}px, 0)`
    }
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    return () => {
      window.removeEventListener("scroll", requestUpdate)
      cancelAnimationFrame(frame)
    }
  }, [pathname])

  return (
    <div className="site-atmosphere" data-page={getVariant(pathname)} aria-hidden="true">
      <div ref={slowLayer} className="ambient-depth">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-three" />
        <div className="ambient-orb ambient-orb-five" />
      </div>
      <div ref={fastLayer} className="ambient-depth">
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-four" />
      </div>
    </div>
  )
}
