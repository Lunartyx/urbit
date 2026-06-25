"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogIn, Menu, X } from "lucide-react"

const links = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Login", href: "/login" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-primary/15" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Urbanetz Tech Consulting Startseite">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_-4px_var(--color-primary)]"><span className="h-3 w-3 rounded-full bg-primary-foreground" /></span>
          <span className="text-base font-semibold tracking-tight">Urbanetz<span className="text-primary"> Tech</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {links.map((link) => {
            const active = pathname === link.href
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`inline-flex items-center gap-1.5 text-sm transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"}`}>{link.label}{link.href === "/login" ? <LogIn className="h-3.5 w-3.5" /> : null}</Link>
          })}
        </nav>
        <Link href="/kontakt" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_var(--color-primary)] transition-opacity hover:opacity-90 md:block">Projekt anfragen</Link>
        <button type="button" aria-label="Menü umschalten" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-lg border border-primary/25 text-foreground md:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {open && <div className="glass-strong border-t border-primary/15 px-5 py-4 md:hidden"><nav className="flex flex-col gap-1" aria-label="Mobile Navigation">{links.map((link) => <Link key={link.href} href={link.href} className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-primary/10">{link.label}</Link>)}<Link href="/kontakt" className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">Projekt anfragen</Link></nav></div>}
    </header>
  )
}
