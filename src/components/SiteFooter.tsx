import Link from "next/link";
import { dict, localize, type Lang } from "@/i18n";

/** Shared footer: the last node of the workflow — the next step is the visitor. */
export default function SiteFooter({ lang = "en" }: { lang?: Lang }) {
  const t = dict[lang].footer;
  const L = (p: string) => localize(lang, p);
  return (
    <footer id="contact" className="site-footer" aria-labelledby="footer-title">
      <div className="site-footer__inner">
        <span className="site-footer__cable" aria-hidden="true" />
        <div className="site-footer__node">
          <span className="wf-port wf-port--in" aria-hidden="true" />
          <p className="site-footer__tag">
            <span aria-hidden="true">●</span> {t.tag}
          </p>
          <h2 id="footer-title" className="site-footer__title">
            {t.title}
          </h2>
          <p className="site-footer__lead">{t.lead}</p>
          <div className="site-footer__actions">
            <a href="mailto:ishakkorichi09@gmail.com" className="btn btn--light">
              {t.email}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ishak-korichi/" className="btn btn--ghost" rel="me">
              LinkedIn
            </a>
            <a href="https://github.com/Korichi-ishak" className="btn btn--ghost" rel="me">
              GitHub
            </a>
          </div>
          
        </div>

        <div className="site-footer__bottom">
          <nav aria-label={t.nav} className="site-footer__nav">
            <Link href={L("/")}>{t.home}</Link>
            <Link href={L("/work")}>{t.all}</Link>
            <Link href={L("/work/fds")}>FDS Institut</Link>
            <Link href={L("/work/tasshila")}>Tasshila</Link>
          </nav>
          <p className="site-footer__copy">
            © 2026 Ishak Korichi · <a href="#top">{t.top}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
