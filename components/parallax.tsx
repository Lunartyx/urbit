"use client"

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react"

/* ------------------------------------------------------------------ *
 * A tiny scroll engine. One rAF loop, one scroll listener.
 * Subscribers register a callback that receives the current scrollY
 * and viewport height. Everything mutates the DOM directly (refs),
 * so there are zero React re-renders while scrolling — this is what
 * keeps the "extreme" parallax buttery smooth.
 * ------------------------------------------------------------------ */

type Subscriber = (scrollY: number, viewportH: number) => void

class ScrollEngine {
  private subs = new Set<Subscriber>()
  private raf = 0
  private running = false
  private scrollY = 0
  private viewportH = typeof window !== "undefined" ? window.innerHeight : 0

  private onScroll = () => this.request()
  private onResize = () => {
    this.viewportH = window.innerHeight
    this.request()
  }

  start() {
    if (this.running) return
    this.running = true
    window.addEventListener("scroll", this.onScroll, { passive: true })
    window.addEventListener("resize", this.onResize, { passive: true })
    this.request()
  }

  stop() {
    this.running = false
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onResize)
    cancelAnimationFrame(this.raf)
  }

  add(sub: Subscriber) {
    this.subs.add(sub)
    this.request()
    return () => {
      this.subs.delete(sub)
    }
  }

  private request() {
    cancelAnimationFrame(this.raf)
    this.raf = requestAnimationFrame(this.tick)
  }

  private tick = () => {
    this.scrollY = window.scrollY
    this.viewportH = window.innerHeight
    this.subs.forEach((s) => s(this.scrollY, this.viewportH))
  }
}

const EngineContext = createContext<ScrollEngine | null>(null)

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const engineRef = useRef<ScrollEngine | null>(null)
  if (!engineRef.current) engineRef.current = new ScrollEngine()

  useEffect(() => {
    const engine = engineRef.current!
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!reduce) engine.start()
    return () => engine.stop()
  }, [])

  return <EngineContext.Provider value={engineRef.current}>{children}</EngineContext.Provider>
}

function useEngine() {
  return useContext(EngineContext)
}

type ParallaxProps = {
  /** Positive moves slower/opposite, negative moves faster with scroll. Try -0.3 to 0.6 */
  speed?: number
  /** Horizontal drift factor relative to scroll progress within viewport */
  driftX?: number
  /** Rotation in degrees applied across the scroll range */
  rotate?: number
  /** Scale delta applied across the scroll range */
  scale?: number
  /** Fade the element in/out based on viewport position */
  fade?: boolean
  className?: string
  style?: CSSProperties
  as?: "div" | "span" | "section"
  children: ReactNode
}

/**
 * Wraps content and translates it as the user scrolls. The transform is based
 * on the element's distance from the viewport center, so each element animates
 * relative to where it sits on screen.
 */
export function Parallax({
  speed = 0.25,
  driftX = 0,
  rotate = 0,
  scale = 0,
  fade = false,
  className,
  style,
  as = "div",
  children,
}: ParallaxProps) {
  const engine = useEngine()
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!engine) return
    const el = ref.current
    if (!el) return

    const update = (scrollY: number, viewportH: number) => {
      const rect = el.getBoundingClientRect()
      const elCenter = rect.top + scrollY + rect.height / 2
      const viewportCenter = scrollY + viewportH / 2
      // -1 (below screen) .. 0 (centered) .. 1 (above screen)
      const progress = (viewportCenter - elCenter) / (viewportH / 2 + rect.height / 2)
      const p = Math.max(-1.2, Math.min(1.2, progress))

      const ty = p * speed * 220
      const tx = p * driftX * 220
      const rot = p * rotate
      const sc = 1 + p * scale

      el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`

      if (fade) {
        const opacity = 1 - Math.min(1, Math.abs(p) * 1.15)
        el.style.opacity = opacity.toFixed(3)
      }
    }

    const unsub = engine.add(update)
    return unsub
  }, [engine, speed, driftX, rotate, scale, fade])

  const Tag = as as "div"
  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </Tag>
  )
}

/**
 * A progress hook driven by the global engine — returns 0..1 over the document
 * scroll. Used for the top progress bar. Mutates a ref'd node directly.
 */
export function useScrollProgressBar() {
  const engine = useEngine()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!engine) return
    const update = (scrollY: number) => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? scrollY / max : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p.toFixed(4)})`
    }
    return engine.add(update)
  }, [engine])

  return ref
}
