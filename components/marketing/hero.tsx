"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Image from "next/image"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
})

interface HeroProps {
  openSplineModal?: () => void
}

export function Hero({ openSplineModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

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
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      )
    },
    { 
      name: "Stripe", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#635BFF" d="M13.5 7.5h3v9h-3zM21 7.5h-3v9h3zM7.5 10.5c0-.8.7-1.5 1.5-1.5h4.5V6H9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h3c.8 0 1.5.7 1.5 1.5v1.5H9c-.8 0-1.5-.7-1.5-1.5v-1.5H4.5v1.5c0 2.5 2 4.5 4.5 4.5h3c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H9c-.8 0-1.5-.7-1.5-1.5V10.5z" />
        </svg>
      )
    },
    { 
      name: "Shopify", 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#95BF47" d="M16.5 6.5l-3-4.5h-3l3 4.5h3zM12 2l-3 4.5h3V2zM7.5 2l3 4.5h-3V2zM19.5 6.5h-15c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h15c.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1z" />
          <path fill="#5E8E3E" d="M16.5 6.5h-15l2 4h15l-2-4z" />
        </svg>
      )
    },
    { 
      name: "Square", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#000000" d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
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
                  className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105"
                >
                  Try ClickMasters POS for free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={openSplineModal}
                  className="h-14 px-6 text-base font-medium text-foreground hover:bg-secondary group"
                >
                  <span className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center mr-2 group-hover:bg-foreground/20 transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                  </span>
                  Watch 3D Demo
                </Button>
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

            {/* Right side - Spline 3D */}
            <div className="reveal-scale delay-200 relative h-[400px] lg:h-[600px] group cursor-pointer" onClick={openSplineModal}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-fuchsia-100/30 to-amber-100/50 rounded-3xl group-hover:scale-105 transition-transform duration-500" />
              <Spline
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                className="w-full h-full"
              />
              
              {/* Interactive overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              
              {/* 3D badge */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                Interactive 3D
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
            <div 
              ref={marqueeRef}
              className="flex animate-marquee whitespace-nowrap"
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="inline-flex items-center justify-center mx-8 gap-2"
                >
                  <div className="text-foreground/50 group-hover:text-foreground/80 transition-all">
                    {brand.icon}
                  </div>
                  <span className="text-foreground/30 hover:text-foreground/60 transition-all font-medium text-lg tracking-tight hover:scale-110 cursor-pointer">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Second marquee for seamless loop */}
            <div 
              className="flex absolute top-0 animate-marquee2 whitespace-nowrap"
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}-2`}
                  className="inline-flex items-center justify-center mx-8 gap-2"
                >
                  <div className="text-foreground/50 group-hover:text-foreground/80 transition-all">
                    {brand.icon}
                  </div>
                  <span className="text-foreground/30 hover:text-foreground/60 transition-all font-medium text-lg tracking-tight hover:scale-110 cursor-pointer">
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

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  )
}