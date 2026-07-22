import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/prestations",
    "/galerie",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/prestations" || route === "/contact" ? 0.9 : 0.6,
  }));
}
