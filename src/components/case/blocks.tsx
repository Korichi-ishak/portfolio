import { getProject, img, type Project } from "@/data/projects";
import { storyThemes, themeFromProject, type Theme } from "./theme";

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;
const hand = { fontFamily: "'Caveat', cursive" } as const;

function resolve(slug: string): { p: Project; t: Theme } {
  const p = getProject(slug);
  if (!p) throw new Error(`Unknown project ${slug}`);
  return { p, t: storyThemes[slug] ?? themeFromProject(p) };
}

/** The "case file" card: the facts a recruiter scans for, placed in the story's hero. */
export function CaseFile({ slug, methods = false }: { slug: string; methods?: boolean }) {
  const { p, t } = resolve(slug);
  const rows: [string, string][] = [
    ["client", p.client],
    ["role", p.role],
    ["timeline", [p.date, p.duration].filter(Boolean).join(" · ")],
    ["platform", p.platform],
  ];
  const file = (
    <dl
      style={{
        margin: "26px 0 0",
        maxWidth: 540,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "14px 18px",
        padding: 18,
        borderRadius: t.radius,
        background: t.card,
        color: t.cardInk,
        border: `2px dashed ${t.accent}`,
      }}
    >
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt style={{ ...mono, fontSize: 10, color: t.muted, textTransform: "lowercase" }}>{k}</dt>
          <dd style={{ margin: "3px 0 0", fontWeight: 700, fontSize: 14, lineHeight: 1.35 }}>{v}</dd>
        </div>
      ))}
    </dl>
  );
  if (!methods) return file;
  return (
    <>
      {file}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
        {p.methods.map((m) => (
          <span key={m} style={{ padding: "6px 12px", borderRadius: 999, border: `1px solid ${t.line}`, fontSize: 12 }}>
            {m}
          </span>
        ))}
      </div>
    </>
  );
}

/** Who the product is for (need + pain) and the goals that came out of it. */
export function Personas({ slug, label = "who it's for", compact = false }: { slug: string; label?: string; compact?: boolean }) {
  // compact: the story already quotes these people, so only the pain points and goals are added.
  const { p, t } = resolve(slug);
  const tilt = [-1.2, 0.8, -0.6];
  return (
    <section style={{ background: t.bg, color: t.ink, padding: "40px 24px 110px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <p style={{ ...mono, margin: "0 0 16px", fontSize: 13, color: t.accent }}>{label}</p>
        <h2
          style={{
            margin: 0,
            maxWidth: 820,
            fontFamily: t.display,
            fontSize: "clamp(34px, 4vw, 52px)",
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {compact ? "What had to change for each of them." : "What each of them needed."}
        </h2>
        <div
          style={{
            marginTop: 44,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {p.users.map(([role, need, pain], i) => (
            <article
              key={role}
              style={{
                padding: "24px 24px 26px",
                borderRadius: t.radius,
                background: t.card,
                color: t.cardInk,
                border: `1px solid ${t.line}`,
                transform: `rotate(${tilt[i % 3]}deg)`,
                boxShadow: t.dark ? "none" : "0 22px 34px -26px rgba(0,0,0,.45)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: t.accent,
                    color: t.dark ? t.bg : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                  }}
                >
                  {role.charAt(0)}
                </span>
                <b style={{ fontSize: 18 }}>{role}</b>
              </div>
              {!compact && (
                <>
                  <p style={{ ...mono, margin: "18px 0 4px", fontSize: 11, color: t.muted }}>needs</p>
                  <p style={{ ...hand, margin: 0, fontSize: 26, lineHeight: 1.1 }}>“{need}”</p>
                </>
              )}
              <p style={{ ...mono, margin: "16px 0 4px", fontSize: 11, color: t.muted }}>struggles with</p>
              <p style={compact ? { ...hand, margin: 0, fontSize: 26, lineHeight: 1.1 } : { margin: 0, fontSize: 15, lineHeight: 1.5, opacity: 0.85 }}>{pain}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
          <span style={{ ...mono, fontSize: 12, color: t.muted, marginRight: 6 }}>so the goals were</span>
          {p.goals.map((g, i) => (
            <span
              key={g}
              style={{
                padding: "9px 16px",
                borderRadius: 999,
                border: `1.5px solid ${t.ink}`,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              <span style={{ ...mono, color: t.accent, marginRight: 8 }}>0{i + 1}</span>
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Presentation boards (used for the three mobile apps). */
export function Boards({ slug }: { slug: string }) {
  const { p, t } = resolve(slug);
  if (!p.boards?.length) return null;
  return (
    <section style={{ background: t.bg, color: t.ink, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <p style={{ ...mono, margin: "0 0 16px", fontSize: 13, color: t.accent }}>the other two apps</p>
        <h2
          style={{
            margin: 0,
            fontFamily: t.display,
            fontSize: "clamp(34px, 4vw, 52px)",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          Same stack, three products.
        </h2>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 26 }}>
          {p.boards.map(([id, name, what]) => (
            <figure key={id} style={{ margin: 0 }}>
              <div style={{ borderRadius: t.radius, overflow: "hidden", boxShadow: "0 30px 50px -30px rgba(0,0,0,.5)" }}>
                <img src={img(id)} alt={`${name} presentation board`} style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
              <figcaption style={{ marginTop: 14, fontWeight: 700 }}>
                {name} <span style={{ ...mono, fontWeight: 400, fontSize: 12, color: t.muted }}>· {what}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
