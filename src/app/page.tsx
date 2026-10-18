import Link from "next/link";
import HomeSections from "@/components/home/HomeSections";
import SiteNav from "@/components/SiteNav";
import { EmbeddedProject, ProjectCard, WorkHeading, otherProjects } from "@/components/work";
import { homeAcademic, homeClient } from "@/data/projects";

export default function Home() {
  const shown = [...homeClient, ...homeAcademic];
  const others = otherProjects(shown);

  const work = (
    <div id="work">
      <section className="work-intro">
        <WorkHeading
          index="02"
          kicker="selected work"
          title="Shipped"
          dim="/work"
          text="Two client projects told from start to finish — the problem, what people said, the structure, the sketches and the shipped product."
        />
      </section>
      {homeClient.map((slug) => (
        <EmbeddedProject key={slug} slug={slug} />
      ))}

      <section className="work-intro work-intro--dark">
        <WorkHeading
          index="03"
          kicker="academic & startup"
          title="Research"
          dim="/thesis"
          text="Projects born at university: a master's thesis in e-health, and apps built under the student startup framework."
        />
      </section>
      {homeAcademic.map((slug) => (
        <EmbeddedProject key={slug} slug={slug} />
      ))}

      <section className="more-work">
        <div className="more-work__inner">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", margin: "0 0 14px", fontSize: 13, color: "#6B6A64" }}>04 — more work</p>
          <h2 className="more-work__title">
            {others.length} more projects, <span style={{ color: "#B9B7AF" }}>each with its own story.</span>
          </h2>
          <div className="project-grid project-grid--teaser">
            {others.slice(0, 4).map((slug) => (
              <ProjectCard key={slug} slug={slug} />
            ))}
          </div>
          <Link href="/work" className="btn-dark">
            See all projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );

  return (
    <>
      <SiteNav />
      <HomeSections work={work} />
    </>
  );
}
