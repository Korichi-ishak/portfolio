import { CaseFile, Personas } from "@/components/case/blocks";

/* Generated from the validated maquette (Story-ayan.dc.html), then edited by hand. */
export default function AyanStory() {
  return (
    <div
      className="st st-ayan"
      style={{
        fontFamily: "'Manrope', sans-serif",
        color: "#F5F5F5",
        background: "#0A0A0A",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" precedence="default" />
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "70px 24px 40px",
          background: "radial-gradient(60% 70% at 70% 40%, rgba(37,99,235,.28), transparent 70%), #0A0A0A",
        }}
      >
        <div
          className="toast"
          style={{
            position: "absolute",
            right: "24px",
            top: "24px",
            zIndex: "3",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "12px",
            background: "#18181B",
            border: "1px solid #3F3F46",
            boxShadow: "0 20px 40px -20px rgba(0,0,0,.9)",
          }}
        >
          {" "}
          <span
            aria-hidden="true"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #FDE68A, #EAB308 60%, #A16207)",
            }}
          ></span>{" "}
          <div>
            <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#EAB308", letterSpacing: ".1em" }}>
              Achievement unlocked
            </p>
            <p style={{ margin: "2px 0 0", fontSize: "14px", fontWeight: "600" }}>Case study opened</p>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: "0", position: "relative", zIndex: "2" }}>
            <p className="hud" style={{ margin: "0", fontSize: "14px", letterSpacing: ".2em", color: "#60A5FA" }}>
              EdTech · 2025 – 2026
            </p>
            <h1
              className="hud"
              style={{
                margin: "16px 0 0",
                fontSize: "clamp(64px, 9.4vw, 148px)",
                lineHeight: ".85",
                fontWeight: "700",
                letterSpacing: "-.01em",
              }}
            >
              Ayan
              <br />
              <span style={{ color: "#EAB308" }}>Bridge</span>
            </h1>
            <p
              style={{ margin: "22px 0 0", maxWidth: "460px", fontSize: "18px", lineHeight: "1.65", color: "#D4D4D4" }}
            >
              A learning platform that grew into four products under one account. I built the dashboard that tells every
              learner one thing: what to do next.
            </p>
            <div style={{ marginTop: "26px", maxWidth: "420px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }} className="hud">
                <span style={{ fontSize: "12px", color: "#A3A3A3" }}>progress to next level</span>
                <span style={{ fontSize: "12px", color: "#60A5FA" }}>+XP</span>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  height: "10px",
                  borderRadius: "6px",
                  background: "#1F1F23",
                  overflow: "hidden",
                }}
              >
                <span
                  className="fillbar"
                  style={{
                    display: "block",
                    height: "100%",
                    borderRadius: "6px",
                    background: "linear-gradient(90deg, #2563EB, #60A5FA, #EAB308)",
                  }}
                ></span>
              </div>
            </div>
            <CaseFile slug="ayan" methods />
          </div>
          <img
            className="float"
            src="/img/53e78bd45a5b385e5de6b424ea814ffb.webp"
            alt="3D render: a gold trophy, gold coins and floating lesson cards"
            style={{ flex: "1 1 560px", minWidth: "0", width: "100%", height: "auto" }}
          />
        </div>
      </section>
      {/* LV1 THE QUEST */}
      <section style={{ padding: "110px 24px", borderTop: "1px solid #1F1F23" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
              Level 01 · The quest
            </p>
            <h2
              className="hud"
              style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
            >
              Four products. One lost learner.
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "17px", lineHeight: "1.7", color: "#D4D4D4" }}>
              Courses, an AI studio, a marketplace and an investment arm — each with its own menu. Learners opened the
              app and didn't know where they had stopped, or what to do next. Motivation faded quietly.
            </p>
          </div>
          <div style={{ padding: "30px", borderRadius: "18px", background: "#111113", border: "1px solid #27272A" }}>
            <p className="hud" style={{ margin: "0", fontSize: "12px", letterSpacing: ".14em", color: "#A3A3A3" }}>
              Main quest
            </p>
            <p className="hud" style={{ margin: "10px 0 0", fontSize: "26px", fontWeight: "700", color: "#EAB308" }}>
              Make the dashboard answer: what now?
            </p>
            <div style={{ marginTop: "22px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  aria-hidden="true"
                  style={{ width: "18px", height: "18px", borderRadius: "4px", border: "2px solid #3B82F6" }}
                ></span>
                Show the next lesson first
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  aria-hidden="true"
                  style={{ width: "18px", height: "18px", borderRadius: "4px", border: "2px solid #3B82F6" }}
                ></span>
                Make progress visible everywhere
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span
                  aria-hidden="true"
                  style={{ width: "18px", height: "18px", borderRadius: "4px", border: "2px solid #3B82F6" }}
                ></span>
                One navigation for four products
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LV2 SCOUTING */}
      <section style={{ padding: "110px 24px", background: "#0F0F11", borderTop: "1px solid #1F1F23" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
            Level 02 · Scouting
          </p>
          <h2
            className="hud"
            style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
          >
            What the map revealed.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "620px", fontSize: "17px", lineHeight: "1.7", color: "#D4D4D4" }}>
            Product-owner interviews, a feature inventory, a look at learning apps people actually return to.
          </p>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              className="glowp"
              style={{ padding: "28px", borderRadius: "16px", background: "#141416", border: "1px solid #3F3F46" }}
            >
              {" "}
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "52px",
                  height: "58px",
                  clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                  background: "linear-gradient(135deg, #93C5FD, #2563EB 60%, #1E3A8A)",
                }}
              ></span>{" "}
              <p className="hud" style={{ margin: "18px 0 0", fontSize: "22px", fontWeight: "700" }}>
                Learners lose their place
              </p>
              <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#A3A3A3" }}>
                Progress was buried inside each course. The home screen didn't know you.
              </p>
            </div>
            <div
              className="glowp"
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "#141416",
                border: "1px solid #3F3F46",
                animationDelay: "-1s",
              }}
            >
              {" "}
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "52px",
                  height: "58px",
                  clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                  background: "linear-gradient(135deg, #FDE68A, #EAB308 60%, #A16207)",
                }}
              ></span>{" "}
              <p className="hud" style={{ margin: "18px 0 0", fontSize: "22px", fontWeight: "700" }}>
                Rewards keep people going
              </p>
              <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#A3A3A3" }}>
                Streaks, XP and achievements bring learners back more than reminders do.
              </p>
            </div>
            <div
              className="glowp"
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "#141416",
                border: "1px solid #3F3F46",
                animationDelay: "-2s",
              }}
            >
              {" "}
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "52px",
                  height: "58px",
                  clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                  background: "linear-gradient(135deg, #D4D4D8, #71717A 60%, #27272A)",
                }}
              ></span>{" "}
              <p className="hud" style={{ margin: "18px 0 0", fontSize: "22px", fontWeight: "700" }}>
                Products compete
              </p>
              <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#A3A3A3" }}>
                Studio, Learn Hub and Capital fought for the same space instead of sharing it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Personas slug="ayan" compact />
      {/* LV3 SKILL TREE */}
      <section style={{ padding: "110px 24px", borderTop: "1px solid #1F1F23" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
            Level 03 · Skill tree
          </p>
          <h2
            className="hud"
            style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
          >
            The structure, as a skill tree.
          </h2>
          <div style={{ marginTop: "40px", overflowX: "auto" }}>
            <svg
              viewBox="0 0 1200 460"
              width="100%"
              style={{ minWidth: "860px" }}
              role="img"
              aria-label="Skill tree: Home dashboard branches into Learn Hub, Studio IA, Bridge Capital and Profile, each with its own sub-sections."
            >
              <g fontFamily="Chakra Petch" fontSize="16" fontWeight="600" textAnchor="middle">
                <g stroke="#3B82F6" strokeWidth="2" fill="none">
                  <path className="edge" d="M600 90 C600 150 180 140 180 200"></path>
                  <path className="edge" d="M600 90 C600 150 450 150 450 200"></path>
                  <path className="edge" d="M600 90 C600 150 750 150 750 200"></path>
                  <path className="edge" d="M600 90 C600 150 1020 140 1020 200"></path>
                </g>
                <g stroke="#3F3F46" strokeWidth="2" fill="none">
                  <path d="M180 248 V290 M180 290 H110 V320 M180 290 H250 V320 M180 290 V320"></path>
                  <path d="M450 248 V320"></path>
                  <path d="M750 248 V320"></path>
                  <path d="M1020 248 V290 M1020 290 H950 V320 M1020 290 H1090 V320"></path>
                </g>
                <rect x="490" y="40" width="220" height="50" rx="10" fill="#EAB308"></rect>
                <text x="600" y="71" fill="#0A0A0A">
                  HOME · DASHBOARD
                </text>
                <g fill="#141416" stroke="#3B82F6" strokeWidth="2">
                  <rect x="90" y="200" width="180" height="48" rx="10"></rect>
                  <rect x="360" y="200" width="180" height="48" rx="10"></rect>
                  <rect x="660" y="200" width="180" height="48" rx="10"></rect>
                  <rect x="930" y="200" width="180" height="48" rx="10"></rect>
                </g>
                <g fill="#F5F5F5">
                  <text x="180" y="230">
                    LEARN HUB
                  </text>
                  <text x="450" y="230">
                    STUDIO IA
                  </text>
                  <text x="750" y="230">
                    BRIDGE CAPITAL
                  </text>
                  <text x="1020" y="230">
                    PROFILE
                  </text>
                </g>
                <g fill="#111113" stroke="#3F3F46" strokeWidth="1.5">
                  <rect x="60" y="320" width="100" height="40" rx="8"></rect>
                  <rect x="130" y="380" width="100" height="40" rx="8"></rect>
                  <rect x="200" y="320" width="100" height="40" rx="8"></rect>
                  <rect x="390" y="320" width="120" height="40" rx="8"></rect>
                  <rect x="690" y="320" width="120" height="40" rx="8"></rect>
                  <rect x="900" y="320" width="100" height="40" rx="8"></rect>
                  <rect x="1040" y="320" width="100" height="40" rx="8"></rect>
                </g>
                <g fill="#A3A3A3" fontSize="13" fontFamily="Manrope" fontWeight="500">
                  <text x="110" y="345">
                    Paths
                  </text>
                  <text x="180" y="405">
                    Challenges
                  </text>
                  <text x="250" y="345">
                    Courses
                  </text>
                  <text x="450" y="345">
                    DataLab
                  </text>
                  <text x="750" y="345">
                    Opportunities
                  </text>
                  <text x="950" y="345">
                    Rewards
                  </text>
                  <text x="1090" y="345">
                    Ranking
                  </text>
                </g>
              </g>
            </svg>
          </div>{" "}
          <div
            style={{
              marginTop: "60px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "10px",
            }}
          >
            <div style={{ padding: "18px", borderRadius: "12px", background: "#141416", border: "1px solid #27272A" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#60A5FA" }}>
                step 1
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Open the app</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "#141416", border: "1px solid #27272A" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#60A5FA" }}>
                step 2
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>See next lesson</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "#141416", border: "1px solid #27272A" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#60A5FA" }}>
                step 3
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Continue course</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "#141416", border: "1px solid #27272A" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#60A5FA" }}>
                step 4
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Practice challenge</p>
            </div>
            <div style={{ padding: "18px", borderRadius: "12px", background: "#141416", border: "1px solid #27272A" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#60A5FA" }}>
                step 5
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Earn XP</p>
            </div>
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #EAB308, #A16207)",
                color: "#0A0A0A",
              }}
            >
              <p className="hud" style={{ margin: "0", fontSize: "11px" }}>
                reward
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "800" }}>Streak kept</p>
            </div>
          </div>
        </div>
      </section>
      {/* LV4 BLUEPRINT */}
      <section style={{ padding: "110px 24px", background: "#0F0F11", borderTop: "1px solid #1F1F23" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
            Level 04 · Blueprint
          </p>
          <h2
            className="hud"
            style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
          >
            The dashboard, rebuilt around one card.
          </h2>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  height: "280px",
                  padding: "16px",
                  border: "1px dashed #52525B",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span style={{ height: "90px", border: "1.5px dashed #EAB308", borderRadius: "8px" }}></span>{" "}
                <div style={{ display: "flex", gap: "10px", flex: "1" }}>
                  <span style={{ flex: "1", border: "1px dashed #52525B", borderRadius: "8px" }}></span>
                  <span style={{ flex: "1", border: "1px dashed #52525B", borderRadius: "8px" }}></span>
                  <span style={{ flex: "1", border: "1px dashed #52525B", borderRadius: "8px" }}></span>
                </div>
              </div>
              <figcaption
                className="hud"
                style={{ marginTop: "14px", fontSize: "13px", letterSpacing: ".1em", color: "#A3A3A3" }}
              >
                Sketch · continue card on top
              </figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  height: "280px",
                  padding: "16px",
                  background: "#18181B",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span style={{ height: "90px", background: "#27272A", borderRadius: "8px" }}></span>{" "}
                <div style={{ display: "flex", gap: "10px", flex: "1" }}>
                  <span style={{ flex: "2", background: "#27272A", borderRadius: "8px" }}></span>
                  <span style={{ flex: "1", background: "#27272A", borderRadius: "8px" }}></span>
                </div>
              </div>
              <figcaption
                className="hud"
                style={{ marginTop: "14px", fontSize: "13px", letterSpacing: ".1em", color: "#A3A3A3" }}
              >
                Wireframe · rewards on the side
              </figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div style={{ height: "280px", borderRadius: "12px", overflow: "hidden", border: "1px solid #27272A" }}>
                <img
                  src="/img/2cc3ba8f959b532ce304e1a2b7a94d40.jpg"
                  alt="Ayan Bridge dashboard"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <figcaption
                className="hud"
                style={{ marginTop: "14px", fontSize: "13px", letterSpacing: ".1em", color: "#EAB308" }}
              >
                Final · shipped
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* LV5 LOADOUT */}
      <section style={{ padding: "110px 24px", borderTop: "1px solid #1F1F23" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
            Level 05 · Loadout
          </p>
          <h2
            className="hud"
            style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
          >
            Gold for rewards. Blue for progress.
          </h2>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
            <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #27272A" }}>
              <div style={{ height: "130px", background: "#0A0A0A" }}></div>
              <div style={{ padding: "16px", background: "#141416" }}>
                <p className="hud" style={{ margin: "0", fontWeight: "700" }}>
                  Night
                </p>
                <p className="mono" style={{ margin: "4px 0 0", fontSize: "12px", color: "#A3A3A3" }}>
                  #0A0A0A · focus
                </p>
              </div>
            </div>
            <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #27272A" }}>
              <div
                style={{ height: "130px", background: "linear-gradient(135deg, #FDE68A, #EAB308 55%, #A16207)" }}
              ></div>
              <div style={{ padding: "16px", background: "#141416" }}>
                <p className="hud" style={{ margin: "0", fontWeight: "700" }}>
                  Trophy gold
                </p>
                <p className="mono" style={{ margin: "4px 0 0", fontSize: "12px", color: "#A3A3A3" }}>
                  #EAB308 · rewards
                </p>
              </div>
            </div>
            <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #27272A" }}>
              <div
                style={{ height: "130px", background: "linear-gradient(135deg, #93C5FD, #3B82F6 55%, #1D4ED8)" }}
              ></div>
              <div style={{ padding: "16px", background: "#141416" }}>
                <p className="hud" style={{ margin: "0", fontWeight: "700" }}>
                  XP blue
                </p>
                <p className="mono" style={{ margin: "4px 0 0", fontSize: "12px", color: "#A3A3A3" }}>
                  #3B82F6 · progress, actions
                </p>
              </div>
            </div>
            <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #27272A" }}>
              <div style={{ height: "130px", background: "#A3A3A3" }}></div>
              <div style={{ padding: "16px", background: "#141416" }}>
                <p className="hud" style={{ margin: "0", fontWeight: "700" }}>
                  Smoke
                </p>
                <p className="mono" style={{ margin: "4px 0 0", fontSize: "12px", color: "#A3A3A3" }}>
                  #A3A3A3 · secondary
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "14px",
            }}
          >
            <div style={{ padding: "28px", borderRadius: "14px", background: "#141416", border: "1px solid #27272A" }}>
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#A3A3A3" }}>
                product UI — Inter (shown in the app)
              </p>
              <p
                style={{
                  margin: "10px 0 0",
                  fontFamily: "Inter, 'Manrope', sans-serif",
                  fontSize: "34px",
                  fontWeight: "700",
                }}
              >
                React 19 & Server Components
              </p>
            </div>
            <div
              style={{
                padding: "28px",
                borderRadius: "14px",
                background: "#141416",
                border: "1px solid #27272A",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#A3A3A3" }}>
                components
              </p>
              <span
                style={{
                  padding: "12px 18px",
                  borderRadius: "8px",
                  background: "#2563EB",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Continuer le cours
              </span>
              <span
                style={{
                  padding: "11px 17px",
                  borderRadius: "8px",
                  border: "1px solid #3F3F46",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                S'entraîner
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* LV6 BOSS LEVEL: solution */}
      <section
        style={{
          padding: "110px 24px 0",
          background: "radial-gradient(70% 60% at 50% 30%, rgba(37,99,235,.22), transparent 70%), #0A0A0A",
          borderTop: "1px solid #1F1F23",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
            Level 06 · Boss level
          </p>
          <h2
            className="hud"
            style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
          >
            The dashboard is the product.
          </h2>
        </div>
        <img
          src="/img/fb92d86f3aee60e203ef6d7d4653bad2.webp"
          alt="3D render: Ayan Bridge dashboard on a laptop and a phone"
          style={{ display: "block", width: "100%", maxWidth: "1400px", margin: "10px auto 0", height: "auto" }}
        />
      </section>
      <section style={{ padding: "0 24px 110px", background: "#0A0A0A" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <img
            src="/img/fb099216cb045ccd6af8510dccd38aa6.webp"
            alt="3D render: achievements, learning paths and DataLab on a laptop"
            style={{ flex: "2 1 520px", minWidth: "0", width: "100%", height: "auto" }}
          />
          <div style={{ flex: "1 1 280px", minWidth: "0", textAlign: "center" }}>
            <div className="trophy" role="img" aria-label="Rotating 3D gold trophy"></div>
            <p
              className="hud"
              style={{ margin: "10px 0 0", fontSize: "13px", letterSpacing: ".12em", color: "#EAB308" }}
            >
              Achievements, made tangible
            </p>
          </div>
        </div>
      </section>
      {/* LV7 VICTORY */}
      <section
        style={{
          padding: "110px 24px",
          background: "linear-gradient(180deg, #0A0A0A, #141008)",
          borderTop: "1px solid #1F1F23",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hud" style={{ margin: "0", fontSize: "13px", letterSpacing: ".2em", color: "#EAB308" }}>
            Level 07 · Victory
          </p>
          <h2
            className="hud"
            style={{ margin: "16px 0 0", fontSize: "clamp(40px, 5vw, 70px)", lineHeight: ".95", fontWeight: "700" }}
          >
            Quest complete.
          </h2>
          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            <div style={{ padding: "26px", borderRadius: "16px", background: "#141416", border: "1px solid #3F3F46" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#EAB308", letterSpacing: ".12em" }}>
                Unlocked
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "20px", fontWeight: "700" }}>Next step on top</p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#A3A3A3" }}>
                The current course and next lesson open the dashboard.
              </p>
            </div>
            <div style={{ padding: "26px", borderRadius: "16px", background: "#141416", border: "1px solid #3F3F46" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#EAB308", letterSpacing: ".12em" }}>
                Unlocked
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "20px", fontWeight: "700" }}>Progress you can see</p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#A3A3A3" }}>
                XP, rankings and achievements live on the home screen.
              </p>
            </div>
            <div style={{ padding: "26px", borderRadius: "16px", background: "#141416", border: "1px solid #3F3F46" }}>
              <p className="hud" style={{ margin: "0", fontSize: "11px", color: "#EAB308", letterSpacing: ".12em" }}>
                Unlocked
              </p>
              <p style={{ margin: "8px 0 0", fontSize: "20px", fontWeight: "700" }}>One navigation</p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#A3A3A3" }}>
                Learn Hub, Studio IA and Capital share one bar.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "34px", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
            {" "}
            <span
              className="hud"
              style={{ padding: "8px 12px", border: "1px solid #3F3F46", borderRadius: "6px", fontSize: "12px" }}
            >
              Next.js
            </span>{" "}
            <span
              className="hud"
              style={{ padding: "8px 12px", border: "1px solid #3F3F46", borderRadius: "6px", fontSize: "12px" }}
            >
              React
            </span>{" "}
            <span
              className="hud"
              style={{ padding: "8px 12px", border: "1px solid #3F3F46", borderRadius: "6px", fontSize: "12px" }}
            >
              TypeScript
            </span>{" "}
            <span
              className="hud"
              style={{ padding: "8px 12px", border: "1px solid #3F3F46", borderRadius: "6px", fontSize: "12px" }}
            >
              Tailwind CSS
            </span>{" "}
            <a
              href="https://alan-tau-bay.vercel.app/home"
              className="hud"
              style={{
                marginLeft: "auto",
                display: "inline-flex",
                alignItems: "center",
                minHeight: "48px",
                padding: "0 22px",
                borderRadius: "8px",
                background: "#EAB308",
                color: "#0A0A0A",
                fontWeight: "700",
                textDecoration: "none",
                letterSpacing: ".06em",
              }}
            >
              Play the demo ▸
            </a>
          </div>
          <p className="mono" style={{ margin: "30px 0 0", fontSize: "11px", color: "#71717A" }}>
            3D renders made for this case study.
          </p>
        </div>
      </section>
    </div>
  );
}
