import type { ReactNode } from "react"

/* Compact intro header for subpages (minimal motion). */
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
