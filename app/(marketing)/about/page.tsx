import type { Metadata } from "next"
import { AboutContent } from "@/components/marketing/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ClickMasters builds custom software and powers ClickMasters POS — point-of-sale for retail, restaurants, and more.",
}

export default function AboutPage() {
  return <AboutContent />
}
