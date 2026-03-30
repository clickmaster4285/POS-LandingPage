"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    company: "Klarna",
    quote: "ClickMasters POS transformed our checkout operations. Checkout times dropped by 40%, and our team can focus on what matters most.",
    author: "Sarah Chen",
    role: "Operations Director",
    metric: "40%",
    metricLabel: "faster checkout",
    gradient: "from-rose-100 to-pink-100",
    accentColor: "text-rose-500"
  },
  {
    company: "Harvey.",
    quote: "The clothing store POS handles our seasonal inventory perfectly. The variant tracking and loyalty features are exactly what we needed.",
    author: "Marcus Williams",
    role: "Store Manager",
    metric: "25%",
    metricLabel: "increase in sales",
    gradient: "from-violet-100 to-purple-100",
    accentColor: "text-violet-500"
  },
  {
    company: "Oscar",
    quote: "Table management and kitchen display integration have revolutionized our restaurant. Orders are more accurate and service is faster than ever.",
    author: "Antonio Rivera",
    role: "Owner & Head Chef",
    metric: "98%",
    metricLabel: "order accuracy",
    gradient: "from-amber-100 to-orange-100",
    accentColor: "text-amber-500"
  }
]

const clientLogos = ["Klarna", "Harvey.", "Oscar", "Superhuman", "Salesforce", "Stripe", "Shopify"]

export function Testimonials() {
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
    <section ref={sectionRef} id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c4b5fd]/10 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">POS results </span>
            <span className="gradient-text">in the field</span>
          </h2>
          <p className="reveal delay-100 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stores and restaurants using ClickMasters POS report faster checkout, tighter
            inventory control, and clearer reporting—outcomes buyers compare across point-of-sale
            vendors.
          </p>
        </div>

        {/* Client Logos - Animated scroll */}
        <div className="reveal delay-200 flex items-center justify-center gap-x-12 gap-y-4 mb-16 pb-16 border-b border-border overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="text-foreground/30 hover:text-foreground/60 transition-all font-bold text-xl tracking-tight whitespace-nowrap hover:scale-110 cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`reveal-scale group bg-gradient-to-br ${testimonial.gradient} rounded-3xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className={`absolute top-6 right-6 w-10 h-10 ${testimonial.accentColor} opacity-20 group-hover:opacity-40 transition-opacity`} />

              {/* Company & Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-xl font-bold text-foreground">
                  {testimonial.company}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${testimonial.accentColor} animate-bounce-subtle`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed flex-1 mb-8 text-lg">
                {`"${testimonial.quote}"`}
              </p>

              {/* Metric */}
              <div className="mb-6 pb-6 border-b border-foreground/10">
                <p className={`text-4xl font-bold bg-gradient-to-r ${testimonial.gradient.replace('100', '600')} bg-clip-text text-transparent`}>
                  {testimonial.metric}
                </p>
                <p className="text-sm text-foreground/60 font-medium">{testimonial.metricLabel}</p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
                <button className={`text-sm ${testimonial.accentColor} hover:opacity-80 flex items-center gap-1 transition-all font-semibold group/btn`}>
                  Read story
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
