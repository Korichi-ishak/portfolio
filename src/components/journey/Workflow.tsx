"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Term from "@/components/Term";
import { keyOf, projectEntry, termProps } from "@/data/glossary";
import { academic, cards, getProject, whatFr } from "@/data/projects";
import { rows, textOf, type JourneyItem, type Lane } from "@/data/journey";
import { dict, localize, type Lang } from "@/i18n";

/*
  Two lanes read top to bottom: education on the left, experience on the right,
  years in the middle. The content is an ordered list of years; the rails, the
  moving dots and the merge into the footer are decoration drawn in SVG from the
  card positions, driven by scroll. With reduced motion the rails are shown fully
  drawn and nothing moves.
*/

const LANES: Lane[] = ["education", "experience"];
const ICON: Record<Lane, string> = {
  education: "M2 9l10-5 10 5-10 5-10-5z M6 11v5c3 2 9 2 12 0v-5",
  experience: "M4 8h16v11H4z M9 8V5h6v3",
};

function LaneIcon({ lane }: { lane: Lane }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICON[lane]} />
    </svg>
  );
}

function Card({ n, lang }: { n: JourneyItem; lang: Lang }) {
  const t = dict[lang].path;
  const x = textOf(n, lang);
  return (
    <article className="wf-card" data-lane={n.lane} aria-labelledby={`wf-${n.id}`}>
      <span className="wf-port wf-port--in" aria-hidden="true" />
      <header className="wf-card__head">
        <span className="wf-lane-badge">
          <LaneIcon lane={n.lane} />
          {t.lanes[n.lane].label}
        </span>
        <span className="wf-card__when">{x.when}</span>
        {x.note && <span className="wf-card__note">{x.note}</span>}
      </header>
      <div className="wf-card__body">
        <h3 id={`wf-${n.id}`} className="wf-card__title">
          <Term k={n.id} lang={lang}>{x.title}</Term>
        </h3>
        <p className="wf-card__org">{x.org}</p>
        {x.text && <p className="wf-card__text">{x.text}</p>}
        {n.stack && (
          <p className="wf-card__stack">
            {n.stack.split(" · ").map((s, i) => (
              <span key={s}>
                {i > 0 && " · "}
                <Term k={keyOf(s) ?? ""} lang={lang}>{s}</Term>
              </span>
            ))}
          </p>
        )}
        {n.projects && n.projects.length > 0 && (
          <div className="wf-card__projects">
            <p className="wf-card__projects-label" id={`wf-${n.id}-p`}>
              {n.projects.length > 1 ? t.projectsFrom(n.projects.length) : t.readCase}
            </p>
            <ul aria-labelledby={`wf-${n.id}-p`}>
              {n.projects.map((slug) => {
                const p = getProject(slug);
                if (!p) return null;
                return (
                  <li key={slug}>
                    <Link href={localize(lang, `/work/${slug}`)} className="wf-chip" data-tt-w={p.name} {...termProps(projectEntry(lang, (lang === "fr" ? whatFr[slug] : cards[slug]?.what) ?? "", p.stack, academic.includes(slug)), false)}>
                      {p.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <span className="wf-port wf-port--out" aria-hidden="true" />
    </article>
  );
}

type Rail = { base: SVGPathElement; live: SVGPathElement; dot: SVGGElement; cards: HTMLElement[]; total: number; stops: number[] };

export default function Workflow({ lang = "en" }: { lang?: Lang }) {
  const t = dict[lang].path;
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const q = <T extends Element>(s: string) => svg.querySelector(s) as T;
    let rails: Rail[] = [];
    let frame = 0;

    const lengthAtY = (path: SVGPathElement, total: number, y: number) => {
      let lo = 0, hi = total;
      for (let k = 0; k < 24; k++) {
        const m = (lo + hi) / 2;
        if (path.getPointAtLength(m).y < y) lo = m;
        else hi = m;
      }
      return hi;
    };

    const layout = () => {
      const box = root.getBoundingClientRect();
      const W = box.width, H = box.height;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.style.height = `${H}px`;
      const rel = (r: DOMRect) => ({ x: r.left - box.left + r.width / 2, top: r.top - box.top, bottom: r.bottom - box.top });
      const mergeX = W / 2;
      const mergeY = H - 70;
      const narrow = window.matchMedia("(max-width: 899px)").matches;
      const groups: { key: string; cards: HTMLElement[]; start: { x: number; y: number } }[] = [];

      if (narrow) {
        const cards = Array.from(root.querySelectorAll<HTMLElement>(".wf-card"));
        const f = rel(cards[0].getBoundingClientRect());
        groups.push({ key: "experience", cards, start: { x: f.x, y: Math.max(0, f.top - 50) } });
      } else {
        for (const lane of LANES) {
          const head = root.querySelector<HTMLElement>(`.wf-head[data-lane="${lane}"]`)!;
          const h = rel(head.getBoundingClientRect());
          groups.push({ key: lane, cards: Array.from(root.querySelectorAll<HTMLElement>(`.wf-card[data-lane="${lane}"]`)), start: { x: h.x, y: h.bottom } });
        }
      }

      rails = LANES.map((lane) => {
        const g = groups.find((x) => x.key === lane);
        const base = q<SVGPathElement>(`.wf-rail--${lane} .wf-cable__base`);
        const live = q<SVGPathElement>(`.wf-rail--${lane} .wf-cable__live`);
        const dot = q<SVGGElement>(`.wf-rail--${lane} .wf-dot`);
        if (!g) {
          base.setAttribute("d", "");
          live.setAttribute("d", "");
          dot.style.opacity = "0";
          return { base, live, dot, cards: [], total: 0, stops: [] };
        }
        const x = g.start.x;
        let d = `M ${x} ${g.start.y}`;
        let lastBottom = g.start.y;
        let lastX = x;
        for (const c of g.cards) {
          const r = rel(c.getBoundingClientRect());
          if (Math.abs(r.x - lastX) > 1) {
            const mid = (lastBottom + r.top) / 2;
            d += ` C ${lastX} ${mid}, ${r.x} ${mid}, ${r.x} ${r.top}`;
          } else d += ` L ${r.x} ${r.top}`;
          d += ` L ${r.x} ${r.bottom}`;
          lastBottom = r.bottom;
          lastX = r.x;
        }
        // merge into the centre, then down into the footer
        d += ` C ${lastX} ${(lastBottom + mergeY) / 2}, ${mergeX} ${mergeY - 40}, ${mergeX} ${mergeY} L ${mergeX} ${H}`;
        base.setAttribute("d", d);
        live.setAttribute("d", d);
        const total = live.getTotalLength();
        live.style.strokeDasharray = `${total}`;
        const stops = g.cards.map((c) => lengthAtY(live, total, rel(c.getBoundingClientRect()).top + 2));
        return { base, live, dot, cards: g.cards, total, stops };
      });
      update();
    };

    const update = () => {
      frame = 0;
      if (reduce.matches) {
        rails.forEach((r) => {
          r.live.style.strokeDashoffset = "0";
          r.dot.style.opacity = "0";
          r.cards.forEach((c) => c.setAttribute("data-on", "true"));
        });
        return;
      }
      const box = root.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - box.top) / box.height));
      const y = progress * box.height;
      rails.forEach((r) => {
        if (!r.total) return;
        const len = lengthAtY(r.live, r.total, y);
        r.live.style.strokeDashoffset = `${r.total - len}`;
        const pt = r.live.getPointAtLength(len);
        r.dot.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
        r.dot.style.opacity = progress > 0.01 && progress < 0.995 ? "1" : "0";
        r.cards.forEach((c, i) => c.setAttribute("data-on", String(len >= r.stops[i])));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const ro = new ResizeObserver(layout);
    ro.observe(root);
    window.addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", update);
    layout();
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="wf">
      <svg ref={svgRef} className="wf-cable" aria-hidden="true" focusable="false" preserveAspectRatio="none">
        {LANES.map((lane) => (
          <g key={lane} className={`wf-rail wf-rail--${lane}`}>
            <path className="wf-cable__base" />
            <path className="wf-cable__live" />
            <g className="wf-dot">
              <circle r="13" className="wf-dot__halo" />
              <circle r="6" className="wf-dot__core" />
            </g>
          </g>
        ))}
      </svg>

      <div className="wf-heads">
        {LANES.map((lane) => (
          <p key={lane} className="wf-head" data-lane={lane}>
            <span className="wf-head__icon">
              <LaneIcon lane={lane} />
            </span>
            <span>
              <b>{t.lanes[lane].label}</b>
              <span className="wf-head__hint">{t.lanes[lane].hint}</span>
            </span>
          </p>
        ))}
      </div>

      <ol className="wf-rows">
        {rows.map((row, i) => (
          <li key={i} className="wf-row">
            <p className="wf-year">
              <span className="sr-only">{t.from}</span>
              {row.year}
            </p>
            {row.items.map((n) => (
              <div key={n.id} className="wf-slot" data-lane={n.lane}>
                <Card n={n} lang={lang} />
              </div>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
