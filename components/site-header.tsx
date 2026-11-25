"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Brand } from "@/components/brand"

const links = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kundenbereich", href: "/login" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null)
        toggle.current?.focus()
      }
    }
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpenPath(null)
    }
    const desktop = window.matchMedia("(min-width: 900px)")
    const onResize = () => {
      if (desktop.matches) setOpenPath(null)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onOutside)
    desktop.addEventListener("change", onResize)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onOutside)
      desktop.removeEventListener("change", onResize)
    }
  }, [open])

  const navLinks = links.map(({ label, href }) => (
    <Link
      key={href}
      href={href}
      prefetch={href === "/login" ? false : undefined}
      onClick={() => setOpenPath(null)}
      aria-current={pathname === href ? "page" : undefined}
    >
      {label}
      {href === "/login" && <span className="nav-status">In Entwicklung</span>}
    </Link>
  ))
  return (
    <header
      ref={header}
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpenPath(null)
      }}
    >
      <div className="container header-inner">
        <Link href="/" onClick={() => setOpenPath(null)} aria-label="Urbit Startseite">
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {navLinks}
        </nav>
        <Link href="/kontakt" className="button button-small header-contact">
          Anliegen besprechen
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav container"
        aria-label="Mobile Navigation"
        hidden={!open}
      >
        {navLinks}
        <Link
          href="/kontakt"
          onClick={() => setOpenPath(null)}
          aria-current={pathname === "/kontakt" ? "page" : undefined}
        >
          Kontakt
        </Link>
        <p>Direkt mit Dominik Urbanetz. Aus Oberhasli, schweizweit.</p>
      </nav>
    </header>
  )
}
