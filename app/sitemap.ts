import type { MetadataRoute } from "next";

import { audienceLandingPages, featureLandingPages } from "@/lib/site-content";
import { getBaseUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date("2026-07-02");
  const routes = [
    "",
    "/features",
    ...featureLandingPages.map((page) => `/features/${page.slug}`),
    "/solutions",
    ...audienceLandingPages.map((page) => `/solutions/${page.slug}`),
    "/pricing",
    "/contacts",
    "/privacy"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/features/") || route.startsWith("/solutions/") ? 0.85 : 0.8
  }));
}
