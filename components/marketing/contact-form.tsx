"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CLICKMASTERS_SOFTWARE_URL, COMPANY } from "@/lib/site-config"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [budget, setBudget] = useState("")
  const [message, setMessage] = useState("")

  function openWhatsApp(e: React.FormEvent) {
    e.preventDefault()
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n")
    const url = `https://wa.me/${COMPANY.phoneE164}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={openWhatsApp} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Full name</Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Work email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">Phone (optional)</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={COMPANY.phoneDisplay}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-budget">Estimated budget (optional)</Label>
        <Input
          id="contact-budget"
          name="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="e.g. project range"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">What would you like to build?</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your POS or software project…"
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/20"
      >
        <Send className="size-4" />
        Send via WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Prefer the full form?{" "}
        <a
          href={`${CLICKMASTERS_SOFTWARE_URL}/contact-us`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 dark:text-violet-400 font-medium underline-offset-4 hover:underline"
        >
          Open contact page on software.clickmasters.pk
        </a>{" "}
        — we typically respond within one business day.
      </p>
    </form>
  )
}
