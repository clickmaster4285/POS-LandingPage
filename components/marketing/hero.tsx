"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  openSplineModal?: () => void
}

export function Hero({ openSplineModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale")
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Brand logos with proper icons/SVGs
  const brands = [
    { 
      name: "Google", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" opacity="0.85" />
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" opacity="0.7" />
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" opacity="0.9" />
        </svg>
      )
    },
    { 
      name: "Stripe", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M13.5 7.5h3v9h-3zM21 7.5h-3v9h3zM7.5 10.5c0-.8.7-1.5 1.5-1.5h4.5V6H9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h3c.8 0 1.5.7 1.5 1.5v1.5H9c-.8 0-1.5-.7-1.5-1.5v-1.5H4.5v1.5c0 2.5 2 4.5 4.5 4.5h3c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H9c-.8 0-1.5-.7-1.5-1.5V10.5z" />
        </svg>
      )
    },
    { 
      name: "Shopify", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M19.5 6.5h-15c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h15c.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1z" />
          <path fill="currentColor" d="M16.5 6.5l-3-4.5h-3l3 4.5h3z" opacity="0.85" />
          <path fill="currentColor" d="M12 2l-3 4.5h3V2z" opacity="0.85" />
        </svg>
      )
    },
    { 
      name: "Square", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
        </svg>
      )
    },
    { 
      name: "Toast", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#F05A28" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          <circle fill="#F05A28" cx="12" cy="12" r="4" />
        </svg>
      )
    },
    { 
      name: "Lightspeed", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#00A3E0" d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2l8 4v8l-8 4-8-4V8l8-4z" />
          <circle fill="#00A3E0" cx="12" cy="12" r="2" />
        </svg>
      )
    },
    { 
      name: "Clover", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#3CB371" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          <path fill="#3CB371" d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
        </svg>
      )
    },
  ]

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col pt-4 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#c4b5fd]/40 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-[#fda4af]/30 rounded-full blur-[100px] animate-pulse-glow delay-200" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-[#93c5fd]/30 rounded-full blur-[100px] animate-pulse-glow delay-400" />

        {/* Floating shapes */}
        <div className="absolute top-32 right-[15%] w-20 h-20 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-2xl opacity-20 animate-float rotate-12" />
        <div className="absolute top-[60%] left-[10%] w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute bottom-[30%] right-[20%] w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl opacity-20 animate-float-delayed rotate-45" />
      </div>

      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Announcement badge */}
              <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8 hover:bg-accent/20 transition-colors cursor-pointer group">
                <Sparkles className="w-4 h-4 text-accent animate-bounce-subtle" />
                <span className="text-sm font-medium text-accent">
                  Cloud POS · Payments · Inventory · Reporting
                </span>
                <ArrowRight className="w-3 h-3 text-accent group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Main headline — POS + primary keywords for landing */}
              <h1 className="reveal delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                <span className="text-foreground">Point of sale software</span>
                <br />
                <span className="gradient-text">built for your industry</span>
              </h1>

              {/* Subheadline */}
              <p className="reveal delay-200 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Run checkout,{" "}
                <span className="font-semibold text-foreground">payment processing</span>, and{" "}
                <span className="font-semibold text-foreground">inventory management</span> on one
                cloud POS platform—with retail POS, restaurant POS, and 200+ vertical templates.
              </p>

              {/* CTA Buttons */}
              <div className="reveal delay-300 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105"
                >
                  <Link href="/contact">
                    Get a free POS demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-7 rounded-full">
                  <Link href="/#pricing">See pricing</Link>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  onClick={openSplineModal}
                  className="h-14 px-6 text-base font-medium text-foreground hover:bg-secondary group"
                >
                  <span className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center mr-2 group-hover:bg-foreground/20 transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                  </span>
                  3D demo
                </Button>
              </div>

              <div className="reveal delay-400 mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {[
                  { href: "/#features", label: "Features" },
                  { href: "/#solution", label: "Industries" },
                  { href: "/#faq", label: "FAQ" },
                  { href: "/#pricing", label: "Pricing" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>

              {/* Stats row */}
              <div className="reveal delay-400 mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {[
                  { value: "200+", label: "Industry POS setups" },
                  { value: "50M+", label: "Transactions processed" },
                  { value: "99.9%", label: "Platform uptime" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Lightweight preview (opens 3D modal) */}
            <div
              className="reveal-scale delay-200 relative h-[400px] lg:h-[600px] group cursor-pointer"
              onClick={openSplineModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  openSplineModal?.()
                }
              }}
              aria-label="Open interactive 3D POS demo"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-fuchsia-100/30 to-amber-100/50 rounded-3xl group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-border/70 bg-background/20 backdrop-blur-[2px]" />

              {/* Faux product cards (fast, no heavy assets) */}
              <div className="absolute inset-0 p-6 lg:p-8">
                <div className="h-full grid grid-rows-[auto_1fr_auto] gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-white/70 ring-1 ring-border shadow-sm">
                        <Sparkles className="size-4 text-violet-600" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-foreground/80">Interactive preview</p>
                        <p className="text-[11px] text-muted-foreground">Checkout • Inventory • Analytics</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/50 text-white border border-white/15">
                      3D demo
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm p-4 shadow-sm">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Today
                      </p>
                      <div className="space-y-2">
                        <div className="h-3 rounded-full bg-foreground/10 w-[85%]" />
                        <div className="h-3 rounded-full bg-foreground/10 w-[70%]" />
                        <div className="h-3 rounded-full bg-foreground/10 w-[60%]" />
                      </div>
                      <div className="mt-5 h-10 rounded-xl bg-gradient-to-r from-violet-500/15 to-fuchsia-500/10 border border-violet-500/15" />
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm p-4 shadow-sm">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Basket
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="h-3 rounded-full bg-foreground/10 w-[55%]" />
                          <div className="h-3 rounded-full bg-foreground/10 w-[20%]" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="h-3 rounded-full bg-foreground/10 w-[62%]" />
                          <div className="h-3 rounded-full bg-foreground/10 w-[18%]" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="h-3 rounded-full bg-foreground/10 w-[48%]" />
                          <div className="h-3 rounded-full bg-foreground/10 w-[22%]" />
                        </div>
                      </div>
                      <div className="mt-5 h-10 rounded-xl bg-gradient-to-r from-emerald-500/15 to-teal-500/10 border border-emerald-500/15" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm p-4 shadow-sm flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground/80">
                      Open interactive 3D tour
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                      Play
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-black/50 text-white border border-white/15">
                        <Play className="size-4 fill-white" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated logos marquee section */}
      <div className="py-12 lg:py-16 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="reveal text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">Retail, hospitality, and service operators</span>{" "}
            choose ClickMasters POS for fast checkout, omnichannel-ready workflows, and analytics
            that match how modern POS suites are evaluated.
          </p>
          
          {/* Animated marquee container */}
          <div className="relative flex overflow-x-hidden">
            {/* Gradient fade left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            
            {/* Animated logos */}
            <div className="flex whitespace-nowrap animate-marquee">
              {[...duplicatedBrands, ...duplicatedBrands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="inline-flex items-center justify-center mx-8 gap-2"
                >
                  <div className="text-foreground/40 hover:text-foreground/70 transition-colors">
                    {brand.icon}
                  </div>
                  <span className="text-foreground/30 hover:text-foreground/60 transition-colors font-medium text-lg tracking-tight hover:scale-110 cursor-pointer">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Gradient fade right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}