import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Headphones,
  Shield,
  Zap,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Lock,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CLICKMASTERS_SITE_URL, CLICKMASTERS_SOFTWARE_URL } from "@/lib/site-config"

const valueProps = [
  {
    title: "Agile software development",
    description:
      "Sprint-based delivery with full transparency. We ship faster, iterate smarter, and keep you in control at every milestone.",
    icon: Zap,
  },
  {
    title: "Scalable & future-proof architecture",
    description:
      "We engineer solutions on proven stacks — React, Node.js, and cloud-native infrastructure — built to scale without costly rewrites.",
    icon: Boxes,
  },
  {
    title: "Enterprise security & compliance",
    description:
      "Products follow OWASP standards, GDPR best practices, and rigorous QA — so your business and users stay protected.",
    icon: Shield,
  },
  {
    title: "Dedicated support",
    description:
      "We stay with you post-launch — monitoring performance, deploying updates, and resolving issues when you need us.",
    icon: Headphones,
  },
]

const sectors = [
  "Manufacturing",
  "Healthcare",
  "Retail",
  "Real estate",
  "Education",
  "Finance",
  "Logistics",
  "Media",
]

const techGroups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vue",
      "Angular",
      "Redux/Zustand",
      "Accessibility (WCAG)",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Python/Django",
      "FastAPI",
      "Laravel",
      "Go",
      "Java/Spring",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    label: "Mobile",
    items: ["React Native", "Flutter", "Swift/iOS", "Kotlin/Android", "PWA"],
  },
  {
    label: "Data & cloud",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Observability",
    ],
  },
]

const techCards: { label: string; icon: typeof Code2; items: string[] }[] = [
  { label: "Web frontend", icon: Code2, items: techGroups[0]!.items },
  { label: "Backend & APIs", icon: Cpu, items: techGroups[1]!.items },
  { label: "Mobile apps", icon: Smartphone, items: techGroups[2]!.items },
  { label: "Databases & cloud", icon: Cloud, items: techGroups[3]!.items },
  {
    label: "Security & quality",
    icon: Lock,
    items: ["OWASP", "Secure auth", "Testing", "Performance", "Code review", "QA workflows"],
  },
  {
    label: "Data layer",
    icon: Database,
    items: ["Schema design", "Migrations", "Caching", "Reporting", "Analytics-ready events"],
  },
]

export function AboutContent() {
  return (
    <div className="text-foreground">
      <section className="border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-4">
            About ClickMasters
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-balance max-w-3xl">
              Your trusted{" "}
              <span className="gradient-text">software development</span> partner
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-sm lg:text-right lg:border-l lg:border-border lg:pl-6">
              A results-driven{" "}
              <strong className="text-foreground font-semibold">software house</strong>{" "}
              building custom web apps, mobile apps, and enterprise software — including
              point-of-sale and retail solutions under{" "}
              <strong className="text-foreground font-semibold">ClickMasters POS</strong>.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Main site:{" "}
            <a
              href={CLICKMASTERS_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 dark:text-violet-400 font-medium underline-offset-4 hover:underline"
            >
              clickmasters.pk
            </a>
            {" · "}
            Extended software services:{" "}
            <a
              href={CLICKMASTERS_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 dark:text-violet-400 font-medium underline-offset-4 hover:underline"
            >
              software.clickmasters.pk
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-8" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              ClickMasters is a{" "}
              <strong className="text-foreground font-semibold">
                professional software development company
              </strong>{" "}
              with a proven track record delivering custom software across manufacturing,
              healthcare, retail, real estate, and education.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-4">
              Our team works as an extension of your business — translating complex
              requirements into reliable, scalable digital products that perform in the real
              world.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-10">
              As a full-service software house, we cover discovery and UI/UX through backend
              development, QA, cloud deployment, and long-term maintenance — end to end, under
              one roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/20"
              >
                <Link href="/contact">
                  Start your project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <a
                  href={`${CLICKMASTERS_SOFTWARE_URL}/services`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services on main site
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border divide-y divide-border overflow-hidden bg-card shadow-sm">
            {valueProps.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-5 items-start px-6 py-6 hover:bg-secondary/40 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground mb-1.5">{title}</p>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-2">
              Sectors we serve
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Experience across industries
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-2">
              From startups to established enterprises — tailored software for how you
              operate.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="text-sm font-medium px-4 py-2 rounded-full border border-border bg-card text-foreground/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-2">
            Technology stack
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            Modern tools for reliable products
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-2">
            We choose the right technology for your goals — speed to market, stability, and
            long-term maintainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCards.map(({ label, icon: Icon, items }) => (
            <Card
              key={label}
              className="rounded-2xl border-border/80 bg-card/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-3 text-base">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-300 ring-1 ring-violet-500/15">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  {label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-4">
                  {items.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-foreground/90 bg-secondary/60 px-3 py-1.5 rounded-full border border-border/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,white,transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-violet-100 text-xs font-semibold uppercase tracking-wider mb-2">
                Ready to accelerate your business?
              </p>
              <p className="text-white text-2xl lg:text-3xl font-extrabold leading-tight max-w-xl">
                Let&apos;s build your next software product together
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <Button
                asChild
                className="rounded-full bg-white text-violet-700 hover:bg-white/90 font-semibold"
              >
                <Link href="/contact">Get a free consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/50 text-white bg-transparent hover:bg-white/10"
              >
                <a
                  href={CLICKMASTERS_SOFTWARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit ClickMasters
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
