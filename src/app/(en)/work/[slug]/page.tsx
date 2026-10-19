import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { dict } from "@/i18n";
import ProjectView from "@/views/ProjectView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: dict.en.meta.caseTitle(p.name),
    description: p.lead,
    alternates: { languages: { en: `/work/${slug}`, fr: `/fr/work/${slug}` } },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectView slug={slug} lang="en" />;
}
