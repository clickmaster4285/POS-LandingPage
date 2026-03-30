"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { POS_FAQ_ITEMS } from "@/lib/pos-faq-data"

export function PosFaq() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 lg:py-32 relative overflow-hidden border-t border-border bg-card/40"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[min(100%,480px)] h-[480px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
            POS software FAQ
          </p>
          <h2
            id="faq-heading"
            className="reveal delay-100 text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance"
          >
            Questions about{" "}
            <span className="gradient-text">point of sale</span>
          </h2>
          <p className="reveal delay-200 text-muted-foreground text-lg leading-relaxed">
            Straight answers on cloud POS, payments, inventory, and how ClickMasters POS
            fits retail and restaurant operations.
          </p>
        </div>

        <ul className="space-y-3">
          {POS_FAQ_ITEMS.map((item, index) => (
            <li
              key={item.question}
              className="reveal border border-border rounded-2xl bg-card overflow-hidden shadow-sm"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground hover:bg-secondary/50 transition-colors">
                  <span>{item.question}</span>
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-4 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/60">
                  <p className="pt-4">{item.answer}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
