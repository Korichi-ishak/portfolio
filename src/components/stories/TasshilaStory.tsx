import { CaseFile, Personas } from "@/components/case/blocks";

/* Generated from the validated maquette (Story-tasshila.dc.html), then edited by hand. */
export default function TasshilaStory() {
  return (
    <div
      className="st st-tasshila"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: "#0F172A",
        background: "#F6F3EC",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" precedence="default" />
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "70px 24px 80px",
          background: "radial-gradient(80% 80% at 78% 35%, #D5F7EE 0%, #F6F3EC 62%)",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            <p className="mono" style={{ margin: "0 0 22px", fontSize: "13px", color: "#64748B" }}>
              a story in seven chapters
            </p>
            <h1
              style={{
                margin: "0",
                fontSize: "clamp(64px, 9vw, 136px)",
                lineHeight: ".88",
                fontWeight: "800",
                letterSpacing: "-0.05em",
              }}
            >
              Tass<span style={{ color: "#0F766E" }}>hila</span>
            </h1>
            <p className="hand" style={{ margin: "12px 0 0", fontSize: "clamp(34px, 3.8vw, 50px)", color: "#F97316" }}>
              from the drawer to the timeline
            </p>
            <p style={{ margin: "22px 0 0", maxWidth: "470px", fontSize: "18px", lineHeight: "1.6", color: "#334155" }}>
              My master's thesis. Lab reports arrive on paper, full of names, units and ranges nobody explains — then
              they disappear into a drawer. Tasshila reads a report from a single photo, explains each value and keeps
              them as a history.
            </p>
            <CaseFile slug="tasshila" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
              {" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#CCFBF1", fontSize: "12px" }}>
                Literature review
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#CCFBF1", fontSize: "12px" }}>
                Patient interviews
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#CCFBF1", fontSize: "12px" }}>
                User flow
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#CCFBF1", fontSize: "12px" }}>
                Data pipeline
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#CCFBF1", fontSize: "12px" }}>
                Machine learning
              </span>{" "}
            </div>
          </div>{" "}
          <div aria-hidden="true" style={{ flex: "1 1 580px", minWidth: "0", position: "relative", height: "580px" }}>
            {" "}
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                height: "120px",
                borderRadius: "50% 50% 20px 20px / 30% 30% 20px 20px",
                background: "linear-gradient(#E8E1D2, #DCD3C1)",
              }}
            ></div>{" "}
            <div
              style={{
                position: "absolute",
                left: "2%",
                bottom: "70px",
                width: "230px",
                height: "150px",
                background: "#E9D9B5",
                borderRadius: "4px",
                transform: "rotate(-10deg)",
                boxShadow: "0 20px 30px -18px rgba(0,0,0,.4)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  height: "70px",
                  background: "#DFCDA4",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              ></div>{" "}
              <span
                className="mono"
                style={{ position: "absolute", left: "16px", bottom: "16px", fontSize: "11px", color: "#6B5B3A" }}
              >
                LABORATOIRE · résultats
              </span>{" "}
            </div>{" "}
            <div
              className="paper"
              style={{
                position: "absolute",
                left: "14%",
                top: "40px",
                width: "300px",
                padding: "22px 22px 26px",
                transform: "rotate(-5deg)",
                borderRadius: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid #0F172A",
                  paddingBottom: "8px",
                }}
              >
                <b style={{ fontSize: "13px", letterSpacing: ".08em" }}>BILAN BIOLOGIQUE</b>
                <span
                  style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #94A3B8" }}
                ></span>
              </div>
              <div
                className="mono"
                style={{
                  marginTop: "12px",
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr",
                  gap: "9px 6px",
                  fontSize: "10px",
                  color: "#334155",
                }}
              >
                {" "}
                <span style={{ color: "#94A3B8" }}>test</span>
                <span style={{ color: "#94A3B8" }}>unit</span>
                <span style={{ color: "#94A3B8" }}>range</span> <span>Glycémie</span>
                <span>g/L</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
                <span className="hl">Cholestérol</span>
                <span>g/L</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
                <span>Hémoglobine</span>
                <span>g/dL</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
                <span>Créatinine</span>
                <span>mg/L</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
                <span className="hl">Vitamine D</span>
                <span>ng/mL</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
                <span>Ferritine</span>
                <span>µg/L</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
                <span>TSH</span>
                <span>mUI/L</span>
                <span
                  style={{ height: "6px", marginTop: "4px", background: "#CBD5E1", borderRadius: "3px" }}
                ></span>{" "}
              </div>
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ height: "4px", width: "90%", background: "#E2E8F0" }}></span>
                <span style={{ height: "4px", width: "70%", background: "#E2E8F0" }}></span>
              </div>{" "}
              <span
                className="hand"
                style={{
                  position: "absolute",
                  right: "70px",
                  top: "-46px",
                  fontSize: "30px",
                  color: "#F97316",
                  transform: "rotate(-4deg)",
                }}
              >
                is this bad??
              </span>{" "}
            </div>{" "}
            <div
              style={{
                position: "absolute",
                left: "8%",
                top: "360px",
                width: "150px",
                height: "24px",
                borderRadius: "6px 12px 12px 6px",
                background: "linear-gradient(#FB923C, #EA580C)",
                transform: "rotate(28deg)",
                boxShadow: "0 10px 14px -8px rgba(0,0,0,.4)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: "-16px",
                  top: "5px",
                  width: "18px",
                  height: "14px",
                  background: "#FDBA74",
                  clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0 100%)",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "40px",
                  borderRadius: "6px 0 0 6px",
                  background: "#C2410C",
                }}
              ></span>
            </div>{" "}
            <div
              className="floaty"
              style={{
                "--r": "6deg",
                position: "absolute",
                right: "5%",
                top: "0",
                width: "190px",
                padding: "8px",
                borderRadius: "34px",
                background: "#0F172A",
                boxShadow: "0 50px 70px -30px rgba(15,23,42,.6)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "380px",
                  borderRadius: "27px",
                  overflow: "hidden",
                  background: "#0B3B37",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "14%",
                    right: "14%",
                    top: "12%",
                    bottom: "22%",
                    background: "#FFFEFA",
                    borderRadius: "2px",
                    transform: "rotate(-3deg)",
                    padding: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      display: "block",
                      height: "6px",
                      width: "60%",
                      background: "#0F172A",
                      marginBottom: "10px",
                    }}
                  ></span>{" "}
                  <span style={{ display: "block", height: "4px", margin: "7px 0", background: "#CBD5E1" }}></span>
                  <span style={{ display: "block", height: "4px", margin: "7px 0", background: "#FDBA74" }}></span>
                  <span style={{ display: "block", height: "4px", margin: "7px 0", background: "#CBD5E1" }}></span>
                  <span style={{ display: "block", height: "4px", margin: "7px 0", background: "#CBD5E1" }}></span>
                  <span style={{ display: "block", height: "4px", margin: "7px 0", background: "#FDBA74" }}></span>
                  <span style={{ display: "block", height: "4px", margin: "7px 0", background: "#CBD5E1" }}></span>{" "}
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "10%",
                    top: "9%",
                    width: "24px",
                    height: "24px",
                    borderLeft: "3px solid #5EEAD4",
                    borderTop: "3px solid #5EEAD4",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    right: "10%",
                    top: "9%",
                    width: "24px",
                    height: "24px",
                    borderRight: "3px solid #5EEAD4",
                    borderTop: "3px solid #5EEAD4",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "10%",
                    bottom: "19%",
                    width: "24px",
                    height: "24px",
                    borderLeft: "3px solid #5EEAD4",
                    borderBottom: "3px solid #5EEAD4",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    right: "10%",
                    bottom: "19%",
                    width: "24px",
                    height: "24px",
                    borderRight: "3px solid #5EEAD4",
                    borderBottom: "3px solid #5EEAD4",
                  }}
                ></span>{" "}
                <span
                  className="scan"
                  style={{
                    position: "absolute",
                    left: "8%",
                    right: "8%",
                    height: "3px",
                    background: "#5EEAD4",
                    boxShadow: "0 0 18px 4px rgba(94,234,212,.7)",
                  }}
                ></span>{" "}
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "18%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(15,23,42,.6)",
                  }}
                >
                  <span
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      border: "4px solid #fff",
                      boxSizing: "border-box",
                      background: "#14B8A6",
                    }}
                  ></span>
                </div>
              </div>
            </div>{" "}
            <span
              className="chipfly"
              style={{
                "--dx": "120px",
                "--dy": "-90px",
                position: "absolute",
                left: "44%",
                top: "300px",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#0F766E",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "700",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,.5)",
              }}
            >
              Glucose · in range
            </span>{" "}
            <span
              className="chipfly"
              style={{
                "--dx": "140px",
                "--dy": "-40px",
                animationDelay: "1.4s",
                position: "absolute",
                left: "40%",
                top: "360px",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#F97316",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "700",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,.5)",
              }}
            >
              Cholesterol · above
            </span>{" "}
            <span
              className="chipfly"
              style={{
                "--dx": "150px",
                "--dy": "-120px",
                animationDelay: "2.8s",
                position: "absolute",
                left: "46%",
                top: "420px",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#FFFEFA",
                color: "#0F172A",
                border: "1.5px solid #0F766E",
                fontSize: "12px",
                fontWeight: "700",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,.5)",
              }}
            >
              Vitamin D · below
            </span>{" "}
            <svg viewBox="0 0 220 170" style={{ position: "absolute", right: "4%", bottom: "14px", width: "190px" }}>
              <rect x="10" y="70" width="200" height="22" rx="4" fill="#0F766E"></rect>
              <rect x="10" y="140" width="200" height="16" rx="4" fill="#0B5E58"></rect>
              <rect x="18" y="92" width="10" height="50" fill="#0B5E58"></rect>
              <rect x="192" y="92" width="10" height="50" fill="#0B5E58"></rect>
              <g>
                <rect
                  x="40"
                  y="20"
                  width="22"
                  height="120"
                  rx="11"
                  fill="rgba(255,255,255,.75)"
                  stroke="#94A3B8"
                  strokeWidth="2"
                ></rect>
                <rect className="fill" x="43" y="80" width="16" height="57" rx="8" fill="#F97316"></rect>
                <rect x="38" y="14" width="26" height="12" rx="3" fill="#F97316"></rect>
              </g>
              <g>
                <rect
                  x="82"
                  y="20"
                  width="22"
                  height="120"
                  rx="11"
                  fill="rgba(255,255,255,.75)"
                  stroke="#94A3B8"
                  strokeWidth="2"
                ></rect>
                <rect
                  className="fill"
                  style={{ animationDelay: ".8s" }}
                  x="85"
                  y="70"
                  width="16"
                  height="67"
                  rx="8"
                  fill="#14B8A6"
                ></rect>
                <rect x="80" y="14" width="26" height="12" rx="3" fill="#0F766E"></rect>
              </g>
              <g>
                <rect
                  x="124"
                  y="20"
                  width="22"
                  height="120"
                  rx="11"
                  fill="rgba(255,255,255,.75)"
                  stroke="#94A3B8"
                  strokeWidth="2"
                ></rect>
                <rect
                  className="fill"
                  style={{ animationDelay: "1.6s" }}
                  x="127"
                  y="90"
                  width="16"
                  height="47"
                  rx="8"
                  fill="#FCA5A5"
                ></rect>
                <rect x="122" y="14" width="26" height="12" rx="3" fill="#E11D48"></rect>
              </g>
              <g>
                <rect
                  x="166"
                  y="20"
                  width="22"
                  height="120"
                  rx="11"
                  fill="rgba(255,255,255,.75)"
                  stroke="#94A3B8"
                  strokeWidth="2"
                ></rect>
                <rect
                  className="fill"
                  style={{ animationDelay: "2.4s" }}
                  x="169"
                  y="76"
                  width="16"
                  height="61"
                  rx="8"
                  fill="#FDE68A"
                ></rect>
                <rect x="164" y="14" width="26" height="12" rx="3" fill="#CA8A04"></rect>
              </g>
            </svg>{" "}
            <div
              className="floaty"
              style={{
                "--r": "-30deg",
                position: "absolute",
                left: "50%",
                top: "20px",
                width: "80px",
                height: "30px",
                borderRadius: "15px",
                background: "linear-gradient(90deg, #0F766E 50%, #FFFEFA 50%)",
                boxShadow: "0 14px 20px -10px rgba(0,0,0,.4)",
              }}
            ></div>
          </div>
        </div>
      </section>
      {/* 01 BEFORE */}
      <section style={{ background: "#EDE8DC", padding: "110px 24px" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "56px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 400px", minWidth: "0" }}>
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#0F766E" }}>
              chapter 01 — before
            </p>
            <h2
              style={{
                margin: "0",
                fontSize: "clamp(40px, 5vw, 66px)",
                lineHeight: "1",
                fontWeight: "800",
                letterSpacing: "-0.035em",
              }}
            >
              Results live in a kitchen drawer.
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#334155" }}>
              A patient picks up an envelope at the lab. Inside: a page of abbreviations, units and reference ranges,
              each lab printing them its own way. They read it once, worry about the one line in bold, and put it away.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#334155" }}>
              Next time, the question{" "}
              <span className="hand" style={{ fontSize: "26px", color: "#F97316" }}>
                “was it higher last time?”
              </span>{" "}
              has no answer — the old report is somewhere under the others.
            </p>
          </div>{" "}
          <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: "0", position: "relative", height: "480px" }}>
            {" "}
            <div
              style={{
                position: "absolute",
                left: "4%",
                right: "4%",
                bottom: "0",
                height: "200px",
                borderRadius: "10px",
                background: "linear-gradient(#C7A77C, #A9875C)",
                boxShadow: "inset 0 -10px 0 rgba(0,0,0,.12)",
              }}
            ></div>{" "}
            <div
              style={{
                position: "absolute",
                left: "8%",
                right: "8%",
                bottom: "120px",
                height: "190px",
                perspective: "900px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  transform: "rotateX(42deg)",
                  transformOrigin: "bottom",
                  borderRadius: "6px",
                  background: "#8E6E46",
                  boxShadow: "inset 0 0 0 14px #B08B5E",
                }}
              >
                {" "}
                <span
                  style={{
                    position: "absolute",
                    left: "8%",
                    top: "18%",
                    width: "34%",
                    height: "60%",
                    background: "#FFFEFA",
                    transform: "rotate(-12deg)",
                    clipPath:
                      "polygon(4% 8%, 30% 0, 60% 6%, 96% 2%, 100% 40%, 94% 70%, 98% 100%, 60% 94%, 30% 100%, 2% 92%, 6% 50%)",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "36%",
                    top: "10%",
                    width: "30%",
                    height: "70%",
                    background: "#F1F5F9",
                    transform: "rotate(8deg)",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "58%",
                    top: "22%",
                    width: "32%",
                    height: "56%",
                    background: "#E9D9B5",
                    transform: "rotate(-4deg)",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "22%",
                    top: "40%",
                    width: "26%",
                    height: "44%",
                    background: "#FFFEFA",
                    transform: "rotate(18deg)",
                    clipPath: "polygon(0 10%, 40% 0, 100% 8%, 92% 60%, 100% 100%, 40% 92%, 6% 100%)",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "46%",
                    top: "30%",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "4px solid #F97316",
                  }}
                ></span>{" "}
              </div>
            </div>{" "}
            <div
              style={{
                position: "absolute",
                left: "6%",
                right: "6%",
                bottom: "60px",
                height: "70px",
                borderRadius: "8px",
                background: "linear-gradient(#D6B88E, #BC9B6E)",
                boxShadow: "0 20px 30px -16px rgba(0,0,0,.45)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "28px",
                  marginLeft: "-40px",
                  width: "80px",
                  height: "12px",
                  borderRadius: "6px",
                  background: "#6B5233",
                }}
              ></span>
            </div>{" "}
            <div
              className="paper"
              style={{
                position: "absolute",
                left: "0",
                top: "30px",
                width: "170px",
                padding: "14px",
                transform: "rotate(-14deg)",
              }}
            >
              <b className="mono" style={{ fontSize: "10px" }}>
                LABO CENTRAL
              </b>
              <span style={{ display: "block", height: "4px", margin: "8px 0", background: "#CBD5E1" }}></span>
              <span style={{ display: "block", height: "4px", margin: "8px 0", background: "#CBD5E1" }}></span>
              <span
                style={{ display: "block", height: "4px", margin: "8px 0", width: "60%", background: "#CBD5E1" }}
              ></span>
              <span className="mono" style={{ fontSize: "9px", color: "#94A3B8" }}>
                spring
              </span>
            </div>
            <div
              className="paper"
              style={{
                position: "absolute",
                left: "34%",
                top: "0",
                width: "170px",
                padding: "14px",
                transform: "rotate(6deg)",
              }}
            >
              <b className="mono" style={{ fontSize: "10px" }}>
                ANALYSES MÉD.
              </b>
              <span style={{ display: "block", height: "4px", margin: "8px 0", background: "#CBD5E1" }}></span>
              <span style={{ display: "block", height: "4px", margin: "8px 0", background: "#FDBA74" }}></span>
              <span
                style={{ display: "block", height: "4px", margin: "8px 0", width: "60%", background: "#CBD5E1" }}
              ></span>
              <span className="mono" style={{ fontSize: "9px", color: "#94A3B8" }}>
                autumn
              </span>
            </div>
            <div
              className="paper"
              style={{
                position: "absolute",
                right: "0",
                top: "50px",
                width: "170px",
                padding: "14px",
                transform: "rotate(-4deg)",
              }}
            >
              <b className="mono" style={{ fontSize: "10px" }}>
                BILAN.pdf
              </b>
              <span style={{ display: "block", height: "4px", margin: "8px 0", background: "#CBD5E1" }}></span>
              <span style={{ display: "block", height: "4px", margin: "8px 0", background: "#CBD5E1" }}></span>
              <span
                style={{ display: "block", height: "4px", margin: "8px 0", width: "60%", background: "#CBD5E1" }}
              ></span>
              <span className="mono" style={{ fontSize: "9px", color: "#94A3B8" }}>
                printed?
              </span>
            </div>{" "}
            <span
              className="paper"
              style={{
                position: "absolute",
                right: "12%",
                bottom: "150px",
                padding: "12px 14px",
                background: "#FFF59D",
                transform: "rotate(6deg)",
                fontFamily: "'Caveat', cursive",
                fontSize: "22px",
                lineHeight: "1.1",
                zIndex: "2",
              }}
            >
              bring ALL the
              <br />
              papers to the doctor
            </span>{" "}
          </div>
        </div>
      </section>
      {/* 02 LISTENING */}
      <section style={{ background: "#F6F3EC", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#0F766E" }}>
            chapter 02 — listening
          </p>
          <h2
            style={{
              margin: "0",
              maxWidth: "820px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            Three voices on a clipboard.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#334155" }}>
            Before any code, I read what exists on OCR for medical documents, collected report formats from different
            labs, and talked with patients — and a doctor who receives the papers.
          </p>
          <div
            style={{
              marginTop: "60px",
              position: "relative",
              padding: "70px 40px 44px",
              borderRadius: "22px",
              background: "linear-gradient(135deg, #0F766E, #0B5E58)",
              boxShadow: "0 40px 60px -40px rgba(15,23,42,.6)",
            }}
          >
            {" "}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "50%",
                top: "-18px",
                marginLeft: "-80px",
                width: "160px",
                height: "52px",
                borderRadius: "12px 12px 6px 6px",
                background: "linear-gradient(#CBD5E1, #94A3B8)",
                boxShadow: "inset 0 -6px 0 rgba(0,0,0,.15)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "10px",
                  width: "40px",
                  height: "16px",
                  borderRadius: "8px",
                  background: "#0B5E58",
                }}
              ></span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "28px" }}>
              <figure
                style={{
                  margin: "0",
                  position: "relative",
                  padding: "30px 26px 26px",
                  background: "#FFF59D",
                  transform: "rotate(-2deg)",
                  boxShadow: "0 20px 30px -18px rgba(0,0,0,.6)",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "40%",
                    width: "70px",
                    height: "22px",
                    background: "rgba(255,255,255,.55)",
                    transform: "rotate(-4deg)",
                  }}
                ></span>{" "}
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  patient
                </p>
                <blockquote className="hand" style={{ margin: "10px 0 0", fontSize: "28px", lineHeight: "1.12" }}>
                  “I don't need the chemistry. I need to know: is it normal or not?”
                </blockquote>
              </figure>
              <figure
                style={{
                  margin: "0",
                  position: "relative",
                  padding: "30px 26px 26px",
                  background: "#FFFEFA",
                  transform: "rotate(1.5deg)",
                  boxShadow: "0 20px 30px -18px rgba(0,0,0,.6)",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "40%",
                    width: "70px",
                    height: "22px",
                    background: "rgba(249,115,22,.4)",
                    transform: "rotate(3deg)",
                  }}
                ></span>{" "}
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  chronic patient
                </p>
                <blockquote className="hand" style={{ margin: "10px 0 0", fontSize: "28px", lineHeight: "1.12" }}>
                  “Every few months, a new paper. I can never compare with the last one.”
                </blockquote>
              </figure>
              <figure
                style={{
                  margin: "0",
                  position: "relative",
                  padding: "30px 26px 26px",
                  background: "#CCFBF1",
                  transform: "rotate(-1deg)",
                  boxShadow: "0 20px 30px -18px rgba(0,0,0,.6)",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "40%",
                    width: "70px",
                    height: "22px",
                    background: "rgba(255,255,255,.55)",
                    transform: "rotate(-2deg)",
                  }}
                ></span>{" "}
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  doctor
                </p>
                <blockquote className="hand" style={{ margin: "10px 0 0", fontSize: "28px", lineHeight: "1.12" }}>
                  “Patients arrive with a bag of reports. A clean history would save the consultation.”
                </blockquote>
              </figure>
            </div>
          </div>{" "}
          <div
            style={{
              marginTop: "44px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                padding: "22px 24px",
                borderRadius: "14px",
                background: "#FFFEFA",
                borderLeft: "6px solid #0F766E",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#0F766E" }}>
                finding
              </p>
              <b style={{ display: "block", marginTop: "6px", fontSize: "19px" }}>Reports aren't standard</b>
              <p style={{ margin: "6px 0 0", color: "#475569", lineHeight: "1.5" }}>
                Each lab prints names, units and ranges differently.
              </p>
            </div>
            <div
              style={{
                padding: "22px 24px",
                borderRadius: "14px",
                background: "#FFFEFA",
                borderLeft: "6px solid #F97316",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#F97316" }}>
                finding
              </p>
              <b style={{ display: "block", marginTop: "6px", fontSize: "19px" }}>
                The range matters more than the value
              </b>
              <p style={{ margin: "6px 0 0", color: "#475569", lineHeight: "1.5" }}>
                People want a position, not a number.
              </p>
            </div>
            <div
              style={{
                padding: "22px 24px",
                borderRadius: "14px",
                background: "#FFFEFA",
                borderLeft: "6px solid #0F172A",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#0F172A" }}>
                finding
              </p>
              <b style={{ display: "block", marginTop: "6px", fontSize: "19px" }}>History is missing</b>
              <p style={{ margin: "6px 0 0", color: "#475569", lineHeight: "1.5" }}>
                Results end up in drawers, not in a timeline.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "44px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "24px",
              padding: "32px 36px",
              borderRadius: "24px",
              background: "#0F172A",
              color: "#F6F3EC",
            }}
          >
            {" "}
            <span className="mono" style={{ fontSize: "12px", color: "#5EEAD4" }}>
              how might we
            </span>{" "}
            <p
              style={{
                margin: "0",
                flex: "1 1 520px",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: "1.3",
                fontWeight: "700",
              }}
            >
              help a patient understand their own results from a simple photo — and see how they change over time?
            </p>
          </div>
        </div>
      </section>
      <Personas slug="tasshila" compact />
      {/* 03 STRUCTURE */}
      <section style={{ background: "linear-gradient(#F6F3EC, #EDE8DC)", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#0F766E" }}>
            chapter 03 — structure
          </p>
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            One compartment per question.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "660px", fontSize: "18px", lineHeight: "1.6", color: "#334155" }}>
            Like a pill organiser, the app holds only four things — each one answering a question the patient actually
            asks.
          </p>{" "}
          <div
            style={{
              marginTop: "50px",
              padding: "26px",
              borderRadius: "28px",
              background: "linear-gradient(#5EEAD4, #2DD4BF)",
              boxShadow: "inset 0 -10px 0 rgba(0,0,0,.08), 0 40px 60px -36px rgba(15,118,110,.7)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px" }}>
              <div
                style={{
                  padding: "0 0 18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.72)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "12px 18px",
                    background: "#0F766E",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <b>Scan</b>
                  <span className="hand" style={{ fontSize: "20px" }}>
                    “read my paper”
                  </span>
                </div>
                <div style={{ padding: "16px 18px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Camera
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Import PDF
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Crop & clean
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: "0 0 18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.72)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "12px 18px",
                    background: "#F97316",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <b>Results</b>
                  <span className="hand" style={{ fontSize: "20px" }}>
                    “is it normal?”
                  </span>
                </div>
                <div style={{ padding: "16px 18px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Values
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Ranges
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Explanations
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: "0 0 18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.72)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "12px 18px",
                    background: "#0F172A",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <b>History</b>
                  <span className="hand" style={{ fontSize: "20px" }}>
                    “and last time?”
                  </span>
                </div>
                <div style={{ padding: "16px 18px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Timeline
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Trends
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Share
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: "0 0 18px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.72)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "12px 18px",
                    background: "#64748B",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <b>Profile</b>
                  <span className="hand" style={{ fontSize: "20px" }}>
                    “that's me”
                  </span>
                </div>
                <div style={{ padding: "16px 18px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Personal info
                  </span>
                  <span style={{ padding: "7px 12px", borderRadius: "999px", background: "#fff", fontSize: "13px" }}>
                    Settings
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
          <div style={{ marginTop: "80px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ flex: "1 1 320px", minWidth: "0" }}>
              <p className="mono" style={{ margin: "0 0 12px", fontSize: "13px", color: "#0F766E" }}>
                behind the screen
              </p>
              <h3
                style={{
                  margin: "0",
                  fontSize: "clamp(30px, 3.4vw, 44px)",
                  lineHeight: "1.05",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                From photo to insight, one tube at a time.
              </h3>
              <p style={{ margin: "18px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#334155" }}>
                The hard part isn't the interface — it's the pipeline behind it. A crooked photo becomes a clean image,
                then text, then values that are normalised and checked against their ranges.
              </p>
              <p className="hand" style={{ margin: "16px 0 0", fontSize: "26px", color: "#F97316" }}>
                each lab writes “glucose” its own way…
              </p>
            </div>
            <div
              aria-hidden="true"
              style={{
                flex: "2 1 620px",
                minWidth: "0",
                padding: "30px 26px 0",
                borderRadius: "22px",
                background: "#FFFEFA",
                boxShadow: "0 30px 50px -34px rgba(15,23,42,.5)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "10px", alignItems: "end" }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "42px",
                      height: "180px",
                      borderRadius: "0 0 21px 21px",
                      border: "3px solid #94A3B8",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F8FAFC",
                    }}
                  >
                    <span
                      className="fill"
                      style={{
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "100%",
                        background: "linear-gradient(#99F6E4, #14B8A6)",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "42px",
                      height: "180px",
                      borderRadius: "0 0 21px 21px",
                      border: "3px solid #94A3B8",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F8FAFC",
                    }}
                  >
                    <span
                      className="fill"
                      style={{
                        animationDelay: ".5s",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "90%",
                        background: "linear-gradient(#99F6E4, #0D9488)",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "42px",
                      height: "180px",
                      borderRadius: "0 0 21px 21px",
                      border: "3px solid #94A3B8",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F8FAFC",
                    }}
                  >
                    <span
                      className="fill"
                      style={{
                        animationDelay: "1s",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "80%",
                        background: "linear-gradient(#5EEAD4, #0F766E)",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "42px",
                      height: "180px",
                      borderRadius: "0 0 21px 21px",
                      border: "3px solid #94A3B8",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F8FAFC",
                    }}
                  >
                    <span
                      className="fill"
                      style={{
                        animationDelay: "1.5s",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "70%",
                        background: "linear-gradient(#FDBA74, #F97316)",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "42px",
                      height: "180px",
                      borderRadius: "0 0 21px 21px",
                      border: "3px solid #94A3B8",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F8FAFC",
                    }}
                  >
                    <span
                      className="fill"
                      style={{
                        animationDelay: "2s",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "60%",
                        background: "linear-gradient(#FDBA74, #EA580C)",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "42px",
                      height: "180px",
                      borderRadius: "0 0 21px 21px",
                      border: "3px solid #94A3B8",
                      borderTop: "none",
                      position: "relative",
                      overflow: "hidden",
                      background: "#F8FAFC",
                    }}
                  >
                    <span
                      className="fill"
                      style={{
                        animationDelay: "2.5s",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "50%",
                        background: "linear-gradient(#94A3B8, #0F172A)",
                      }}
                    ></span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "0 -26px",
                  padding: "14px 26px 18px",
                  borderRadius: "0 0 22px 22px",
                  background: "#0F766E",
                  color: "#fff",
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gap: "10px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "1.25",
                }}
              >
                {" "}
                <span>Photograph report</span>
                <span>Clean image</span>
                <span>OCR extraction</span>
                <span>Normalise units</span>
                <span>Check ranges</span>
                <span>Update history</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 SKETCHES */}
      <section style={{ background: "#F6F3EC", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#0F766E" }}>
            chapter 04 — sketches
          </p>
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            A bar, not a number.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#334155" }}>
            The first sketch on a prescription pad already had the main idea: show each value as a dot on its range, and
            let colour say the rest.
          </p>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  position: "relative",
                  padding: "24px 26px",
                  minHeight: "380px",
                  borderRadius: "4px",
                  background: "#FFFEFA",
                  boxShadow: "0 24px 40px -26px rgba(0,0,0,.5)",
                  transform: "rotate(-1.5deg)",
                  boxSizing: "border-box",
                  borderTop: "26px solid #CCFBF1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #CBD5E1",
                    paddingBottom: "8px",
                  }}
                >
                  <b style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#0F766E", fontStyle: "italic" }}>
                    Rx
                  </b>
                  <span className="mono" style={{ fontSize: "10px", color: "#94A3B8" }}>
                    results screen — v0
                  </span>
                </div>
                <p className="hand" style={{ margin: "12px 0 6px", fontSize: "22px", color: "#1E3A8A" }}>
                  Glucose
                </p>
                <svg viewBox="0 0 260 24" width="100%" aria-hidden="true">
                  <path d="M4 12 H256" stroke="#1E3A8A" strokeWidth="2" strokeDasharray="2 4"></path>
                  <path d="M80 12 H180" stroke="#0F766E" strokeWidth="6" strokeLinecap="round"></path>
                  <circle cx="130" cy="12" r="7" fill="none" stroke="#1E3A8A" strokeWidth="2.5"></circle>
                </svg>
                <p className="hand" style={{ margin: "10px 0 6px", fontSize: "22px", color: "#1E3A8A" }}>
                  Cholesterol
                </p>
                <svg viewBox="0 0 260 24" width="100%" aria-hidden="true">
                  <path d="M4 12 H256" stroke="#1E3A8A" strokeWidth="2" strokeDasharray="2 4"></path>
                  <path d="M60 12 H160" stroke="#0F766E" strokeWidth="6" strokeLinecap="round"></path>
                  <circle cx="206" cy="12" r="7" fill="none" stroke="#EA580C" strokeWidth="2.5"></circle>
                </svg>
                <p className="hand" style={{ margin: "10px 0 6px", fontSize: "22px", color: "#1E3A8A" }}>
                  history?
                </p>
                <svg viewBox="0 0 260 60" width="100%" aria-hidden="true">
                  <path
                    d="M6 46 L60 40 L110 44 L160 26 L210 30 L254 14"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="2.5"
                  ></path>
                </svg>
                <p className="hand" style={{ margin: "10px 0 0", fontSize: "22px", color: "#EA580C" }}>
                  → orange only when out of range!
                </p>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Prescription-pad sketch</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  padding: "18px",
                  minHeight: "380px",
                  borderRadius: "12px",
                  background: "#E2DDD1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span style={{ height: "26px", width: "50%", borderRadius: "6px", background: "#CFC8B9" }}></span>{" "}
                <span style={{ height: "60px", borderRadius: "10px", background: "#CFC8B9" }}></span>{" "}
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    background: "#D8D2C4",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span style={{ height: "10px", width: "40%", background: "#BDB5A4", borderRadius: "4px" }}></span>
                  <span style={{ height: "8px", borderRadius: "4px", background: "#BDB5A4" }}></span>
                </div>
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    background: "#D8D2C4",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span style={{ height: "10px", width: "50%", background: "#BDB5A4", borderRadius: "4px" }}></span>
                  <span style={{ height: "8px", borderRadius: "4px", background: "#BDB5A4" }}></span>
                </div>
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    background: "#D8D2C4",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span style={{ height: "10px", width: "35%", background: "#BDB5A4", borderRadius: "4px" }}></span>
                  <span style={{ height: "8px", borderRadius: "4px", background: "#BDB5A4" }}></span>
                </div>
                <div style={{ marginTop: "auto", display: "flex", gap: "8px" }}>
                  <span style={{ flex: "1", height: "30px", borderRadius: "8px", background: "#CFC8B9" }}></span>
                  <span style={{ flex: "1", height: "30px", borderRadius: "8px", background: "#CFC8B9" }}></span>
                  <span style={{ flex: "1", height: "30px", borderRadius: "8px", background: "#CFC8B9" }}></span>
                  <span style={{ flex: "1", height: "30px", borderRadius: "8px", background: "#CFC8B9" }}></span>
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Wireframe</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  minHeight: "380px",
                  padding: "18px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  boxShadow: "0 30px 50px -28px rgba(15,23,42,.45)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <b style={{ fontSize: "18px" }}>Your results</b>{" "}
                <div style={{ padding: "14px", borderRadius: "14px", background: "#0F766E", color: "#fff" }}>
                  <p className="mono" style={{ margin: "0", fontSize: "10px", opacity: ".8" }}>
                    report of this week
                  </p>
                  <p style={{ margin: "4px 0 0", fontWeight: "800" }}>Mostly in range</p>
                </div>
                <div style={{ padding: "12px", borderRadius: "12px", background: "#F0FDFA" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <b>Glucose</b>
                    <span style={{ color: "#0F766E", fontWeight: "700" }}>In range</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "8px",
                      marginTop: "10px",
                      borderRadius: "4px",
                      background: "#E2E8F0",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "30%",
                        width: "40%",
                        top: "0",
                        bottom: "0",
                        borderRadius: "4px",
                        background: "#99F6E4",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "absolute",
                        left: "48%",
                        top: "-3px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "#0F766E",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ padding: "12px", borderRadius: "12px", background: "#FFF7ED" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <b>Cholesterol</b>
                    <span style={{ color: "#EA580C", fontWeight: "700" }}>Above range</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "8px",
                      marginTop: "10px",
                      borderRadius: "4px",
                      background: "#E2E8F0",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "20%",
                        width: "40%",
                        top: "0",
                        bottom: "0",
                        borderRadius: "4px",
                        background: "#99F6E4",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "absolute",
                        left: "76%",
                        top: "-3px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "#F97316",
                      }}
                    ></span>
                  </div>
                </div>
                <div style={{ padding: "12px", borderRadius: "12px", background: "#F0FDFA" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <b>Haemoglobin</b>
                    <span style={{ color: "#0F766E", fontWeight: "700" }}>In range</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "8px",
                      marginTop: "10px",
                      borderRadius: "4px",
                      background: "#E2E8F0",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "25%",
                        width: "50%",
                        top: "0",
                        bottom: "0",
                        borderRadius: "4px",
                        background: "#99F6E4",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "absolute",
                        left: "55%",
                        top: "-3px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background: "#0F766E",
                      }}
                    ></span>
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>
                Final screen{" "}
                <span className="mono" style={{ fontWeight: "400", fontSize: "12px", color: "#64748B" }}>
                  · concept
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 05 VISUAL LANGUAGE */}
      <section
        style={{
          background: "#0B3B37",
          color: "#F0FDFA",
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(94,234,212,.25), transparent 70%)",
          }}
        ></div>
        <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#5EEAD4" }}>
            chapter 05 — visual language
          </p>
          <h2
            style={{
              margin: "0",
              maxWidth: "820px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            Calm by default. Coral only when it matters.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "620px", fontSize: "18px", lineHeight: "1.6", color: "#A7C7C2" }}>
            A health app shouldn't scare. Teal and mint carry the interface; coral is reserved for a value outside its
            range — so the eye goes straight to it.
          </p>{" "}
          <div
            style={{
              marginTop: "60px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "34px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <div
                className="floaty"
                aria-hidden="true"
                style={{
                  "--r": "-20deg",
                  width: "150px",
                  height: "56px",
                  borderRadius: "28px",
                  background: "linear-gradient(90deg, #0F766E 50%, #134E4A 50%)",
                  boxShadow: "inset 0 8px 10px rgba(255,255,255,.2), 0 20px 30px -14px rgba(0,0,0,.6)",
                }}
              ></div>
              <b>Teal</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A7C7C2" }}>
                #0F766E · brand
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <div
                className="floaty"
                aria-hidden="true"
                style={{
                  "--r": "14deg",
                  animationDelay: ".6s",
                  width: "150px",
                  height: "56px",
                  borderRadius: "28px",
                  background: "linear-gradient(90deg, #CCFBF1 50%, #FFFFFF 50%)",
                  boxShadow: "inset 0 8px 10px rgba(255,255,255,.4), 0 20px 30px -14px rgba(0,0,0,.6)",
                }}
              ></div>
              <b>Mint</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A7C7C2" }}>
                #CCFBF1 · surfaces
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <div
                className="floaty"
                aria-hidden="true"
                style={{
                  "--r": "-8deg",
                  animationDelay: "1.2s",
                  width: "150px",
                  height: "56px",
                  borderRadius: "28px",
                  background: "linear-gradient(90deg, #F97316 50%, #FED7AA 50%)",
                  boxShadow: "inset 0 8px 10px rgba(255,255,255,.3), 0 20px 30px -14px rgba(0,0,0,.6)",
                }}
              ></div>
              <b>Coral</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A7C7C2" }}>
                #F97316 · out of range
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <div
                className="floaty"
                aria-hidden="true"
                style={{
                  "--r": "22deg",
                  animationDelay: "1.8s",
                  width: "150px",
                  height: "56px",
                  borderRadius: "28px",
                  background: "linear-gradient(90deg, #0F172A 50%, #334155 50%)",
                  boxShadow: "inset 0 8px 10px rgba(255,255,255,.15), 0 20px 30px -14px rgba(0,0,0,.6)",
                }}
              ></div>
              <b>Ink</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A7C7C2" }}>
                #0F172A · text
              </span>
            </div>
          </div>
          <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "18px" }}>
            <div
              style={{ flex: "1 1 340px", padding: "28px", borderRadius: "20px", background: "rgba(255,255,255,.06)" }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#A7C7C2" }}>
                Plus Jakarta Sans — headings
              </p>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "46px",
                  lineHeight: "1",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                Your results
              </p>
              <p style={{ margin: "14px 0 0", fontSize: "16px", color: "#A7C7C2" }}>
                Inter for values and body — figures that line up.
              </p>
            </div>
            <div
              style={{
                flex: "1 1 300px",
                padding: "28px",
                borderRadius: "20px",
                background: "rgba(255,255,255,.06)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#A7C7C2" }}>
                components
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "#CCFBF1",
                    color: "#0F766E",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  In range
                </span>
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "#FFEDD5",
                    color: "#C2410C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Above range
                </span>
              </div>{" "}
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "14px 24px",
                  borderRadius: "14px",
                  background: "#14B8A6",
                  color: "#042F2E",
                  fontWeight: "800",
                }}
              >
                Scan a report
              </span>{" "}
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "13px 23px",
                  borderRadius: "14px",
                  border: "1.5px solid #5EEAD4",
                  fontWeight: "700",
                }}
              >
                See history
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 06 SOLUTION */}
      <section
        style={{ background: "radial-gradient(90% 70% at 20% 10%, #D5F7EE, #F6F3EC 60%)", padding: "120px 24px" }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#0F766E" }}>
            chapter 06 — the prototype
          </p>
          <h2
            style={{
              margin: "0",
              maxWidth: "860px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            Photograph. Understand. Remember.
          </h2>{" "}
          <div
            style={{
              marginTop: "70px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "34px",
            }}
          >
            {" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "240px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#0F172A",
                  boxShadow: "0 40px 60px -30px rgba(15,23,42,.55)",
                  transform: "rotate(-5deg)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "500px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#0B3B37",
                    textAlign: "left",
                  }}
                >
                  <p
                    className="mono"
                    style={{
                      position: "absolute",
                      left: "18px",
                      top: "22px",
                      margin: "0",
                      fontSize: "10px",
                      color: "#5EEAD4",
                    }}
                  >
                    scan
                  </p>
                  <p
                    style={{
                      position: "absolute",
                      left: "18px",
                      top: "38px",
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "800",
                      color: "#fff",
                    }}
                  >
                    Fit the report in the frame
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      left: "16%",
                      right: "16%",
                      top: "20%",
                      bottom: "24%",
                      background: "#FFFEFA",
                      transform: "rotate(2deg)",
                      padding: "14px",
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        height: "6px",
                        width: "55%",
                        background: "#0F172A",
                        marginBottom: "12px",
                      }}
                    ></span>
                    <span style={{ display: "block", height: "4px", margin: "9px 0", background: "#CBD5E1" }}></span>
                    <span style={{ display: "block", height: "4px", margin: "9px 0", background: "#CBD5E1" }}></span>
                    <span style={{ display: "block", height: "4px", margin: "9px 0", background: "#CBD5E1" }}></span>
                    <span style={{ display: "block", height: "4px", margin: "9px 0", background: "#CBD5E1" }}></span>
                    <span style={{ display: "block", height: "4px", margin: "9px 0", background: "#CBD5E1" }}></span>
                    <span style={{ display: "block", height: "4px", margin: "9px 0", background: "#CBD5E1" }}></span>
                    <span
                      style={{ display: "block", height: "4px", margin: "9px 0", width: "60%", background: "#CBD5E1" }}
                    ></span>
                  </div>{" "}
                  <span
                    style={{
                      position: "absolute",
                      left: "12%",
                      top: "18%",
                      width: "26px",
                      height: "26px",
                      borderLeft: "3px solid #5EEAD4",
                      borderTop: "3px solid #5EEAD4",
                    }}
                  ></span>
                  <span
                    style={{
                      position: "absolute",
                      right: "12%",
                      top: "18%",
                      width: "26px",
                      height: "26px",
                      borderRight: "3px solid #5EEAD4",
                      borderTop: "3px solid #5EEAD4",
                    }}
                  ></span>
                  <span
                    style={{
                      position: "absolute",
                      left: "12%",
                      bottom: "22%",
                      width: "26px",
                      height: "26px",
                      borderLeft: "3px solid #5EEAD4",
                      borderBottom: "3px solid #5EEAD4",
                    }}
                  ></span>
                  <span
                    style={{
                      position: "absolute",
                      right: "12%",
                      bottom: "22%",
                      width: "26px",
                      height: "26px",
                      borderRight: "3px solid #5EEAD4",
                      borderBottom: "3px solid #5EEAD4",
                    }}
                  ></span>{" "}
                  <span
                    className="scan"
                    style={{
                      position: "absolute",
                      left: "10%",
                      right: "10%",
                      height: "3px",
                      background: "#5EEAD4",
                      boxShadow: "0 0 18px 4px rgba(94,234,212,.7)",
                    }}
                  ></span>{" "}
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      height: "20%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      background: "rgba(15,23,42,.7)",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "10px", color: "#A7C7C2" }}>
                      PDF
                    </span>
                    <span
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        border: "4px solid #fff",
                        boxSizing: "border-box",
                        background: "#14B8A6",
                      }}
                    ></span>
                    <span className="mono" style={{ fontSize: "10px", color: "#A7C7C2" }}>
                      auto
                    </span>
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Scan</figcaption>
            </figure>{" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "260px",
                  padding: "8px",
                  borderRadius: "42px",
                  background: "#0F172A",
                  boxShadow: "0 50px 70px -30px rgba(15,23,42,.6)",
                }}
              >
                <div
                  style={{
                    height: "540px",
                    borderRadius: "34px",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    textAlign: "left",
                    padding: "28px 16px 16px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#0F766E" }}>
                    results › cholesterol
                  </p>{" "}
                  <b style={{ fontSize: "22px", lineHeight: "1.1" }}>Cholesterol is above its range</b>{" "}
                  <div style={{ padding: "16px 14px", borderRadius: "16px", background: "#FFF7ED" }}>
                    <div style={{ position: "relative", height: "12px", borderRadius: "6px", background: "#E2E8F0" }}>
                      <span
                        style={{
                          position: "absolute",
                          left: "18%",
                          width: "46%",
                          top: "0",
                          bottom: "0",
                          borderRadius: "6px",
                          background: "#99F6E4",
                        }}
                      ></span>
                      <span
                        className="pulse"
                        style={{
                          position: "absolute",
                          left: "78%",
                          top: "-5px",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#F97316",
                          boxShadow: "0 0 0 4px #fff",
                        }}
                      ></span>
                    </div>
                    <div
                      className="mono"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                        fontSize: "10px",
                        color: "#64748B",
                      }}
                    >
                      <span>low</span>
                      <span>reference range</span>
                      <span>high</span>
                    </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.5", color: "#334155" }}>
                    <b>What it is.</b> A fat carried in the blood. Your body needs some, too much can build up in the
                    arteries.
                  </p>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.5", color: "#334155" }}>
                    <b>What to do.</b> Show this to your doctor. Tasshila explains, it doesn't diagnose.
                  </p>
                  <div
                    style={{
                      padding: "12px",
                      borderRadius: "12px",
                      background: "#F0FDFA",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "13px",
                    }}
                  >
                    <span>Compared to last report</span>
                    <b style={{ color: "#EA580C" }}>rising ↗</b>
                  </div>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      padding: "13px",
                      borderRadius: "14px",
                      background: "#0F766E",
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    See the history
                  </span>{" "}
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>One value, explained</figcaption>
            </figure>{" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "240px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#0F172A",
                  boxShadow: "0 40px 60px -30px rgba(15,23,42,.55)",
                  transform: "rotate(5deg)",
                }}
              >
                <div
                  style={{
                    height: "500px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#F0FDFA",
                    textAlign: "left",
                    padding: "28px 16px 16px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#0F766E" }}>
                    history
                  </p>{" "}
                  <b style={{ fontSize: "20px" }}>Your timeline</b>{" "}
                  <div style={{ padding: "14px 10px 8px", borderRadius: "16px", background: "#fff" }}>
                    <svg viewBox="0 0 200 110" width="100%" aria-hidden="true">
                      <rect x="0" y="34" width="200" height="40" fill="#CCFBF1"></rect>
                      <path
                        className="draw"
                        d="M8 80 L48 68 L88 72 L128 50 L168 34 L194 22"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                      <path
                        className="draw"
                        style={{ animationDelay: ".6s" }}
                        d="M8 56 L48 52 L88 58 L128 54 L168 50 L194 52"
                        fill="none"
                        stroke="#0F766E"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                      <circle cx="194" cy="22" r="5" fill="#F97316"></circle>
                      <circle cx="194" cy="52" r="5" fill="#0F766E"></circle>
                    </svg>
                    <div style={{ display: "flex", gap: "12px", fontSize: "11px", marginTop: "4px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <i style={{ width: "10px", height: "3px", background: "#F97316" }}></i>Cholesterol
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <i style={{ width: "10px", height: "3px", background: "#0F766E" }}></i>Glucose
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div
                      style={{
                        padding: "11px 12px",
                        borderRadius: "12px",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                      }}
                    >
                      <b>Latest report</b>
                      <span style={{ color: "#EA580C" }}>1 to watch</span>
                    </div>
                    <div
                      style={{
                        padding: "11px 12px",
                        borderRadius: "12px",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                      }}
                    >
                      <b>Previous report</b>
                      <span style={{ color: "#0F766E" }}>all in range</span>
                    </div>
                    <div
                      style={{
                        padding: "11px 12px",
                        borderRadius: "12px",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                      }}
                    >
                      <b>Older report</b>
                      <span style={{ color: "#0F766E" }}>all in range</span>
                    </div>
                  </div>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      padding: "12px",
                      borderRadius: "14px",
                      border: "1.5px solid #0F766E",
                      color: "#0F766E",
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "13px",
                    }}
                  >
                    Share with my doctor
                  </span>{" "}
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>History</figcaption>
            </figure>
          </div>{" "}
          <div style={{ marginTop: "100px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "40px" }}>
            <div style={{ flex: "1 1 300px", minWidth: "0" }}>
              <p className="mono" style={{ margin: "0 0 12px", fontSize: "13px", color: "#0F766E" }}>
                the other side
              </p>
              <h3
                style={{
                  margin: "0",
                  fontSize: "clamp(30px, 3.4vw, 44px)",
                  lineHeight: "1.05",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                }}
              >
                A clean history for the consultation.
              </h3>
              <p style={{ margin: "18px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#334155" }}>
                A web view groups every value across reports, with its status and its trend — the bag of papers, turned
                into one table.
              </p>
              <p className="hand" style={{ margin: "14px 0 0", fontSize: "26px", color: "#F97316" }}>
                no more bag of papers
              </p>
            </div>
            <figure style={{ flex: "2 1 620px", minWidth: "0", margin: "0", perspective: "2000px" }}>
              <div style={{ transform: "rotateX(8deg)" }}>
                <div
                  style={{
                    padding: "14px 14px 18px",
                    borderRadius: "20px 20px 4px 4px",
                    background: "linear-gradient(#334155, #0F172A)",
                    boxShadow: "0 50px 80px -40px rgba(15,23,42,.6)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      minHeight: "350px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      fontSize: "12px",
                      color: "#0F172A",
                    }}
                  >
                    <div
                      style={{
                        flex: "0 0 150px",
                        background: "#0B3B37",
                        color: "#CCFBF1",
                        padding: "16px 10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {" "}
                      <span style={{ fontWeight: "800", margin: "0 8px 14px", color: "#fff" }}>Tasshila</span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>Reports</span>{" "}
                      <span
                        style={{
                          padding: "8px",
                          borderRadius: "6px",
                          background: "#14B8A6",
                          color: "#042F2E",
                          fontWeight: "800",
                        }}
                      >
                        Values
                      </span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>History</span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>Explanations</span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".75" }}>Profile</span>{" "}
                    </div>
                    <div
                      style={{
                        flex: "1",
                        minWidth: "0",
                        background: "#F8FAFC",
                        padding: "16px 18px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: "800", fontSize: "18px" }}>Values</span>
                        <span
                          style={{
                            padding: "7px 12px",
                            borderRadius: "8px",
                            background: "#0F766E",
                            color: "#fff",
                            fontWeight: "800",
                            fontSize: "11px",
                          }}
                        >
                          Scan report
                        </span>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          background: "#fff",
                          overflow: "hidden",
                          boxShadow: "0 1px 0 #E2E8F0",
                        }}
                      >
                        <div
                          className="mono"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr .8fr 1.2fr 1fr",
                            padding: "9px 12px",
                            fontSize: "10px",
                            color: "#64748B",
                            background: "#F1F5F9",
                          }}
                        >
                          <span>test</span>
                          <span>unit</span>
                          <span>status</span>
                          <span>trend</span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr .8fr 1.2fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #F1F5F9",
                            alignItems: "center",
                          }}
                        >
                          <b>Glucose</b>
                          <span>g/L</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "#CCFBF1",
                                color: "#0F766E",
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                            >
                              In range
                            </span>
                          </span>
                          <svg width="60" height="16" viewBox="0 0 60 16" aria-hidden="true">
                            <path d="M2 9 L15 8 L30 10 L45 8 L58 9" fill="none" stroke="#0F766E" strokeWidth="2"></path>
                          </svg>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr .8fr 1.2fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #F1F5F9",
                            alignItems: "center",
                          }}
                        >
                          <b>Cholesterol</b>
                          <span>g/L</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "#FFEDD5",
                                color: "#C2410C",
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                            >
                              Above range
                            </span>
                          </span>
                          <svg width="60" height="16" viewBox="0 0 60 16" aria-hidden="true">
                            <path
                              d="M2 13 L15 11 L30 10 L45 6 L58 3"
                              fill="none"
                              stroke="#F97316"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr .8fr 1.2fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #F1F5F9",
                            alignItems: "center",
                          }}
                        >
                          <b>Haemoglobin</b>
                          <span>g/dL</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "#CCFBF1",
                                color: "#0F766E",
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                            >
                              In range
                            </span>
                          </span>
                          <svg width="60" height="16" viewBox="0 0 60 16" aria-hidden="true">
                            <path d="M2 8 L15 9 L30 8 L45 9 L58 8" fill="none" stroke="#0F766E" strokeWidth="2"></path>
                          </svg>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr .8fr 1.2fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #F1F5F9",
                            alignItems: "center",
                          }}
                        >
                          <b>Vitamin D</b>
                          <span>ng/mL</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "#FFEDD5",
                                color: "#C2410C",
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                            >
                              Below range
                            </span>
                          </span>
                          <svg width="60" height="16" viewBox="0 0 60 16" aria-hidden="true">
                            <path
                              d="M2 4 L15 6 L30 8 L45 11 L58 13"
                              fill="none"
                              stroke="#F97316"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr .8fr 1.2fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #F1F5F9",
                            alignItems: "center",
                          }}
                        >
                          <b>Ferritin</b>
                          <span>µg/L</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "#CCFBF1",
                                color: "#0F766E",
                                fontSize: "10px",
                                fontWeight: "700",
                              }}
                            >
                              In range
                            </span>
                          </span>
                          <svg width="60" height="16" viewBox="0 0 60 16" aria-hidden="true">
                            <path d="M2 10 L15 9 L30 8 L45 8 L58 7" fill="none" stroke="#0F766E" strokeWidth="2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "18px",
                    margin: "0 -46px",
                    borderRadius: "2px 2px 24px 24px",
                    background: "linear-gradient(#E2E8F0, #94A3B8)",
                  }}
                ></div>
              </div>
              <figcaption style={{ marginTop: "22px", fontWeight: "700" }}>
                Web view — values across reports{" "}
                <span className="mono" style={{ fontWeight: "400", fontSize: "12px", color: "#64748B" }}>
                  · illustrative data
                </span>
              </figcaption>
            </figure>
          </div>
          <p className="mono" style={{ margin: "40px 0 0", textAlign: "center", fontSize: "12px", color: "#64748B" }}>
            concept screens of the thesis prototype, redrawn for this case study
          </p>
        </div>
      </section>
      {/* 07 AFTER */}
      <section style={{ background: "#0F172A", color: "#F6F3EC", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#5EEAD4" }}>
            chapter 07 — after
          </p>
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            The drawer can stay closed.
          </h2>
          <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
                padding: "24px 28px",
                borderRadius: "18px",
                background: "#1E293B",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#94A3B8",
                  textDecoration: "line-through",
                  textDecorationColor: "#F97316",
                }}
              >
                a page of abbreviations
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#5EEAD4"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                Names, values, units and ranges read from a photo
              </span>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
                padding: "24px 28px",
                borderRadius: "18px",
                background: "#1E293B",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#94A3B8",
                  textDecoration: "line-through",
                  textDecorationColor: "#F97316",
                }}
              >
                “is this bad??”
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#5EEAD4"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                Each value placed on its range, in plain words
              </span>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
                padding: "24px 28px",
                borderRadius: "18px",
                background: "#1E293B",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#94A3B8",
                  textDecoration: "line-through",
                  textDecorationColor: "#F97316",
                }}
              >
                “was it higher last time?”
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#5EEAD4"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                A timeline the patient — and the doctor — can read
              </span>{" "}
            </div>
          </div>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            {" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #334155", fontSize: "14px" }}>
              Python
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #334155", fontSize: "14px" }}>
              OCR
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #334155", fontSize: "14px" }}>
              Image processing
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #334155", fontSize: "14px" }}>
              Machine learning
            </span>{" "}
            <span
              style={{
                marginLeft: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 26px",
                borderRadius: "999px",
                background: "#14B8A6",
                color: "#042F2E",
                fontWeight: "800",
              }}
            >
              Master's thesis · Université Badji Mokhtar, Annaba
            </span>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
