import type { Metadata } from "next"
import { Testimonials } from "@/components/marketing/testimonials"

export const metadata: Metadata = {
  title: "Testimonials | ClickMasters POS",
  description:
    "Customer stories and outcomes from teams using ClickMasters POS for faster checkout, inventory control, and reporting.",
}

export default function TestimonialsPage() {
  return <Testimonials />
}

