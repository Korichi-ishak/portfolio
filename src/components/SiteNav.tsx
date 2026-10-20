"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { dict, langFromPath, langs, localize, switchPath } from "@/i18n";

/*
  Header in the language of the hero: a light Figma-like toolbar.
  The name sits in a selection frame, the breadcrumb shows where you are,
  the pages are tool tabs and "Let's talk" is the blue Share button.
  On phones the tools move to a dock at the bottom of the screen, under the thumb;
  it slides away while you read down and comes back as soon as you scroll up.
*/

const tabs = [
  { key: "home", href: "/", icon: "M4 11l8-7 8 7v9h-5v-6h-6v6H4z", match: (p: string) => p === "/" },
  { key: "path", href: "/#path", icon: "M6 4v16 M18 4v16 M6 9h12 M6 15h12", match: () => false },
  { key: "projects", href: "/work", icon: "M4 5h7v6H4z M13 5h7v6h-7z M4 13h7v6H4z M13 13h7v6h-7z", match: (p: string) => p.startsWith("/work") },
] as const;
const TALK = "M4 5h16v11H9l-5 4z";

function Icon({ d, size = 16 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

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
  const path = crumb(bare, t.nav.crumbs);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    last.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > last.current + 12 && y > 240) setHidden(true);
      else if (y < last.current - 6 || y < 240) setHidden(false);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="tb">
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <div className="tb__bar">
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

        <nav aria-label="Main" className="tb__nav">
          <ul className="tb__tools">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <Link href={localize(lang, tab.href)} className="tb__tool" aria-current={tab.match(bare) ? "page" : undefined}>
                  <Icon d={tab.icon} />
                  {t.nav[tab.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="tb__lang" aria-label={t.nav.lang}>
          {langs.map((l) => (
            <li key={l}>
              <a href={switchPath(pathname, l)} hrefLang={l} lang={l} className="tb__lang-link" aria-current={l === lang ? "true" : undefined}>
                <span aria-hidden="true">{l.toUpperCase()}</span>
                <span className="sr-only">{l === "en" ? "English" : "Français"}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="tb__share">
          {t.nav.talk}
        </a>
      </div>

      <nav aria-label="Main" className="dock" data-hidden={hidden}>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.key}>
              <Link href={localize(lang, tab.href)} aria-current={tab.match(bare) ? "page" : undefined}>
                <Icon d={tab.icon} size={20} />
                {t.nav[tab.key]}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="dock__talk">
              <Icon d={TALK} size={20} />
              {t.nav.talk}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
