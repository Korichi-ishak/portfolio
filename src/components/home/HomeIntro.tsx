import Link from "next/link";
import { dict, localize, type Lang } from "@/i18n";


/* Generated from the validated maquette (Main.dc.html), then edited by hand. */
/** Home intro: hero + about (from the validated maquette). */
export default function HomeIntro({ lang = "en" }: { lang?: Lang }) {
  const t = dict[lang];
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
        id="intro"
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
            crm · erp · web · mobile · full-stack
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
              <span className="sr-only">Ishak </span>Korichi<span aria-hidden="true" style={{ color: "#8E8C84", fontWeight: "600" }}>’26</span>
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
            {t.hero.lead}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "34px" }}>
            <a
              href="#path"
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
              {t.hero.path}
            </a>
            <Link
              href={localize(lang, "/work")}
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
              {t.hero.projects}
            </Link>
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
              {t.hero.tags[0]}
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
              {t.hero.tags[1]}
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
              {t.hero.tags[2]}
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
              bottom: "6px",
              left: "44%",
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
                fill="#C8302A"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            <span
              style={{
                marginTop: "20px",
                background: "#C8302A",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                padding: "8px 14px",
                borderRadius: "4px 14px 14px 14px",
                whiteSpace: "nowrap",
              }}
            >
              {t.hero.you}
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
                alt={t.about.portrait}
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
            <span aria-hidden="true"
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
              {t.about.kicker}
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
              {t.about.big}
            </p>
            <p
              style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.55", color: "#4A4943", maxWidth: "700px" }}
            >
              {t.about.body}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px", marginTop: "30px" }}>
              {" "}
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#6B6A64" }}>
                {t.about.clients}
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
                  {t.about.badge}
                </span>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
