import type { MetadataRoute } from "next";
import { legalLinks, nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legalLinks].map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.6,
  }));
}
