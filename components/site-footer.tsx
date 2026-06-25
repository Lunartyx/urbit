import Link from "next/link"

const groups = [
  { title: "Navigation", links: [{ label: "Startseite", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "Über mich", href: "/ueber-mich" }, { label: "Kontakt", href: "/kontakt" }, { label: "Kundenbereich", href: "/login" }] },
  { title: "Leistungen", links: [{ label: "Webseiten", href: "/leistungen#webseiten" }, { label: "Hosting", href: "/leistungen#hosting" }, { label: "Business E-Mail", href: "/leistungen#business-e-mail" }, { label: "Automatisierungen", href: "/leistungen#automatisierungen" }] },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/15">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div><Link href="/" className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_-4px_var(--color-primary)]"><span className="h-3 w-3 rounded-full bg-primary-foreground" /></span><span className="text-lg font-semibold tracking-tight">Urbanetz<span className="text-primary"> Tech</span></span></Link><p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">Verständliche und zuverlässige IT-Lösungen für Selbstständige, Vereine und kleinere Unternehmen.</p><p className="mt-4 text-sm text-muted-foreground">Zürich, Schweiz · Remote schweizweit</p></div>
          {groups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold tracking-tight">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link></li>)}</ul></div>)}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-primary/15 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} Urbanetz Tech Consulting. Alle Rechte vorbehalten.</p><div className="flex gap-6"><Link href="/impressum" className="transition-colors hover:text-foreground">Impressum</Link><Link href="/datenschutz" className="transition-colors hover:text-foreground">Datenschutz</Link></div></div>
      </div>
    </footer>
  )
}
