import Link from "next/link";
import { notFound } from "next/navigation";
import JourneyStrip from "@/components/journey/JourneyStrip";
import ProjectStory from "@/components/ProjectStory";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { getProject, projectNumber, projects } from "@/data/projects";
import { dict, localize, type Lang } from "@/i18n";

export default function ProjectView({ slug, lang }: { slug: string; lang: Lang }) {
  const p = getProject(slug);
  if (!p) notFound();
  const t = dict[lang].project;
  return (
    <>
      <SiteNav />
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          <li>
            <Link href={localize(lang, "/")}>{t.crumbs.home}</Link>
          </li>
          <li>
            <Link href={localize(lang, "/work")}>{t.crumbs.projects}</Link>
          </li>
          <li aria-current="page">{p.name}</li>
        </ol>
        <span aria-hidden="true">
          {projectNumber(slug)} / {String(projects.length).padStart(2, "0")}
        </span>
      </nav>
      <main id="main" tabIndex={-1}>
        {t.onlyEn && (
          <p className="lang-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
            </svg>
            {t.onlyEn}
          </p>
        )}
        {/* the story itself is written in English */}
        <div lang="en">
          <ProjectStory slug={slug} />
        </div>
        <JourneyStrip slug={slug} lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
