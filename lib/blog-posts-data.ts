export type BlogPost = {
  slug: string
  title: string
  /** Primary keyword phrase to target (high intent). */
  primaryKeyword: string
  description: string
  /** ISO date (kept simple, no CMS). */
  date: string
  readTime: string
  sections: readonly {
    heading: string
    bullets?: readonly string[]
    body?: string
  }[]
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "cloud-pos-software-guide",
    title: "Cloud POS software: buyer guide for retail & restaurants",
    primaryKeyword: "cloud POS software",
    description:
      "A practical guide to choosing cloud POS software: payments, inventory, reporting, offline mode, and rollout for retail and restaurant operations.",
    date: "2026-03-30",
    readTime: "6 min read",
    sections: [
      {
        heading: "What buyers mean by cloud POS software",
        bullets: [
          "Real-time sync across registers and locations",
          "Central catalog, pricing, and user roles",
          "Reporting that updates without manual exports",
        ],
      },
      {
        heading: "Key features to compare",
        bullets: [
          "Payment processing (EMV, contactless, wallets)",
          "Inventory management and stock control",
          "POS reporting (sales, margins, staff performance)",
          "Offline capability and conflict resolution",
        ],
      },
      {
        heading: "Implementation checklist (fast rollout)",
        bullets: [
          "Map your checkout flow (discounts, returns, refunds)",
          "Clean your catalog (variants, barcodes, pricing rules)",
          "Train staff with real scenarios and end-of-day close",
        ],
      },
    ],
  },
  {
    slug: "retail-pos-system-inventory-management",
    title: "Retail POS system with inventory management: what matters most",
    primaryKeyword: "retail POS system",
    description:
      "Retail POS system essentials: barcode workflows, variants, purchase orders, low-stock alerts, and multi-store reporting for inventory accuracy.",
    date: "2026-03-30",
    readTime: "5 min read",
    sections: [
      {
        heading: "Inventory is the difference between POS and a register",
        body:
          "Most retail teams don’t lose money at checkout—they lose it through mismatched stock, missing variants, and unclear receiving. A retail POS system should make inventory predictable.",
      },
      {
        heading: "Inventory features worth prioritizing",
        bullets: [
          "Barcode scanning + fast search",
          "Variants (size/color) and bundles",
          "Stock adjustments with reason codes",
          "Low-stock alerts and reorder points",
        ],
      },
      {
        heading: "Reporting that managers actually use",
        bullets: [
          "Top sellers by margin (not only revenue)",
          "Shrink/adjustment reports with accountability",
          "Multi-location comparison (same catalog, store-level performance)",
        ],
      },
    ],
  },
  {
    slug: "restaurant-pos-system-ordering-payments-reporting",
    title: "Restaurant POS system: faster ordering, payments, and end-of-day reporting",
    primaryKeyword: "restaurant POS system",
    description:
      "Restaurant POS system guide: ordering speed, modifiers, kitchen-friendly flows, modern payments, and clean end-of-day reporting for operators.",
    date: "2026-03-30",
    readTime: "5 min read",
    sections: [
      {
        heading: "Ordering speed is the real KPI",
        bullets: [
          "Menu layout for muscle memory",
          "Modifiers that don’t slow down staff",
          "Fewer taps from order to payment",
        ],
      },
      {
        heading: "Payments and exceptions",
        bullets: [
          "Split bills, refunds, discounts, and voids",
          "Tap/chip wallets and receipt flows",
          "Role-based permissions to prevent leakage",
        ],
      },
      {
        heading: "End-of-day that closes cleanly",
        bullets: [
          "Sales summaries by shift and cashier",
          "Category reporting for menu engineering",
          "Discrepancy tracking and audit trails",
        ],
      },
    ],
  },
] as const

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

