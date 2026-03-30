"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/marketing/brand-logo"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#solution", label: "POS" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <div className="flex items-center gap-8 lg:gap-10">
          <BrandLogo />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            size="sm"
            asChild
            className="rounded-full px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 font-medium shadow-lg shadow-violet-500/20"
          >
            <Link href="/#pricing">Get started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-foreground py-3 text-base font-medium border-b border-border/60 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
          >
            <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)}>
              Get started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
