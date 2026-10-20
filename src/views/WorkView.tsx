import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import ProjectTerminal, { type TermProject } from "@/components/terminal/ProjectTerminal";
import { academic, cards, img, isFreelance, projectNumber, projects, whatFr } from "@/data/projects";
import type { Lang } from "@/i18n";

/** /work: one terminal window to browse every project. */
export default function WorkView({ lang }: { lang: Lang }) {
  const items: TermProject[] = projects.map((p) => ({
    slug: p.slug,
    num: projectNumber(p.slug),
    name: p.name,
    what: lang === "fr" ? whatFr[p.slug] : cards[p.slug]?.what ?? "",
    year: isFreelance(p) ? "freelance" : cards[p.slug]?.year ?? "",
    kind: academic.includes(p.slug) ? "academic" : "client",
    stack: p.stack,
    client: p.client,
    role: p.role,
    when: isFreelance(p) ? p.duration : [p.date, p.duration].filter(Boolean).join(" · "),
    lead: p.lead,
    thumb: img(p.d1 || p.boards?.[0]?.[0] || ""),
    url: p.url,
    domain: p.domain,
  }));
  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1} className="work-term">
        <ProjectTerminal lang={lang} items={items} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
