import Link from "next/link";
import { journey, nodeOfProject } from "@/data/journey";
import { getProject, nextProject, projectNumber } from "@/data/projects";

/** End of a project page: where the project sits in the journey, then the next project. */
export default function JourneyStrip({ slug }: { slug: string }) {
  const here = nodeOfProject(slug);
  const p = getProject(slug)!;
  const next = nextProject(slug);
  return (
    <section className="strip" aria-labelledby="strip-title">
      <div className="strip__inner">
        <p className="kicker">in the journey</p>
        <h2 id="strip-title" className="strip__title">
          {p.name} {here ? <>came out of <span className="strip__here-name">{here.short}</span>.</> : "is part of the journey."}
        </h2>
        <ol className="strip__nodes">
          {journey.map((n) => {
            const current = n.id === here?.id;
            return (
              <li key={n.id} className={`strip__node${current ? " strip__node--here" : ""}`} aria-current={current ? "step" : undefined}>
                <span className="strip__dot" aria-hidden="true" />
                <span className="strip__when">{n.when || "start"}</span>
                <span className="strip__name">{n.short.replace(/^my (role at )?/, "")}</span>
              </li>
            );
          })}
        </ol>
        <div className="strip__links">
          <Link href="/#journey" className="btn btn--ghost-dark">
            See the whole journey
          </Link>
          <Link href={`/work/${next.slug}`} className="strip__next">
            <span className="strip__next-kicker">next project · {projectNumber(next.slug)}</span>
            <span className="strip__next-name">
              {next.name}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
