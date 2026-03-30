"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Send } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CLICKMASTERS_SOFTWARE_URL, COMPANY } from "@/lib/site-config"

type FieldErrors = Partial<
  Record<"name" | "email" | "message" | "budget" | "phone" | "company", string>
>

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000–$5,000",
  "$5,000–$15,000",
  "$15,000–$50,000",
  "$50,000+",
  "Not sure yet",
] as const

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [budget, setBudget] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("") // honeypot (should stay empty)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    const n = name.trim()
    const e = email.trim()
    const m = message.trim()

    if (n.length < 2) next.name = "Please enter your full name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) next.email = "Please enter a valid email."
    if (m.length < 10) next.message = "Please share at least a few details (10+ characters)."
    return next
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitted(false)
    const nextFieldErrors = validate()
    setFieldErrors(nextFieldErrors)
    if (Object.keys(nextFieldErrors).length > 0) return
    setSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, phone, budget, message, website }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const msg =
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong. Please try again or use WhatsApp below."
        throw new Error(msg)
      }

      setSubmitted(true)
      setName("")
      setEmail("")
      setCompany("")
      setPhone("")
      setBudget("")
      setMessage("")
      setWebsite("")
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitted && !error ? (
        <Alert className="border-emerald-500/30 bg-emerald-500/5">
          <CheckCircle2 className="text-emerald-600" />
          <AlertTitle>Message sent</AlertTitle>
          <AlertDescription>
            Thanks — we&apos;ll reply within one business day. If it&apos;s urgent, use WhatsApp
            below.
          </AlertDescription>
        </Alert>
      ) : null}

      {error ? (
        <Alert variant="destructive" className="bg-destructive/5">
          <AlertCircle />
          <AlertTitle>Couldn&apos;t send your message</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          aria-invalid={fieldErrors.name ? true : undefined}
        />
        {fieldErrors.name ? (
          <p className="text-xs text-destructive">{fieldErrors.name}</p>
        ) : null}
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
          aria-invalid={fieldErrors.email ? true : undefined}
        />
        {fieldErrors.email ? (
          <p className="text-xs text-destructive">{fieldErrors.email}</p>
        ) : (
          <p className="text-xs text-muted-foreground">We&apos;ll never share your email.</p>
        )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
        <Label htmlFor="contact-company">Company (optional)</Label>
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
        />
        </div>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="contact-website">Website</Label>
        <Input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Leave this empty"
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-budget">Estimated budget (optional)</Label>
        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger id="contact-budget" className="w-full rounded-xl">
            <SelectValue placeholder="Select a range" />
          </SelectTrigger>
          <SelectContent>
            {BUDGET_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          This helps us suggest the best approach (MVP vs. full rollout).
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">What would you like to build?</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your POS or software project…"
          aria-invalid={fieldErrors.message ? true : undefined}
          className="rounded-xl"
        />
        {fieldErrors.message ? (
          <p className="text-xs text-destructive">{fieldErrors.message}</p>
        ) : (
          <p className="text-xs text-muted-foreground">
            Include your industry, number of outlets, and must-have features.
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/20 disabled:opacity-60"
      >
        <Send className="size-4" />
        {submitting ? "Sending..." : "Send message"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Prefer WhatsApp or the full form?{" "}
        <a
          href={`https://wa.me/${COMPANY.phoneE164}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 dark:text-violet-400 font-medium underline-offset-4 hover:underline"
        >
          Open WhatsApp chat
        </a>{" "}
        or{" "}
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
