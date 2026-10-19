import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JourneyStrip from "@/components/journey/JourneyStrip";
import ProjectStory from "@/components/ProjectStory";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { getProject, projectNumber, projects } from "@/data/projects";

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

  return (
    <>
      <SiteNav />
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          <li>
            <Link href="/">Journey</Link>
          </li>
          <li>
            <Link href="/work">Projects</Link>
          </li>
          <li aria-current="page">{p.name}</li>
        </ol>
        <span aria-hidden="true">
          {projectNumber(slug)} / {String(projects.length).padStart(2, "0")}
        </span>
      </nav>
      <main id="main" tabIndex={-1}>
        <ProjectStory slug={slug} />
        <JourneyStrip slug={slug} />
      </main>
      <SiteFooter />
    </>
  );
}
