import Link from "next/link"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/marketing/contact-form"
import {
  CLICKMASTERS_SOFTWARE_URL,
  COMPANY,
  companyAddressLines,
} from "@/lib/site-config"

export function ContactContent() {
  const lines = companyAddressLines()
  const telHref = `tel:+${COMPANY.phoneE164}`

  return (
    <div className="text-foreground">
      <section className="border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
            Contact
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance max-w-3xl mb-4">
            Get a free consultation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Start your project with ClickMasters. Share your requirements for POS, retail
            software, or custom development — we&apos;ll help you plan the next step.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(300px,420px)] gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                ClickMasters office
              </h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="size-5 shrink-0 text-violet-600 dark:text-violet-400" />
                  <span>
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="size-5 shrink-0 text-violet-600 dark:text-violet-400" />
                  <a
                    href={telHref}
                    className="text-foreground font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-5 shrink-0 text-violet-600 dark:text-violet-400" />
                  <span>{COMPANY.hours}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Full quote &amp; project form
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Submit details on our main software site for a no-obligation quote — same
                team, dedicated intake workflow.
              </p>
              <Button variant="outline" asChild className="rounded-full">
                <a
                  href={`${CLICKMASTERS_SOFTWARE_URL}/contact-us`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open software.clickmasters.pk
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              <Link href="/#solution" className="text-violet-600 dark:text-violet-400 font-medium underline-offset-4 hover:underline">
                Back to POS &amp; industries
              </Link>
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-lg shadow-violet-500/5">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Quick message
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in the form and we&apos;ll open WhatsApp with your details so you can send
              in one tap.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
