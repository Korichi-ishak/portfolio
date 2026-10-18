import type { CSSProperties, ReactNode } from "react";
import { fontsHref, img, type Project } from "@/data/projects";
import { CaseFile, Personas } from "./blocks";
import { themeFromProject } from "./theme";

/*
  Case study + story for projects that don't have a hand-drawn story yet.
  Same seven chapters and visual language as the illustrated stories,
  driven by the project's data and brand colours.
*/

const mono: CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const hand: CSSProperties = { fontFamily: "'Caveat', cursive" };
const wrap: CSSProperties = { maxWidth: 1240, margin: "0 auto" };

const WF: Record<string, [string, number, number]> = {
  nav: ["navigation", 34, 0], hero: ["hero + call to action", 110, 0], split: ["text | image", 96, 2], cards3: ["cards", 78, 3],
  cards4: ["cards", 66, 4], list: ["list", 86, 1], table: ["table", 110, 1], cta: ["call to action", 48, 0], gallery: ["photo gallery", 92, 3],
  form: ["form", 90, 2], footer: ["footer", 34, 3], dash: ["sidebar | dashboard", 150, 2], steps: ["steps", 60, 5], stats: ["highlights", 54, 3],
  tabs: ["tabs", 40, 4], search: ["search bar", 40, 0],
};

function tone(s: string): [string, string] {
  const good = ["Paid", "Confirmed", "Delivered", "Published", "Available", "Done", "Won", "In stock", "Yes", "In range", "Stable", "Booked", "Open", "Founder", "Early access", "Full"];
  const warn = ["Pending", "To call", "Processing", "Quote sent", "Draft", "Review", "Reserved", "In progress", "Meeting", "Quoted", "Low stock", "Waiting list", "Proposal", "New", "Tea Time", "Rising", "Above range"];
  if (good.includes(s)) return ["#E3F4E7", "#1E6B33"];
  if (warn.includes(s)) return ["#FDF0D5", "#7A4B00"];
  return ["#FBE3E1", "#8A1C12"];
}

