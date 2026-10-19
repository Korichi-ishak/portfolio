import { Boards, CaseFile, Personas } from "@/components/case/blocks";

/* Generated from the validated maquette (Story-wassalni.dc.html), then edited by hand. */
export default function WassalniStory() {
  return (
    <div
      className="st st-wassalni"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: "#0F172A",
        background: "#EAF2FF",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Caveat:wght@500;700&display=swap" precedence="default" />
      {/* HERO: THE ROAD */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(#DCEBFF 0%, #EAF2FF 40%, #FCE9CF 72%)",
          padding: "70px 24px 0",
          overflow: "hidden",
        }}
      >
        {" "}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "12%",
            top: "70px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 40%, #FFF3B8, #FFC531 70%)",
            boxShadow: "0 0 80px 20px rgba(255,197,49,.35)",
          }}
        ></span>{" "}
        <div
          aria-hidden="true"
          className="drift2"
          style={{ position: "absolute", top: "120px", left: "0", width: "200%", display: "flex", gap: "280px" }}
        >
          {" "}
          <span
            style={{
              width: "160px",
              height: "46px",
              borderRadius: "999px",
              background: "#FFFFFF",
              boxShadow: "40px -18px 0 -4px #FFFFFF",
            }}
          ></span>{" "}
          <span
            style={{
              width: "120px",
              height: "36px",
              borderRadius: "999px",
              background: "#FFFFFF",
              boxShadow: "30px -14px 0 -4px #FFFFFF",
            }}
          ></span>{" "}
          <span
            style={{
              width: "180px",
              height: "50px",
              borderRadius: "999px",
              background: "#FFFFFF",
              boxShadow: "46px -20px 0 -4px #FFFFFF",
            }}
          ></span>{" "}
          <span
            style={{
              width: "160px",
              height: "46px",
              borderRadius: "999px",
              background: "#FFFFFF",
              boxShadow: "40px -18px 0 -4px #FFFFFF",
            }}
          ></span>{" "}
          <span
            style={{
              width: "120px",
              height: "36px",
              borderRadius: "999px",
              background: "#FFFFFF",
              boxShadow: "30px -14px 0 -4px #FFFFFF",
            }}
          ></span>{" "}
        </div>
        <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", zIndex: "2" }}>
          {" "}
          <span className="sign">Annaba → Constantine</span>{" "}
          <h1
            style={{
              margin: "26px 0 0",
              fontSize: "clamp(64px, 10vw, 150px)",
              lineHeight: ".88",
              fontWeight: "800",
              letterSpacing: "-0.055em",
              color: "#0F172A",
            }}
          >
            Wassalni
          </h1>
          <p style={{ margin: "12px 0 0", fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: "500", color: "#2F6BFF" }}>
            / the road home, shared
          </p>
          <p style={{ margin: "24px 0 0", maxWidth: "520px", fontSize: "18px", lineHeight: "1.6", color: "#1E293B" }}>
            A carpooling app for students and workers who travel between eastern Algerian cities every weekend. My
            final-year project — selected for the university startup label.
          </p>
          <CaseFile slug="mobile" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
            {" "}
            <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px" }}>
              User interviews
            </span>{" "}
            <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px" }}>
              User flow
            </span>{" "}
            <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px" }}>
              Wireframe
            </span>{" "}
            <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px" }}>
              Prototyping
            </span>{" "}
            <span style={{ padding: "6px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12px" }}>
              React Native · Node.js
            </span>{" "}
          </div>
        </div>{" "}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "200px", marginTop: "30px" }}
        >
          <path
            d="M0 140 C200 60 380 70 560 120 C760 175 940 60 1140 90 C1290 112 1380 80 1440 70 V220 H0Z"
            fill="#B9D88F"
          ></path>
          <path
            d="M0 180 C240 120 420 150 640 170 C860 190 1060 120 1260 140 C1350 150 1410 140 1440 135 V220 H0Z"
            fill="#8FC06A"
          ></path>
        </svg>{" "}
        <div
          aria-hidden="true"
          style={{
            position: "relative",
            height: "170px",
            margin: "-20px -24px 0",
            background: "linear-gradient(#3A3D45, #24262C)",
          }}
        >
          <div
            className="road-line"
            style={{ position: "absolute", left: "0", right: "0", top: "82px", height: "6px" }}
          ></div>
          <div
            style={{ position: "absolute", left: "0", right: "0", top: "0", height: "6px", background: "#E2E5EA" }}
          ></div>{" "}
          <div
            style={{
              position: "absolute",
              right: "8%",
              top: "-150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "12px 18px",
                borderRadius: "10px",
                background: "#0B7A3E",
                color: "#fff",
                boxShadow: "inset 0 0 0 3px #fff, 0 20px 30px -14px rgba(0,0,0,.5)",
                textAlign: "left",
              }}
            >
              <p style={{ margin: "0", fontWeight: "800", fontSize: "18px" }}>Constantine →</p>
              <p style={{ margin: "2px 0 0", fontWeight: "600", fontSize: "13px", opacity: ".9" }}>
                El Khroub · Guelma
              </p>
            </div>{" "}
            <span
              style={{ width: "8px", height: "150px", background: "linear-gradient(90deg, #9AA2AE, #6B7380)" }}
            ></span>{" "}
          </div>{" "}
          <div className="bob" style={{ position: "absolute", left: "22%", top: "18px", width: "260px" }}>
            <svg viewBox="0 0 220 100" width="100%">
              <defs>
                <linearGradient id="carA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7FA2FF"></stop>
                  <stop offset=".5" stopColor="#2F6BFF"></stop>
                  <stop offset="1" stopColor="#1A45B8"></stop>
                </linearGradient>
                <linearGradient id="glassA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#E6F0FF"></stop>
                  <stop offset="1" stopColor="#7FA6E8"></stop>
                </linearGradient>
              </defs>
              <ellipse cx="110" cy="92" rx="96" ry="7" fill="rgba(0,0,0,.35)"></ellipse>
              <path
                d="M16 72 Q14 52 34 48 L62 45 Q80 20 106 18 L146 18 Q168 20 184 44 L202 50 Q214 55 211 72 Z"
                fill="url(#carA)"
              ></path>
              <path d="M70 45 Q86 27 106 26 L121 26 L121 45 Z" fill="url(#glassA)"></path>
              <path d="M127 26 L145 26 Q162 28 174 45 L127 45 Z" fill="url(#glassA)"></path>
              <path d="M30 57 H198" stroke="rgba(255,255,255,.5)" strokeWidth="2"></path>
              <rect x="201" y="55" width="9" height="6" rx="2" fill="#FFE27A"></rect>
              <rect x="15" y="58" width="7" height="6" rx="2" fill="#FF6B5B"></rect>
              <g className="wheel">
                <circle cx="58" cy="73" r="17" fill="#15171C"></circle>
                <circle cx="58" cy="73" r="9" fill="#C9CED8"></circle>
                <path d="M58 64 V82 M49 73 H67" stroke="#7D8492" strokeWidth="2.5"></path>
              </g>
              <g className="wheel">
                <circle cx="166" cy="73" r="17" fill="#15171C"></circle>
                <circle cx="166" cy="73" r="9" fill="#C9CED8"></circle>
                <path d="M166 64 V82 M157 73 H175" stroke="#7D8492" strokeWidth="2.5"></path>
              </g>
              <circle cx="98" cy="36" r="6" fill="#0F172A"></circle>
              <circle cx="140" cy="36" r="6" fill="#5B3A29"></circle>
            </svg>
          </div>
        </div>
      </section>
      {/* 01 BEFORE */}
      <section style={{ background: "#FCE9CF", padding: "110px 24px" }}>
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
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            {" "}
            <span className="sign">01 · Friday afternoon</span>{" "}
            <h2
              style={{
                margin: "24px 0 0",
                fontSize: "clamp(40px, 5vw, 66px)",
                lineHeight: "1",
                fontWeight: "800",
                letterSpacing: "-0.04em",
              }}
            >
              Everyone is going home. Nobody knows with whom.
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#334155" }}>
              Every weekend, students and workers travel between Annaba, Constantine, Guelma and Skikda. Rides were
              arranged in crowded group chats: a message, a phone number, a stranger at the wheel.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#334155" }}>
              Drivers left with empty seats. Passengers waited at the bus station. And no one could tell who they were
              getting in the car with.
            </p>
          </div>{" "}
          <div
            aria-hidden="true"
            style={{ flex: "1 1 460px", display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div
              style={{
                width: "290px",
                padding: "9px",
                borderRadius: "44px",
                background: "#111318",
                boxShadow: "0 50px 70px -30px rgba(0,0,0,.55)",
                transform: "rotate(-4deg)",
              }}
            >
              <div
                style={{
                  height: "560px",
                  borderRadius: "36px",
                  overflow: "hidden",
                  background: "#E9E2D6",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ padding: "28px 16px 12px", background: "#2B3A4A", color: "#fff" }}>
                  <p style={{ margin: "0", fontWeight: "700", fontSize: "14px" }}>Covoiturage Est 🚗</p>
                  <p style={{ margin: "2px 0 0", fontSize: "11px", opacity: ".7" }}>many participants</p>
                </div>
                <div
                  style={{
                    flex: "1",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    Anyone driving to Constantine Friday??
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    Me too, need a seat
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-end",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#D6F5C6",
                    }}
                  >
                    I leave after class, call me
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    Who is the driver? 🤔
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    Is there still a place?
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-end",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#D6F5C6",
                    }}
                  >
                    Already full sorry
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    Guelma anyone?
                  </span>{" "}
                  <span
                    style={{
                      alignSelf: "flex-start",
                      maxWidth: "80%",
                      padding: "8px 10px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    ??
                  </span>{" "}
                </div>
              </div>
            </div>{" "}
            <span
              className="float"
              style={{
                position: "absolute",
                right: "6%",
                top: "40px",
                padding: "10px 14px",
                borderRadius: "14px",
                background: "#C7463D",
                color: "#fff",
                fontWeight: "800",
                fontSize: "14px",
                boxShadow: "0 16px 24px -10px rgba(255,90,78,.6)",
              }}
            >
              Unknown driver
            </span>{" "}
            <span
              className="float"
              style={{
                position: "absolute",
                left: "4%",
                bottom: "80px",
                padding: "10px 14px",
                borderRadius: "14px",
                background: "#0F172A",
                color: "#fff",
                fontWeight: "800",
                fontSize: "14px",
                boxShadow: "0 16px 24px -10px rgba(0,0,0,.6)",
                animationDelay: "-3s",
              }}
            >
              Empty seats
            </span>{" "}
          </div>
        </div>
      </section>
      {/* 02 RESEARCH */}
      <section style={{ background: "#FFFFFF", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {" "}
          <span className="sign">02 · What riders told us</span>{" "}
          <h2
            style={{
              margin: "24px 0 0",
              maxWidth: "820px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.04em",
            }}
          >
            Three warning signs on the road.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "#334155" }}>
            I talked with students, drivers and parents, and tested existing carpooling apps with them.
          </p>
          <div
            style={{
              marginTop: "54px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(270px, 100%), 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <svg width="150" height="132" viewBox="0 0 150 132" aria-hidden="true">
                <path
                  d="M75 6 L144 126 H6 Z"
                  fill="#fff"
                  stroke="#E5322D"
                  strokeWidth="12"
                  strokeLinejoin="round"
                ></path>
                <circle cx="75" cy="66" r="12" fill="#0F172A"></circle>
                <path d="M53 104 Q75 76 97 104 Z" fill="#0F172A"></path>
              </svg>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "800" }}>Trust comes first</p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#475569" }}>
                Riders want to know who the driver is — a face, a verified profile, what others say — before anything
                else.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <svg width="150" height="132" viewBox="0 0 150 132" aria-hidden="true">
                <path
                  d="M75 6 L144 126 H6 Z"
                  fill="#fff"
                  stroke="#E5322D"
                  strokeWidth="12"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M60 108 L60 84 Q60 70 74 64 Q90 58 90 46"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="8"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M80 44 L90 34 L100 44"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "800" }}>Long forms lose people</p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#475569" }}>
                Apps with long sign-ups were abandoned before the first ride. Search had to work in a few taps.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <svg width="150" height="132" viewBox="0 0 150 132" aria-hidden="true">
                <path
                  d="M75 6 L144 126 H6 Z"
                  fill="#fff"
                  stroke="#E5322D"
                  strokeWidth="12"
                  strokeLinejoin="round"
                ></path>
                <rect x="50" y="62" width="50" height="30" rx="8" fill="#0F172A"></rect>
                <circle cx="60" cy="96" r="6" fill="#0F172A"></circle>
                <circle cx="90" cy="96" r="6" fill="#0F172A"></circle>
                <rect x="58" y="54" width="34" height="14" rx="5" fill="#0F172A"></rect>
              </svg>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "800" }}>Seats travel empty</p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#475569" }}>
                Drivers make the trip anyway. They just need a simple way to share their route and cost.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "60px",
              padding: "30px 34px",
              borderRadius: "26px",
              background: "#2456D9",
              color: "#fff",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {" "}
            <span className="mono" style={{ fontSize: "12px" , color: "#FFFFFF"}}>
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
              make getting into a stranger's car feel as safe as getting into a friend's?
            </p>
          </div>
        </div>
      </section>
      <Personas slug="mobile" compact />
      {/* 03 THE ROUTE (flow) */}
      <section style={{ background: "#F4EBDD", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {" "}
          <span className="sign">03 · The route</span>{" "}
          <h2
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.04em",
            }}
          >
            One ride, five stops.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "620px", fontSize: "18px", lineHeight: "1.6", color: "#334155" }}>
            The main user flow, drawn as the trip itself. Each stop is a screen.
          </p>
          <div
            style={{
              marginTop: "44px",
              borderRadius: "32px",
              overflow: "hidden",
              background: "#EADBC4",
              boxShadow: "0 40px 60px -40px rgba(80,50,10,.5)",
            }}
          >
            <svg
              viewBox="0 0 1200 520"
              width="100%"
              role="img"
              aria-label="Animated map: a car drives from Annaba to Constantine through five steps — search route, pick a driver, request a seat, driver accepts, ride."
            >
              <defs>
                <linearGradient id="carM" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7FA2FF"></stop>
                  <stop offset="1" stopColor="#1A45B8"></stop>
                </linearGradient>
              </defs>
              <rect width="1200" height="520" fill="#EADBC4"></rect>
              <path d="M0 420 C200 380 300 470 520 430 C760 390 900 470 1200 410 V520 H0Z" fill="#D9C4A3"></path>
              <path d="M0 90 C180 60 260 140 420 110 C600 70 760 130 1200 70 V0 H0Z" fill="#CFE0B5"></path>
              <circle cx="980" cy="420" r="70" fill="#9CC9E8" opacity=".55"></circle>
              <path
                id="route"
                d="M90 400 C220 380 230 250 360 250 C500 250 470 400 620 380 C760 360 720 180 860 170 C990 160 1000 300 1110 120"
                fill="none"
                stroke="#3A3D45"
                strokeWidth="30"
                strokeLinecap="round"
              ></path>
              <path
                d="M90 400 C220 380 230 250 360 250 C500 250 470 400 620 380 C760 360 720 180 860 170 C990 160 1000 300 1110 120"
                fill="none"
                stroke="#FFC531"
                strokeWidth="3"
                strokeDasharray="14 12"
              ></path>
              <g transform="translate(90 400)">
                <circle r="22" fill="#2F6BFF" opacity=".25"></circle>
                <circle r="11" fill="#2F6BFF" stroke="#fff" strokeWidth="4"></circle>
              </g>
              <g transform="translate(60 455)">
                <rect x="-10" y="-22" width="120" height="34" rx="9" fill="#0B7A3E"></rect>
                <text
                  x="50"
                  y="0"
                  textAnchor="middle"
                  fill="#fff"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="700"
                  fontSize="17"
                >
                  Annaba
                </text>
              </g>
              <g transform="translate(1110 120)">
                <path d="M0 0 V-58" stroke="#0F172A" strokeWidth="4"></path>
                <path d="M0 -58 H36 L28 -46 L36 -34 H0Z" fill="#E5322D"></path>
              </g>
              <g transform="translate(1020 70)">
                <rect x="-20" y="-24" width="150" height="34" rx="9" fill="#0B7A3E"></rect>
                <text
                  x="55"
                  y="-2"
                  textAnchor="middle"
                  fill="#fff"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight="700"
                  fontSize="17"
                >
                  Constantine
                </text>
              </g>
              <g fontFamily="Plus Jakarta Sans" fontSize="16" fontWeight="700">
                <g transform="translate(250 300)">
                  <circle r="16" fill="#fff" stroke="#0F172A" strokeWidth="3"></circle>
                  <text y="6" textAnchor="middle" fontSize="13">
                    I
                  </text>
                  <rect x="-80" y="28" width="160" height="34" rx="17" fill="#fff"></rect>
                  <text y="51" textAnchor="middle" fill="#0F172A">
                    Search route
                  </text>
                </g>
                <g transform="translate(470 330)">
                  <circle r="16" fill="#fff" stroke="#0F172A" strokeWidth="3"></circle>
                  <text y="6" textAnchor="middle" fontSize="13">
                    II
                  </text>
                  <rect x="-80" y="28" width="160" height="34" rx="17" fill="#fff"></rect>
                  <text y="51" textAnchor="middle" fill="#0F172A">
                    Pick a driver
                  </text>
                </g>
                <g transform="translate(700 330)">
                  <circle r="16" fill="#fff" stroke="#0F172A" strokeWidth="3"></circle>
                  <text y="6" textAnchor="middle" fontSize="13">
                    III
                  </text>
                  <rect x="-85" y="28" width="170" height="34" rx="17" fill="#fff"></rect>
                  <text y="51" textAnchor="middle" fill="#0F172A">
                    Request a seat
                  </text>
                </g>
                <g transform="translate(860 170)">
                  <circle r="16" fill="#fff" stroke="#0F172A" strokeWidth="3"></circle>
                  <text y="6" textAnchor="middle" fontSize="13">
                    IV
                  </text>
                  <rect x="-90" y="-66" width="180" height="34" rx="17" fill="#fff"></rect>
                  <text y="-43" textAnchor="middle" fill="#0F172A">
                    Driver accepts
                  </text>
                </g>
                <g transform="translate(1060 240)">
                  <circle r="16" fill="#2F6BFF" stroke="#fff" strokeWidth="3"></circle>
                  <text y="6" textAnchor="middle" fontSize="13" fill="#fff">
                    V
                  </text>
                  <rect x="-60" y="28" width="120" height="34" rx="17" fill="#2F6BFF"></rect>
                  <text y="51" textAnchor="middle" fill="#fff">
                    Ride
                  </text>
                </g>
              </g>
              <g>
                <g transform="translate(-26 -16)">
                  <rect x="4" y="6" width="48" height="20" rx="8" fill="url(#carM)"></rect>
                  <rect x="14" y="0" width="26" height="12" rx="5" fill="#9EC0FF"></rect>
                  <circle cx="14" cy="28" r="5" fill="#15171C"></circle>
                  <circle cx="42" cy="28" r="5" fill="#15171C"></circle>
                </g>
                <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#route"></mpath>
                </animateMotion>
              </g>
            </svg>
          </div>{" "}
          <h3 style={{ margin: "80px 0 10px", fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em" }}>
            The interchange.
          </h3>
          <p style={{ margin: "0 0 30px", maxWidth: "600px", fontSize: "17px", lineHeight: "1.6", color: "#334155" }}>
            The app's structure: one main road, four exits.
          </p>
          <div style={{ position: "relative", paddingTop: "0" }}>
            <div
              aria-hidden="true"
              style={{
                height: "70px",
                borderRadius: "14px",
                background: "linear-gradient(#3A3D45, #24262C)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="road-line"
                style={{ position: "absolute", left: "0", right: "0", top: "32px", height: "6px" }}
              ></div>
            </div>
            <div
              style={{
                marginTop: "-14px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
                gap: "18px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span className="sign" style={{ alignSelf: "flex-start" }}>
                  ↗ Find a ride
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Search route
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Driver profile
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Request seat
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span className="sign" style={{ alignSelf: "flex-start" }}>
                  ↗ Offer a ride
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Route & time
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Seats
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Requests
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span className="sign" style={{ alignSelf: "flex-start" }}>
                  ↗ My trips
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Upcoming
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Live trip
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  History
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span className="sign" style={{ alignSelf: "flex-start" }}>
                  ↗ Account
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Messages
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Verification
                </span>
                <span style={{ padding: "10px 14px", borderRadius: "12px", background: "#fff", fontSize: "14px" }}>
                  Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 SKETCHES */}
      <section style={{ background: "#FFFFFF", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {" "}
          <span className="sign">04 · Rest stop sketches</span>{" "}
          <h2
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.04em",
            }}
          >
            Drawn on a café napkin first.
          </h2>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  position: "relative",
                  padding: "30px",
                  aspectRatio: "1",
                  borderRadius: "8px",
                  background: "#FBF8F2",
                  boxShadow: "0 24px 40px -24px rgba(0,0,0,.45)",
                  transform: "rotate(-3deg)",
                  boxSizing: "border-box",
                  backgroundImage: "repeating-linear-gradient(45deg, transparent 0 10px, rgba(0,0,0,.025) 10px 11px)",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: "26px",
                    top: "22px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    border: "6px solid rgba(120,72,30,.22)",
                  }}
                ></span>{" "}
                <div style={{ display: "flex", gap: "18px", height: "100%" }}>
                  <div
                    style={{
                      flex: "1",
                      border: "2.5px solid #2B3A4A",
                      borderRadius: "22px",
                      padding: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {" "}
                    <span className="hand" style={{ fontSize: "18px", color: "#2B3A4A" }}>
                      from / to
                    </span>{" "}
                    <span style={{ height: "22px", border: "2px dashed #2B3A4A", borderRadius: "6px" }}></span>
                    <span style={{ height: "22px", border: "2px dashed #2B3A4A", borderRadius: "6px" }}></span>{" "}
                    <span style={{ flex: "1", border: "2px dashed #2B3A4A", borderRadius: "6px" }}></span>{" "}
                    <span className="hand" style={{ fontSize: "18px", color: "#2F6BFF" }}>
                      [ find ]
                    </span>{" "}
                  </div>
                  <div
                    style={{
                      flex: "1",
                      border: "2.5px solid #2B3A4A",
                      borderRadius: "22px",
                      padding: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {" "}
                    <span className="hand" style={{ fontSize: "18px", color: "#2B3A4A" }}>
                      drivers
                    </span>{" "}
                    <span style={{ height: "34px", border: "2px dashed #2B3A4A", borderRadius: "6px" }}></span>
                    <span style={{ height: "34px", border: "2px dashed #2B3A4A", borderRadius: "6px" }}></span>
                    <span style={{ height: "34px", border: "2px dashed #2B3A4A", borderRadius: "6px" }}></span>{" "}
                    <span className="hand" style={{ fontSize: "17px", color: "#E5322D" }}>
                      face + ✓ verified!
                    </span>{" "}
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Napkin sketch</figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "14px" }}>
                <div
                  style={{
                    width: "150px",
                    height: "300px",
                    borderRadius: "26px",
                    background: "#EEF1F5",
                    border: "2px solid #D5DBE3",
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <span style={{ height: "90px", borderRadius: "10px", background: "#DCE2EA" }}></span>
                  <span style={{ height: "18px", borderRadius: "6px", background: "#D5DBE3" }}></span>
                  <span style={{ height: "18px", borderRadius: "6px", background: "#D5DBE3" }}></span>
                  <span
                    style={{ marginTop: "auto", height: "26px", borderRadius: "8px", background: "#C3CBD6" }}
                  ></span>
                </div>
                <div
                  style={{
                    width: "150px",
                    height: "300px",
                    borderRadius: "26px",
                    background: "#EEF1F5",
                    border: "2px solid #D5DBE3",
                    padding: "14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <span style={{ height: "46px", borderRadius: "10px", background: "#DCE2EA" }}></span>
                  <span style={{ height: "46px", borderRadius: "10px", background: "#DCE2EA" }}></span>
                  <span style={{ height: "46px", borderRadius: "10px", background: "#DCE2EA" }}></span>
                  <span style={{ height: "46px", borderRadius: "10px", background: "#DCE2EA" }}></span>
                </div>
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Grey wireframes</figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  borderRadius: "22px",
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 30px 50px -28px rgba(0,0,0,.5)",
                }}
              >
                <img
                  src="/img/fd5e88a784c51de040c69bf1ea8aa5ca.jpg"
                  alt="Wassalni final app screens presentation"
                  style={{ display: "block", width: "100%", aspectRatio: "5 / 3", objectFit: "cover" }}
                />
              </div>
              <figcaption style={{ marginTop: "18px", fontWeight: "700" }}>Shipped screens</figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 05 VISUAL */}
      <section
        style={{
          background: "#24262C",
          color: "#fff",
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          className="road-line"
          style={{ position: "absolute", left: "0", right: "0", bottom: "40px", height: "6px", opacity: ".6" }}
        ></div>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {" "}
          <span className="sign">05 · Road paint</span>{" "}
          <h2
            style={{
              margin: "24px 0 0",
              maxWidth: "760px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.04em",
            }}
          >
            Colours borrowed from the road.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6", color: "#CBD5E1" }}>
            A confident blue for the brand, road-line yellow for what moves, highway green for places — and asphalt to
            hold it all.
          </p>
          <div
            style={{
              marginTop: "54px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(190px, 100%), 1fr))",
              gap: "22px",
              alignItems: "end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 30%, #7FA2FF, #2F6BFF 60%, #1A45B8)",
                  boxShadow: "inset 0 0 0 6px #fff, 0 20px 30px -14px rgba(0,0,0,.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </span>
              <b>Wassalni blue</b>
              <span className="mono" style={{ fontSize: "12px", color: "#94A3B8" }}>
                #2F6BFF · brand
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span style={{ width: "150px", height: "130px", display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    width: "100%",
                    height: "26px",
                    background: "#FFC531",
                    borderRadius: "4px",
                    boxShadow: "0 16px 24px -12px rgba(255,197,49,.6)",
                  }}
                ></span>
              </span>
              <b>Road yellow</b>
              <span className="mono" style={{ fontSize: "12px", color: "#94A3B8" }}>
                #FFC531 · in motion
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  width: "150px",
                  height: "100px",
                  borderRadius: "12px",
                  background: "#0B7A3E",
                  boxShadow: "inset 0 0 0 5px #fff, 0 20px 30px -14px rgba(0,0,0,.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                }}
              >
                Guelma →
              </span>
              <b>Highway green</b>
              <span className="mono" style={{ fontSize: "12px", color: "#94A3B8" }}>
                #0B7A3E · places
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "20px",
                  background: "#3A3D45",
                  border: "1px solid #4B4F59",
                  boxShadow: "0 20px 30px -14px rgba(0,0,0,.6)",
                }}
              ></span>
              <b>Asphalt</b>
              <span className="mono" style={{ fontSize: "12px", color: "#94A3B8" }}>
                #3A3D45 · surfaces
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "20px",
                  background: "linear-gradient(#DCEBFF, #FCE9CF)",
                  boxShadow: "0 20px 30px -14px rgba(0,0,0,.6)",
                }}
              ></span>
              <b>Sky to sand</b>
              <span className="mono" style={{ fontSize: "12px", color: "#94A3B8" }}>
                #DCEBFF → #FCE9CF
              </span>
            </div>
          </div>
          <div style={{ marginTop: "60px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "stretch",
                borderRadius: "10px",
                overflow: "hidden",
                border: "4px solid #0F172A",
                background: "#fff",
                color: "#0F172A",
                boxShadow: "0 24px 34px -16px rgba(0,0,0,.7)",
              }}
            >
              {" "}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                  background: "#2B62EB",
                  color: "#fff",
                  fontWeight: "800",
                  fontSize: "14px",
                }}
              >
                DZ
              </span>{" "}
              <span
                className="mono"
                style={{ padding: "14px 26px", fontWeight: "700", fontSize: "40px", letterSpacing: ".12em" }}
              >
                WASSALNI
              </span>{" "}
            </div>
            <p style={{ margin: "0", flex: "1 1 320px", fontSize: "16px", lineHeight: "1.6", color: "#CBD5E1" }}>
              Plus Jakarta Sans for the interface — round, friendly and readable at a glance from a moving car. The
              wordmark lives on a number plate.
            </p>
          </div>
        </div>
      </section>
      {/* 06 THE APP */}
      <section style={{ background: "linear-gradient(#EAF2FF, #FFFFFF)", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {" "}
          <span className="sign">06 · On the road</span>{" "}
          <h2
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.04em",
            }}
          >
            From search to seat belt.
          </h2>
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "28px",
            }}
          >
            {" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "250px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#111318",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                }}
              >
                <div
                  style={{
                    height: "520px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <div style={{ position: "relative", height: "230px", background: "#E8EEF5" }}>
                    <svg viewBox="0 0 250 230" width="100%" height="100%" aria-hidden="true">
                      <rect width="250" height="230" fill="#E8EEF5"></rect>
                      <path d="M0 60 H250 M0 140 H250 M70 0 V230 M180 0 V230" stroke="#fff" strokeWidth="10"></path>
                      <path
                        d="M30 200 C80 170 90 110 140 100 C190 90 200 50 230 30"
                        fill="none"
                        stroke="#2F6BFF"
                        strokeWidth="5"
                        strokeLinecap="round"
                      ></path>
                      <circle cx="30" cy="200" r="8" fill="#2F6BFF" stroke="#fff" strokeWidth="3"></circle>
                      <circle cx="230" cy="30" r="8" fill="#E5322D" stroke="#fff" strokeWidth="3"></circle>
                    </svg>{" "}
                    <span
                      className="ping"
                      style={{
                        position: "absolute",
                        left: "22px",
                        top: "192px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#2F6BFF",
                      }}
                    ></span>{" "}
                  </div>
                  <div
                    style={{
                      margin: "-30px 12px 0",
                      position: "relative",
                      padding: "14px",
                      borderRadius: "18px",
                      background: "#fff",
                      boxShadow: "0 10px 30px -10px rgba(15,23,42,.3)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p style={{ margin: "0", fontWeight: "800", fontSize: "17px" }}>Where to?</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px",
                        borderRadius: "12px",
                        background: "#F1F5F9",
                        fontSize: "13px",
                      }}
                    >
                      <span
                        style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2F6BFF" }}
                      ></span>
                      Annaba · university
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px",
                        borderRadius: "12px",
                        background: "#F1F5F9",
                        fontSize: "13px",
                      }}
                    >
                      <span
                        style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#E5322D" }}
                      ></span>
                      Constantine
                    </div>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span
                        style={{
                          padding: "6px 10px",
                          borderRadius: "999px",
                          background: "#0F172A",
                          color: "#fff",
                          fontSize: "11px",
                        }}
                      >
                        Friday
                      </span>
                      <span
                        style={{ padding: "6px 10px", borderRadius: "999px", background: "#F1F5F9", fontSize: "11px" }}
                      >
                        Afternoon
                      </span>
                      <span
                        style={{ padding: "6px 10px", borderRadius: "999px", background: "#F1F5F9", fontSize: "11px" }}
                      >
                        Women only
                      </span>
                    </div>{" "}
                    <span
                      style={{
                        padding: "12px",
                        borderRadius: "12px",
                        background: "#2B62EB",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Find a ride
                    </span>{" "}
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>I · Search</figcaption>
            </figure>{" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "250px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#111318",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                }}
              >
                <div
                  style={{
                    height: "520px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#F1F5F9",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <div style={{ padding: "30px 16px 14px", background: "#fff" }}>
                    <p style={{ margin: "0", fontWeight: "800", fontSize: "16px" }}>Annaba → Constantine</p>
                    <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#64748B" }}>Friday · afternoon</p>
                  </div>
                  <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "16px",
                        background: "#fff",
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        border: "2px solid #2F6BFF",
                      }}
                    >
                      <span
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #7FA2FF, #2F6BFF)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "800",
                        }}
                      >
                        Y
                      </span>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <p style={{ margin: "0", fontWeight: "700", fontSize: "13px" }}>
                          Yacine <span style={{ color: "#0B7A3E" }}>✓</span>
                        </p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#64748B" }}>
                          White Clio · leaves after class
                        </p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#FFB100" }}>★★★★★</p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "16px",
                        background: "#fff",
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #FFD27A, #F59E0B)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "800",
                        }}
                      >
                        S
                      </span>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <p style={{ margin: "0", fontWeight: "700", fontSize: "13px" }}>
                          Sara <span style={{ color: "#0B7A3E" }}>✓</span>
                        </p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#64748B" }}>Grey Polo · women only</p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#FFB100" }}>★★★★★</p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "16px",
                        background: "#fff",
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #8EE3B1, #0B7A3E)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "800",
                        }}
                      >
                        W
                      </span>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <p style={{ margin: "0", fontWeight: "700", fontSize: "13px" }}>Walid</p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#64748B" }}>Blue Tucson · evening</p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#FFB100" }}>★★★★☆</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>II · Pick a driver</figcaption>
            </figure>{" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "250px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#111318",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                }}
              >
                <div
                  style={{
                    height: "520px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "30px 16px 16px",
                    boxSizing: "border-box",
                  }}
                >
                  <p style={{ margin: "0", alignSelf: "flex-start", fontWeight: "800", fontSize: "16px" }}>
                    Choose your seat
                  </p>
                  <p style={{ margin: "3px 0 0", alignSelf: "flex-start", fontSize: "11px", color: "#64748B" }}>
                    Yacine's Clio
                  </p>
                  <svg
                    viewBox="0 0 140 270"
                    width="150"
                    style={{ marginTop: "14px" }}
                    role="img"
                    aria-label="Top view of the car: driver seat taken, front passenger seat selected, one back seat taken, two back seats free"
                  >
                    <defs>
                      <linearGradient id="topCar" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#1A45B8"></stop>
                        <stop offset=".5" stopColor="#4F82FF"></stop>
                        <stop offset="1" stopColor="#1A45B8"></stop>
                      </linearGradient>
                    </defs>
                    <rect x="8" y="6" width="124" height="258" rx="50" fill="url(#topCar)"></rect>
                    <rect x="22" y="34" width="96" height="40" rx="14" fill="#BFD3FF"></rect>
                    <rect x="22" y="214" width="96" height="30" rx="12" fill="#BFD3FF"></rect>
                    <rect x="24" y="90" width="40" height="44" rx="10" fill="#475569"></rect>
                    <rect
                      x="76"
                      y="90"
                      width="40"
                      height="44"
                      rx="10"
                      fill="#FFC531"
                      stroke="#fff"
                      strokeWidth="3"
                    ></rect>
                    <rect x="20" y="150" width="30" height="44" rx="9" fill="#475569"></rect>
                    <rect x="55" y="150" width="30" height="44" rx="9" fill="none" stroke="#fff" strokeWidth="3"></rect>
                    <rect x="90" y="150" width="30" height="44" rx="9" fill="none" stroke="#fff" strokeWidth="3"></rect>
                  </svg>
                  <div style={{ display: "flex", gap: "10px", marginTop: "14px", fontSize: "10px", color: "#64748B" }}>
                    <span>■ taken</span>
                    <span style={{ color: "#8E6808" }}>■ yours</span>
                    <span>□ free</span>
                  </div>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      padding: "12px",
                      borderRadius: "12px",
                      background: "#2B62EB",
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    Request this seat
                  </span>{" "}
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>III · Request a seat</figcaption>
            </figure>{" "}
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "250px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#111318",
                  boxShadow: "0 40px 60px -30px rgba(0,0,0,.55)",
                }}
              >
                <div
                  style={{
                    height: "520px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#E8EEF5",
                    position: "relative",
                    textAlign: "left",
                  }}
                >
                  <svg viewBox="0 0 250 520" width="100%" height="100%" aria-hidden="true">
                    <rect width="250" height="520" fill="#E8EEF5"></rect>
                    <path d="M0 120 H250 M0 300 H250 M60 0 V520 M190 0 V520" stroke="#fff" strokeWidth="12"></path>
                    <path
                      id="live"
                      d="M40 330 C80 290 70 220 120 200 C170 180 160 110 210 70"
                      fill="none"
                      stroke="#2F6BFF"
                      strokeWidth="6"
                      strokeLinecap="round"
                    ></path>
                    <circle cx="210" cy="70" r="9" fill="#E5322D" stroke="#fff" strokeWidth="3"></circle>
                    <g>
                      <rect x="-11" y="-7" width="22" height="14" rx="5" fill="#0F172A"></rect>
                      <rect x="-5" y="-5" width="10" height="10" rx="3" fill="#FFC531"></rect>
                      <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#live"></mpath>
                      </animateMotion>
                    </g>
                  </svg>
                  <div
                    className="pop"
                    style={{
                      position: "absolute",
                      left: "12px",
                      right: "12px",
                      top: "34px",
                      padding: "10px 12px",
                      borderRadius: "14px",
                      background: "#0B7A3E",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Yacine accepted your request ✓
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      padding: "16px",
                      borderRadius: "24px 24px 0 0",
                      background: "#fff",
                      boxShadow: "0 -10px 30px -12px rgba(15,23,42,.3)",
                    }}
                  >
                    {" "}
                    <span
                      style={{
                        display: "block",
                        width: "40px",
                        height: "4px",
                        margin: "0 auto 12px",
                        borderRadius: "2px",
                        background: "#CBD5E1",
                      }}
                    ></span>{" "}
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <span
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #7FA2FF, #2F6BFF)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "800",
                        }}
                      >
                        Y
                      </span>
                      <div style={{ flex: "1" }}>
                        <p style={{ margin: "0", fontWeight: "800", fontSize: "14px" }}>Yacine is on the way</p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#64748B" }}>
                          White Clio · meeting at the main gate
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                      <span
                        style={{
                          flex: "1",
                          padding: "10px",
                          borderRadius: "12px",
                          background: "#F1F5F9",
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        Message
                      </span>
                      <span
                        style={{
                          flex: "1",
                          padding: "10px",
                          borderRadius: "12px",
                          background: "#2B62EB",
                          color: "#fff",
                          textAlign: "center",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        Call
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption style={{ marginTop: "16px", fontWeight: "700" }}>IV–V · Accepted, on the road</figcaption>
            </figure>
          </div>
          <p className="mono" style={{ margin: "36px 0 0", textAlign: "center", fontSize: "12px", color: "#64748B" }}>
            screens redrawn for this case study · names are illustrative
          </p>
        </div>
      </section>
      <Boards slug="mobile" />
      {/* 07 ARRIVAL */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(#FFD9A8, #FCE9CF 60%)",
          padding: "110px 24px 0",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: "2" }}>
          {" "}
          <span className="sign">07 · Arrival</span>{" "}
          <h2
            style={{
              margin: "24px 0 0",
              maxWidth: "840px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-0.04em",
            }}
          >
            From group chats to verified rides.
          </h2>
          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
              gap: "16px",
            }}
          >
            <div style={{ padding: "24px", borderRadius: "22px", background: "rgba(255,255,255,.75)" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "800" }}>A face behind the wheel</p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#475569" }}>
                Verified profiles and reviews before any request.
              </p>
            </div>
            <div style={{ padding: "24px", borderRadius: "22px", background: "rgba(255,255,255,.75)" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "800" }}>A ride in a few taps</p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#475569" }}>
                Search, pick, request — no long sign-up first.
              </p>
            </div>
            <div style={{ padding: "24px", borderRadius: "22px", background: "rgba(255,255,255,.75)" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "800" }}>Startup label</p>
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#475569" }}>
                Selected under the university diploma-startup framework.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {" "}
            <span
              style={{
                padding: "9px 16px",
                borderRadius: "999px",
                background: "#0F172A",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              React Native
            </span>{" "}
            <span
              style={{
                padding: "9px 16px",
                borderRadius: "999px",
                background: "#0F172A",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              Node.js
            </span>{" "}
            <span
              style={{
                padding: "9px 16px",
                borderRadius: "999px",
                background: "#0F172A",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              MongoDB
            </span>{" "}
            <span
              style={{
                padding: "9px 16px",
                borderRadius: "999px",
                background: "#0F172A",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              Firebase
            </span>{" "}
          </div>
        </div>
        <div aria-hidden="true" style={{ position: "relative", height: "260px", marginTop: "30px" }}>
          <div
            style={{
              position: "absolute",
              right: "10%",
              bottom: "120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "14px 22px",
                borderRadius: "10px",
                background: "#0B7A3E",
                color: "#fff",
                boxShadow: "inset 0 0 0 3px #fff, 0 20px 30px -14px rgba(0,0,0,.5)",
                fontWeight: "800",
                fontSize: "22px",
              }}
            >
              Constantine
            </div>{" "}
            <span style={{ width: "8px", height: "90px", background: "#7D8492" }}></span>{" "}
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              height: "120px",
              background: "linear-gradient(#3A3D45, #24262C)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: "56px",
                height: "6px",
                backgroundImage: "linear-gradient(90deg, #FFC531 0 60px, transparent 60px 110px)",
                backgroundSize: "110px 6px",
                backgroundRepeat: "repeat-x",
              }}
            ></div>
          </div>
          <svg viewBox="0 0 220 100" width="230" style={{ position: "absolute", right: "26%", bottom: "46px" }}>
            <defs>
              <linearGradient id="carZ" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7FA2FF"></stop>
                <stop offset=".5" stopColor="#2F6BFF"></stop>
                <stop offset="1" stopColor="#1A45B8"></stop>
              </linearGradient>
            </defs>
            <ellipse cx="110" cy="92" rx="96" ry="7" fill="rgba(0,0,0,.35)"></ellipse>
            <path
              d="M16 72 Q14 52 34 48 L62 45 Q80 20 106 18 L146 18 Q168 20 184 44 L202 50 Q214 55 211 72 Z"
              fill="url(#carZ)"
            ></path>
            <path d="M70 45 Q86 27 106 26 L121 26 L121 45 Z" fill="#CFE0FF"></path>
            <path d="M127 26 L145 26 Q162 28 174 45 L127 45 Z" fill="#CFE0FF"></path>
            <circle cx="58" cy="73" r="17" fill="#15171C"></circle>
            <circle cx="58" cy="73" r="9" fill="#C9CED8"></circle>
            <circle cx="166" cy="73" r="17" fill="#15171C"></circle>
            <circle cx="166" cy="73" r="9" fill="#C9CED8"></circle>
          </svg>
        </div>
      </section>
    </div>
  );
}
