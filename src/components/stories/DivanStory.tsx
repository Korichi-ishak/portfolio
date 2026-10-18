import { CaseFile, Personas } from "@/components/case/blocks";

/* Generated from the validated maquette (Story-divan.dc.html), then edited by hand. */
export default function DivanStory() {
  return (
    <div
      className="st st-divan"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "#1C1410",
        background: "#F7F0E3",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" precedence="default" />
      {/* HERO: THE TEA TRAY */}
      <section
        style={{
          position: "relative",
          padding: "70px 24px 80px",
          background: "radial-gradient(80% 80% at 75% 40%, #F6DDB0 0%, #F7F0E3 62%)",
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
            <p className="mono" style={{ margin: "0 0 22px", fontSize: "13px", color: "#7A6A55" }}>
              a story in seven chapters
            </p>
            <h1
              className="cin"
              style={{
                margin: "0",
                fontSize: "clamp(60px, 8.4vw, 124px)",
                lineHeight: ".9",
                fontWeight: "800",
                letterSpacing: "-0.01em",
                color: "#1C1410",
              }}
            >
              Divan
              <br />
              <span style={{ color: "#9B1C2E" }}>Hane</span>
            </h1>
            <p className="hand" style={{ margin: "12px 0 0", fontSize: "clamp(34px, 3.8vw, 50px)", color: "#A88236" }}>
              from a PDF to the table
            </p>
            <p
              style={{ margin: "22px 0 0", maxWidth: "470px", fontSize: "18px", lineHeight: "1.65", color: "#4A3C30" }}
            >
              A Turkish restaurant whose menu lived as a price list in a PDF. Nothing online showed the room, the dishes
              or the warmth of the place. I built a site that opens the appetite first — and puts the phone number one
              tap away.
            </p>
            <CaseFile slug="divan" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
              {" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#EFDDB8", fontSize: "12px" }}>
                Owner interview
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#EFDDB8", fontSize: "12px" }}>
                Menu structure
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#EFDDB8", fontSize: "12px" }}>
                Art direction
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#EFDDB8", fontSize: "12px" }}>
                Wireframe
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#EFDDB8", fontSize: "12px" }}>
                Next.js
              </span>{" "}
            </div>
          </div>{" "}
          <div aria-hidden="true" style={{ flex: "1 1 580px", minWidth: "0", position: "relative", height: "580px" }}>
            {" "}
            <div
              className="swing"
              style={{
                position: "absolute",
                left: "46%",
                top: "-70px",
                width: "2px",
                height: "110px",
                background: "#6B5233",
              }}
            >
              <svg viewBox="0 0 80 90" style={{ position: "absolute", left: "-39px", bottom: "-78px", width: "80px" }}>
                <path d="M40 0 L58 24 L52 70 L40 86 L28 70 L22 24 Z" fill="#A88236"></path>
                <path d="M40 8 L52 26 L48 64 L40 76 L32 64 L28 26 Z" fill="#F6C76A" className="glow"></path>
                <path d="M22 24 H58 M24 46 H56 M28 66 H52" stroke="#6B5233" strokeWidth="2"></path>
              </svg>
            </div>{" "}
            <div
              className="paper"
              style={{
                position: "absolute",
                left: "0",
                top: "60px",
                width: "210px",
                padding: "18px",
                transform: "rotate(-9deg)",
                borderRadius: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderBottom: "1px solid #D9CDB7",
                  paddingBottom: "8px",
                }}
              >
                <span
                  className="mono"
                  style={{
                    padding: "2px 6px",
                    background: "#C53030",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: "700",
                  }}
                >
                  PDF
                </span>
                <span className="mono" style={{ fontSize: "10px", color: "#7A6A55" }}>
                  menu_final.pdf
                </span>
              </div>
              <div
                className="mono"
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  fontSize: "9px",
                  color: "#4A3C30",
                }}
              >
                {" "}
                <span style={{ display: "flex", gap: "4px" }}>
                  <span>Iskender</span>
                  <span style={{ flex: "1", borderBottom: "1px dotted #B9A98F" }}></span>
                  <span>—</span>
                </span>{" "}
                <span style={{ display: "flex", gap: "4px" }}>
                  <span>Lahmacun</span>
                  <span style={{ flex: "1", borderBottom: "1px dotted #B9A98F" }}></span>
                  <span>—</span>
                </span>{" "}
                <span style={{ display: "flex", gap: "4px" }}>
                  <span>Pide</span>
                  <span style={{ flex: "1", borderBottom: "1px dotted #B9A98F" }}></span>
                  <span>—</span>
                </span>{" "}
                <span style={{ display: "flex", gap: "4px" }}>
                  <span>Mercimek</span>
                  <span style={{ flex: "1", borderBottom: "1px dotted #B9A98F" }}></span>
                  <span>—</span>
                </span>{" "}
                <span style={{ display: "flex", gap: "4px" }}>
                  <span>Kahvaltı</span>
                  <span style={{ flex: "1", borderBottom: "1px dotted #B9A98F" }}></span>
                  <span>—</span>
                </span>{" "}
                <span style={{ display: "flex", gap: "4px" }}>
                  <span>Adana</span>
                  <span style={{ flex: "1", borderBottom: "1px dotted #B9A98F" }}></span>
                  <span>—</span>
                </span>{" "}
              </div>
              <svg
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
              >
                <path
                  d="M14 20 L186 186 M186 20 L14 186"
                  stroke="#9B1C2E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity=".8"
                ></path>
              </svg>
            </div>{" "}
            <div
              style={{
                position: "absolute",
                left: "10%",
                right: "6%",
                bottom: "40px",
                height: "230px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at 50% 40%, #E4C27A 0%, #C59A4A 55%, #8C6A2C 100%)",
                boxShadow: "0 40px 50px -24px rgba(60,40,10,.6)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "14px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(107,82,51,.55)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  inset: "34px",
                  borderRadius: "50%",
                  border: "1px solid rgba(107,82,51,.4)",
                }}
              ></div>
            </div>{" "}
            <div style={{ position: "absolute", left: "28%", bottom: "120px", width: "170px" }}>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "-14px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse, #FFFDF8 40%, #D9CDB7 100%)",
                  boxShadow: "0 10px 14px -8px rgba(0,0,0,.4)",
                }}
              ></div>
              <svg
                viewBox="0 0 120 170"
                style={{ position: "relative", display: "block", width: "110px", margin: "0 auto" }}
              >
                <defs>
                  <linearGradient id="tea" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#7A1A12"></stop>
                    <stop offset=".45" stopColor="#C2410C"></stop>
                    <stop offset="1" stopColor="#6B1610"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M14 10 Q8 60 34 86 Q44 96 34 120 Q26 146 34 160 L86 160 Q94 146 86 120 Q76 96 86 86 Q112 60 106 10 Z"
                  fill="rgba(255,255,255,.55)"
                  stroke="rgba(120,90,50,.5)"
                  strokeWidth="2"
                ></path>
                <path
                  d="M18 34 Q14 62 36 84 Q46 96 36 120 Q28 146 36 156 L84 156 Q92 146 84 120 Q74 96 84 84 Q106 62 102 34 Z"
                  fill="url(#tea)"
                ></path>
                <path
                  d="M26 20 Q24 50 34 70"
                  stroke="rgba(255,255,255,.7)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                ></path>
                <ellipse
                  cx="60"
                  cy="10"
                  rx="46"
                  ry="6"
                  fill="none"
                  stroke="rgba(120,90,50,.5)"
                  strokeWidth="2"
                ></ellipse>
              </svg>
              <svg viewBox="0 0 120 90" style={{ position: "absolute", left: "30px", top: "-86px", width: "110px" }}>
                <path
                  className="steam"
                  d="M40 86 C 26 66, 54 54, 40 34 S 50 6, 40 0"
                  fill="none"
                  stroke="#FFFDF8"
                  strokeWidth="5"
                  strokeLinecap="round"
                ></path>
                <path
                  className="steam"
                  style={{ animationDelay: "1.3s" }}
                  d="M64 86 C 50 66, 78 54, 64 34 S 74 6, 64 0"
                  fill="none"
                  stroke="#FFFDF8"
                  strokeWidth="5"
                  strokeLinecap="round"
                ></path>
                <path
                  className="steam"
                  style={{ animationDelay: "2.6s" }}
                  d="M86 86 C 72 66, 100 54, 86 34 S 96 6, 86 0"
                  fill="none"
                  stroke="#FFFDF8"
                  strokeWidth="4"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>{" "}
            <span
              style={{
                position: "absolute",
                left: "20%",
                bottom: "120px",
                width: "26px",
                height: "26px",
                borderRadius: "4px",
                background: "#FFFDF8",
                boxShadow: "inset -4px -4px 0 #E6DAC4",
                transform: "rotate(12deg)",
              }}
            ></span>{" "}
            <span
              style={{
                position: "absolute",
                left: "24%",
                bottom: "96px",
                width: "26px",
                height: "26px",
                borderRadius: "4px",
                background: "#FFFDF8",
                boxShadow: "inset -4px -4px 0 #E6DAC4",
                transform: "rotate(-8deg)",
              }}
            ></span>{" "}
            <div
              style={{
                position: "absolute",
                left: "52%",
                bottom: "90px",
                width: "120px",
                height: "54px",
                borderRadius: "50%",
                background: "#FFFDF8",
                boxShadow: "0 8px 12px -6px rgba(0,0,0,.4)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "26px",
                  top: "12px",
                  width: "24px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#E8577A",
                  boxShadow: "inset 0 0 0 3px rgba(255,255,255,.6)",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  left: "58px",
                  top: "16px",
                  width: "24px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#8FBF5A",
                  boxShadow: "inset 0 0 0 3px rgba(255,255,255,.6)",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  left: "44px",
                  top: "4px",
                  width: "24px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#F2C14E",
                  boxShadow: "inset 0 0 0 3px rgba(255,255,255,.6)",
                }}
              ></span>
            </div>{" "}
            <div
              className="floaty"
              style={{
                "--r": "7deg",
                position: "absolute",
                right: "2%",
                top: "0",
                width: "180px",
                padding: "7px",
                borderRadius: "32px",
                background: "#120D0A",
                boxShadow: "0 50px 70px -30px rgba(18,13,10,.65)",
              }}
            >
              <img
                src="/img/86de96f2f8137a34443be4d7a199a000.jpg"
                alt=""
                style={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "389 / 842",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "26px",
                }}
              />
            </div>{" "}
            <span
              className="paper"
              style={{
                position: "absolute",
                left: "52%",
                top: "70px",
                padding: "12px 14px",
                background: "#FFF59D",
                transform: "rotate(5deg)",
                fontFamily: "'Caveat', cursive",
                fontSize: "22px",
                lineHeight: "1.1",
              }}
            >
              show the food
              <br />
              first !
            </span>{" "}
          </div>
        </div>
      </section>
      {/* 01 BEFORE */}
      <section style={{ background: "#EFE5D2", padding: "110px 24px" }}>
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
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#9B1C2E" }}>
              chapter 01 — before
            </p>
            <h2
              className="pf"
              style={{
                margin: "0",
                fontSize: "clamp(40px, 5vw, 66px)",
                lineHeight: "1.02",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              A long list of names, and no appetite.
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#4A3C30" }}>
              Someone walks past, looks the place up on their phone, and lands on a PDF. They pinch, zoom, scroll
              sideways through words like <i>İskender</i> and <i>Lahmacun</i> — with no idea what arrives on the plate.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#4A3C30" }}>
              The kitchen was generous. The menu online wasn't.
            </p>
          </div>
          <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: "0", position: "relative", height: "500px" }}>
            {" "}
            <div
              style={{
                position: "absolute",
                left: "4%",
                top: "0",
                width: "240px",
                padding: "8px",
                borderRadius: "38px",
                background: "#120D0A",
                boxShadow: "0 40px 60px -30px rgba(0,0,0,.5)",
                transform: "rotate(-5deg)",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "470px",
                  borderRadius: "30px",
                  overflow: "hidden",
                  background: "#6B6B6B",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-30px",
                    top: "50px",
                    width: "360px",
                    padding: "20px",
                    background: "#FFFFFF",
                    transform: "scale(1.3)",
                    transformOrigin: "top left",
                  }}
                >
                  <p className="mono" style={{ margin: "0 0 10px", fontSize: "11px", fontWeight: "700" }}>
                    MENU — PLATS
                  </p>
                  <div
                    className="mono"
                    style={{ display: "flex", flexDirection: "column", gap: "9px", fontSize: "9px", color: "#333" }}
                  >
                    {" "}
                    <span>İskender kebap ............................ ..</span>
                    <span>Adana kebap ............................... ..</span>
                    <span>Lahmacun ................................... ..</span>
                    <span>Kaşarlı pide ............................... ..</span>
                    <span>Mercimek çorbası ......................... ..</span>
                    <span>Çoban salatası ........................... ..</span>
                    <span>Künefe ..................................... ..</span>
                    <span>Baklava ..................................... ..</span>{" "}
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                    padding: "26px 14px 10px",
                    background: "rgba(40,40,40,.9)",
                    color: "#fff",
                    fontSize: "11px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>menu.pdf</span>
                  <span>page 1</span>
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "70px",
                    top: "250px",
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.35)",
                    border: "2px solid rgba(255,255,255,.8)",
                  }}
                ></span>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "140px",
                    top: "320px",
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.35)",
                    border: "2px solid rgba(255,255,255,.8)",
                  }}
                ></span>{" "}
              </div>
            </div>{" "}
            <div
              style={{
                position: "absolute",
                right: "8%",
                top: "40px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #FFFDF8 52%, #EDE3D0 53%, #FFFDF8 64%, #E1D4BC 100%)",
                boxShadow: "0 30px 40px -20px rgba(0,0,0,.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="hand" style={{ fontSize: "54px", color: "#A88236" }}>
                ?
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                right: "2%",
                top: "50px",
                width: "10px",
                height: "230px",
                borderRadius: "5px",
                background: "linear-gradient(90deg, #B9B1A2, #E6E1D7, #B9B1A2)",
              }}
            ></div>{" "}
            <span
              className="paper"
              style={{
                position: "absolute",
                right: "30%",
                bottom: "40px",
                padding: "14px 16px",
                background: "#FFF59D",
                transform: "rotate(-4deg)",
                fontFamily: "'Caveat', cursive",
                fontSize: "24px",
                lineHeight: "1.1",
                zIndex: "2",
              }}
            >
              what is
              <br />
              İskender??
            </span>{" "}
            <span
              className="paper"
              style={{
                position: "absolute",
                right: "2%",
                bottom: "90px",
                padding: "14px 16px",
                background: "#FFC9A3",
                transform: "rotate(6deg)",
                fontFamily: "'Caveat', cursive",
                fontSize: "24px",
                lineHeight: "1.1",
              }}
            >
              where's the
              <br />
              phone number?
            </span>{" "}
          </div>
        </div>
      </section>
      {/* 02 LISTENING */}
      <section style={{ background: "#F7F0E3", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#9B1C2E" }}>
            chapter 02 — listening
          </p>
          <h2
            className="pf"
            style={{
              margin: "0",
              maxWidth: "820px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Orders taken at the counter.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#4A3C30" }}>
            I sat with the owner on a quiet afternoon, went through the menu dish by dish, and wrote down what guests
            usually ask before coming in.
          </p>
          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
            }}
          >
            <figure
              style={{
                margin: "0",
                position: "relative",
                padding: "0 0 26px",
                background: "#FFFDF8",
                transform: "rotate(-2deg)",
                boxShadow: "0 24px 34px -20px rgba(0,0,0,.5)",
              }}
            >
              <div style={{ height: "14px", background: "#9B1C2E" }}></div>
              <div
                style={{
                  padding: "18px 24px 8px",
                  borderBottom: "1px solid #E6DAC4",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="cin" style={{ fontSize: "13px", fontWeight: "700", color: "#9B1C2E" }}>
                  ORDER · TABLE 1
                </span>
                <span className="mono" style={{ fontSize: "10px", color: "#7A6A55" }}>
                  passer-by
                </span>
              </div>
              <blockquote className="hand" style={{ margin: "14px 24px 0", fontSize: "29px", lineHeight: "1.12" }}>
                “I decide on the street, in a few seconds. Show me a plate.”
              </blockquote>
            </figure>
            <figure
              style={{
                margin: "0",
                position: "relative",
                padding: "0 0 26px",
                background: "#FFFDF8",
                transform: "rotate(1.5deg)",
                boxShadow: "0 24px 34px -20px rgba(0,0,0,.5)",
              }}
            >
              <div style={{ height: "14px", background: "#A88236" }}></div>
              <div
                style={{
                  padding: "18px 24px 8px",
                  borderBottom: "1px solid #E6DAC4",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="cin" style={{ fontSize: "13px", fontWeight: "700", color: "#9B1C2E" }}>
                  ORDER · TABLE 2
                </span>
                <span className="mono" style={{ fontSize: "10px", color: "#7A6A55" }}>
                  family
                </span>
              </div>
              <blockquote className="hand" style={{ margin: "14px 24px 0", fontSize: "29px", lineHeight: "1.12" }}>
                “The kids need to see the food before we drive there.”
              </blockquote>
            </figure>
            <figure
              style={{
                margin: "0",
                position: "relative",
                padding: "0 0 26px",
                background: "#FFFDF8",
                transform: "rotate(-1deg)",
                boxShadow: "0 24px 34px -20px rgba(0,0,0,.5)",
              }}
            >
              <div style={{ height: "14px", background: "#1C1410" }}></div>
              <div
                style={{
                  padding: "18px 24px 8px",
                  borderBottom: "1px solid #E6DAC4",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="cin" style={{ fontSize: "13px", fontWeight: "700", color: "#9B1C2E" }}>
                  ORDER · TABLE 3
                </span>
                <span className="mono" style={{ fontSize: "10px", color: "#7A6A55" }}>
                  regular
                </span>
              </div>
              <blockquote className="hand" style={{ margin: "14px 24px 0", fontSize: "29px", lineHeight: "1.12" }}>
                “I just want to call and book my table. Fast.”
              </blockquote>
            </figure>
          </div>
          <div
            style={{
              marginTop: "56px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "24px",
              padding: "32px 36px",
              borderRadius: "24px",
              background: "#9B1C2E",
              color: "#F7F0E3",
            }}
          >
            {" "}
            <span className="mono" style={{ fontSize: "12px", color: "#F6C76A" }}>
              how might we
            </span>{" "}
            <p
              className="pf"
              style={{
                margin: "0",
                flex: "1 1 520px",
                fontSize: "clamp(24px, 2.6vw, 32px)",
                lineHeight: "1.25",
                fontStyle: "italic",
              }}
            >
              make a menu that makes people want to come — not just compare prices?
            </p>
          </div>
        </div>
      </section>
      <Personas slug="divan" compact />
      {/* 03 STRUCTURE */}
      <section style={{ background: "linear-gradient(#F7F0E3, #EFE5D2)", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#9B1C2E" }}>
            chapter 03 — structure
          </p>
          <h2
            className="pf"
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            The site, written like a menu card.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#4A3C30" }}>
            Three sections, in the order a guest thinks: what's special here, what else is there, how do I get a table.
          </p>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", gap: "50px", alignItems: "flex-start" }}>
            <div
              style={{
                flex: "1 1 440px",
                maxWidth: "560px",
                padding: "14px",
                background: "#1C1410",
                boxShadow: "0 40px 60px -30px rgba(0,0,0,.6)",
                transform: "rotate(-1deg)",
              }}
            >
              <div style={{ border: "2px solid #A88236", padding: "6px" }}>
                <div
                  style={{
                    border: "1px solid #A88236",
                    padding: "30px 30px 34px",
                    color: "#F4F1EE",
                    textAlign: "center",
                  }}
                >
                  <svg viewBox="0 0 200 20" width="160" aria-hidden="true">
                    <path d="M0 10 H70 M130 10 H200" stroke="#A88236" strokeWidth="1.5"></path>
                    <path d="M100 2 L108 10 L100 18 L92 10 Z" fill="#A88236"></path>
                    <circle cx="80" cy="10" r="3" fill="#A88236"></circle>
                    <circle cx="120" cy="10" r="3" fill="#A88236"></circle>
                  </svg>
                  <p
                    className="cin"
                    style={{
                      margin: "10px 0 0",
                      fontSize: "34px",
                      fontWeight: "700",
                      color: "#A88236",
                      letterSpacing: ".06em",
                    }}
                  >
                    DIVAN HANE
                  </p>
                  <p className="pf" style={{ margin: "2px 0 26px", fontStyle: "italic", color: "#CDBFA6" }}>
                    L'art de la cuisine turque
                  </p>
                  <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "22px" }}>
                    <div>
                      <p
                        className="cin"
                        style={{
                          margin: "0",
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#F6C76A",
                          letterSpacing: ".1em",
                        }}
                      >
                        I · SPECIALITIES
                      </p>
                      <p className="pf" style={{ margin: "6px 0 0", fontSize: "17px", display: "flex", gap: "8px" }}>
                        <span>Breakfast · Grills · Pide</span>
                        <span style={{ flex: "1", borderBottom: "1px dotted #6B5A42", marginBottom: "6px" }}></span>
                        <span className="mono" style={{ fontSize: "11px", color: "#A88236" }}>
                          photos first
                        </span>
                      </p>
                    </div>
                    <div>
                      <p
                        className="cin"
                        style={{
                          margin: "0",
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#F6C76A",
                          letterSpacing: ".1em",
                        }}
                      >
                        II · FULL MENU
                      </p>
                      <p className="pf" style={{ margin: "6px 0 0", fontSize: "17px", display: "flex", gap: "8px" }}>
                        <span>Soups · Salads · Mains · Sauces</span>
                        <span style={{ flex: "1", borderBottom: "1px dotted #6B5A42", marginBottom: "6px" }}></span>
                        <span className="mono" style={{ fontSize: "11px", color: "#A88236" }}>
                          by section
                        </span>
                      </p>
                    </div>
                    <div>
                      <p
                        className="cin"
                        style={{
                          margin: "0",
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#F6C76A",
                          letterSpacing: ".1em",
                        }}
                      >
                        III · VISIT
                      </p>
                      <p className="pf" style={{ margin: "6px 0 0", fontSize: "17px", display: "flex", gap: "8px" }}>
                        <span>Location · Call · Instagram</span>
                        <span style={{ flex: "1", borderBottom: "1px dotted #6B5A42", marginBottom: "6px" }}></span>
                        <span className="mono" style={{ fontSize: "11px", color: "#A88236" }}>
                          one tap
                        </span>
                      </p>
                    </div>
                  </div>
                  <svg viewBox="0 0 200 20" width="160" aria-hidden="true" style={{ marginTop: "26px" }}>
                    <path d="M0 10 H70 M130 10 H200" stroke="#A88236" strokeWidth="1.5"></path>
                    <path d="M100 2 L108 10 L100 18 L92 10 Z" fill="#A88236"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "1 1 340px",
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                paddingTop: "20px",
              }}
            >
              <div className="paper" style={{ padding: "20px 22px", transform: "rotate(1.5deg)" }}>
                <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9B1C2E" }}>
                  rule one
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "18px", fontWeight: "700" }}>Food first</p>
                <p style={{ margin: "6px 0 0", color: "#4A3C30", lineHeight: "1.5" }}>
                  Every section opens with a photo, before any word.
                </p>
              </div>
              <div className="paper" style={{ padding: "20px 22px", transform: "rotate(-1deg)" }}>
                <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9B1C2E" }}>
                  rule two
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "18px", fontWeight: "700" }}>Phone first</p>
                <p style={{ margin: "6px 0 0", color: "#4A3C30", lineHeight: "1.5" }}>
                  Designed for the street and the table, then widened for desktop.
                </p>
              </div>
              <div className="paper" style={{ padding: "20px 22px", transform: "rotate(1deg)" }}>
                <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9B1C2E" }}>
                  rule three
                </p>
                <p style={{ margin: "6px 0 0", fontSize: "18px", fontWeight: "700" }}>One-tap call</p>
                <p style={{ margin: "6px 0 0", color: "#4A3C30", lineHeight: "1.5" }}>
                  Guests prefer to phone — so the call button follows them.
                </p>
              </div>
            </div>
          </div>{" "}
          <div style={{ marginTop: "90px" }}>
            <p className="mono" style={{ margin: "0 0 12px", fontSize: "13px", color: "#9B1C2E" }}>
              the path
            </p>
            <h3
              className="pf"
              style={{ margin: "0", fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: "1.05", fontWeight: "700" }}
            >
              From craving to table.
            </h3>
            <div style={{ position: "relative", marginTop: "40px" }}>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "8%", right: "8%", top: "46px", borderTop: "3px dashed #A88236" }}
              ></div>{" "}
              <span
                aria-hidden="true"
                className="walk"
                style={{
                  position: "absolute",
                  top: "36px",
                  marginLeft: "-12px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#9B1C2E",
                  boxShadow: "0 0 0 5px rgba(155,28,46,.2)",
                }}
              ></span>{" "}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "16px",
                  position: "relative",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      background: "#FFFDF8",
                      boxShadow: "0 14px 20px -12px rgba(0,0,0,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="cin" style={{ fontSize: "26px", color: "#A88236" }}>
                      I
                    </span>
                  </div>
                  <p style={{ margin: "12px 0 0", fontWeight: "700" }}>Hero photo</p>
                  <p className="hand" style={{ margin: "2px 0 0", fontSize: "21px", color: "#7A6A55" }}>
                    “that looks good”
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      background: "#FFFDF8",
                      boxShadow: "0 14px 20px -12px rgba(0,0,0,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="cin" style={{ fontSize: "26px", color: "#A88236" }}>
                      II
                    </span>
                  </div>
                  <p style={{ margin: "12px 0 0", fontWeight: "700" }}>Specialities</p>
                  <p className="hand" style={{ margin: "2px 0 0", fontSize: "21px", color: "#7A6A55" }}>
                    “I want that one”
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      background: "#FFFDF8",
                      boxShadow: "0 14px 20px -12px rgba(0,0,0,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="cin" style={{ fontSize: "26px", color: "#A88236" }}>
                      III
                    </span>
                  </div>
                  <p style={{ margin: "12px 0 0", fontWeight: "700" }}>Full menu</p>
                  <p className="hand" style={{ margin: "2px 0 0", fontSize: "21px", color: "#7A6A55" }}>
                    “and for the kids?”
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      background: "#9B1C2E",
                      boxShadow: "0 14px 20px -12px rgba(0,0,0,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      className="ring"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F7F0E3"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>
                    </svg>
                  </div>
                  <p style={{ margin: "12px 0 0", fontWeight: "700" }}>Call to reserve</p>
                  <p className="hand" style={{ margin: "2px 0 0", fontSize: "21px", color: "#7A6A55" }}>
                    one tap
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      background: "radial-gradient(ellipse at 50% 40%, #E4C27A, #A88236)",
                      boxShadow: "0 14px 20px -12px rgba(0,0,0,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        width: "26px",
                        height: "40px",
                        borderRadius: "4px 4px 12px 12px",
                        background: "#9B1C2E",
                        boxShadow: "inset 0 0 0 3px rgba(255,255,255,.4)",
                      }}
                    ></span>
                  </div>
                  <p style={{ margin: "12px 0 0", fontWeight: "700" }}>At the table</p>
                  <p className="hand" style={{ margin: "2px 0 0", fontSize: "21px", color: "#7A6A55" }}>
                    çay is served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 SKETCHES */}
      <section style={{ background: "#F7F0E3", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#9B1C2E" }}>
            chapter 04 — sketches
          </p>
          <h2
            className="pf"
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Drawn on a napkin, between two teas.
          </h2>
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
                  padding: "26px",
                  minHeight: "380px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 24px 40px -26px rgba(0,0,0,.5)",
                  transform: "rotate(-2deg)",
                  boxSizing: "border-box",
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent 0 7px, rgba(0,0,0,.025) 7px 8px), repeating-linear-gradient(90deg, transparent 0 7px, rgba(0,0,0,.02) 7px 8px)",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: "22px",
                    bottom: "30px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    border: "7px solid rgba(155,60,20,.2)",
                  }}
                ></span>{" "}
                <p className="hand" style={{ margin: "0 0 8px", fontSize: "26px", color: "#1E3A8A" }}>
                  home — phone
                </p>
                <div
                  style={{ height: "120px", border: "2px solid #1E3A8A", borderRadius: "6px", position: "relative" }}
                >
                  <span
                    className="hand"
                    style={{ position: "absolute", left: "10px", top: "6px", fontSize: "20px", color: "#1E3A8A" }}
                  >
                    BIG photo
                  </span>
                  <svg
                    viewBox="0 0 100 60"
                    preserveAspectRatio="none"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                    aria-hidden="true"
                  >
                    <path d="M0 0 L100 60 M100 0 L0 60" stroke="#1E3A8A" strokeWidth=".6"></path>
                  </svg>
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <span style={{ flex: "1", height: "60px", border: "2px solid #1E3A8A", borderRadius: "50%" }}></span>
                  <span style={{ flex: "1", height: "60px", border: "2px solid #1E3A8A", borderRadius: "50%" }}></span>
                  <span style={{ flex: "1", height: "60px", border: "2px solid #1E3A8A", borderRadius: "50%" }}></span>
                </div>
                <p className="hand" style={{ margin: "6px 0 0", fontSize: "20px", color: "#1E3A8A" }}>
                  plates, round
                </p>
                <div
                  style={{
                    marginTop: "10px",
                    height: "38px",
                    border: "3px solid #9B1C2E",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="hand" style={{ fontSize: "22px", color: "#9B1C2E" }}>
                    CALL — always visible
                  </span>
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Napkin sketch</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  padding: "18px",
                  minHeight: "380px",
                  borderRadius: "12px",
                  background: "#E6DCC9",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span style={{ height: "24px", borderRadius: "6px", background: "#D4C8B1" }}></span>{" "}
                <span style={{ height: "130px", borderRadius: "8px", background: "#C9BB9F" }}></span>{" "}
                <span
                  style={{
                    height: "16px",
                    width: "50%",
                    margin: "4px auto",
                    borderRadius: "4px",
                    background: "#C9BB9F",
                  }}
                ></span>{" "}
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ flex: "1", aspectRatio: "1", borderRadius: "50%", background: "#D4C8B1" }}></span>
                  <span style={{ flex: "1", aspectRatio: "1", borderRadius: "50%", background: "#D4C8B1" }}></span>
                  <span style={{ flex: "1", aspectRatio: "1", borderRadius: "50%", background: "#D4C8B1" }}></span>
                </div>{" "}
                <span
                  style={{ marginTop: "auto", height: "40px", borderRadius: "20px", background: "#B8A889" }}
                ></span>{" "}
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Wireframe</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 50px -28px rgba(0,0,0,.55)" }}>
                <img
                  src="/img/9d56cea9e16b7094d1c46f25be4de9c4.jpg"
                  alt="Divan Hane specialities section"
                  style={{ display: "block", width: "100%", aspectRatio: "800 / 499", objectFit: "cover" }}
                />
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Shipped</figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 05 VISUAL LANGUAGE */}
      <section
        style={{
          background: "#120D0A",
          color: "#F4F1EE",
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            height: "12px",
            background:
              "repeating-linear-gradient(90deg, #A88236 0 14px, transparent 14px 20px, #9B1C2E 20px 34px, transparent 34px 40px)",
          }}
        ></div>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#A88236" }}>
            chapter 05 — visual language
          </p>
          <h2
            className="pf"
            style={{
              margin: "0",
              maxWidth: "820px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Evening light, antique gold, a touch of wine.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#CDBFA6" }}>
            The palette comes from the room itself — the spice shelf, the brass trays, the dark wood. Photos glow on
            black; gold draws the titles; wine marks every action.
          </p>
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
                gap: "12px",
                textAlign: "center",
              }}
            >
              <div aria-hidden="true" style={{ position: "relative", width: "150px", height: "90px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "20px",
                    height: "70px",
                    borderRadius: "0 0 75px 75px",
                    background: "linear-gradient(90deg, #3A2A1C, #6B5233 50%, #3A2A1C)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "6px",
                    right: "6px",
                    top: "6px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 40% 40%, #D9AE55, #A88236 60%, #7A5E22)",
                  }}
                ></span>
              </div>
              <b>Saffron gold</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A89A82" }}>
                #A88236 · titles
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                textAlign: "center",
              }}
            >
              <div aria-hidden="true" style={{ position: "relative", width: "150px", height: "90px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "20px",
                    height: "70px",
                    borderRadius: "0 0 75px 75px",
                    background: "linear-gradient(90deg, #3A2A1C, #6B5233 50%, #3A2A1C)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "6px",
                    right: "6px",
                    top: "6px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 40% 40%, #C3364B, #9B1C2E 60%, #6A1220)",
                  }}
                ></span>
              </div>
              <b>Sumac wine</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A89A82" }}>
                #9B1C2E · actions
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                textAlign: "center",
              }}
            >
              <div aria-hidden="true" style={{ position: "relative", width: "150px", height: "90px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "20px",
                    height: "70px",
                    borderRadius: "0 0 75px 75px",
                    background: "linear-gradient(90deg, #3A2A1C, #6B5233 50%, #3A2A1C)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "6px",
                    right: "6px",
                    top: "6px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 40% 40%, #3A3A3A, #0A0A0A 60%, #000)",
                  }}
                ></span>
              </div>
              <b>Nigella black</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A89A82" }}>
                #000000 · ground
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                textAlign: "center",
              }}
            >
              <div aria-hidden="true" style={{ position: "relative", width: "150px", height: "90px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "20px",
                    height: "70px",
                    borderRadius: "0 0 75px 75px",
                    background: "linear-gradient(90deg, #3A2A1C, #6B5233 50%, #3A2A1C)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "6px",
                    right: "6px",
                    top: "6px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 40% 40%, #FFFFFF, #F4F1EE 60%, #D9D2C7)",
                  }}
                ></span>
              </div>
              <b>Linen</b>
              <span className="mono" style={{ fontSize: "12px", color: "#A89A82" }}>
                #F4F1EE · text
              </span>
            </div>
          </div>
          <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "18px" }}>
            <div style={{ flex: "1 1 340px", padding: "28px", border: "1px solid #3A2E22" }}>
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#A89A82" }}>
                Cinzel — engraved capitals
              </p>
              <p
                className="cin"
                style={{ margin: "10px 0 0", fontSize: "48px", lineHeight: "1", fontWeight: "700", color: "#A88236" }}
              >
                Divan Hane
              </p>
              <p className="pf" style={{ margin: "14px 0 0", fontSize: "22px", fontStyle: "italic", color: "#F4F1EE" }}>
                Playfair Display — L'art de la cuisine turque
              </p>
            </div>
            <div
              style={{
                flex: "1 1 300px",
                padding: "28px",
                border: "1px solid #3A2E22",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#A89A82" }}>
                components
              </p>{" "}
              <span
                className="cin"
                style={{
                  alignSelf: "flex-start",
                  padding: "14px 24px",
                  background: "#9B1C2E",
                  color: "#F4F1EE",
                  fontWeight: "700",
                  letterSpacing: ".06em",
                  fontSize: "14px",
                }}
              >
                Découvrir nos plats
              </span>{" "}
              <span
                className="cin"
                style={{
                  alignSelf: "flex-start",
                  padding: "13px 23px",
                  border: "1px solid #A88236",
                  color: "#A88236",
                  fontWeight: "700",
                  letterSpacing: ".06em",
                  fontSize: "14px",
                }}
              >
                Voir le menu complet
              </span>{" "}
              <div style={{ display: "flex", gap: "8px" }}>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "rgba(168,130,54,.2)",
                    color: "#E4C27A",
                    fontSize: "12px",
                  }}
                >
                  Spécialité
                </span>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "rgba(143,191,90,.18)",
                    color: "#B5D98A",
                    fontSize: "12px",
                  }}
                >
                  Végétarien
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 06 SOLUTION */}
      <section
        style={{ background: "radial-gradient(90% 70% at 20% 10%, #F6DDB0, #F7F0E3 60%)", padding: "120px 24px" }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#9B1C2E" }}>
            chapter 06 — the site
          </p>
          <h2
            className="pf"
            style={{
              margin: "0",
              maxWidth: "860px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            See it. Want it. Call.
          </h2>
          <div style={{ marginTop: "60px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "40px" }}>
            <figure style={{ flex: "3 1 640px", minWidth: "0", margin: "0", perspective: "2000px" }}>
              <div style={{ transform: "rotateX(8deg)" }}>
                <div
                  style={{
                    padding: "14px 14px 18px",
                    borderRadius: "20px 20px 4px 4px",
                    background: "linear-gradient(#2A221C, #120D0A)",
                    boxShadow: "0 50px 80px -40px rgba(0,0,0,.6)",
                  }}
                >
                  <img
                    src="/img/9d7b8449af097dc6bc542ed764f4c69a.jpg"
                    alt="Divan Hane home page on desktop"
                    style={{
                      display: "block",
                      width: "100%",
                      aspectRatio: "800 / 499",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "18px",
                    margin: "0 -46px",
                    borderRadius: "2px 2px 24px 24px",
                    background: "linear-gradient(#E6DFD3, #A39A8B)",
                  }}
                ></div>
              </div>
              <figcaption style={{ marginTop: "22px", fontWeight: "700" }}>Live site — home</figcaption>
            </figure>
            <figure style={{ flex: "1 1 220px", margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "230px",
                  margin: "0 auto",
                  padding: "8px",
                  borderRadius: "38px",
                  background: "#120D0A",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                  transform: "rotate(4deg)",
                }}
              >
                <img
                  src="/img/86de96f2f8137a34443be4d7a199a000.jpg"
                  alt="Divan Hane on a phone"
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "389 / 842",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Live site — phone</figcaption>
            </figure>
          </div>
          <div
            style={{
              marginTop: "90px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "34px",
            }}
          >
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "256px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#120D0A",
                  boxShadow: "0 50px 70px -30px rgba(0,0,0,.6)",
                  transform: "rotate(-4deg)",
                }}
              >
                <div
                  style={{
                    height: "530px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#120D0A",
                    color: "#F4F1EE",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ padding: "28px 18px 14px", textAlign: "center", borderBottom: "1px solid #3A2E22" }}>
                    <p
                      className="cin"
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#A88236",
                        letterSpacing: ".08em",
                      }}
                    >
                      MENU
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "12px",
                        marginTop: "10px",
                        fontSize: "11px",
                      }}
                    >
                      <span style={{ color: "#F6C76A", borderBottom: "1px solid #F6C76A" }}>Grills</span>
                      <span style={{ opacity: ".6" }}>Pide</span>
                      <span style={{ opacity: ".6" }}>Soups</span>
                      <span style={{ opacity: ".6" }}>Sweets</span>
                    </div>
                  </div>
                  <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <svg width="74" height="74" viewBox="0 0 74 74" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="37" cy="37" r="35" fill="#F4F1EE"></circle>
                        <circle cx="37" cy="37" r="27" fill="#E8DFD0"></circle>
                        <path d="M18 40 Q37 20 56 40 Q37 52 18 40" fill="#7A3B1E"></path>
                        <path d="M22 38 Q37 26 52 38" stroke="#5A2A12" strokeWidth="3" fill="none"></path>
                        <path d="M20 44 Q37 58 54 44" fill="#B4231B"></path>
                        <ellipse cx="44" cy="50" rx="9" ry="5" fill="#FFFFFF"></ellipse>
                      </svg>
                      <div>
                        <p className="pf" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                          İskender
                        </p>
                        <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#A89A82" }}>
                          Döner, tomato butter, yogurt
                        </p>
                        <span
                          style={{
                            display: "inline-block",
                            marginTop: "5px",
                            padding: "3px 8px",
                            borderRadius: "999px",
                            background: "rgba(168,130,54,.25)",
                            color: "#E4C27A",
                            fontSize: "10px",
                          }}
                        >
                          Chef's pick
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <svg width="74" height="74" viewBox="0 0 74 74" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="37" cy="37" r="35" fill="#F4F1EE"></circle>
                        <circle cx="37" cy="37" r="29" fill="#D9A15A"></circle>
                        <circle cx="37" cy="37" r="24" fill="#B4402A"></circle>
                        <circle cx="28" cy="30" r="3" fill="#6FA03C"></circle>
                        <circle cx="44" cy="40" r="3" fill="#6FA03C"></circle>
                        <circle cx="34" cy="46" r="2.5" fill="#6FA03C"></circle>
                        <circle cx="46" cy="28" r="2.5" fill="#F4F1EE"></circle>
                        <path d="M44 50 l6 -4" stroke="#F6D36A" strokeWidth="3"></path>
                      </svg>
                      <div>
                        <p className="pf" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                          Lahmacun
                        </p>
                        <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#A89A82" }}>
                          Thin dough, spiced meat, herbs
                        </p>
                        <span
                          style={{
                            display: "inline-block",
                            marginTop: "5px",
                            padding: "3px 8px",
                            borderRadius: "999px",
                            background: "rgba(168,130,54,.25)",
                            color: "#E4C27A",
                            fontSize: "10px",
                          }}
                        >
                          Classic
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <svg width="74" height="74" viewBox="0 0 74 74" aria-hidden="true" style={{ flex: "none" }}>
                        <circle cx="37" cy="37" r="35" fill="#F4F1EE"></circle>
                        <circle cx="37" cy="37" r="27" fill="#E8DFD0"></circle>
                        <circle cx="37" cy="37" r="20" fill="#E8A13A"></circle>
                        <circle cx="37" cy="37" r="20" fill="none" stroke="#C97A1E" strokeWidth="3"></circle>
                        <path d="M30 34 q7 -6 14 0" stroke="#B4231B" strokeWidth="2" fill="none"></path>
                        <circle cx="44" cy="44" r="2" fill="#6FA03C"></circle>
                      </svg>
                      <div>
                        <p className="pf" style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
                          Mercimek çorbası
                        </p>
                        <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#A89A82" }}>Red lentil soup, lemon</p>
                        <span
                          style={{
                            display: "inline-block",
                            marginTop: "5px",
                            padding: "3px 8px",
                            borderRadius: "999px",
                            background: "rgba(143,191,90,.18)",
                            color: "#B5D98A",
                            fontSize: "10px",
                          }}
                        >
                          Vegetarian
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <span
                    className="cin"
                    style={{
                      margin: "auto 14px 14px",
                      padding: "13px",
                      background: "#9B1C2E",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "13px",
                      letterSpacing: ".06em",
                    }}
                  >
                    Call to reserve
                  </span>{" "}
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Menu by section</figcaption>
            </figure>
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "236px",
                  padding: "8px",
                  borderRadius: "38px",
                  background: "#120D0A",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                  transform: "rotate(4deg)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "500px",
                    borderRadius: "30px",
                    overflow: "hidden",
                    background: "linear-gradient(160deg, #5A2A12, #120D0A 70%)",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      top: "0",
                      height: "52%",
                      background: "radial-gradient(circle at 50% 60%, rgba(246,199,106,.35), transparent 60%)",
                    }}
                  >
                    <svg
                      viewBox="0 0 120 170"
                      style={{ position: "absolute", left: "50%", top: "40px", marginLeft: "-34px", width: "68px" }}
                      aria-hidden="true"
                    >
                      <path
                        d="M14 10 Q8 60 34 86 Q44 96 34 120 Q26 146 34 160 L86 160 Q94 146 86 120 Q76 96 86 86 Q112 60 106 10 Z"
                        fill="rgba(255,255,255,.3)"
                      ></path>
                      <path
                        d="M18 34 Q14 62 36 84 Q46 96 36 120 Q28 146 36 156 L84 156 Q92 146 84 120 Q74 96 84 84 Q106 62 102 34 Z"
                        fill="#B4402A"
                      ></path>
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      padding: "20px 16px 18px",
                      borderRadius: "24px 24px 0 0",
                      background: "#F4F1EE",
                      color: "#1C1410",
                    }}
                  >
                    {" "}
                    <span
                      style={{
                        display: "block",
                        width: "40px",
                        height: "4px",
                        margin: "0 auto 14px",
                        borderRadius: "2px",
                        background: "#CDBFA6",
                      }}
                    ></span>{" "}
                    <p className="cin" style={{ margin: "0", fontSize: "17px", fontWeight: "700", color: "#9B1C2E" }}>
                      Book your table
                    </p>
                    <p style={{ margin: "6px 0 14px", fontSize: "12px", color: "#4A3C30" }}>
                      The restaurant answers during opening hours.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        padding: "14px",
                        background: "#9B1C2E",
                        color: "#F4F1EE",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      <svg
                        className="ring"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>
                      </svg>
                      Call Divan Hane
                    </div>
                    <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                      <span
                        style={{
                          flex: "1",
                          padding: "10px",
                          border: "1px solid #A88236",
                          color: "#8C6A2C",
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Directions
                      </span>
                      <span
                        style={{
                          flex: "1",
                          padding: "10px",
                          border: "1px solid #A88236",
                          color: "#8C6A2C",
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Instagram
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Reserve in one tap</figcaption>
            </figure>
          </div>
          <p className="mono" style={{ margin: "30px 0 0", textAlign: "center", fontSize: "12px", color: "#7A6A55" }}>
            menu and booking screens redrawn for this case study
          </p>
        </div>
      </section>
      {/* 07 AFTER */}
      <section style={{ background: "#120D0A", color: "#F4F1EE", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#A88236" }}>
            chapter 07 — after
          </p>
          <h2
            className="pf"
            style={{
              margin: "0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1.02",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Now the menu sets the table.
          </h2>
          <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
                padding: "24px 28px",
                border: "1px solid #3A2E22",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#A89A82",
                  textDecoration: "line-through",
                  textDecorationColor: "#9B1C2E",
                }}
              >
                menu_final.pdf
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#A88236"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                Dishes shown big, before any price
              </span>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
                padding: "24px 28px",
                border: "1px solid #3A2E22",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#A89A82",
                  textDecoration: "line-through",
                  textDecorationColor: "#9B1C2E",
                }}
              >
                “what is İskender??”
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#A88236"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                A photo and one line for every dish
              </span>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
                padding: "24px 28px",
                border: "1px solid #3A2E22",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#A89A82",
                  textDecoration: "line-through",
                  textDecorationColor: "#9B1C2E",
                }}
              >
                “where's the phone number?”
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#A88236"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                A call button that follows the guest
              </span>{" "}
            </div>
          </div>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            {" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A2E22", fontSize: "14px" }}>
              Next.js
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A2E22", fontSize: "14px" }}>
              React
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A2E22", fontSize: "14px" }}>
              Tailwind CSS
            </span>{" "}
            <a
              href="https://divanhane.vercel.app/"
              className="cin"
              style={{
                marginLeft: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 26px",
                background: "#9B1C2E",
                color: "#F4F1EE",
                fontWeight: "700",
                letterSpacing: ".06em",
                textDecoration: "none",
              }}
            >
              Visit the site{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M9 7h8v8"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
