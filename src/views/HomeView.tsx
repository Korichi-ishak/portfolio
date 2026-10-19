import Link from "next/link";
import HomeIntro from "@/components/home/HomeIntro";
import Toolbox from "@/components/journey/Toolbox";
import Workflow from "@/components/journey/Workflow";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { projects } from "@/data/projects";
import { dict, localize, type Lang } from "@/i18n";

export default function HomeView({ lang }: { lang: Lang }) {
  const t = dict[lang].path;
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1}>
        <HomeIntro lang={lang} />
        <Toolbox lang={lang} />

        <section id="path" className="journey" aria-labelledby="path-title">
          <div className="journey__head">
            <div>
              <p className="kicker">{t.kicker}</p>
              <h2 id="path-title" className="section-title">
                {t.title} <span className="muted">{t.dim}</span>
              </h2>
            </div>
            <div className="journey__aside">
              <p className="journey__lead">{t.lead}</p>
              <Link href={localize(lang, "/work")} className="btn btn--ghost-dark">
                {t.all(projects.length)}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <Workflow lang={lang} />
        </section>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
