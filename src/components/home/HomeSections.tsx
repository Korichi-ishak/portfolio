import type { ReactNode } from "react";

/* Generated from the validated maquette (Main.dc.html), then edited by hand. */
const skills = [
  { k: "languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "R", "Java", "C"] },
  { k: "front-end", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"] },
  { k: "back-end & data", items: ["Node.js", "PostgreSQL", "Supabase"] },
  { k: "mobile & cms", items: ["React Native", "WordPress"] },
  { k: "tools", items: ["Git", "Linux"] },
];

/** Home page: hero, about, the work (passed in), experience and contact. */
export default function HomeSections({ work }: { work: ReactNode }) {
  return (
    <div
      className="st st-home"
      style={{
        fontFamily: "'Bricolage Grotesque', 'Helvetica Neue', sans-serif",
        color: "#111110",
        background: "#F4F3EF",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <section
        id="top"
        style={{
          position: "relative",
          backgroundColor: "#F4F3EF",
          backgroundImage: "radial-gradient(#CFCDC5 1.1px, transparent 1.3px)",
          backgroundSize: "24px 24px",
          padding: "110px 24px 120px",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "1240px",
            margin: "0 auto",
            minHeight: "540px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 34px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#6B6A64",
              letterSpacing: "0.04em",
            }}
          >
            crm · erp · web · mobile — Annaba → Paris
          </p>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              padding: "4px 22px 10px",
              border: "1.5px solid #2B4BFF",
            }}
          >
            {" "}
            <span
              style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                bottom: "-5px",
                right: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                top: "-30px",
                left: "-2px",
                background: "#2B4BFF",
                color: "#fff",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                padding: "4px 8px",
                borderRadius: "4px 4px 4px 0",
                whiteSpace: "nowrap",
              }}
            >
              H1 · Fill × Hug
            </span>{" "}
            <h1
              style={{
                margin: "0",
                fontSize: "clamp(58px, 11vw, 176px)",
                lineHeight: "0.95",
                fontWeight: "700",
                letterSpacing: "-0.055em",
              }}
            >
              Korichi<span style={{ color: "#B9B7AF", fontWeight: "600" }}>’26</span>
            </h1>
          </div>
          <p
            style={{
              margin: "40px 0 0",
              maxWidth: "640px",
              fontSize: "clamp(18px, 2vw, 23px)",
              lineHeight: "1.45",
              color: "#3A3934",
            }}
          >
            Full-stack developer. I build the CRMs, ERPs and internal platforms that replace spreadsheets and paper.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "34px" }}>
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "52px",
                padding: "0 28px",
                borderRadius: "999px",
                background: "#111110",
                color: "#F4F3EF",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              See the work
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "52px",
                padding: "0 28px",
                borderRadius: "999px",
                border: "1.5px solid #111110",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Get in touch
            </a>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "14px", right: "3%" }}>
            {" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                padding: "8px 16px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Full-stack
            </span>{" "}
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "47%", left: "0" }}>
            {" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                padding: "8px 16px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              CRM / ERP
            </span>{" "}
          </div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: "24px", right: "8%" }}>
            {" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                padding: "8px 16px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Assistive tech
            </span>{" "}
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "6%", left: "9%" }}>
            {" "}
            <span
              style={{
                display: "inline-block",
                padding: "7px 12px",
                background: "#111110",
                color: "#F4F3EF",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                borderRadius: "6px",
              }}
            >
              {"<"}Hero /{">"}
            </span>{" "}
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "56%",
              left: "60%",
              display: "flex",
              alignItems: "flex-start",
              gap: "2px",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M3 2l7.5 19 2.6-7.9L21 10.5z"
                fill="#2B4BFF"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            <span
              style={{
                marginTop: "20px",
                background: "#2B4BFF",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                padding: "8px 14px",
                borderRadius: "4px 14px 14px 14px",
                whiteSpace: "nowrap",
              }}
            >
              Ishak Korichi
            </span>{" "}
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "64px",
              left: "13%",
              display: "flex",
              alignItems: "flex-start",
              gap: "2px",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M3 2l7.5 19 2.6-7.9L21 10.5z"
                fill="#E5392B"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            <span
              style={{
                marginTop: "20px",
                background: "#E5392B",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                padding: "8px 14px",
                borderRadius: "4px 14px 14px 14px",
                whiteSpace: "nowrap",
              }}
            >
              you?
            </span>{" "}
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section
        id="about"
        style={{
          background: "#FFFFFF",
          borderTop: "1px solid #E2E0D9",
          borderBottom: "1px solid #E2E0D9",
          padding: "96px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "56px",
          }}
        >
          <div style={{ flex: "0 0 auto", position: "relative", margin: "0 auto" }}>
            <div style={{ position: "relative", padding: "10px", border: "1.5px solid #2B4BFF" }}>
              {" "}
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "#fff",
                  border: "1.5px solid #2B4BFF",
                  boxSizing: "border-box",
                }}
              ></span>{" "}
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "#fff",
                  border: "1.5px solid #2B4BFF",
                  boxSizing: "border-box",
                }}
              ></span>{" "}
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "#fff",
                  border: "1.5px solid #2B4BFF",
                  boxSizing: "border-box",
                }}
              ></span>{" "}
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  right: "-5px",
                  width: "8px",
                  height: "8px",
                  background: "#fff",
                  border: "1.5px solid #2B4BFF",
                  boxSizing: "border-box",
                }}
              ></span>{" "}
              <img
                src="/img/87beb1500b044cded092e095374dd38a.jpg"
                alt="Portrait of Ishak Korichi"
                style={{
                  display: "block",
                  width: "300px",
                  height: "360px",
                  borderRadius: "18px",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                }}
              />
            </div>{" "}
            <span
              style={{
                position: "absolute",
                bottom: "-28px",
                left: "0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#2B4BFF",
              }}
            >
              portrait.jpg
            </span>{" "}
          </div>
          <div style={{ flex: "999 1 520px", minWidth: "0" }}>
            <p
              style={{
                margin: "0 0 18px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#6B6A64",
              }}
            >
              01 — about
            </p>
            <p
              style={{
                margin: "0",
                fontSize: "clamp(22px, 2.6vw, 34px)",
                lineHeight: "1.3",
                fontWeight: "500",
                letterSpacing: "-0.015em",
              }}
            >
              I build software for businesses that still ran on spreadsheets, paper forms and WhatsApp — rental
              agencies, driving schools, dealerships, a language institute.
            </p>
            <p
              style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.55", color: "#4A4943", maxWidth: "700px" }}
            >
              I'm from Annaba, Algeria, now based in the Paris area. I hold an M.Sc. in Big Data Management and
              Analysis, and I'm studying assistive technology at Université Paris 8 — how software actually reaches the
              people it's built for.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px", marginTop: "30px" }}>
              {" "}
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6B6A64" }}>
                clients in Algeria · France · Canada · DR Congo
              </span>{" "}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ transform: "rotate(-20deg)" }}
                >
                  <path
                    d="M3 2l7.5 19 2.6-7.9L21 10.5z"
                    fill="#2B4BFF"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <span
                  style={{
                    background: "#2B4BFF",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "600",
                    padding: "9px 16px",
                    borderRadius: "4px 14px 14px 14px",
                  }}
                >
                  Software that replaced a filing cabinet
                </span>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1240px",
            margin: "72px auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            borderTop: "1px solid #E2E0D9",
          }}
        >
          <a
            href="mailto:ishakkorichi09@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "64px",
              padding: "18px 0",
              fontSize: "16px",
              borderBottom: "1px solid #E2E0D9",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="M3 7l9 6 9-6"></path>
            </svg>{" "}
            ishakkorichi09@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ishak-korichi/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "64px",
              padding: "18px 0",
              fontSize: "16px",
              borderBottom: "1px solid #E2E0D9",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="3"></rect>
              <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"></path>
            </svg>{" "}
            <span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Korichi-ishak"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "64px",
              padding: "18px 0",
              fontSize: "16px",
              borderBottom: "1px solid #E2E0D9",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"></path>
            </svg>{" "}
            <span style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>GitHub</span>
          </a>{" "}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "64px",
              padding: "18px 0",
              fontSize: "16px",
              borderBottom: "1px solid #E2E0D9",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"></path>
              <circle cx="12" cy="9.5" r="2.5"></circle>
            </svg>{" "}
            Paris area, France
          </span>{" "}
        </div>
      </section>
      {work}
      {/* CV */}
      <section id="cv" style={{ padding: "104px 24px", background: "#F4F3EF" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "56px 64px",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 30px", fontSize: "34px", fontWeight: "600", letterSpacing: "-0.025em" }}>
              Education
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Université Paris 8</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    2026 – 2028
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  M.Sc. MIASHS — Assistive Technology
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Université Badji Mokhtar</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    2024 – 2026
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  M.Sc. Big Data Management and Analysis
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Université Badji Mokhtar</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    2021 – 2024
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  B.Sc. Computer Systems
                </p>
              </div>
            </div>
            <h2 style={{ margin: "56px 0 30px", fontSize: "34px", fontWeight: "600", letterSpacing: "-0.025em" }}>
              Recognition
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "17px", fontWeight: "600" }}>University Startup Label — Wassalni</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#6B6A64" }}>
                    2024
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  Final-year project selected under the ministerial startup framework
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "17px", fontWeight: "600" }}>TCF — French (B2)</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#6B6A64" }}>
                    2025
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  France Éducation International
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "17px", fontWeight: "600" }}>Emergency Response (PSE)</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#6B6A64" }}>
                    2026
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  Red Crescent volunteer, team-based first responder
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ margin: "0 0 30px", fontSize: "34px", fontWeight: "600", letterSpacing: "-0.025em" }}>
              Experience
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>FDS Institut</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    May – Sep 2026
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  Head of Digital Transformation — CRM, ERP and e-learning platform
                </p>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "#2B4BFF",
                  }}
                >
                  Next.js · TypeScript · Supabase · PostgreSQL
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Banque Nationale de l'Habitat</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Apr – May 2026
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>Data Analyst</p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>PROGIX</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Jun 2025 – May 2026
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  Full-Stack Developer — Montreal agency, remote
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Freelance</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Mar 2023 – now
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  Full-Stack & WordPress Developer — clients in Algeria, France, Canada, DR Congo
                </p>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "#2B4BFF",
                  }}
                >
                  Next.js · React · Tailwind · WordPress
                </p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Aurafolio</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      color: "#6B6A64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    – Sep 2024
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#4A4943" }}>
                  Full-Stack Developer — IT agency, Algeria
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ margin: "0 0 30px", fontSize: "34px", fontWeight: "600", letterSpacing: "-0.025em" }}>
              Skills
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {skills.map((g) => (
                <div key={g.k}>
                  <p style={{ margin: "0 0 10px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#6B6A64" }}>{g.k}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {g.items.map((s) => (
                      <span key={s} style={{ padding: "7px 13px", border: "1px solid #D6D4CC", borderRadius: "999px", fontSize: "14px", background: "#FFFFFF" }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section
        id="contact"
        style={{
          position: "relative",
          backgroundColor: "#F4F3EF",
          backgroundImage: "radial-gradient(#CFCDC5 1.1px, transparent 1.3px)",
          backgroundSize: "24px 24px",
          padding: "130px 24px 60px",
          borderTop: "1px solid #E2E0D9",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 30px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#6B6A64",
            }}
          >
            05 — contact
          </p>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              padding: "8px 24px 14px",
              border: "1.5px solid #2B4BFF",
            }}
          >
            {" "}
            <span
              style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                bottom: "-5px",
                right: "-5px",
                width: "8px",
                height: "8px",
                background: "#fff",
                border: "1.5px solid #2B4BFF",
                boxSizing: "border-box",
              }}
            ></span>{" "}
            <h2
              style={{
                margin: "0",
                fontSize: "clamp(44px, 7.5vw, 112px)",
                lineHeight: "0.98",
                fontWeight: "700",
                letterSpacing: "-0.05em",
              }}
            >
              Get in touch<span style={{ color: "#B9B7AF" }}>.</span>
            </h2>
          </div>
          <p style={{ margin: "34px 0 0", maxWidth: "540px", fontSize: "19px", lineHeight: "1.5", color: "#3A3934" }}>
            Looking for a full-stack developer who ships end to end? Send me an email and tell me about your project.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "34px" }}>
            <a
              href="mailto:ishakkorichi09@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                minHeight: "56px",
                padding: "0 30px",
                borderRadius: "999px",
                background: "#111110",
                color: "#F4F3EF",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Email me{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M9 7h8v8"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ishak-korichi/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "56px",
                padding: "0 30px",
                borderRadius: "999px",
                border: "1.5px solid #111110",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              LinkedIn
            </a>
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "70px",
              right: "11%",
              display: "flex",
              alignItems: "flex-start",
              gap: "2px",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M3 2l7.5 19 2.6-7.9L21 10.5z"
                fill="#E5392B"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            <span
              style={{
                marginTop: "20px",
                background: "#E5392B",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                padding: "8px 14px",
                borderRadius: "4px 14px 14px 14px",
                whiteSpace: "nowrap",
              }}
            >
              you
            </span>{" "}
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "150px",
              left: "9%",
              display: "flex",
              alignItems: "flex-start",
              gap: "2px",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M3 2l7.5 19 2.6-7.9L21 10.5z"
                fill="#2B4BFF"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            <span
              style={{
                marginTop: "20px",
                background: "#2B4BFF",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                padding: "8px 14px",
                borderRadius: "4px 14px 14px 14px",
                whiteSpace: "nowrap",
              }}
            >
              Ishak
            </span>{" "}
          </div>
          <footer
            style={{
              width: "100%",
              marginTop: "120px",
              paddingTop: "24px",
              borderTop: "1px solid #DAD8D0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "12px",
              fontSize: "14px",
              color: "#6B6A64",
            }}
          >
            {" "}
            <span>© 2026 Ishak Korichi</span>{" "}
            <span style={{ display: "flex", gap: "22px" }}>
              <a href="https://www.linkedin.com/in/ishak-korichi/" style={{ color: "#3A3934" }}>
                LinkedIn
              </a>
              <a href="https://github.com/Korichi-ishak" style={{ color: "#3A3934" }}>
                GitHub
              </a>
              <a href="#top" style={{ color: "#3A3934" }}>
                Back to top ↑
              </a>
            </span>{" "}
          </footer>
        </div>
      </section>
    </div>
  );
}
