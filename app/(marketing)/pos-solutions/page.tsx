import type { Metadata } from "next"
import { POSSystems } from "@/components/marketing/pos-systems"

export const metadata: Metadata = {
  title: "POS solutions by industry | ClickMasters POS",
  description:
    "Browse all POS solutions by industry. Search by business type, filter by vertical, and find the POS setup that matches how you sell.",
}

export default function PosSolutionsPage() {
  return <POSSystems />
}

