import { homeVersions } from "@/constants/seo";
import type { MetadataRoute } from "next";

const locales = ["sr", "en"] as const;
const baseUrl = "https://domnatura.com";
const baseWithLocales = locales.map((local) => [baseUrl, local].join("/"));

const homePageVersioned: MetadataRoute.Sitemap = [
  ...baseWithLocales,
  ...homeVersions.flatMap((version) =>
    baseWithLocales.map((base) => [base, version].join("/"))
  ),
].map((url) => ({
  url,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 1,
}));

const unversionedPages: MetadataRoute.Sitemap = [
  { url: "about" },
  { url: "faq" },
  { url: "services" },
  { url: "protocol" },
  { url: "personal-card" },
].flatMap(({ url }) =>
  baseWithLocales.flatMap((baseUrl) => ({
    url: [baseUrl, url].join("/"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }))
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...homePageVersioned, ...unversionedPages];
}
