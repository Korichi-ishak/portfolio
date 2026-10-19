import Link from "next/link";
import HomeIntro from "@/components/home/HomeIntro";
import Toolbox from "@/components/journey/Toolbox";
import Workflow from "@/components/journey/Workflow";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1}>
        <HomeIntro />
        <Toolbox />

        <section id="path" className="journey" aria-labelledby="path-title">
          <div className="journey__head">
            <div>
              <p className="kicker">03 — path</p>
              <h2 id="path-title" className="section-title">
                Education and experience, <span className="muted">side by side.</span>
              </h2>
            </div>
            <div className="journey__aside">
              <p className="journey__lead">
                Read top to bottom. Studies on one rail, work on the other, years in the middle. Each step links to the projects it produced.
              </p>
              <Link href="/work" className="btn btn--ghost-dark">
                All {projects.length} projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <Workflow />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
