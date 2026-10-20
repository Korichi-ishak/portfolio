import Link from "next/link";
import Term from "@/components/Term";
import { journey, nodeOfProject, textOf } from "@/data/journey";
import { dict, localize, type Lang } from "@/i18n";
import { getProject, nextProject, projectNumber } from "@/data/projects";

/** End of a project page: where the project sits in the journey, then the next project. */
export default function JourneyStrip({ slug, lang = "en" }: { slug: string; lang?: Lang }) {
  const t = dict[lang].project;
  const here = nodeOfProject(slug);
  const p = getProject(slug)!;
  const next = nextProject(slug);
  return (
    <section className="strip" aria-labelledby="strip-title">
      <div className="strip__inner">
        <p className="kicker">{t.strip}</p>
        <h2 id="strip-title" className="strip__title">
          {p.name} {here ? <>{t.cameOut} <span className="strip__here-name">{textOf(here, lang).short}</span>.</> : t.partOf}
        </h2>
        <ol className="strip__nodes">
          {journey.map((n) => {
            const current = n.id === here?.id;
            return (
              <li key={n.id} className={`strip__node${current ? " strip__node--here" : ""}`} aria-current={current ? "step" : undefined}>
                <span className="strip__dot" aria-hidden="true" />
                <span className="strip__when">{textOf(n, lang).when}</span>
                <span className="strip__name"><Term k={n.id} lang={lang}>{textOf(n, lang).short.replace(/^(my (role at )?|mon (poste à |activité )?|ma |la )/, "")}</Term></span>
              </li>
            );
          })}
        </ol>
        <div className="strip__links">
          <Link href={localize(lang, "/#path")} className="btn btn--ghost-dark">
            {t.whole}
          </Link>
          <Link href={localize(lang, `/work/${next.slug}`)} className="strip__next">
            <span className="strip__next-kicker">{t.next} · {projectNumber(next.slug)}</span>
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
