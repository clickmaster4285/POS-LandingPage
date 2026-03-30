"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { SectionHeader, useRevealOnScroll } from "@/components/marketing/section-header"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRevealOnScroll<HTMLElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section ref={sectionRef} id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ddd6fe]/40 via-[#fecdd3]/30 to-[#bfdbfe]/40 animate-gradient" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="reveal-scale bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-10 lg:p-16 text-center shadow-2xl shadow-accent/10 relative overflow-hidden">
          {/* Sparkle decorations */}
          <Sparkles className="absolute top-8 left-8 w-6 h-6 text-violet-400/30 animate-bounce-subtle" />
          <Sparkles className="absolute bottom-8 right-8 w-8 h-8 text-amber-400/30 animate-bounce-subtle delay-300" />

          <SectionHeader
            eyebrow="Pricing"
            title={
              <>
                Get <span className="gradient-text">POS pricing</span> &amp; onboarding
              </>
            }
            subtitle="Start a free trial or talk to our team about registers, tablet POS, payment processing, and multi-store rollout—everything you’d expect when buying a modern point-of-sale system."
          />

          {/* CTA Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-5 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 font-semibold whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 mb-8 animate-scale-in">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-foreground">Thanks! We&apos;ll be in touch soon.</span>
            </div>
          )}

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime"
            ].map((text, i) => (
              <span key={i} className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Check className="w-5 h-5 text-emerald-500" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
