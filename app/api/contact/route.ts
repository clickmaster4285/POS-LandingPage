import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email"

const RATE = {
  windowMs: 60_000,
  max: 8,
} as const

type Counter = { n: number; ts: number }
const counters = new Map<string, Counter>()

function ipFromRequest(request: Request): string {
  const xff = request.headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  return request.headers.get("x-real-ip") || "unknown"
}

function rateLimit(key: string): boolean {
  const now = Date.now()
  const cur = counters.get(key)
  if (!cur || now - cur.ts > RATE.windowMs) {
    counters.set(key, { n: 1, ts: now })
    return true
  }
  if (cur.n >= RATE.max) return false
  cur.n += 1
  return true
}

export async function POST(request: Request) {
  try {
    const ip = ipFromRequest(request)
    if (!rateLimit(ip)) {
      return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 })
    }

    const body = await request.json().catch(() => ({}))

    const { name, email, company, phone, budget, message, website } = body ?? {}

    // honeypot: bots often fill hidden fields
    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    await sendContactEmail({
      name: String(name),
      email: String(email),
      company: company ? String(company) : undefined,
      phone: phone ? String(phone) : undefined,
      budget: budget ? String(budget) : undefined,
      message: String(message),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("contact email error", error)
    const message = error instanceof Error ? error.message : "Failed to send email"

    // Don't leak low-level details in production, but provide actionable configuration hints.
    // (Most failures here are SMTP misconfiguration or Gmail auth/app-password issues.)
    const safeHint =
      message.includes("SMTP environment variables are not fully configured")
        ? "SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL to your .env.local and restart the dev server."
        : message.toLowerCase().includes("auth") || message.toLowerCase().includes("authentication")
          ? "SMTP authentication failed. For Gmail, use an App Password (not your normal password) and ensure the FROM email matches the authenticated user."
          : "Failed to send email"
    return NextResponse.json(
      { ok: false, error: safeHint },
      { status: 500 }
    )
  }
}

