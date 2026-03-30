import type { Metadata } from "next"
import { ContactContent } from "@/components/marketing/contact-content"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ClickMasters for POS and software projects — phone, WhatsApp, or our full contact form.",
}

export default function ContactPage() {
  return <ContactContent />
}
