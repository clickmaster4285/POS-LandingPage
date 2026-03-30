import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies-data"

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | ClickMasters POS`,
    description: cs.metaDescription,
    keywords: [
      cs.primaryKeyword,
      "cloud POS",
      "point of sale software",
      "inventory management POS",
      "POS reporting",
      "multi-location POS",
    ],
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/case-studies" className="hover:text-foreground">
              Case studies
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground font-medium">{cs.industry}</li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
          Case study · {cs.industry}
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mb-4">
          {cs.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{cs.summary}</p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {cs.highlights.map((h) => (
          <div
            key={h}
            className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-foreground">{h}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-card/60 p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">Implementation notes</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
          <p>
            This case study is written in an anonymized format to focus on the
            operational problems and keyword-aligned workflows buyers search for:
            <strong> {cs.primaryKeyword}</strong>, cloud POS, inventory control, and
            reporting discipline.
          </p>
          <ul>
            <li>
              <strong>Discovery</strong>: map checkout flow, catalog structure, and user roles
              (cashier, manager, admin) before configuration.
            </li>
            <li>
              <strong>Data setup</strong>: align products, variants, pricing, and inventory rules
              so reporting matches how the business measures performance.
            </li>
            <li>
              <strong>Rollout</strong>: train staff with real scenarios and validate end-of-day
              totals and exception handling.
            </li>
          </ul>
          <p>
            Want a tailored walkthrough for your industry? We’ll recommend a POS setup based
            on registers, payments, inventory, and reporting needs.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
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

