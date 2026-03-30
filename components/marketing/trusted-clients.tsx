"use client"

import { useEffect, useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SectionHeader, useRevealOnScroll } from "@/components/marketing/section-header"
import {
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  Scissors,
  Pill,
  Layers,
  Store,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import {
  siKlarna,
  siStripe,
  siShopify,
  siSquare,
} from "simple-icons"

const trustedClients: { label: string; icon: LucideIcon }[] = [
  { label: "Retail groups", icon: Store },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Salons", icon: Scissors },
  { label: "Pharmacies", icon: Pill },
  { label: "Specialty stores", icon: ShoppingBag },
  { label: "Multi-location brands", icon: Building2 },
  { label: "Quick-service outlets", icon: Layers },
  { label: "Service businesses", icon: Wrench },
] as const

type ClientBadge = {
  name:
    | "Klarna"
    | "Stripe"
    | "Shopify"
    | "Square"
    | "Toast"
    | "Lightspeed"
    | "Clover"
    | "Superhuman"
    | "Salesforce"
}

const clientBadges: readonly ClientBadge[] = [
  { name: "Klarna" },
  { name: "Stripe" },
  { name: "Shopify" },
  { name: "Square" },
  { name: "Toast" },
  { name: "Lightspeed" },
  { name: "Clover" },
  { name: "Superhuman" },
  { name: "Salesforce" },
] as const

function brandHex(name: ClientBadge["name"]) {
  // Prefer official brand colors from simple-icons (when available).
  switch (name) {
    case "Klarna":
      return `#${siKlarna.hex}`
    case "Stripe":
      return `#${siStripe.hex}`
    case "Shopify":
      return `#${siShopify.hex}`
    case "Square":
      return `#${siSquare.hex}`
    // Fallbacks for brands not present in this simple-icons build:
    case "Salesforce":
      return "#00A1E0"
    case "Toast":
      return "#FF4D00"
    case "Lightspeed":
      return "#E6007A"
    case "Clover":
      return "#00C853"
    case "Superhuman":
      return "#6D28D9"
    default:
      return null
  }
}

function BrandIcon({
  name,
  className = "",
}: {
  name: ClientBadge["name"]
  className?: string
}) {
  const cls = `shrink-0 ${className}`

  // Use official logo paths from simple-icons where available.
  const icon =
    name === "Klarna"
      ? siKlarna
      : name === "Stripe"
        ? siStripe
        : name === "Shopify"
          ? siShopify
          : name === "Square"
            ? siSquare
            : null

  if (icon) {
    return (
      <svg className={cls} viewBox="0 0 24 24" role="img" aria-label={name} focusable="false">
        <path d={icon.path} fill="currentColor" />
      </svg>
    )
  }

  // Fallback: keep the existing generic mark for Superhuman if no official logo is present.
  if (name === "Superhuman") {
    return (
      <svg className={cls} viewBox="0 0 24 24" role="img" aria-label={name} focusable="false">
        <path
          fill="currentColor"
          d="M12 2l8.5 4.7v10.6L12 22 3.5 17.3V6.7L12 2zm0 3L6.5 7.9v8.2L12 19l5.5-2.9V7.9L12 5z"
        />
      </svg>
    )
  }

  if (name === "Salesforce") {
    return (
      <svg className={cls} viewBox="0 0 24 24" role="img" aria-label={name} focusable="false">
        <path
          fill="currentColor"
          d="M8.7 10.1a3.3 3.3 0 016.1-1.6 2.7 2.7 0 013.9 2.4 2.6 2.6 0 01-.2 1 2.6 2.6 0 01.2 1 3 3 0 01-3 3H9.1a3.1 3.1 0 01-.4-6.2z"
        />
      </svg>
    )
  }

  return null
}

export function TrustedClients() {
  const sectionRef = useRevealOnScroll<HTMLElement>()
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    const t = window.setInterval(() => {
      if (!api.canScrollNext()) api.scrollTo(0)
      else api.scrollNext()
    }, 2200)
    return () => window.clearInterval(t)
  }, [api])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="trusted"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.06] via-fuchsia-500/[0.04] to-transparent" />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-[#c4b5fd]/12 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-32 right-1/3 w-[700px] h-[260px] bg-[#fecdd3]/10 rounded-full blur-[120px] animate-pulse-glow delay-300" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Trusted clients"
          title={
            <>
              Built for teams that run <span className="gradient-text">real checkout</span>
            </>
          }
          subtitle="From single-location operators to multi-site brands, ClickMasters POS supports fast payments, inventory, and reporting across industries."
          id="trusted"
        />

        <div className="reveal delay-300 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {trustedClients.map(({ label, icon: Icon }, idx) => (
            <div
              key={label}
              className="group relative rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm px-4 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:bg-card"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/[0.10] to-fuchsia-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(217,70,239,0.25), rgba(59,130,246,0.18))",
                }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-center gap-2">
                <span
                  className="inline-flex size-9 items-center justify-center rounded-xl ring-1 ring-border shadow-sm"
                  style={{
                    background:
                      idx % 3 === 0
                        ? "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(217,70,239,0.10))"
                        : idx % 3 === 1
                          ? "linear-gradient(135deg, rgba(59,130,246,0.14), rgba(139,92,246,0.10))"
                          : "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(59,130,246,0.08))",
                  }}
                >
                  <Icon
                    className="size-4 text-foreground/70 group-hover:text-foreground transition-colors"
                    aria-hidden="true"
                  />
                </span>
                <span className="font-semibold text-foreground/80 text-sm leading-tight">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-400 rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm p-6 lg:p-8 overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Compatible ecosystem &amp; modern tooling
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Slide through commonly used commerce &amp; operations stacks.
              </p>
            </div>
            <p className="text-xs text-muted-foreground sm:text-right">
              Auto-plays. Use arrows to control.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false, dragFree: true }}
            className="px-10 sm:px-12"
          >
            <CarouselContent className="-ml-3">
              {clientBadges.map(({ name }) => (
                <CarouselItem
                  key={name}
                  className="basis-1/2 sm:basis-1/3 lg:basis-1/5 pl-3"
                >
                  <div className="h-full">
                    <div className="h-14 rounded-2xl border border-border/70 bg-background/70 px-4 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all hover:border-violet-500/30">
                      <span className="opacity-90" style={{ color: brandHex(name) ?? "currentColor" }}>
                        <BrandIcon name={name} className="size-5" />
                      </span>
                      <span className="font-bold text-foreground/60 tracking-tight">
                        {name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 sm:-left-3 bg-background/80 backdrop-blur-sm border-border/80 hover:bg-violet-500/10" />
            <CarouselNext className="-right-2 sm:-right-3 bg-background/80 backdrop-blur-sm border-border/80 hover:bg-violet-500/10" />
          </Carousel>

          <p className="text-xs text-muted-foreground mt-5 text-center">
            Names shown for ecosystem familiarity (not endorsements).
          </p>
        </div>
      </div>
    </section>
  )
}

