"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { POS_FAQ_ITEMS } from "@/lib/pos-faq-data"
import { SectionHeader, useRevealOnScroll } from "@/components/marketing/section-header"

export function PosFaq() {
  const sectionRef = useRevealOnScroll<HTMLElement>()

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
        <SectionHeader
          eyebrow="POS software FAQ"
          title={
            <>
              Questions about <span className="gradient-text">point of sale</span>
            </>
          }
          subtitle="Straight answers on cloud POS, payments, inventory, and how ClickMasters POS fits retail and restaurant operations."
          id="faq-heading"
        />

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
