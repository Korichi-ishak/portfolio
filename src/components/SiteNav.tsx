"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/#path", label: "Path", match: () => false },
  { href: "/work", label: "Projects", match: (p: string) => p.startsWith("/work") },
];

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // close the mobile menu on navigation and with Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-nav">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-nav__bar" data-open={open}>
        <Link href="/" className="site-nav__brand" aria-label="Ishak Korichi, full-stack developer — home">
          <span className="site-nav__logo" aria-hidden="true">
            IK
          </span>
          <span className="site-nav__id" aria-hidden="true">
            <span className="site-nav__name">Ishak Korichi</span>
            <span className="site-nav__role">Full-stack developer</span>
          </span>
        </Link>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav id="site-menu" aria-label="Main" className="site-nav__menu">
          <ul>
            {links.map((l) => {
              const current = l.match(pathname);
              return (
                <li key={l.href}>
                  <Link href={l.href} aria-current={current ? "page" : undefined} className="site-nav__link">
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href="#contact" className="site-nav__cta">
            <span className="site-nav__pulse" aria-hidden="true" />
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
