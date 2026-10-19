import { dict, type Lang } from "@/i18n";

const skills = [
  { k: "languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "R", "Java", "C"] },
  { k: "front-end", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"] },
  { k: "back-end & data", items: ["Node.js", "PostgreSQL", "Supabase"] },
  { k: "mobile & cms", items: ["React Native", "WordPress"] },
  { k: "tools", items: ["Git", "Linux"] },
];


export default function Toolbox({ lang = "en" }: { lang?: Lang }) {
  const t = dict[lang].toolbox;
  return (
    <section className="toolbox" aria-labelledby="toolbox-title">
      <div className="toolbox__inner">
        <div>
          <p className="kicker">{t.kicker}</p>
          <h2 id="toolbox-title" className="section-title">
            {t.title}
          </h2>
        </div>
        <div className="toolbox__grid">
          <div className="toolbox__skills">
            {skills.map((g) => (
              <div key={g.k}>
                <h3 className="toolbox__label">{t.groups[g.k] ?? g.k}</h3>
                <ul className="pill-list">
                  {g.items.map((s) => (
                    <li key={s} className="pill">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="toolbox__label">{t.record}</h3>
            <ul className="record">
              {t.extras.map((e) => (
                <li key={e.t}>
                  <span className="record__head">
                    <b>{e.t}</b>
                    <span className="record__year">{e.y}</span>
                  </span>
                  <span className="record__text">{e.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
