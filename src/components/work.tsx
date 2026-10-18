import Link from "next/link";
import { cards, getProject, img, projectNumber } from "@/data/projects";

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

/** Section header in the home page's figma-like language. */
export function WorkHeading({ index, kicker, title, dim, text, level = 2 }: { index: string; kicker: string; title: string; dim: string; text: string; level?: 1 | 2 }) {
  const H = level === 1 ? "h1" : "h2";
  return (
    <div className="work-heading">
      <div>
        <p style={{ ...mono, margin: "0 0 14px", fontSize: 13, color: "#6B6A64" }}>
          {index} — {kicker}
        </p>
        <H style={{ margin: 0, fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.98, fontWeight: 700, letterSpacing: "-0.045em" }}>
          {title} <span style={{ color: "#8E8C84" }}>{dim}</span>
        </H>
      </div>
      <p style={{ margin: 0, maxWidth: 380, fontSize: 16, lineHeight: 1.5, color: "#4A4943" }}>{text}</p>
    </div>
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
          <img src={img(thumb)} alt="" loading="lazy" />
        ) : (
          <div className="project-card__fallback">
            <span style={{ ...mono, fontSize: 11, color: "#9ED9D0" }}>photo → OCR → values</span>
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

