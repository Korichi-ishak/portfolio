"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getProject } from "@/data/projects";
import { journey, type JourneyNode } from "@/data/journey";

/*
  The journey as a workflow. Real content is an ordered list of steps.
  The cable (SVG) and the travelling dot are decoration, drawn from the
  positions of the cards and driven by scroll. With reduced motion the
  cable is shown fully drawn and nothing moves.
*/

const ICON: Record<JourneyNode["kind"], string> = {
  start: "M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z M12 7.5a2 2 0 100 4 2 2 0 000-4",
  study: "M2 9l10-5 10 5-10 5-10-5z M6 11v5c3 2 9 2 12 0v-5",
  work: "M4 8h16v11H4z M9 8V5h6v3",
  freelance: "M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3 M18 3v4h-4 M6 21v-4h4",
  now: "M12 3v4 M12 17v4 M3 12h4 M17 12h4 M12 9a3 3 0 100 6 3 3 0 000-6",
};

function NodeCard({ n, index }: { n: JourneyNode; index: number }) {
  return (
    <article className={`wf-card wf-card--${n.kind}`} aria-labelledby={`wf-${n.id}`}>
      <span className="wf-port wf-port--in" aria-hidden="true" />
      <header className="wf-card__head">
        <span className="wf-card__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={ICON[n.kind]} />
          </svg>
        </span>
        <span className="wf-card__tag">
          {String(index + 1).padStart(2, "0")} · {n.label}
        </span>
        {n.note && <span className="wf-card__note">{n.note}</span>}
      </header>
      <div className="wf-card__body">
        {n.when && <p className="wf-card__when">{n.when}</p>}
        <h3 id={`wf-${n.id}`} className="wf-card__title">
          {n.title}
        </h3>
        <p className="wf-card__org">{n.org}</p>
        {n.text && <p className="wf-card__text">{n.text}</p>}
        {n.stack && <p className="wf-card__stack">{n.stack}</p>}
        {n.projects && n.projects.length > 0 && (
          <div className="wf-card__projects">
            <p className="wf-card__projects-label" id={`wf-${n.id}-p`}>
              {n.projects.length > 1 ? "Projects from this step" : "Read the case study"}
            </p>
            <ul aria-labelledby={`wf-${n.id}-p`}>
              {n.projects.map((slug) => {
                const p = getProject(slug);
                if (!p) return null;
                return (
                  <li key={slug}>
                    <Link href={`/work/${slug}`} className="wf-chip">
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

export default function Workflow() {
  const listRef = useRef<HTMLOListElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const liveRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const svg = svgRef.current;
    const base = baseRef.current;
    const live = liveRef.current;
    const dot = dotRef.current;
    if (!list || !svg || !base || !live || !dot) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let total = 0;
    let frame = 0;
    let stops: number[] = []; // path length at which each card is reached

    const layout = () => {
      const box = list.getBoundingClientRect();
      const cards = Array.from(list.querySelectorAll<HTMLElement>(".wf-card"));
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      svg.style.height = `${box.height}px`;
      let d = "";
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const x = r.left - box.left + r.width / 2;
        const top = r.top - box.top;
        const bottom = r.bottom - box.top;
        if (i === 0) d = `M ${x} ${Math.max(0, top - 60)} L ${x} ${top}`;
        else {
          const prev = cards[i - 1].getBoundingClientRect();
          const px = prev.left - box.left + prev.width / 2;
          const py = prev.bottom - box.top;
          const mid = (py + top) / 2;
          d += ` M ${px} ${py} C ${px} ${mid}, ${x} ${mid}, ${x} ${top}`;
        }
        if (i === cards.length - 1) d += ` M ${x} ${bottom} L ${x} ${box.height}`;
      });
      base.setAttribute("d", d);
      live.setAttribute("d", d);
      total = live.getTotalLength();
      live.style.strokeDasharray = `${total}`;
      // where each card's input port sits along the path
      stops = cards.map((card) => {
        const r = card.getBoundingClientRect();
        const y = r.top - box.top;
        let lo = 0, hi = total;
        for (let k = 0; k < 24; k++) {
          const m = (lo + hi) / 2;
          if (live.getPointAtLength(m).y < y) lo = m;
          else hi = m;
        }
        return hi;
      });
      update();
    };

    const update = () => {
      frame = 0;
      const cards = Array.from(list.querySelectorAll<HTMLElement>(".wf-card"));
      if (reduce.matches) {
        live.style.strokeDashoffset = "0";
        dot.style.opacity = "0";
        cards.forEach((c) => c.setAttribute("data-on", "true"));
        return;
      }
      const box = list.getBoundingClientRect();
      const focus = window.innerHeight * 0.62;
      const progress = Math.min(1, Math.max(0, (focus - box.top) / box.height));
      // follow the path by height, not by length, so the dot stays near the reading line
      const targetY = progress * box.height;
      let lo = 0, hi = total;
      for (let k = 0; k < 22; k++) {
        const m = (lo + hi) / 2;
        if (live.getPointAtLength(m).y < targetY) lo = m;
        else hi = m;
      }
      const len = hi;
      live.style.strokeDashoffset = `${total - len}`;
      const pt = live.getPointAtLength(len);
      dot.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      dot.style.opacity = progress > 0 && progress < 1 ? "1" : "0";
      cards.forEach((c, i) => c.setAttribute("data-on", String(len >= stops[i] - 2)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const ro = new ResizeObserver(() => layout());
    ro.observe(list);
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
    <div className="wf">
      <svg ref={svgRef} className="wf-cable" aria-hidden="true" focusable="false" preserveAspectRatio="none">
        <path ref={baseRef} className="wf-cable__base" />
        <path ref={liveRef} className="wf-cable__live" />
        <g ref={dotRef} className="wf-dot">
          <circle r="14" className="wf-dot__halo" />
          <circle r="6" className="wf-dot__core" />
        </g>
      </svg>
      <ol ref={listRef} className="wf-list">
        {journey.map((n, i) => (
          <li key={n.id} className={`wf-step ${i % 2 ? "wf-step--right" : "wf-step--left"}`}>
            <NodeCard n={n} index={i} />
          </li>
        ))}
      </ol>
    </div>
  );
}
