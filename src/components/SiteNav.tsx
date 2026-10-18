import Link from "next/link";

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

export default function SiteNav() {
  return (
    <header className="site-nav">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="site-nav__inner">
        <Link href="/" className="site-nav__brand" aria-label="Ishak Korichi — home">
          <span className="site-nav__logo" aria-hidden="true">IK</span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Ishak Korichi</span>
            <span style={{ ...mono, fontSize: 11, color: "#6B6A64" }}>portfolio_2026</span>
          </span>
        </Link>
        <div className="site-nav__links">
          <Link href="/#journey">Journey</Link>
          <Link href="/work">Projects</Link>
          <Link href="/#about">About</Link>
          <a href="#contact">Contact</a>
        </div>
        <a href="mailto:ishakkorichi09@gmail.com" className="site-nav__cta">
          <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "#3DDC84" }} />
          Available for work
        </a>
      </nav>
    </header>
  );
}
