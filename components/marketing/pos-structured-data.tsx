import { POS_DEFAULT_DESCRIPTION, POS_SITE_NAME } from "@/lib/pos-seo"
import { POS_FAQ_ITEMS } from "@/lib/pos-faq-data"
import { CLICKMASTERS_SITE_URL } from "@/lib/site-config"

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClickMasters",
  url: CLICKMASTERS_SITE_URL,
  logo: `${CLICKMASTERS_SITE_URL}/clickmasters-logo.png`,
}

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: POS_SITE_NAME,
  url: CLICKMASTERS_SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description: POS_DEFAULT_DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial / Get Free Consultation",
  },
  featureList: [
    "Point of sale checkout",
    "Payment processing",
    "Inventory management",
    "Multi-location reporting",
    "Industry-specific POS templates",
    "Cloud synchronization",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: POS_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export function PosLandingStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
