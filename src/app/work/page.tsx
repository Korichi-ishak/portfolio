import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { ProjectCard, WorkHeading } from "@/components/work";
import { academic, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All projects — Ishak Korichi",
  description: "Platforms, back offices, business sites and apps — each project told as a case study.",
};

export default function WorkIndex() {
  const client = projects.map((p) => p.slug).filter((s) => !academic.includes(s));
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1} className="work-index">
        <section className="work-intro">
          <WorkHeading
            index="01"
            kicker="client work"
            title="All"
            dim="/projects"
            level={1}
            text="Platforms, back offices and business sites for clients in Algeria, France, Canada and DR Congo. Each card opens its story."
          />
          <ul className="project-grid">
            {client.map((slug) => (
              <li key={slug}>
                <ProjectCard slug={slug} />
              </li>
            ))}
          </ul>
        </section>
        <section className="work-intro">
          <WorkHeading
            index="02"
            kicker="academic & startup"
            title="Research"
            dim="/university"
            text="A master's thesis in e-health and the apps built under the student startup framework."
          />
          <ul className="project-grid">
            {academic.map((slug) => (
              <li key={slug}>
                <ProjectCard slug={slug} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
