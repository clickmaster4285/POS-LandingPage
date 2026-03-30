import type { MetadataRoute } from "next"
import { CLICKMASTERS_SITE_URL } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const paths = [
    "",
    "/about",
    "/case-studies",
    "/case-studies/retail-pos-system-inventory-multi-store",
    "/case-studies/restaurant-pos-system-kitchen-orders-payments",
    "/case-studies/pharmacy-pos-system-compliance-stock-control",
    "/blog",
    "/blog/cloud-pos-software-guide",
    "/blog/retail-pos-system-inventory-management",
    "/blog/restaurant-pos-system-ordering-payments-reporting",
    "/testimonials",
    "/pos-solutions",
    "/contact",
  ]
  return paths.map((path) => ({
    url: `${CLICKMASTERS_SITE_URL}${path === "" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/contact"
          ? 0.85
          : path === "/blog" || path === "/case-studies"
            ? 0.8
            : 0.7,
  }))
}
