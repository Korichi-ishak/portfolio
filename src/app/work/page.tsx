import type { Metadata } from "next";
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
      <main className="work-index">
        <section className="work-intro">
          <WorkHeading
            index="01"
            kicker="client work"
            title="All"
            dim="/projects"
            text="Platforms, back offices and business sites for clients in Algeria, France, Canada and DR Congo. Each card opens its story."
          />
          <div className="project-grid">
            {client.map((slug) => (
              <ProjectCard key={slug} slug={slug} />
            ))}
          </div>
        </section>
        <section className="work-intro">
          <WorkHeading
            index="02"
            kicker="academic & startup"
            title="Research"
            dim="/university"
            text="A master's thesis in e-health and the apps built under the student startup framework."
          />
          <div className="project-grid">
            {academic.map((slug) => (
              <ProjectCard key={slug} slug={slug} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
