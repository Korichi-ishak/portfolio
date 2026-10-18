import Link from "next/link";
import { cards, getProject, img, projectNumber, projects } from "@/data/projects";
import ProjectStory from "./ProjectStory";

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

/** Section header in the home page's figma-like language. */
export function WorkHeading({ index, kicker, title, dim, text }: { index: string; kicker: string; title: string; dim: string; text: string }) {
  return (
    <div className="work-heading">
      <div>
        <p style={{ ...mono, margin: "0 0 14px", fontSize: 13, color: "#6B6A64" }}>
          {index} — {kicker}
        </p>
        <h2 style={{ margin: 0, fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.98, fontWeight: 700, letterSpacing: "-0.045em" }}>
          {title} <span style={{ color: "#B9B7AF" }}>{dim}</span>
        </h2>
      </div>
      <p style={{ margin: 0, maxWidth: 380, fontSize: 16, lineHeight: 1.5, color: "#4A4943" }}>{text}</p>
    </div>
  );
}

/** Slim bar above a project that is shown in full on the home page. */
export function ProjectBand({ slug }: { slug: string }) {
  const p = getProject(slug)!;
  return (
    <div className="project-band" id={`p-${slug}`}>
      <span style={{ ...mono, fontSize: 13, color: "#9C9A92" }}>{projectNumber(slug)}</span>
      <b style={{ fontSize: 18 }}>{p.name}</b>
      <span style={{ fontSize: 14, color: "#CFCDC5" }}>{cards[slug]?.what}</span>
      <Link href={`/work/${slug}`} className="project-band__link">
        Open as a page
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </Link>
    </div>
  );
}

export function EmbeddedProject({ slug }: { slug: string }) {
  return (
    <article aria-label={getProject(slug)?.name}>
      <ProjectBand slug={slug} />
      <ProjectStory slug={slug} />
    </article>
  );
}

export function ProjectCard({ slug }: { slug: string }) {
  const p = getProject(slug)!;
  const card = cards[slug];
  const thumb = p.d1 || p.boards?.[0]?.[0] || "";
  return (
    <Link href={`/work/${slug}`} className="project-card">
      <div className="project-card__thumb" style={{ background: card?.bg }}>
        {thumb ? (
          <img src={img(thumb)} alt={`${p.name} preview`} loading="lazy" />
        ) : (
          <div className="project-card__fallback">
            <span style={{ ...mono, fontSize: 11, color: "#7FB8B0" }}>photo → OCR → values</span>
            <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 6 }}>Lab results, read from a photo</span>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.02em" }}>{projectNumber(slug)}</span>
        <span style={{ fontSize: 18, fontWeight: 600, textAlign: "right" }}>{p.name}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: -8 }}>
        <span style={{ fontSize: 14, color: "#4A4943" }}>{card?.what}</span>
        <span style={{ ...mono, fontSize: 11, color: "#6B6A64", whiteSpace: "nowrap" }}>{card?.year}</span>
      </div>
    </Link>
  );
}

export const otherProjects = (exclude: string[]) => projects.map((p) => p.slug).filter((s) => !exclude.includes(s));
