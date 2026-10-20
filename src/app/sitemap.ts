import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { localize } from "@/i18n";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/work", ...projects.map((p) => `/work/${p.slug}`)];
  return paths.flatMap((path) =>
    (["en", "fr"] as const).map((lang) => ({
      url: SITE_URL + (localize(lang, path) === "/" ? "" : localize(lang, path)),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/work" ? 0.8 : 0.6,
      alternates: { languages: { en: SITE_URL + (path === "/" ? "" : path), fr: SITE_URL + localize("fr", path) } },
    })),
  );
}
