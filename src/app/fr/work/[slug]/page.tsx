import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { dict } from "@/i18n";
import { pageMeta } from "@/lib/seo";
import ProjectView from "@/views/ProjectView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta("fr", `/work/${slug}`, dict.fr.meta.caseTitle(p.name), p.lead);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectView slug={slug} lang="fr" />;
}
