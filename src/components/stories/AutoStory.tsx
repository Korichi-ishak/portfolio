import { CaseFile, Personas } from "@/components/case/blocks";

/* Generated from the validated maquette (Story-auto.dc.html), then edited by hand. */
export default function AutoStory() {
  return (
    <div
      className="st st-auto"
      style={{
        fontFamily: "'Archivo', sans-serif",
        color: "#111214",
        background: "#EEEBE4",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" precedence="default" />
      {/* HERO: THE WORKSHOP */}
      <section
        style={{
          position: "relative",
          padding: "70px 24px 0",
          background: "radial-gradient(90% 80% at 80% 30%, #FFF3D1 0%, #EEEBE4 60%)",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            gap: "40px",
          }}
        >
          <div style={{ flex: "1 1 420px", minWidth: "0", paddingBottom: "60px" }}>
            <p className="mono" style={{ margin: "0 0 22px", fontSize: "13px", color: "#6B6458" }}>
              a story in seven chapters
            </p>
            <h1
              style={{
                margin: "0",
                fontSize: "clamp(60px, 8.6vw, 128px)",
                lineHeight: ".88",
                fontWeight: "900",
                letterSpacing: "-0.045em",
              }}
            >
              Auto
              <br />
              Techno
            </h1>
            <p className="hand" style={{ margin: "10px 0 0", fontSize: "clamp(34px, 3.8vw, 50px)", color: "#C98A00" }}>
              from the chat to the workshop
            </p>
            <p style={{ margin: "22px 0 0", maxWidth: "470px", fontSize: "18px", lineHeight: "1.6", color: "#34363B" }}>
              The story of a team that sold ECU files, airbag resets and diagnostic software to garages through
              messaging apps — and the platform I built so a mechanic could find, pay and download the right file alone.
            </p>
            <CaseFile slug="auto" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
              {" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FBE4A6", fontSize: "12px" }}>
                Business interview
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FBE4A6", fontSize: "12px" }}>
                Catalogue modelling
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FBE4A6", fontSize: "12px" }}>
                User flow
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FBE4A6", fontSize: "12px" }}>
                Wireframe
              </span>{" "}
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FBE4A6", fontSize: "12px" }}>
                Next.js · PostgreSQL
              </span>{" "}
            </div>
          </div>{" "}
          <div aria-hidden="true" style={{ flex: "1 1 580px", minWidth: "0", position: "relative", height: "560px" }}>
            {" "}
            <div
              style={{
                position: "absolute",
                left: "4%",
                right: "0",
                top: "10px",
                height: "250px",
                borderRadius: "14px",
                backgroundColor: "#D8D2C5",
                backgroundImage: "radial-gradient(#B9B1A2 2px, transparent 2.5px)",
                backgroundSize: "22px 22px",
              }}
            ></div>{" "}
            <svg viewBox="0 0 300 120" style={{ position: "absolute", left: "10%", top: "40px", width: "46%" }}>
              <path d="M20 20 L20 100 M10 100 H30" stroke="#5B6470" strokeWidth="8" strokeLinecap="round"></path>
              <path
                d="M70 18 Q60 30 70 42 L70 104"
                stroke="#3A3D45"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
              ></path>
              <circle cx="70" cy="18" r="12" fill="none" stroke="#3A3D45" strokeWidth="8"></circle>
              <rect x="110" y="20" width="24" height="70" rx="6" fill="#F2A900"></rect>
              <rect x="116" y="88" width="12" height="22" fill="#5B6470"></rect>
              <path d="M170 20 L190 100 M210 20 L190 100" stroke="#5B6470" strokeWidth="7" strokeLinecap="round"></path>
              <circle cx="250" cy="60" r="34" fill="none" stroke="#3A3D45" strokeWidth="10"></circle>
            </svg>{" "}
            <span
              className="paper floaty"
              style={{
                "--r": "-6deg",
                position: "absolute",
                right: "6%",
                top: "34px",
                padding: "12px 16px",
                background: "#FFF59D",
                fontFamily: "'Caveat', cursive",
                fontSize: "22px",
                lineHeight: "1.1",
                color: "#2A2A2A",
              }}
            >
              file for the
              <br />
              BMW ??
            </span>{" "}
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                height: "70px",
                background: "#C9C2B5",
              }}
            ></div>
            <div
              className="hazard"
              style={{ position: "absolute", left: "0", right: "0", bottom: "70px", height: "10px" }}
            ></div>{" "}
            <div
              style={{
                position: "absolute",
                left: "18%",
                bottom: "70px",
                width: "22px",
                height: "300px",
                background: "linear-gradient(90deg, #4B5563, #6B7280, #4B5563)",
                borderRadius: "4px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "82%",
                bottom: "70px",
                width: "22px",
                height: "300px",
                background: "linear-gradient(90deg, #4B5563, #6B7280, #4B5563)",
                borderRadius: "4px",
              }}
            ></div>{" "}
            <div className="lift" style={{ position: "absolute", left: "14%", right: "12%", bottom: "150px" }}>
              <div
                style={{
                  height: "12px",
                  margin: "0 4%",
                  background: "#F2A900",
                  borderRadius: "4px",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "-8px",
                }}
              ></div>
              <svg viewBox="0 0 520 200" width="100%">
                <defs>
                  <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#7C8FA6"></stop>
                    <stop offset=".6" stopColor="#4B5D73"></stop>
                    <stop offset="1" stopColor="#33404F"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M40 140 Q38 110 70 102 L150 94 Q190 52 250 48 L340 48 Q380 50 420 90 L470 98 Q492 102 492 130 L492 146 Q492 154 482 154 L48 154 Q40 154 40 146 Z"
                  fill="url(#body)"
                ></path>
                <path d="M168 94 Q200 62 250 60 L292 60 L292 94 Z" fill="#CFE0EE"></path>
                <path d="M300 60 L338 60 Q368 62 400 94 L300 94 Z" fill="#CFE0EE"></path>
                <path d="M60 118 H480" stroke="rgba(255,255,255,.35)" strokeWidth="3"></path>
                <rect x="470" y="108" width="16" height="10" rx="3" fill="#FFE27A"></rect>
                <g className="wheel">
                  <circle cx="130" cy="154" r="30" fill="#17181B"></circle>
                  <circle cx="130" cy="154" r="14" fill="#C9CED8"></circle>
                  <path d="M130 140 V168 M116 154 H144" stroke="#6B7280" strokeWidth="3"></path>
                </g>
                <g className="wheel">
                  <circle cx="400" cy="154" r="30" fill="#17181B"></circle>
                  <circle cx="400" cy="154" r="14" fill="#C9CED8"></circle>
                  <path d="M400 140 V168 M386 154 H414" stroke="#6B7280" strokeWidth="3"></path>
                </g>
                <circle cx="190" cy="130" r="6" fill="#F2A900"></circle>
              </svg>
            </div>{" "}
            <svg
              viewBox="0 0 600 560"
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
            >
              <path
                d="M196 330 C190 400 120 380 110 430 C100 470 160 470 180 480"
                fill="none"
                stroke="#17181B"
                strokeWidth="7"
              ></path>
              <path
                className="sig"
                d="M196 330 C190 400 120 380 110 430 C100 470 160 470 180 480"
                fill="none"
                stroke="#F2A900"
                strokeWidth="3"
              ></path>
            </svg>{" "}
            <div style={{ position: "absolute", left: "22%", bottom: "70px", width: "260px" }}>
              <div
                style={{
                  padding: "8px 8px 10px",
                  borderRadius: "10px 10px 2px 2px",
                  background: "#1E2127",
                  transform: "perspective(700px) rotateX(6deg)",
                }}
              >
                <img
                  src="/img/36987c219d5f68378b89905433757be5.jpg"
                  alt=""
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "800 / 499",
                    objectFit: "cover",
                    borderRadius: "3px",
                  }}
                />
              </div>
              <div
                style={{
                  height: "9px",
                  margin: "0 -16px",
                  borderRadius: "0 0 10px 10px",
                  background: "linear-gradient(#C9CED8, #8E949E)",
                }}
              ></div>
              <div
                style={{
                  height: "70px",
                  margin: "6px 10px 0",
                  borderRadius: "6px",
                  background: "#B03A2E",
                  boxShadow: "inset 0 -6px 0 rgba(0,0,0,.25)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "12px",
                    right: "12px",
                    top: "22px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "rgba(0,0,0,.25)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "12px",
                    right: "12px",
                    top: "44px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "rgba(0,0,0,.25)",
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 01 BEFORE */}
      <section style={{ background: "#E4DFD4", padding: "110px 24px" }}>
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
            <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#7A5400" }}>
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
              Every file was sent by hand.
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#34363B" }}>
              A garage needed a file for one precise car. It sent a message, waited, sent a photo of the ECU sticker,
              waited again. On the other side, the team searched folders named{" "}
              <span className="mono" style={{ fontSize: "15px", background: "#FFFDF6", padding: "2px 6px" }}>
                final_v2_ok
              </span>
              , confirmed the payment by hand and sent the file back.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#34363B" }}>
              Nothing was wrong with the files. Everything was wrong with the way they travelled.
            </p>
          </div>{" "}
          <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: "0", position: "relative", height: "500px" }}>
            {" "}
            <div
              style={{
                position: "absolute",
                left: "4%",
                top: "10px",
                width: "230px",
                padding: "8px",
                borderRadius: "36px",
                background: "#17181B",
                boxShadow: "0 40px 60px -30px rgba(0,0,0,.5)",
                transform: "rotate(-6deg)",
              }}
            >
              <div
                style={{
                  height: "440px",
                  borderRadius: "28px",
                  background: "#ECE5DA",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "24px 14px 10px",
                    background: "#2B3A4A",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  Garage Nord
                </div>
                <div
                  style={{
                    flex: "1",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "11px",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "85%",
                      padding: "7px 9px",
                      borderRadius: "9px",
                      background: "#fff",
                    }}
                  >
                    salam, file for this BMW?
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      width: "70%",
                      height: "70px",
                      borderRadius: "9px",
                      background: "linear-gradient(135deg, #9CA3AF, #4B5563)",
                    }}
                  ></span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "85%",
                      padding: "7px 9px",
                      borderRadius: "9px",
                      background: "#fff",
                    }}
                  >
                    here is the sticker
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-end",
                      maxWidth: "85%",
                      padding: "7px 9px",
                      borderRadius: "9px",
                      background: "#D6F5C6",
                    }}
                  >
                    checking the folder…
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "85%",
                      padding: "7px 9px",
                      borderRadius: "9px",
                      background: "#fff",
                    }}
                  >
                    still waiting…
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-end",
                      maxWidth: "85%",
                      padding: "7px 9px",
                      borderRadius: "9px",
                      background: "#D6F5C6",
                    }}
                  >
                    payment received?
                  </span>{" "}
                </div>
              </div>
            </div>{" "}
            <div
              style={{
                position: "absolute",
                right: "6%",
                top: "30px",
                width: "300px",
                padding: "18px",
                borderRadius: "12px",
                background: "#FFFFFF",
                boxShadow: "0 30px 40px -24px rgba(0,0,0,.45)",
                transform: "rotate(3deg)",
              }}
            >
              <p className="mono" style={{ margin: "0 0 12px", fontSize: "11px", color: "#6B6458" }}>
                /files_ecu
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px 10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      height: "40px",
                      borderRadius: "4px 10px 6px 6px",
                      background: "#F2C14E",
                    }}
                  ></span>
                  <span className="mono" style={{ fontSize: "9px" }}>
                    final_v2
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      height: "40px",
                      borderRadius: "4px 10px 6px 6px",
                      background: "#F2C14E",
                    }}
                  ></span>
                  <span className="mono" style={{ fontSize: "9px" }}>
                    new_new
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      height: "40px",
                      borderRadius: "4px 10px 6px 6px",
                      background: "#F2C14E",
                    }}
                  ></span>
                  <span className="mono" style={{ fontSize: "9px" }}>
                    airbag ok?
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      height: "40px",
                      borderRadius: "4px 10px 6px 6px",
                      background: "#F2C14E",
                    }}
                  ></span>
                  <span className="mono" style={{ fontSize: "9px" }}>
                    a trier
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      height: "40px",
                      borderRadius: "4px 10px 6px 6px",
                      background: "#F2C14E",
                    }}
                  ></span>
                  <span className="mono" style={{ fontSize: "9px" }}>
                    DONT DELETE
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      height: "40px",
                      borderRadius: "4px 10px 6px 6px",
                      background: "#F2C14E",
                    }}
                  ></span>
                  <span className="mono" style={{ fontSize: "9px" }}>
                    copy (3)
                  </span>
                </div>
              </div>
            </div>{" "}
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
                fontSize: "22px",
                lineHeight: "1.1",
              }}
            >
              send file to
              <br />
              Atelier Sud !!
            </span>{" "}
            <span
              className="paper"
              style={{
                position: "absolute",
                right: "4%",
                bottom: "70px",
                padding: "14px 16px",
                background: "#FFC9A3",
                transform: "rotate(5deg)",
                fontFamily: "'Caveat', cursive",
                fontSize: "22px",
                lineHeight: "1.1",
              }}
            >
              who paid?
            </span>{" "}
            <div
              style={{
                position: "absolute",
                left: "44%",
                bottom: "20px",
                width: "110px",
                height: "36px",
                borderRadius: "8px",
                background: "#111214",
                transform: "rotate(14deg)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: "-24px",
                  top: "8px",
                  width: "26px",
                  height: "20px",
                  borderRadius: "3px",
                  background: "#C9CED8",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "13px",
                  width: "30px",
                  height: "10px",
                  borderRadius: "2px",
                  background: "#F2A900",
                }}
              ></span>
            </div>
          </div>
        </div>
      </section>
      {/* 02 LISTENING */}
      <section style={{ background: "#EEEBE4", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#845B00" }}>
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
            Notes taped to the toolbox.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#34363B" }}>
            I talked with the owner, a tuner and a garage that bought files every week. Same problem, three angles.
          </p>
          <div
            style={{
              marginTop: "56px",
              position: "relative",
              padding: "50px 40px",
              borderRadius: "24px",
              background: "linear-gradient(#C0392B, #9A2D22)",
              boxShadow: "inset 0 -12px 0 rgba(0,0,0,.2), 0 40px 60px -40px rgba(0,0,0,.6)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "40px",
                right: "40px",
                top: "18px",
                height: "8px",
                borderRadius: "4px",
                background: "rgba(0,0,0,.2)",
              }}
            ></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "28px" }}>
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
                  garage owner
                </p>
                <blockquote className="hand" style={{ margin: "10px 0 0", fontSize: "28px", lineHeight: "1.12" }}>
                  “The car is on the lift. I need the file now, not tonight.”
                </blockquote>
              </figure>
              <figure
                style={{
                  margin: "0",
                  position: "relative",
                  padding: "30px 26px 26px",
                  background: "#FFFFFF",
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
                    background: "rgba(242,169,0,.45)",
                    transform: "rotate(3deg)",
                  }}
                ></span>{" "}
                <p className="mono" style={{ margin: "0", fontSize: "11px", opacity: ".7" }}>
                  tuner
                </p>
                <blockquote className="hand" style={{ margin: "10px 0 0", fontSize: "28px", lineHeight: "1.12" }}>
                  “I search by brand and engine. Nobody knows your product names.”
                </blockquote>
              </figure>
              <figure
                style={{
                  margin: "0",
                  position: "relative",
                  padding: "30px 26px 26px",
                  background: "#CFE3F5",
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
                  the team
                </p>
                <blockquote className="hand" style={{ margin: "10px 0 0", fontSize: "28px", lineHeight: "1.12" }}>
                  “We spend the day answering messages instead of adding files.”
                </blockquote>
              </figure>
            </div>
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
              background: "#111214",
              color: "#EEEBE4",
            }}
          >
            {" "}
            <span className="mono" style={{ fontSize: "12px", color: "#F2A900" }}>
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
              let a mechanic find, pay for and download the right file while the car is still on the lift?
            </p>
          </div>
        </div>
      </section>
      <Personas slug="auto" compact />
      {/* 03 THE TOOL CABINET (structure) */}
      <section style={{ background: "linear-gradient(#EEEBE4, #E4DFD4)", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#845B00" }}>
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
            A drawer for every kind of file.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#34363B" }}>
            I sorted the catalogue the way a workshop sorts its tools: one drawer per family, labelled, and the brands
            inside.
          </p>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", gap: "50px", alignItems: "flex-start" }}>
            {" "}
            <div
              style={{
                flex: "1 1 420px",
                maxWidth: "520px",
                padding: "22px",
                borderRadius: "18px",
                background: "linear-gradient(#C0392B, #962C21)",
                boxShadow: "0 40px 60px -30px rgba(0,0,0,.6)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(#D04A3B, #B33A2C)",
                    boxShadow: "inset 0 -4px 0 rgba(0,0,0,.25)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="mono"
                    style={{ padding: "4px 8px", background: "#FFFDF6", color: "#111214", fontSize: "13px" }}
                  >
                    /ecu
                  </span>
                  <span style={{ fontSize: "14px" }}>by brand → model</span>
                  <span
                    aria-hidden="true"
                    style={{ width: "60px", height: "8px", borderRadius: "4px", background: "#C9CED8" }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(#D04A3B, #B33A2C)",
                    boxShadow: "inset 0 -4px 0 rgba(0,0,0,.25)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="mono"
                    style={{ padding: "4px 8px", background: "#FFFDF6", color: "#111214", fontSize: "13px" }}
                  >
                    /airbag
                  </span>
                  <span style={{ fontSize: "14px" }}>reset solutions</span>
                  <span
                    aria-hidden="true"
                    style={{ width: "60px", height: "8px", borderRadius: "4px", background: "#C9CED8" }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(#D04A3B, #B33A2C)",
                    boxShadow: "inset 0 -4px 0 rgba(0,0,0,.25)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="mono"
                    style={{ padding: "4px 8px", background: "#FFFDF6", color: "#111214", fontSize: "13px" }}
                  >
                    /dashboard
                  </span>
                  <span style={{ fontSize: "14px" }}>cluster files</span>
                  <span
                    aria-hidden="true"
                    style={{ width: "60px", height: "8px", borderRadius: "4px", background: "#C9CED8" }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(#D04A3B, #B33A2C)",
                    boxShadow: "inset 0 -4px 0 rgba(0,0,0,.25)",
                    color: "#fff",
                    transform: "translateX(26px)",
                  }}
                >
                  <span
                    className="mono"
                    style={{ padding: "4px 8px", background: "#FFFDF6", color: "#111214", fontSize: "13px" }}
                  >
                    /software
                  </span>
                  <span style={{ fontSize: "14px" }}>diagnostic tools</span>
                  <span
                    aria-hidden="true"
                    style={{ width: "60px", height: "8px", borderRadius: "4px", background: "#C9CED8" }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "8px",
                    background: "linear-gradient(#D04A3B, #B33A2C)",
                    boxShadow: "inset 0 -4px 0 rgba(0,0,0,.25)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="mono"
                    style={{ padding: "4px 8px", background: "#F2A900", color: "#111214", fontSize: "13px" }}
                  >
                    /tokens
                  </span>
                  <span style={{ fontSize: "14px" }}>the wallet</span>
                  <span
                    aria-hidden="true"
                    style={{ width: "60px", height: "8px", borderRadius: "4px", background: "#C9CED8" }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "8px",
                    background: "#2A2D33",
                    boxShadow: "inset 0 -4px 0 rgba(0,0,0,.35)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="mono"
                    style={{ padding: "4px 8px", background: "#FFFDF6", color: "#111214", fontSize: "13px" }}
                  >
                    /admin
                  </span>
                  <span style={{ fontSize: "14px" }}>back office, locked</span>
                  <span
                    aria-hidden="true"
                    style={{ width: "14px", height: "14px", borderRadius: "50%", border: "3px solid #C9CED8" }}
                  ></span>
                </div>
              </div>
              <div
                aria-hidden="true"
                style={{ display: "flex", justifyContent: "space-between", margin: "16px 20px -36px" }}
              >
                <span
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#17181B",
                    border: "6px solid #6B7280",
                  }}
                ></span>
                <span
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#17181B",
                    border: "6px solid #6B7280",
                  }}
                ></span>
              </div>
            </div>{" "}
            <div
              className="paper"
              style={{
                flex: "1 1 380px",
                padding: "30px 30px 26px",
                borderRadius: "4px",
                transform: "rotate(1.5deg)",
                backgroundImage:
                  "linear-gradient(#FFFDF6, #FFFDF6), repeating-linear-gradient(0deg, transparent 0 31px, #ECE6D8 31px 32px)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "2px solid #111214",
                  paddingBottom: "10px",
                }}
              >
                <b style={{ fontSize: "20px", letterSpacing: ".04em" }}>WORK ORDER</b>
                <span className="mono" style={{ fontSize: "11px", color: "#6B6458" }}>
                  customer path
                </span>
              </div>
              <div
                style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "14px", fontSize: "17px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      border: "2px solid #111214",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      color: "#C98A00",
                    }}
                  >
                    ✓
                  </span>
                  Search by vehicle
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      border: "2px solid #111214",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      color: "#C98A00",
                    }}
                  >
                    ✓
                  </span>
                  Pick the file
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      border: "2px solid #111214",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      color: "#C98A00",
                    }}
                  >
                    ✓
                  </span>
                  Pay with tokens
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      border: "2px solid #111214",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      color: "#C98A00",
                    }}
                  >
                    ✓
                  </span>
                  Download instantly
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      border: "2px solid #111214",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      color: "#C98A00",
                    }}
                  >
                    ✓
                  </span>
                  Find it again in history
                </div>
              </div>
              <p className="hand" style={{ margin: "22px 0 0", fontSize: "26px", color: "#1F3B8A" }}>
                → no message needed
              </p>{" "}
              <span
                style={{
                  position: "absolute",
                  right: "24px",
                  bottom: "22px",
                  padding: "4px 12px",
                  border: "3px solid #B03A2E",
                  color: "#B03A2E",
                  fontWeight: "900",
                  fontSize: "18px",
                  letterSpacing: ".1em",
                  transform: "rotate(-12deg)",
                }}
              >
                DONE
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* 04 SKETCHES */}
      <section style={{ background: "#EEEBE4", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#845B00" }}>
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
            The search bar came first.
          </h2>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  position: "relative",
                  padding: "26px",
                  minHeight: "360px",
                  borderRadius: "4px",
                  backgroundColor: "#FBF7EC",
                  backgroundImage:
                    "linear-gradient(#E3EAF2 1px, transparent 1px), linear-gradient(90deg, #E3EAF2 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  boxShadow: "0 24px 40px -26px rgba(0,0,0,.5)",
                  transform: "rotate(-1.5deg)",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: "18px",
                    top: "16px",
                    width: "70px",
                    height: "50px",
                    borderRadius: "40%",
                    background: "radial-gradient(ellipse, rgba(80,60,40,.18), transparent 70%)",
                  }}
                ></span>{" "}
                <p className="hand" style={{ margin: "0 0 10px", fontSize: "26px", color: "#1F3B8A" }}>
                  home
                </p>
                <div style={{ height: "60px", border: "2px dashed #1F3B8A", borderRadius: "6px" }}></div>
                <div
                  style={{
                    marginTop: "10px",
                    height: "34px",
                    border: "3px solid #C98A00",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                  }}
                >
                  <span className="hand" style={{ fontSize: "20px", color: "#C98A00" }}>
                    search: brand / model / ECU
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <span style={{ flex: "1", height: "70px", border: "2px dashed #1F3B8A", borderRadius: "6px" }}></span>
                  <span style={{ flex: "1", height: "70px", border: "2px dashed #1F3B8A", borderRadius: "6px" }}></span>
                  <span style={{ flex: "1", height: "70px", border: "2px dashed #1F3B8A", borderRadius: "6px" }}></span>
                </div>
                <p className="hand" style={{ margin: "12px 0 0", fontSize: "22px", color: "#B03A2E" }}>
                  BIG. right under the title!
                </p>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Notebook sketch</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  padding: "18px",
                  minHeight: "360px",
                  borderRadius: "12px",
                  background: "#DDD7CB",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span style={{ height: "26px", borderRadius: "6px", background: "#CBC4B6" }}></span>{" "}
                <span style={{ height: "70px", borderRadius: "8px", background: "#CBC4B6" }}></span>{" "}
                <span style={{ height: "34px", borderRadius: "8px", background: "#B8AE9B" }}></span>{" "}
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ flex: "1", height: "90px", borderRadius: "8px", background: "#D2CBBE" }}></span>
                  <span style={{ flex: "1", height: "90px", borderRadius: "8px", background: "#D2CBBE" }}></span>
                  <span style={{ flex: "1", height: "90px", borderRadius: "8px", background: "#D2CBBE" }}></span>
                </div>{" "}
                <span style={{ height: "60px", borderRadius: "8px", background: "#D2CBBE" }}></span>{" "}
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>Wireframe</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 30px 50px -28px rgba(0,0,0,.55)" }}>
                <img
                  src="/img/56ef119bf32a6ab0847639b84b0d27c1.jpg"
                  alt="AutoTechno services and latest updates"
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
          background: "#111214",
          color: "#EEEBE4",
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          className="hazard"
          style={{ position: "absolute", left: "0", right: "0", top: "0", height: "12px" }}
        ></div>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#F2A900" }}>
            chapter 05 — visual language
          </p>
          <h2
            style={{
              margin: "0",
              maxWidth: "780px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.035em",
            }}
          >
            Workshop black, with one warning colour.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#B9BCC2" }}>
            Mechanics read screens in bright workshops, with greasy hands. High contrast, big targets, and amber only
            where something can be done.
          </p>
          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
              gap: "30px",
              alignItems: "end",
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
              <div
                aria-hidden="true"
                style={{
                  width: "90px",
                  height: "150px",
                  borderRadius: "16px 16px 10px 10px",
                  background: "linear-gradient(90deg, #2A2D33, #0A0A0A 50%, #2A2D33)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "-18px",
                    width: "30px",
                    height: "20px",
                    borderRadius: "6px 6px 0 0",
                    background: "#6B7280",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    right: "10px",
                    top: "50px",
                    height: "40px",
                    background: "#F2A900",
                    borderRadius: "4px",
                  }}
                ></span>
              </div>
              <b>Carbon</b>
              <span className="mono" style={{ fontSize: "12px", color: "#9CA3AF" }}>
                #0A0A0A · ground
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
              <div
                aria-hidden="true"
                style={{
                  width: "90px",
                  height: "150px",
                  borderRadius: "16px 16px 10px 10px",
                  background: "linear-gradient(90deg, #C98A00, #F2A900 50%, #C98A00)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "-18px",
                    width: "30px",
                    height: "20px",
                    borderRadius: "6px 6px 0 0",
                    background: "#6B7280",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    right: "10px",
                    top: "50px",
                    height: "40px",
                    background: "#111214",
                    borderRadius: "4px",
                  }}
                ></span>
              </div>
              <b>Signal amber</b>
              <span className="mono" style={{ fontSize: "12px", color: "#9CA3AF" }}>
                #F2A900 · actions
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
              <div
                aria-hidden="true"
                style={{
                  width: "90px",
                  height: "150px",
                  borderRadius: "16px 16px 10px 10px",
                  background: "linear-gradient(90deg, #1F2937, #374151 50%, #1F2937)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "-18px",
                    width: "30px",
                    height: "20px",
                    borderRadius: "6px 6px 0 0",
                    background: "#6B7280",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    right: "10px",
                    top: "50px",
                    height: "40px",
                    background: "#F2A900",
                    borderRadius: "4px",
                  }}
                ></span>
              </div>
              <b>Steel</b>
              <span className="mono" style={{ fontSize: "12px", color: "#9CA3AF" }}>
                #1F2937 · panels
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
              <div
                aria-hidden="true"
                style={{
                  width: "90px",
                  height: "150px",
                  borderRadius: "16px 16px 10px 10px",
                  background: "linear-gradient(90deg, #B9BCC2, #E5E7EB 50%, #B9BCC2)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "-18px",
                    width: "30px",
                    height: "20px",
                    borderRadius: "6px 6px 0 0",
                    background: "#6B7280",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    right: "10px",
                    top: "50px",
                    height: "40px",
                    background: "#111214",
                    borderRadius: "4px",
                  }}
                ></span>
              </div>
              <b>Aluminium</b>
              <span className="mono" style={{ fontSize: "12px", color: "#9CA3AF" }}>
                #E5E7EB · text
              </span>
            </div>
          </div>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", gap: "18px" }}>
            <div style={{ flex: "1 1 340px", padding: "28px", borderRadius: "20px", background: "#1C1E22" }}>
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9CA3AF" }}>
                headings — bold sans
              </p>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "44px",
                  lineHeight: "1",
                  fontWeight: "900",
                  letterSpacing: "-0.03em",
                }}
              >
                Professional ECU Files
              </p>
            </div>
            <div
              style={{
                flex: "1 1 280px",
                padding: "28px",
                borderRadius: "20px",
                background: "#1C1E22",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#9CA3AF" }}>
                components
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "13px 22px",
                  borderRadius: "6px",
                  background: "#F2A900",
                  color: "#111214",
                  fontWeight: "800",
                }}
              >
                Browse ECU Files
              </span>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "12px 21px",
                  borderRadius: "6px",
                  background: "#374151",
                  fontWeight: "700",
                }}
              >
                Explore Software
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 06 THE PLATFORM */}
      <section
        style={{ background: "radial-gradient(90% 70% at 20% 10%, #FFF3D1, #EEEBE4 60%)", padding: "120px 24px" }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#C98A00" }}>
            chapter 06 — the platform
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
            Find it. Pay for it. Download it.
          </h2>
          <div style={{ marginTop: "60px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "40px" }}>
            {" "}
            <figure style={{ flex: "3 1 620px", minWidth: "0", margin: "0", perspective: "2000px" }}>
              <div style={{ transform: "rotateX(8deg)" }}>
                <div
                  style={{
                    padding: "14px 14px 18px",
                    borderRadius: "20px 20px 4px 4px",
                    background: "linear-gradient(#2A2D33, #111214)",
                    boxShadow: "0 50px 80px -40px rgba(0,0,0,.6)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      minHeight: "370px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      fontSize: "12px",
                      color: "#E5E7EB",
                    }}
                  >
                    <div className="g-admin-side"
                      style={{
                        flex: "0 0 150px",
                        background: "#0A0A0A",
                        padding: "16px 10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {" "}
                      <span style={{ fontWeight: "900", margin: "0 8px 14px", letterSpacing: ".04em" }}>
                        AUTOTECHNO
                      </span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".7" }}>Dashboard</span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".7" }}>Catalogue</span>{" "}
                      <span
                        style={{
                          padding: "8px",
                          borderRadius: "6px",
                          background: "#F2A900",
                          color: "#111214",
                          fontWeight: "800",
                        }}
                      >
                        Orders
                      </span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".7" }}>Customers</span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".7" }}>Tokens</span>{" "}
                      <span style={{ padding: "8px", borderRadius: "6px", opacity: ".7" }}>Posts</span>{" "}
                    </div>
                    <div
                      style={{
                        flex: "1",
                        minWidth: "0",
                        background: "#1A1C21",
                        padding: "16px 18px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: "800", fontSize: "18px" }}>Orders</span>
                        <span
                          style={{
                            padding: "7px 12px",
                            borderRadius: "6px",
                            background: "#F2A900",
                            color: "#111214",
                            fontWeight: "800",
                            fontSize: "11px",
                          }}
                        >
                          Upload file
                        </span>
                      </div>
                      <div style={{ borderRadius: "8px", background: "#22252B", overflow: "hidden" }}>
                        <div
                          className="mono"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr",
                            padding: "9px 12px",
                            fontSize: "10px",
                            color: "#9CA3AF",
                            background: "#2A2D33",
                          }}
                        >
                          <span>customer</span>
                          <span>file</span>
                          <span>brand</span>
                          <span>status</span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #2E3138",
                            alignItems: "center",
                          }}
                        >
                          <b>Garage Nord</b>
                          <span>Stage file</span>
                          <span>BMW</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "rgba(34,197,94,.18)",
                                color: "#4ADE80",
                                fontSize: "10px",
                              }}
                            >
                              Delivered
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #2E3138",
                            alignItems: "center",
                          }}
                        >
                          <b>Atelier Sud</b>
                          <span>Airbag reset</span>
                          <span>Audi</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "rgba(242,169,0,.18)",
                                color: "#F2A900",
                                fontSize: "10px",
                              }}
                            >
                              Processing
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #2E3138",
                            alignItems: "center",
                          }}
                        >
                          <b>Tuning Pro</b>
                          <span>Dashboard file</span>
                          <span>Mercedes</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "rgba(34,197,94,.18)",
                                color: "#4ADE80",
                                fontSize: "10px",
                              }}
                            >
                              Delivered
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #2E3138",
                            alignItems: "center",
                          }}
                        >
                          <b>Auto Expert</b>
                          <span>Diag software</span>
                          <span>Volkswagen</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "rgba(34,197,94,.18)",
                                color: "#4ADE80",
                                fontSize: "10px",
                              }}
                            >
                              Delivered
                            </span>
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.3fr 1.2fr 1fr 1fr",
                            padding: "11px 12px",
                            borderTop: "1px solid #2E3138",
                            alignItems: "center",
                          }}
                        >
                          <b>Moteur Plus</b>
                          <span>Stage file</span>
                          <span>Peugeot</span>
                          <span>
                            <span
                              style={{
                                padding: "3px 8px",
                                borderRadius: "999px",
                                background: "rgba(242,169,0,.18)",
                                color: "#F2A900",
                                fontSize: "10px",
                              }}
                            >
                              Awaiting tokens
                            </span>
                          </span>
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
                    background: "linear-gradient(#D9DCE1, #9CA1A9)",
                  }}
                ></div>
              </div>
              <figcaption style={{ marginTop: "22px", fontWeight: "700" }}>
                Team back office — orders and catalogue{" "}
                <span className="mono" style={{ fontWeight: "400", fontSize: "12px", color: "#6B6458" }}>
                  · illustrative data
                </span>
              </figcaption>
            </figure>{" "}
            <figure
              aria-hidden="true"
              style={{ flex: "1 1 260px", margin: "0", position: "relative", height: "380px" }}
            >
              <div
                className="floaty"
                style={{
                  "--r": "0deg",
                  position: "absolute",
                  left: "50%",
                  top: "40px",
                  marginLeft: "-80px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 30%, #FFE08A, #F2A900 55%, #A87400)",
                  boxShadow: "inset 0 0 0 12px rgba(255,255,255,.25), 0 30px 40px -18px rgba(168,116,0,.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontWeight: "900", fontSize: "38px", color: "#6B4A00" }}>AT</span>
              </div>
              <div style={{ position: "absolute", left: "50%", bottom: "60px", marginLeft: "-70px", width: "140px" }}>
                {" "}
                <span
                  style={{
                    display: "block",
                    height: "22px",
                    marginTop: "-6px",
                    borderRadius: "50%",
                    background: "linear-gradient(#F2A900, #A87400)",
                    boxShadow: "0 2px 0 #7A5400",
                  }}
                ></span>{" "}
                <span
                  style={{
                    display: "block",
                    height: "22px",
                    marginTop: "-6px",
                    borderRadius: "50%",
                    background: "linear-gradient(#F2A900, #A87400)",
                    boxShadow: "0 2px 0 #7A5400",
                  }}
                ></span>{" "}
                <span
                  style={{
                    display: "block",
                    height: "22px",
                    marginTop: "-6px",
                    borderRadius: "50%",
                    background: "linear-gradient(#F2A900, #A87400)",
                    boxShadow: "0 2px 0 #7A5400",
                  }}
                ></span>{" "}
                <span
                  style={{
                    display: "block",
                    height: "22px",
                    marginTop: "-6px",
                    borderRadius: "50%",
                    background: "linear-gradient(#F2A900, #A87400)",
                    boxShadow: "0 2px 0 #7A5400",
                  }}
                ></span>{" "}
              </div>
              <figcaption
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Tokens, not invoices
              </figcaption>
            </figure>
          </div>{" "}
          <div
            style={{
              marginTop: "90px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "30px",
            }}
          >
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "236px",
                  padding: "8px",
                  borderRadius: "38px",
                  background: "#17181B",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                  transform: "rotate(-5deg)",
                }}
              >
                <img
                  src="/img/405a14457d955d741665e3fc68500226.jpg"
                  alt="AutoTechno on a phone"
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
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Live site</figcaption>
            </figure>
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "256px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#17181B",
                  boxShadow: "0 50px 70px -30px rgba(0,0,0,.6)",
                }}
              >
                <div
                  style={{
                    height: "530px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#111214",
                    color: "#E5E7EB",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <div style={{ padding: "28px 18px 18px" }}>
                    <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#F2A900" }}>
                      find a file
                    </p>
                    <p style={{ margin: "6px 0 0", fontWeight: "900", fontSize: "22px" }}>Which car?</p>
                  </div>
                  <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        background: "#1F2329",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ color: "#9CA3AF" }}>Brand</span>
                      <b>BMW</b>
                    </div>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        background: "#1F2329",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ color: "#9CA3AF" }}>Model</span>
                      <b>Series 3</b>
                    </div>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        background: "#1F2329",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                        boxShadow: "inset 0 0 0 2px #F2A900",
                      }}
                    >
                      <span style={{ color: "#9CA3AF" }}>ECU</span>
                      <b>Bosch EDC</b>
                    </div>
                    <p className="mono" style={{ margin: "6px 0 0", fontSize: "10px", color: "#9CA3AF" }}>
                      results
                    </p>
                    <div style={{ padding: "12px", borderRadius: "10px", background: "#F2A900", color: "#111214" }}>
                      <p style={{ margin: "0", fontWeight: "900", fontSize: "14px" }}>Stage file — original & tuned</p>
                      <p style={{ margin: "3px 0 0", fontSize: "11px" }}>ready to download</p>
                    </div>
                    <div style={{ padding: "12px", borderRadius: "10px", background: "#1F2329" }}>
                      <p style={{ margin: "0", fontWeight: "800", fontSize: "14px" }}>DPF / EGR solution</p>
                      <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#9CA3AF" }}>available</p>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Search by vehicle</figcaption>
            </figure>
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "236px",
                  padding: "8px",
                  borderRadius: "38px",
                  background: "#17181B",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                  transform: "rotate(5deg)",
                }}
              >
                <div
                  style={{
                    height: "500px",
                    borderRadius: "30px",
                    overflow: "hidden",
                    background: "#111214",
                    color: "#E5E7EB",
                    padding: "28px 16px 16px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textAlign: "left",
                  }}
                >
                  <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#F2A900" }}>
                    download
                  </p>
                  <div
                    style={{
                      position: "relative",
                      height: "150px",
                      borderRadius: "16px",
                      background: "#1F2329",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <span
                      className="ping"
                      style={{
                        position: "absolute",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "rgba(242,169,0,.35)",
                      }}
                    ></span>{" "}
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F2A900"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M12 4v11M7 10l5 5 5-5M5 20h14"></path>
                    </svg>
                  </div>{" "}
                  <b style={{ fontSize: "16px" }}>bmw_series3_stage.bin</b>{" "}
                  <div style={{ height: "8px", borderRadius: "4px", background: "#2A2D33", overflow: "hidden" }}>
                    <span className="bar" style={{ display: "block", height: "100%", background: "#F2A900" }}></span>
                  </div>
                  <p style={{ margin: "0", fontSize: "12px", color: "#9CA3AF" }}>
                    Paid with tokens · saved to your history
                  </p>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      padding: "13px",
                      borderRadius: "8px",
                      background: "#F2A900",
                      color: "#111214",
                      textAlign: "center",
                      fontWeight: "900",
                      fontSize: "13px",
                    }}
                  >
                    Open my files
                  </span>{" "}
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Instant download</figcaption>
            </figure>
          </div>
          <p className="mono" style={{ margin: "30px 0 0", textAlign: "center", fontSize: "12px", color: "#6B6458" }}>
            search, download and back-office screens redrawn for this case study
          </p>
        </div>
      </section>
      {/* 07 AFTER */}
      <section style={{ background: "#111214", color: "#EEEBE4", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="mono" style={{ margin: "0 0 16px", fontSize: "13px", color: "#F2A900" }}>
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
            The phone stopped ringing for files.
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
                background: "#1C1E22",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#B9BCC2",
                  textDecoration: "line-through",
                  textDecorationColor: "#F2A900",
                }}
              >
                “file for this BMW?” on chat
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#F2A900"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                Search by brand, model and ECU
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
                background: "#1C1E22",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#B9BCC2",
                  textDecoration: "line-through",
                  textDecorationColor: "#F2A900",
                }}
              >
                “who paid?”
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#F2A900"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                A token wallet per customer
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
                background: "#1C1E22",
              }}
            >
              {" "}
              <span
                className="hand"
                style={{
                  flex: "1 1 240px",
                  fontSize: "27px",
                  color: "#B9BCC2",
                  textDecoration: "line-through",
                  textDecorationColor: "#F2A900",
                }}
              >
                folders named final_v2
              </span>{" "}
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                stroke="#F2A900"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M1 10h36M29 2l8 8-8 8"></path>
              </svg>{" "}
              <span style={{ flex: "1 1 280px", fontSize: "21px", fontWeight: "700" }}>
                A catalogue the team manages itself
              </span>{" "}
            </div>
          </div>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            {" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A3D45", fontSize: "14px" }}>
              Next.js
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A3D45", fontSize: "14px" }}>
              React
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A3D45", fontSize: "14px" }}>
              TypeScript
            </span>{" "}
            <span style={{ padding: "9px 16px", borderRadius: "999px", border: "1px solid #3A3D45", fontSize: "14px" }}>
              PostgreSQL
            </span>{" "}
            <a
              href="https://autotechno.vercel.app/"
              style={{
                marginLeft: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 26px",
                borderRadius: "999px",
                background: "#F2A900",
                color: "#111214",
                fontWeight: "800",
                textDecoration: "none",
              }}
            >
              Visit the platform{" "}
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