function Chapter({ n, name, color }: { n: number; name: string; color: string }) {
  return <p style={{ ...mono, margin: "0 0 16px", fontSize: 13, color }}>chapter 0{n} — {name}</p>;
}
function H2({ children, font, style }: { children: ReactNode; font: string; style?: CSSProperties }) {
  return (
    <h2 style={{ margin: 0, maxWidth: 860, fontFamily: font, fontSize: "clamp(40px, 5vw, 66px)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.035em", ...style }}>
      {children}
    </h2>
  );
}
function Laptop({ children, tilt = 8 }: { children: ReactNode; tilt?: number }) {
  return (
    <div style={{ perspective: 2000 }}>
      <div style={{ transform: `rotateX(${tilt}deg)` }}>
        <div style={{ padding: "12px 12px 16px", borderRadius: "18px 18px 4px 4px", background: "linear-gradient(#2A2D33, #111214)", boxShadow: "0 50px 80px -40px rgba(0,0,0,.6)" }}>
          <div style={{ borderRadius: 6, overflow: "hidden" }}>{children}</div>
        </div>
        <div style={{ height: 16, margin: "0 -40px", borderRadius: "2px 2px 22px 22px", background: "linear-gradient(#E2E2E2, #9CA1A9)" }} />
      </div>
    </div>
  );
}
function Phone({ children, rotate = 0, width = 236 }: { children: ReactNode; rotate?: number; width?: number }) {
  return (
    <div style={{ width, padding: 8, borderRadius: 38, background: "#141412", boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)", transform: `rotate(${rotate}deg)` }}>
      <div style={{ borderRadius: 30, overflow: "hidden" }}>{children}</div>
    </div>
  );
}
function Shot({ id, alt, ratio = "800 / 499" }: { id: string; alt: string; ratio?: string }) {
  return <img src={img(id)} alt={alt} style={{ display: "block", width: "100%", aspectRatio: ratio, objectFit: "cover", objectPosition: "top" }} />;
}

export default function GenericCase({ p }: { p: Project }) {
  const t = themeFromProject(p);
  const c = p.c;
  const disp = p.fonts.dCss;
  const ratio = p.d1ratio || "800 / 499";
  const href = fontsHref([p.fonts.dCss, p.fonts.bCss]);
  const shipped = p.d2 || p.d1;
  const [first, ...rest] = p.findings;
  const tilt = [-2, 1.5, -1];
  const notes = ["#FFF59D", "#FFFFFF", c.light];

  return (
    <div className={`st st-${p.slug}`} style={{ fontFamily: p.fonts.bCss, color: t.ink, background: t.bg, width: "100%", overflow: "hidden" }}>
      {href && <link rel="stylesheet" href={href} precedence="default" />}

      {/* HERO */}
      <section style={{ position: "relative", padding: "80px 24px 100px", background: `radial-gradient(80% 80% at 78% 35%, ${c.light} 0%, ${t.bg} 62%)` }}>
        <div style={{ ...wrap, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48 }}>
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <p style={{ ...mono, margin: "0 0 22px", fontSize: 13, color: t.muted }}>a story in seven chapters</p>
            <h1 style={{ margin: 0, fontFamily: disp, fontSize: "clamp(56px, 8vw, 116px)", lineHeight: 0.92, fontWeight: 800, letterSpacing: "-0.045em" }}>{p.name}</h1>
            <p style={{ ...hand, margin: "12px 0 0", fontSize: "clamp(32px, 3.6vw, 48px)", color: c.primary }}>{p.slash}</p>
            <p style={{ margin: "22px 0 0", maxWidth: 480, fontSize: 18, lineHeight: 1.6, color: "#3A3934" }}>{p.lead}</p>
            <CaseFile slug={p.slug} methods />
          </div>
          <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: 0, position: "relative", minHeight: 460 }}>
            {p.d1 && (
              <div className="g-floaty" style={{ position: "relative", marginTop: 30, marginRight: p.m ? 90 : 0 }}>
                <Laptop>
                  <Shot id={p.d1} alt="" ratio={ratio} />
                </Laptop>
              </div>
            )}
            {p.boards && (
              <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
                {p.boards.map(([id], i) => (
                  <div key={id} style={{ flex: 1, transform: `rotate(${tilt[i]}deg)`, borderRadius: 14, overflow: "hidden", boxShadow: "0 30px 40px -24px rgba(0,0,0,.5)" }}>
                    <Shot id={id} alt="" ratio="3 / 4" />
                  </div>
                ))}
              </div>
            )}
            {p.m && (
              <div className="g-floaty2" style={{ position: "absolute", right: 0, bottom: -10 }}>
                <Phone rotate={6} width={170}>
                  <Shot id={p.m} alt="" ratio="389 / 842" />
                </Phone>
              </div>
            )}
            {first && (
              <span style={{ position: "absolute", left: -10, top: 0, padding: "12px 16px", background: "#FFF59D", transform: "rotate(-6deg)", boxShadow: "0 18px 26px -16px rgba(0,0,0,.45)", ...hand, fontSize: 23, lineHeight: 1.1, maxWidth: 200, color: "#2A2A2A" }}>
                {first[0].toLowerCase()} !
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 01 BEFORE */}
      <section style={{ background: "#EEEBE3", padding: "110px 24px" }}>
        <div style={{ ...wrap, display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <Chapter n={1} name="before" color={c.primary} />
            <H2 font={disp}>{first ? first[0] + "." : "What wasn't working."}</H2>
            <p style={{ margin: "22px 0 0", fontSize: 18, lineHeight: 1.65, color: "#3A3934" }}>{p.problem}</p>
          </div>
          <div style={{ flex: "1 1 460px", minWidth: 0, position: "relative", minHeight: 360 }}>
            <div style={{ padding: "26px 28px", background: "#FFFDF6", transform: "rotate(1.5deg)", boxShadow: "0 22px 34px -20px rgba(0,0,0,.45)", backgroundImage: "repeating-linear-gradient(transparent 0 31px, #ECE6D8 31px 32px)" }}>
              <p style={{ ...mono, margin: "0 0 10px", fontSize: 11, color: t.muted }}>how I found out</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {p.research.map((r) => (
                  <li key={r} style={{ ...hand, fontSize: 25, lineHeight: 1.15, display: "flex", gap: 10 }}>
                    <span aria-hidden="true" style={{ color: c.primary }}>✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <span aria-hidden="true" style={{ position: "absolute", right: -6, bottom: -30, padding: "12px 14px", background: "#FFC9A3", transform: "rotate(6deg)", boxShadow: "0 18px 26px -16px rgba(0,0,0,.45)", ...hand, fontSize: 22, lineHeight: 1.1, color: "#2A2A2A" }}>
              {p.industry.toLowerCase()}
            </span>
          </div>
        </div>
      </section>

      {/* 02 LISTENING */}
      <section style={{ background: t.bg, padding: "110px 24px 40px" }}>
        <div style={wrap}>
          <Chapter n={2} name="listening" color={c.primary} />
          <H2 font={disp}>What I heard.</H2>
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 28 }}>
            {[first, ...rest].filter(Boolean).map(([title, text], i) => (
              <figure key={title} style={{ margin: 0, position: "relative", padding: "30px 26px 26px", background: notes[i % 3], transform: `rotate(${tilt[i % 3]}deg)`, boxShadow: "0 20px 30px -18px rgba(0,0,0,.45)", color: "#1E1E1C" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: -12, left: "40%", width: 70, height: 22, background: "rgba(255,255,255,.6)", transform: "rotate(-3deg)" }} />
                <p style={{ ...mono, margin: 0, fontSize: 11, opacity: 0.7 }}>finding 0{i + 1}</p>
                <p style={{ ...hand, margin: "10px 0 0", fontSize: 30, lineHeight: 1.05 }}>{title}</p>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.5 }}>{text}</p>
              </figure>
            ))}
          </div>
          <div style={{ marginTop: 56, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, padding: "32px 36px", borderRadius: 24, background: c.dark, color: "#F4F3EF" }}>
            <span style={{ ...mono, fontSize: 12, color: c.primary }}>how might we</span>
            <p style={{ margin: 0, flex: "1 1 520px", fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.3, fontWeight: 700 }}>{p.hmw.replace(/^How might we\s*/i, "")}</p>
          </div>
        </div>
      </section>

      <Personas slug={p.slug} />

      {/* 03 STRUCTURE */}
      <section style={{ background: "linear-gradient(#F6F4EF, #EEEBE3)", padding: "110px 24px" }}>
        <div style={wrap}>
          <Chapter n={3} name="structure" color={c.primary} />
          <H2 font={disp}>Everything in its place.</H2>
          <div style={{ marginTop: 50, padding: 26, borderRadius: 26, background: c.dark, color: "#F4F3EF" }}>
            <span style={{ display: "inline-block", padding: "10px 18px", borderRadius: 999, background: c.primary, color: c.onPrimary, fontWeight: 800 }}>{p.ia.root}</span>
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14 }}>
              {p.ia.branches.map(([b, kids]) => (
                <div key={b} style={{ padding: "16px 18px", borderRadius: 16, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}>
                  <b style={{ fontSize: 17 }}>{b}</b>
                  <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {kids.map((k) => (
                      <span key={k} style={{ padding: "6px 11px", borderRadius: 999, background: "rgba(255,255,255,.1)", fontSize: 13 }}>{k}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ ...mono, margin: "70px 0 12px", fontSize: 13, color: c.primary }}>the path — {p.flow.title}</p>
          <div style={{ position: "relative", marginTop: 26 }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "6%", right: "6%", top: 40, borderTop: `3px dashed ${c.primary}` }} />
            <span aria-hidden="true" className="g-walk" style={{ position: "absolute", top: 30, marginLeft: -12, width: 24, height: 24, borderRadius: "50%", background: c.primary, boxShadow: `0 0 0 6px ${c.light}` }} />
            <ol style={{ position: "relative", margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(130px, 1fr))`, gap: 14 }}>
              {p.flow.steps.map((s, i) => (
                <li key={s} style={{ textAlign: "center" }}>
                  <span style={{ margin: "0 auto", width: 80, height: 80, borderRadius: "50%", background: i === 0 || i === p.flow.steps.length - 1 ? c.dark : "#FFFFFF", color: i === 0 || i === p.flow.steps.length - 1 ? "#F4F3EF" : t.ink, boxShadow: "0 14px 20px -12px rgba(0,0,0,.35)", display: "flex", alignItems: "center", justifyContent: "center", ...mono, fontSize: 18 }}>
                    0{i + 1}
                  </span>
                  <p style={{ margin: "12px 0 0", fontWeight: 700, fontSize: 15 }}>{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 04 SKETCHES */}
      <section style={{ background: t.bg, padding: "110px 24px" }}>
        <div style={wrap}>
          <Chapter n={4} name="sketches" color={c.primary} />
          <H2 font={disp}>From a rough sketch to the shipped screen.</H2>
          <div style={{ marginTop: 50, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
            <figure style={{ margin: 0 }}>
              <div style={{ padding: 24, minHeight: 360, background: "#FBF7EC", backgroundImage: "linear-gradient(#E3EAF2 1px, transparent 1px), linear-gradient(90deg, #E3EAF2 1px, transparent 1px)", backgroundSize: "18px 18px", boxShadow: "0 24px 40px -26px rgba(0,0,0,.5)", transform: "rotate(-1.5deg)", display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ ...hand, margin: 0, fontSize: 25, color: "#1F3B8A" }}>{p.wfScreen}</p>
                {p.wf.map((k, i) => {
                  const [label, h, cells] = WF[k] ?? ["block", 60, 0];
                  return (
                    <div key={k + i} style={{ height: h * 0.8, border: "2px dashed #1F3B8A", borderRadius: 6, display: "flex", gap: 6, padding: 6, position: "relative" }}>
                      {Array.from({ length: cells }).map((_, q) => <span key={q} style={{ flex: 1, border: "1.5px solid #1F3B8A", borderRadius: 4 }} />)}
                      <span style={{ ...hand, position: "absolute", right: 8, bottom: 2, fontSize: 17, color: "#1F3B8A" }}>{label}</span>
                    </div>
                  );
                })}
              </div>
              <figcaption style={{ marginTop: 16, fontWeight: 700 }}>Notebook sketch</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <div style={{ padding: 18, minHeight: 360, borderRadius: 12, background: "#DDD9CF", display: "flex", flexDirection: "column", gap: 10 }}>
                {p.wf.map((k, i) => {
                  const [, h, cells] = WF[k] ?? ["", 60, 0];
                  return (
                    <div key={k + i} style={{ height: h * 0.8, borderRadius: 8, background: i === 0 ? "#BFB9AC" : "#CCC6B9", display: "flex", gap: 6, padding: cells ? 6 : 0 }}>
                      {Array.from({ length: cells }).map((_, q) => <span key={q} style={{ flex: 1, borderRadius: 6, background: "#E4DFD4" }} />)}
                    </div>
                  );
                })}
              </div>
              <figcaption style={{ marginTop: 16, fontWeight: 700 }}>Wireframe</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 50px -28px rgba(0,0,0,.55)" }}>
                {shipped ? <Shot id={shipped} alt={`${p.name} — shipped screen`} ratio={ratio} /> : p.boards ? <Shot id={p.boards[0][0]} alt={`${p.boards[0][1]} board`} ratio="4 / 3" /> : null}
              </div>
              <figcaption style={{ marginTop: 16, fontWeight: 700 }}>Shipped</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 05 VISUAL LANGUAGE */}
      <section style={{ background: c.dark, color: "#F4F3EF", padding: "120px 24px" }}>
        <div style={wrap}>
          <Chapter n={5} name="visual language" color={c.primary} />
          <H2 font={disp} style={{ maxWidth: 900 }}>{p.mood}</H2>
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 22 }}>
            {p.palette.map(([n, hex, use], i) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div aria-hidden="true" className="g-floaty" style={{ animationDelay: `${i * 0.5}s`, height: 150, borderRadius: 18, background: hex, border: "1px solid rgba(255,255,255,.18)", boxShadow: "0 24px 30px -20px rgba(0,0,0,.6)" }} />
                <b>{n}</b>
                <span style={{ ...mono, fontSize: 12, opacity: 0.7 }}>{hex} · {use}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 50, display: "flex", flexWrap: "wrap", gap: 18 }}>
            <div style={{ flex: "1 1 340px", padding: 28, borderRadius: 20, background: "rgba(255,255,255,.06)" }}>
              <p style={{ ...mono, margin: 0, fontSize: 11, opacity: 0.7 }}>{p.fonts.dName} — {p.fonts.dNote}</p>
              <p style={{ margin: "10px 0 0", fontFamily: p.fonts.dCss, fontSize: 46, lineHeight: 1.05, fontWeight: 700 }}>{p.fonts.dSample}</p>
              <p style={{ margin: "14px 0 0", fontFamily: p.fonts.bCss, opacity: 0.75 }}>{p.fonts.bName} — {p.fonts.bNote}</p>
            </div>
            <div style={{ flex: "1 1 300px", padding: 28, borderRadius: 20, background: "rgba(255,255,255,.06)", display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <p style={{ ...mono, margin: 0, fontSize: 11, opacity: 0.7 }}>components</p>
              <span style={{ padding: "13px 22px", borderRadius: c.radius, background: c.primary, color: c.onPrimary, fontWeight: 800 }}>{p.cta}</span>
              <span style={{ padding: "12px 21px", borderRadius: c.radius, border: `1.5px solid ${c.primary}`, fontWeight: 700 }}>{p.cta2}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ padding: "6px 12px", borderRadius: 999, background: c.light, color: c.dark, fontSize: 13, fontWeight: 600 }}>{p.chip1}</span>
                <span style={{ padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,.3)", fontSize: 13 }}>{p.chip2}</span>
              </div>
              <span style={{ alignSelf: "stretch", padding: "12px 14px", borderRadius: 10, background: "#FFFFFF", color: "#8E8C84", fontSize: 14 }}>{p.input}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 SOLUTION */}
      <section style={{ background: `radial-gradient(90% 70% at 20% 10%, ${c.light}, ${t.bg} 60%)`, padding: "120px 24px" }}>
        <div style={wrap}>
          <Chapter n={6} name="the solution" color={c.primary} />
          <H2 font={disp}>{p.solutionNote}</H2>
          <div style={{ marginTop: 60, display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 40 }}>
            <figure style={{ flex: "3 1 620px", minWidth: 0, margin: 0 }}>
              <Laptop>
                <div style={{ display: "flex", minHeight: 360, fontSize: 12, color: "#1E1E1C" }}>
                  <div style={{ flex: "0 0 150px", background: c.dark, color: "#F4F3EF", padding: "16px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
                    <b style={{ margin: "0 8px 14px" }}>{p.admin.app}</b>
                    {p.admin.nav.map((n, i) => (
                      <span key={n} style={{ padding: 8, borderRadius: 6, background: i === p.admin.active ? c.primary : "transparent", color: i === p.admin.active ? c.onPrimary : "rgba(255,255,255,.72)", fontWeight: i === p.admin.active ? 800 : 400 }}>{n}</span>
                    ))}
                  </div>
                  <div style={{ flex: 1, minWidth: 0, background: "#F7F6F2", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <b style={{ fontSize: 18 }}>{p.admin.title}</b>
                      <span style={{ padding: "7px 12px", borderRadius: 8, background: c.primary, color: c.onPrimary, fontWeight: 800, fontSize: 11 }}>{p.admin.action}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                      {p.admin.cards.map((card, k) => (
                        <div key={card} style={{ padding: 10, borderRadius: 8, background: "#fff" }}>
                          <span style={{ fontSize: 10, color: "#6B6A64" }}>{card}</span>
                          <div aria-hidden="true" style={{ marginTop: 8, display: "flex", alignItems: "flex-end", gap: 3, height: 34 }}>
                            {[55, 80, 45, 95, 70, 60, 85].map((h, q) => (
                              <span key={q} style={{ flex: 1, height: `${((h + k * 17 + q * 7) % 70) + 25}%`, borderRadius: 2, background: q === 6 ? c.primary : "#E4E2DB" }} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ borderRadius: 8, background: "#fff", overflow: "hidden" }}>
                      <div style={{ ...mono, display: "grid", gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr", padding: "8px 12px", fontSize: 10, color: "#6B6A64", background: "#EFEDE7" }}>
                        {p.admin.cols.map((col) => <span key={col}>{col}</span>)}
                      </div>
                      {p.admin.rows.map((r) => {
                        const [bg, fg] = tone(r[3]);
                        return (
                          <div key={r.join()} style={{ display: "grid", gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr", padding: "10px 12px", borderTop: "1px solid #F0EEE8", alignItems: "center" }}>
                            <b>{r[0]}</b><span>{r[1]}</span><span>{r[2]}</span>
                            <span><span style={{ padding: "3px 8px", borderRadius: 999, background: bg, color: fg, fontSize: 10, fontWeight: 700 }}>{r[3]}</span></span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Laptop>
              <figcaption style={{ marginTop: 22, fontWeight: 700 }}>{p.admin.caption} <span style={{ ...mono, fontWeight: 400, fontSize: 12, color: t.muted }}>· illustrative data</span></figcaption>
            </figure>
            <figure style={{ flex: "1 1 240px", margin: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Phone rotate={4}>
                <div style={{ height: 500, background: "#F7F6F2", padding: "28px 16px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                  <p style={{ ...mono, margin: 0, fontSize: 10, color: c.primary }}>{p.app.sub}</p>
                  <b style={{ fontSize: 22, fontFamily: disp }}>{p.app.title}</b>
                  {p.app.items.map(([a, b], k) => (
                    <div key={a} style={{ padding: 12, borderRadius: 12, background: k === 0 ? c.primary : "#FFFFFF", color: k === 0 ? c.onPrimary : "#1E1E1C" }}>
                      <b style={{ fontSize: 14 }}>{a}</b>
                      <p style={{ margin: "3px 0 0", fontSize: 11, opacity: 0.8 }}>{b}</p>
                    </div>
                  ))}
                  <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around", padding: "12px 0 16px", borderTop: "1px solid #E2E0D9", fontSize: 11 }}>
                    {p.app.tabs.map((tb, k) => <span key={tb} style={{ color: k === 0 ? c.primary : "#8E8C84", fontWeight: k === 0 ? 800 : 500 }}>{tb}</span>)}
                  </div>
                </div>
              </Phone>
              <figcaption style={{ marginTop: 18, fontWeight: 700 }}>{p.app.caption}</figcaption>
            </figure>
          </div>
          {(p.d3 || p.m || p.d2) && (
            <div style={{ marginTop: 90, display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-end", gap: 34 }}>
              {(p.d3 || p.d2) && (
                <figure style={{ flex: "2 1 520px", minWidth: 0, margin: 0 }}>
                  <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #DDD9CF", background: "#fff", boxShadow: "0 30px 50px -30px rgba(0,0,0,.5)" }}>
                    <div style={{ display: "flex", gap: 7, alignItems: "center", padding: "10px 14px", background: "#EFEDE7" }}>
                      {[0, 1, 2].map((d) => <span key={d} style={{ width: 10, height: 10, borderRadius: "50%", background: "#CFCDC5" }} />)}
                      <span style={{ ...mono, marginLeft: 12, fontSize: 11, color: "#6B6A64" }}>{p.domain || p.name}</span>
                    </div>
                    <Shot id={p.d3 || p.d2} alt={`${p.name} — live site`} ratio={ratio} />
                  </div>
                  <figcaption style={{ marginTop: 16, fontWeight: 700 }}>Live site</figcaption>
                </figure>
              )}
              {p.m && (
                <figure style={{ margin: 0, textAlign: "center" }}>
                  <Phone rotate={-4}>
                    <Shot id={p.m} alt={`${p.name} on a phone`} ratio="389 / 842" />
                  </Phone>
                  <figcaption style={{ marginTop: 18, fontWeight: 700 }}>On a phone</figcaption>
                </figure>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 07 AFTER */}
      <section style={{ background: c.dark, color: "#F4F3EF", padding: "120px 24px" }}>
        <div style={wrap}>
          <Chapter n={7} name="after" color={c.primary} />
          <H2 font={disp}>What changed.</H2>
          <div style={{ marginTop: 50, display: "flex", flexDirection: "column", gap: 14 }}>
            {p.outcome.map(([a, b]) => (
              <div key={a} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, padding: "24px 28px", borderRadius: 18, background: "rgba(255,255,255,.06)" }}>
                <span style={{ ...hand, flex: "1 1 240px", fontSize: 29, color: c.primary }}>{a}</span>
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke={c.primary} strokeWidth="2.5" aria-hidden="true"><path d="M1 10h36M29 2l8 8-8 8" /></svg>
                <span style={{ flex: "1 1 320px", fontSize: 20, fontWeight: 700 }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 50, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
            {p.stack.map((s) => <span key={s} style={{ padding: "9px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,.22)", fontSize: 14 }}>{s}</span>)}
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 10, minHeight: 52, padding: "0 26px", borderRadius: 999, background: c.primary, color: c.onPrimary, fontWeight: 800, textDecoration: "none" }}>
                {p.liveLabel || "Visit the site"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
