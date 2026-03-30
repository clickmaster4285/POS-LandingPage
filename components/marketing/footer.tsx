"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { BrandLogo } from "@/components/marketing/brand-logo"
import {
  CLICKMASTERS_SITE_URL,
  CLICKMASTERS_SOFTWARE_URL,
} from "@/lib/site-config"

const footerColumns = {
  Product: [
    { label: "POS by industry", href: "/#solution" },
    { label: "Features", href: "/#features" },
    { label: "Pricing & trial", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "clickmasters.pk", href: CLICKMASTERS_SITE_URL, external: true },
    {
      label: "Software & services",
      href: CLICKMASTERS_SOFTWARE_URL,
      external: true,
    },
  ],
} as const

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    footerRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="border-t border-border bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5 reveal">
            <BrandLogo className="mb-4" />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Point-of-sale, inventory, and reporting for retail, restaurants, and specialty
              businesses — from{" "}
              <a
                href={CLICKMASTERS_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 underline-offset-4 hover:underline"
              >
                clickmasters.pk
              </a>
              .
            </p>
          </div>

          {Object.entries(footerColumns).map(([title, links], i) => (
            <div
              key={title}
              className="lg:col-span-3 reveal"
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              <h4 className="font-semibold text-foreground mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const cls =
                    "text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                  if ("external" in link && link.external) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cls}
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={link.href}>
                      <Link href={link.href} className={cls}>
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ClickMasters.{" "}
            <a
              href={CLICKMASTERS_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              clickmasters.pk
            </a>
          </p>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Services operational
          </span>
        </div>
      </div>
    </footer>
  )
}
