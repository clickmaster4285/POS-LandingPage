import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { BLOG_POSTS } from "@/lib/blog-posts-data"

export const metadata: Metadata = {
  title: "Blog | ClickMasters POS",
  description:
    "Guides on cloud POS, payments, inventory, reporting, and choosing the right point-of-sale system.",
}

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
          Blog
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mb-4">
          POS tips, playbooks, and buyer guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Short, practical posts about point of sale software—setup, rollout,
          payments, inventory, and reporting.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {BLOG_POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-3xl border border-border bg-card/60 p-7 hover:bg-card hover:shadow-xl hover:shadow-accent/10 transition-all"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Keyword: {p.primaryKeyword}
            </p>
            <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-600 transition-colors">
              {p.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            <div className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-400">
              Read post →
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-border bg-card/60 p-8 lg:p-10">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Need a tailored recommendation?
        </h2>
        <p className="text-muted-foreground mb-6">
          Tell us your industry and workflow and we’ll map the right POS setup for checkout, payments,
          inventory, and reporting.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
          >
            <Link href="/contact">Talk to an expert</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/pos-solutions">Browse POS solutions</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

