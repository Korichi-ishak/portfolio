import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectStory from "@/components/ProjectStory";
import SiteNav from "@/components/SiteNav";
import { getProject, nextProject, projectNumber, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.name} — case study · Ishak Korichi`, description: p.lead };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = nextProject(slug);

  return (
    <>
      <SiteNav />
      <div className="crumbs">
        <Link href="/work">← All projects</Link>
        <span>
          {projectNumber(slug)} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>
      <main>
        <ProjectStory slug={slug} />
      </main>
      <Link href={`/work/${next.slug}`} className="next-project">
        <span>
          <span className="next-project__kicker">next project · {projectNumber(next.slug)}</span>
          <span className="next-project__name">{next.name}</span>
        </span>
        <span className="next-project__arrow" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    </>
  );
}
