import Link from "next/link";
import { academic, cards, getProject, img, projectNumber, whatFr } from "@/data/projects";
import { dict, localize, type Lang } from "@/i18n";

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

/** Section header in the home page's figma-like language. */
export function WorkHeading({ index, kicker, title, dim, text, level = 2 }: { index: string; kicker: string; title: string; dim: string; text: string; level?: 1 | 2 }) {
  const H = level === 1 ? "h1" : "h2";
  return (
    <div className="work-heading">
      <div>
        <p style={{ ...mono, margin: "0 0 14px", fontSize: 13, color: "#6B6A64" }}>
          {index ? `${index} — ` : ""}
          {kicker}
        </p>
        <H style={{ margin: 0, fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.98, fontWeight: 700, letterSpacing: "-0.045em" }}>
          {title} <span style={{ color: "#8E8C84" }}>{dim}</span>
        </H>
      </div>
      <p style={{ margin: 0, maxWidth: 380, fontSize: 16, lineHeight: 1.5, color: "#4A4943" }}>{text}</p>
    </div>
  );
}

/** A project as a node of the workflow: header, screenshot, name, stack, ports on each side. */
export function ProjectCard({ slug, lang = "en" }: { slug: string; lang?: Lang }) {
  const p = getProject(slug)!;
  const t = dict[lang].work;
  const card = cards[slug];
  const kind = academic.includes(slug) ? "academic" : "client";
  const thumb = p.d1 || p.boards?.[0]?.[0] || "";
  return (
    <article className="pnode" data-kind={kind}>
      <span className="pnode__port pnode__port--in" aria-hidden="true" />
      <header className="pnode__head">
        <span className="pnode__badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
            <path d={kind === "academic" ? "M2 9l10-5 10 5-10 5-10-5z M6 11v5c3 2 9 2 12 0v-5" : "M4 8h16v11H4z M9 8V5h6v3"} />
          </svg>
          {kind === "academic" ? t.academic : t.client}
        </span>
        <span className="pnode__year">{card?.year}</span>
        <span className="pnode__num" aria-hidden="true">
          {projectNumber(slug)}
        </span>
      </header>
      <div className="pnode__shot" style={{ background: card?.bg }}>
        {thumb ? (
          <img src={img(thumb)} alt="" loading="lazy" />
        ) : (
          <div className="pnode__fallback" aria-hidden="true">
            <span style={{ ...mono, fontSize: 11, color: "#9ED9D0" }}>photo → OCR → values</span>
            <span style={{ fontSize: 22, fontWeight: 600, marginTop: 6 }}>{lang === "fr" ? "Des analyses lues depuis une photo" : "Lab results, read from a photo"}</span>
          </div>
        )}
      </div>
      <div className="pnode__body">
        <h3 className="pnode__name">
          <Link href={localize(lang, `/work/${slug}`)} className="pnode__link">
            {p.name}
          </Link>
        </h3>
        <p className="pnode__what">{lang === "fr" ? whatFr[slug] : card?.what}</p>
        <p className="pnode__stack">{p.stack.slice(0, 3).join(" · ")}</p>
        <span className="pnode__cta" aria-hidden="true">
          {t.read}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
      <span className="pnode__port pnode__port--out" aria-hidden="true" />
    </article>
  );
}
