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

        <section id="journey" className="journey" aria-labelledby="journey-title">
          <div className="journey__head">
            <div>
              <p className="kicker">02 — journey</p>
              <h2 id="journey-title" className="section-title">
                From Annaba to Paris, <span className="muted">one node at a time.</span>
              </h2>
            </div>
            <p className="journey__lead">
              Studies, jobs and freelance work, in the order they started. Each step links to the projects it produced — every project has its own page.
            </p>
          </div>
          <Workflow />
          <div className="journey__end">
            <Link href="/work" className="btn btn--dark">
              See all {projects.length} projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>

        <Toolbox />
      </main>
      <SiteFooter />
    </>
  );
}
