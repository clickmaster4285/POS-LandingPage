"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ShoppingCart,
  UtensilsCrossed,
  Building2,
  Stethoscope,
  Film,
  Dumbbell,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  PartyPopper,
  Bus,
  Landmark,
  Sprout,
  ShoppingBag,
  Anchor,
  Scissors,
  Laptop,
  HardHat,
  HeartHandshake,
  Warehouse,
  ArrowUpRight,
} from "lucide-react"
import {
  POS_SYSTEM_ENTRIES,
  POS_INDUSTRIES,
  type PosIndustry,
} from "@/lib/pos-systems-data"

const industryPresentation: Record<
  PosIndustry,
  { icon: LucideIcon; gradient: string }
> = {
  Retail: { icon: ShoppingCart, gradient: "from-rose-400 to-pink-500" },
  "Food & Beverage": {
    icon: UtensilsCrossed,
    gradient: "from-amber-400 to-orange-500",
  },
  Hospitality: { icon: Building2, gradient: "from-teal-400 to-cyan-500" },
  "Healthcare & Medical": {
    icon: Stethoscope,
    gradient: "from-emerald-400 to-teal-500",
  },
  "Entertainment & Recreation": {
    icon: Film,
    gradient: "from-violet-400 to-purple-500",
  },
  "Sports & Fitness": {
    icon: Dumbbell,
    gradient: "from-lime-400 to-green-500",
  },
  Automotive: { icon: Car, gradient: "from-sky-400 to-blue-500" },
  "Home & Property Services": {
    icon: Home,
    gradient: "from-stone-400 to-zinc-500",
  },
  "Professional Services": {
    icon: Briefcase,
    gradient: "from-slate-400 to-gray-500",
  },
  "Education & Childcare": {
    icon: GraduationCap,
    gradient: "from-indigo-400 to-violet-500",
  },
  "Events & Venues": {
    icon: PartyPopper,
    gradient: "from-fuchsia-400 to-pink-500",
  },
  Transportation: { icon: Bus, gradient: "from-cyan-400 to-teal-500" },
  "Government & Public": {
    icon: Landmark,
    gradient: "from-blue-400 to-indigo-500",
  },
  "Agriculture & Farming": {
    icon: Sprout,
    gradient: "from-green-400 to-emerald-500",
  },
  "Specialty Retail": {
    icon: ShoppingBag,
    gradient: "from-orange-400 to-amber-500",
  },
  "Marine & Boating": { icon: Anchor, gradient: "from-sky-500 to-blue-600" },
  "Beauty & Personal Care": {
    icon: Scissors,
    gradient: "from-pink-400 to-rose-500",
  },
  "Technology & Electronics": {
    icon: Laptop,
    gradient: "from-indigo-400 to-violet-500",
  },
  "Construction & Trades": {
    icon: HardHat,
    gradient: "from-yellow-500 to-amber-600",
  },
  "Nonprofits & Community": {
    icon: HeartHandshake,
    gradient: "from-red-400 to-rose-500",
  },
  "Wholesale & Distribution": {
    icon: Warehouse,
    gradient: "from-zinc-400 to-slate-500",
  },
}

const categories = ["All", ...POS_INDUSTRIES] as const

export function POSSystems() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All")
  const [query, setQuery] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  const filteredSystems = useMemo(() => {
    const q = query.trim().toLowerCase()
    const byCategory =
      activeCategory === "All"
        ? POS_SYSTEM_ENTRIES
        : POS_SYSTEM_ENTRIES.filter((s) => s.industry === activeCategory)
    if (!q) return byCategory
    return byCategory.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.industry.toLowerCase().includes(q)
    )
  }, [activeCategory, query])

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

  const handleCardClick = (link?: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section ref={sectionRef} id="solution" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ddd6fe]/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fecdd3]/20 rounded-full blur-[100px] animate-pulse-glow delay-300" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Industry POS software </span>
            <span className="gradient-text">by vertical</span>
          </h2>
          <p className="reveal delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a point-of-sale template matched to your operation—retail POS, restaurant
            POS, services, wholesale, and more—so checkout, catalog, and reporting fit how you
            sell.
          </p>
        </div>

        <div className="reveal delay-150 max-w-xl mx-auto mb-8">
          <label htmlFor="pos-search" className="sr-only">
            Search POS types
          </label>
          <input
            id="pos-search"
            type="search"
            placeholder="Search by business type or industry…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-border bg-card px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40"
          />
        </div>

        <div className="reveal delay-200 flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((category, i) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all rounded-full ${
                activeCategory === category
                  ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted hover:scale-105"
              }`}
              style={{ animationDelay: `${i * 20}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mb-6">
          Showing {filteredSystems.length} of {POS_SYSTEM_ENTRIES.length} business types
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSystems.map((system, index) => {
            const { icon: Icon, gradient } = industryPresentation[system.industry]
            return (
              <div
                key={`${system.industry}-${system.name}`}
                onClick={() => handleCardClick(system.link)}
                className={`reveal-scale group bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-300 card-shine ${
                  system.link ? "cursor-pointer" : "cursor-default"
                }`}
                style={{ animationDelay: `${(index % 8) * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {system.link && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1">
                  {system.industry}
                </p>
                <h3 className="font-semibold text-foreground mb-1 text-lg group-hover:text-violet-600 transition-colors">
                  {system.name}
                </h3>
                <p className="text-sm text-muted-foreground">{system.description}</p>
                {system.link && (
                  <div className="mt-2 text-xs text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to visit website →
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
