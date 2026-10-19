"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { dict, langFromPath, langs, localize, switchPath } from "@/i18n";

/*
  Header in the language of the hero: a Figma-like toolbar.
  The name sits in a selection frame, the breadcrumb shows where you are,
  the pages are tool tabs and "Let's talk" is the blue Share button.
*/

const tabs = [
  { key: "home", href: "/", icon: "M4 11l8-7 8 7v9h-5v-6h-6v6H4z", match: (p: string) => p === "/" },
  { key: "path", href: "/#path", icon: "M6 4v16 M18 4v16 M6 9h12 M6 15h12", match: () => false },
  { key: "projects", href: "/work", icon: "M4 5h7v6H4z M13 5h7v6h-7z M4 13h7v6H4z M13 13h7v6h-7z", match: (p: string) => p.startsWith("/work") },
] as const;

/** "/fr/work/fds" → ["portfolio", "projets", "fds"] */
function crumb(bare: string, words: { home: string; projects: string }) {
  if (bare === "/") return ["portfolio", words.home];
  const parts = bare.split("/").filter(Boolean);
  if (parts[0] === "work") return parts[1] ? ["portfolio", words.projects, parts[1]] : ["portfolio", words.projects];
  return ["portfolio", ...parts];
}

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const bare = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
  const t = dict[lang];
  const [open, setOpen] = useState(false);
  const path = crumb(bare, t.nav.crumbs);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="tb">
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <div className="tb__bar" data-open={open}>
        <Link href={localize(lang, "/")} className="tb__frame" aria-label={`Ishak Korichi — ${t.nav.home}`}>
          <span className="tb__frame-name">Ishak Korichi</span>
          <span className="tb__h tb__h--tl" aria-hidden="true" />
          <span className="tb__h tb__h--tr" aria-hidden="true" />
          <span className="tb__h tb__h--bl" aria-hidden="true" />
          <span className="tb__h tb__h--br" aria-hidden="true" />
        </Link>

        <p className="tb__crumb" aria-label={t.nav.here}>
          {path.map((c, i) => (
            <span key={i} className={i === path.length - 1 ? "tb__crumb-now" : undefined}>
              {i > 0 && <span aria-hidden="true"> / </span>}
              {c}
            </span>
          ))}
        </p>

        <button type="button" className="tb__toggle" aria-expanded={open} aria-controls="tb-menu" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">{open ? t.nav.close : t.nav.open}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav id="tb-menu" aria-label="Main" className="tb__menu">
          <ul className="tb__tools">
            {tabs.map((tab) => {
              const current = tab.match(bare);
              return (
                <li key={tab.key}>
                  <Link href={localize(lang, tab.href)} className="tb__tool" aria-current={current ? "page" : undefined}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
                      <path d={tab.icon} />
                    </svg>
                    {t.nav[tab.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="tb__lang" aria-label={t.nav.lang}>
            {langs.map((l) => (
              <li key={l}>
                <a
                  href={switchPath(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  className="tb__lang-link"
                  aria-current={l === lang ? "true" : undefined}
                >
                  <span aria-hidden="true">{l.toUpperCase()}</span>
                  <span className="sr-only">{l === "en" ? "English" : "Français"}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="tb__share">
            {t.nav.talk}
          </a>
        </nav>
      </div>
    </header>
  );
}
