import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts-data"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | ClickMasters POS`,
    description: post.description,
    keywords: [
      post.primaryKeyword,
      "point of sale software",
      "cloud POS",
      "inventory management",
      "payment processing",
      "POS reporting",
    ],
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
          Blog post · Keyword: {post.primaryKeyword}
        </p>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-balance mb-4">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-sm">
          {post.date} · {post.readTime}
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-5">
          {post.description}
        </p>
      </header>

      <article className="space-y-10">
        {post.sections.map((s) => (
          <section key={s.heading} className="rounded-3xl border border-border bg-card/60 p-7">
            <h2 className="text-xl font-bold text-foreground mb-3">{s.heading}</h2>
            {s.body ? <p className="text-muted-foreground leading-relaxed">{s.body}</p> : null}
            {s.bullets?.length ? (
              <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>

      <div className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-8">
        <p className="text-lg font-semibold text-foreground mb-2">
          Want a POS recommendation for your industry?
        </p>
        <p className="text-muted-foreground mb-6">
          Tell us your registers, payments, inventory, and reporting needs and we’ll map the best setup.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-2.5 font-semibold"
          >
            Request a demo →
          </Link>
          <Link
            href="/pos-solutions"
            className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 font-semibold text-foreground hover:bg-secondary/60 transition-colors"
          >
            Browse POS solutions →
          </Link>
        </div>
      </div>
    </div>
  )
}

