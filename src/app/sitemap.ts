import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { routes, type RouteKey } from "@/lib/i18n/paths";

const routeKeys: RouteKey[] = ["home", "menu", "about", "gallery", "reservation", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://layalialnoor.ae";

  return routeKeys.map((key) => {
    const segment = routes[key];
    return {
      url: `${siteUrl}/en${segment ? `/${segment}` : ""}`,
      lastModified: new Date(),
      changeFrequency: key === "home" ? "weekly" : "monthly",
      priority: key === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [locale, `${siteUrl}/${locale}${segment ? `/${segment}` : ""}`])
        ),
      },
    };
  });
}
