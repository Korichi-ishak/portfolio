import Link from "next/link";

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

export default function SiteNav() {
  return (
    <header className="site-nav">
      <nav aria-label="Main navigation" className="site-nav__inner">
        <Link href="/" className="site-nav__brand">
          <span className="site-nav__logo">IK</span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Ishak Korichi</span>
            <span style={{ ...mono, fontSize: 11, color: "#6B6A64" }}>portfolio_2026</span>
          </span>
        </Link>
        <div className="site-nav__links">
          <Link href="/#work">Work</Link>
          <Link href="/work">All projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#cv">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <a href="mailto:ishakkorichi09@gmail.com" className="site-nav__cta">
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3DDC84" }} />
          Available
        </a>
      </nav>
    </header>
  );
}
