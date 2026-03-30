"use client"

import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 bg-background">{children}</main>
      <Footer />
    </>
  )
}
