import type { MetadataRoute } from "next"
import { CLICKMASTERS_SITE_URL } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const paths = ["", "/about", "/contact"]
  return paths.map((path) => ({
    url: `${CLICKMASTERS_SITE_URL}${path === "" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }))
}
