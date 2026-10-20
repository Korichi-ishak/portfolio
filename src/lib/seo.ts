import type { Metadata } from "next";
import { localize, type Lang } from "@/i18n";

/** Public address of the site. Set NEXT_PUBLIC_SITE_URL on the host (e.g. a custom domain); no trailing slash. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://korichi-ishak.vercel.app").replace(/\/$/, "");

export const NAME = "Ishak Korichi";

/** Other ways people type the name: they go in the structured data, never as hidden keyword text. */
export const ALT_NAMES = ["Korichi Ishak", "Isaac Korichi", "Korichi"];

export const SAME_AS = [
  "https://github.com/Korichi-ishak",
  "https://www.linkedin.com/in/ishak-korichi",
  "https://korichi-ishak.github.io",
];

/** Metadata for one page in one language: canonical URL, both language versions, social preview. */
export function pageMeta(lang: Lang, path: string, title: string, description: string): Metadata {
  const en = localize("en", path);
  const fr = localize("fr", path);
  const self = lang === "en" ? en : fr;
  return {
    title,
    description,
    alternates: { canonical: self, languages: { en, fr, "x-default": en } },
    openGraph: {
      type: "website",
      url: self,
      siteName: NAME,
      title,
      description,
      locale: lang === "en" ? "en_US" : "fr_FR",
      alternateLocale: lang === "en" ? "fr_FR" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${NAME} — full-stack developer` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

/** Settings shared by both root layouts. */
export const baseMeta: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // Google Search Console "HTML tag" method: paste only the content="…" value into this variable on the host.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

/** Who the site is about, for search engines (schema.org). */
export function personJsonLd(lang: Lang) {
  const home = SITE_URL + (lang === "en" ? "/" : "/fr");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: NAME,
        givenName: "Ishak",
        familyName: "Korichi",
        alternateName: ALT_NAMES,
        jobTitle: lang === "en" ? "Full-stack developer" : "Développeur full-stack",
        description:
          lang === "en"
            ? "Full-stack developer building software that fits how people work, and that everyone can use."
            : "Développeur full-stack : des logiciels qui collent à la façon dont les gens travaillent, et que tout le monde peut utiliser.",
        url: SITE_URL,
        image: `${SITE_URL}/img/portrait.jpg`,
        sameAs: SAME_AS,
        knowsAbout: ["Full-stack development", "Web accessibility", "Business software", "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Assistive technology"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: NAME,
        alternateName: ALT_NAMES,
        inLanguage: ["en", "fr"],
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        url: home,
        inLanguage: lang,
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
}
