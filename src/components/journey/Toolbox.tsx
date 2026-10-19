const skills = [
  { k: "languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "R", "Java", "C"] },
  { k: "front-end", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"] },
  { k: "back-end & data", items: ["Node.js", "PostgreSQL", "Supabase"] },
  { k: "mobile & cms", items: ["React Native", "WordPress"] },
  { k: "tools", items: ["Git", "Linux"] },
];

const extras = [
  { t: "University Startup Label — Wassalni", d: "Final-year project selected under the ministerial startup framework", y: "2024" },
  { t: "TCF — French (B2)", d: "France Éducation International", y: "2025" },
  { t: "Emergency Response (PSE)", d: "Red Crescent volunteer, team-based first responder", y: "2026" },
];

export default function Toolbox() {
  return (
    <section className="toolbox" aria-labelledby="toolbox-title">
      <div className="toolbox__inner">
        <div>
          <p className="kicker">02 — toolbox</p>
          <h2 id="toolbox-title" className="section-title">
            The tools behind the work.
          </h2>
        </div>
        <div className="toolbox__grid">
          <div className="toolbox__skills">
            {skills.map((g) => (
              <div key={g.k}>
                <h3 className="toolbox__label">{g.k}</h3>
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
            <h3 className="toolbox__label">also on the record</h3>
            <ul className="record">
              {extras.map((e) => (
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
