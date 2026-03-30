"use client"

import { useEffect, useRef } from "react"
import { 
  Zap, 
  Shield, 
  Settings, 
  BarChart3, 
  Cloud, 
  Headphones,
  Smartphone,
  CreditCard
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast checkout & throughput",
    description:
      "Keep lines moving with responsive POS registers—optimized for high-volume retail counters and busy restaurant rushes.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Secure payments (PCI-aware)",
    description:
      "Protect cardholder data with modern encryption and controls aligned with what buyers expect from leading payment-ready POS platforms.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Settings,
    title: "Configurable POS workflows",
    description:
      "Receipts, discounts, roles, and registers tuned per site—similar flexibility to enterprise-grade point-of-sale customization.",
    gradient: "from-violet-400 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Sales & inventory reporting",
    description:
      "Live dashboards for basket size, margins, and stock movement—so managers get POS analytics without exporting spreadsheets.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Cloud,
    title: "Cloud POS & sync",
    description:
      "Multi-register and multi-location data stays aligned in the cloud with backups—tablet POS and back office see the same truth.",
    gradient: "from-sky-400 to-cyan-500"
  },
  {
    icon: Headphones,
    title: "Onboarding & support",
    description:
      "Specialists help you map hardware, payments, and training—mirroring the white-glove rollout buyers want from a POS vendor.",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    icon: Smartphone,
    title: "Tablet & mobile POS (mPOS)",
    description:
      "Sell on the floor, curbside, or events with mobile point-of-sale flows that pair with your fixed terminals.",
    gradient: "from-indigo-400 to-violet-500"
  },
  {
    icon: CreditCard,
    title: "Omnichannel payments",
    description:
      "Cards, tap-to-pay, wallets, and QR in one flow—so your checkout matches contactless and EMV expectations everywhere.",
    gradient: "from-rose-400 to-pink-500"
  }
]

export function Features() {
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

  return (
    <section ref={sectionRef} id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative lavender background panel */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-accent/10 to-transparent rounded-b-[60px]" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl animate-float-slow" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">POS features </span>
            <span className="gradient-text">teams expect</span>
          </h2>
          <p className="reveal delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything in one point-of-sale stack:{" "}
            <span className="text-foreground/90 font-medium">
              payments, inventory, staff, reporting, and cloud sync
            </span>{" "}
            — the same capability pillars top retail and restaurant POS platforms lead with.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal-scale group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-300 card-shine"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-violet-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { value: "50M+", label: "Transactions monthly", gradient: "from-violet-500 to-purple-600" },
            { value: "$2B+", label: "Revenue managed", gradient: "from-fuchsia-500 to-pink-600" },
            { value: "150+", label: "Countries supported", gradient: "from-amber-500 to-orange-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="reveal group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all cursor-pointer"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <p className={`text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
