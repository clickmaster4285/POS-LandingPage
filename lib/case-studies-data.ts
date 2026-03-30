export type CaseStudy = {
  slug: string
  title: string
  /** High-intent keyword phrase to reinforce topical focus. */
  primaryKeyword: string
  industry: string
  summary: string
  metaDescription: string
  highlights: readonly string[]
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: "retail-pos-system-inventory-multi-store",
    title: "Retail POS system with inventory & multi-store reporting",
    primaryKeyword: "retail POS system",
    industry: "Retail",
    summary:
      "How a growing retail group standardized checkout, inventory, and multi-location reporting with a cloud POS rollout.",
    metaDescription:
      "Retail POS system case study: inventory management, barcode workflows, and multi-store reporting with a cloud POS rollout for a growing retail group.",
    highlights: [
      "Inventory management POS workflows (barcode, variants, low-stock alerts)",
      "Multi-register checkout with role-based access",
      "Multi-location POS reporting (store-level performance and unified catalog)",
    ],
  },
  {
    slug: "restaurant-pos-system-kitchen-orders-payments",
    title: "Restaurant POS system for faster orders & smoother payments",
    primaryKeyword: "restaurant POS system",
    industry: "Food & Beverage",
    summary:
      "How a restaurant operator streamlined ordering, modifiers, and end-of-day reporting using a modern cloud POS setup.",
    metaDescription:
      "Restaurant POS system case study: faster ordering, modifiers, kitchen-friendly flows, and modern payments with cloud POS reporting.",
    highlights: [
      "Menu modifiers and quick-service ordering flows",
      "Payment-ready checkout (tap, chip, wallets) with fewer errors",
      "Cleaner end-of-day reporting for managers",
    ],
  },
  {
    slug: "pharmacy-pos-system-compliance-stock-control",
    title: "Pharmacy POS system with stock control & audit-friendly reporting",
    primaryKeyword: "pharmacy POS",
    industry: "Healthcare & Medical",
    summary:
      "How a pharmacy improved stock visibility and reporting discipline with POS workflows designed for controlled inventory.",
    metaDescription:
      "Pharmacy POS case study: stock control, audit-friendly reporting, and streamlined checkout using a cloud POS system tailored for pharmacies.",
    highlights: [
      "Stock control and batch/expiry-aware inventory discipline",
      "Audit-friendly reporting patterns and manager visibility",
      "Faster counter checkout with fewer mistakes",
    ],
  },
] as const

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}

