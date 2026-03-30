import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { CASE_STUDIES } from "@/lib/case-studies-data"

export const metadata: Metadata = {
  title: "Case studies | ClickMasters POS",
  description:
    "POS case studies across retail, restaurants, and pharmacies. Explore keyword-focused rollouts: retail POS system, restaurant POS system, and pharmacy POS.",
}

export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
          Case studies
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mb-4">
          Real POS rollouts and results
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Explore anonymized, SEO-aligned implementations that map to high-intent searches
          like <strong className="text-foreground font-semibold">retail POS system</strong>,{" "}
          <strong className="text-foreground font-semibold">restaurant POS system</strong>, and{" "}
          <strong className="text-foreground font-semibold">pharmacy POS</strong>.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {CASE_STUDIES.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group rounded-3xl border border-border bg-card/60 p-7 hover:bg-card hover:shadow-xl hover:shadow-accent/10 transition-all"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {cs.industry} · Keyword: {cs.primaryKeyword}
            </p>
            <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-600 transition-colors">
              {cs.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{cs.summary}</p>
            <div className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-400">
              Read case study →
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-border bg-card/60 p-8 lg:p-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">Want yours featured?</h2>
        <p className="text-muted-foreground mb-6">
          We can publish a permission-based or anonymized version focused on the workflows buyers search for.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
          >
            <Link href="/contact">Request a demo</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/pos-solutions">Browse POS solutions</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

