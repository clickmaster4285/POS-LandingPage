"use client"

import { useEffect, useRef } from "react"

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )

    node.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: "center" | "left"
  id?: string
}) {
  const alignCls = align === "left" ? "text-left" : "text-center"
  const subtitleAlignCls = align === "left" ? "" : "mx-auto"

  return (
    <div className={`${alignCls} mb-12 lg:mb-14`}>
      {eyebrow ? (
        <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="reveal delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`reveal delay-200 text-muted-foreground mt-4 max-w-2xl leading-relaxed ${subtitleAlignCls}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

