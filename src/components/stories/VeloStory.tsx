import { Personas } from "@/components/case/blocks";

/* Generated from the validated maquette (Story-velo.dc.html), then edited by hand. */
export default function VeloStory() {
  return (
    <div
      className="st st-velo"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: "#3A2E2A",
        background: "#FFF6EC",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Open+Sans:wght@400;600;700&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" precedence="default" />
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "90px 24px 100px",
          background: "radial-gradient(80% 70% at 75% 45%, #FFE2C6, #FFF6EC 70%)",
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
          <div style={{ flex: "1 1 400px", minWidth: "0" }}>
            <p className="hand" style={{ margin: "0", fontSize: "30px", color: "#EC634C" }}>
              recipe card
            </p>
            <h1
              className="disp"
              style={{
                margin: "6px 0 0",
                fontSize: "clamp(64px, 9vw, 136px)",
                lineHeight: ".9",
                fontWeight: "700",
                letterSpacing: "-0.03em",
                color: "#3A2E2A",
              }}
            >
              Voilà
              <br />
              Vélo
            </h1>
            <p
              className="disp"
              style={{ margin: "12px 0 0", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: "500", color: "#85BA5D" }}
            >
              / the smoothie recipe
            </p>
            <p style={{ margin: "24px 0 0", maxWidth: "470px", fontSize: "18px", lineHeight: "1.6" }}>
              An event service in Montreal that rents pedal-powered smoothie blenders. You pedal, the blender spins, the
              smoothie is yours. I built the site that turns a fun idea into booked events — in French and English.
            </p>
            <div
              style={{
                marginTop: "26px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "10px",
                maxWidth: "520px",
                padding: "18px",
                borderRadius: "18px",
                background: "#FFFFFF",
                border: "2px dashed #F0B860",
              }}
            >
              <div>
                <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#7A6A62" }}>
                  serves
                </p>
                <p style={{ margin: "3px 0 0", fontWeight: "700", fontSize: "14px" }}>
                  Schools · offices · malls · parties
                </p>
              </div>
              <div>
                <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#7A6A62" }}>
                  prep
                </p>
                <p style={{ margin: "3px 0 0", fontWeight: "700", fontSize: "14px" }}>2025 · freelance</p>
              </div>
              <div>
                <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#7A6A62" }}>
                  flavours
                </p>
                <p style={{ margin: "3px 0 0", fontWeight: "700", fontSize: "14px" }}>Français · English</p>
              </div>
              <div>
                <p className="mono" style={{ margin: "0", fontSize: "10px", color: "#7A6A62" }}>
                  chef
                </p>
                <p style={{ margin: "3px 0 0", fontWeight: "700", fontSize: "14px" }}>Full-stack developer</p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
              {" "}
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#FBDCD5",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Client workshop
              </span>{" "}
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#FBEACB",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Package mapping
              </span>{" "}
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#DDEFD0",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                User flow
              </span>{" "}
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#FBDCD5",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Wireframe
              </span>{" "}
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#FBEACB",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                i18n
              </span>{" "}
            </div>
          </div>{" "}
          <div aria-hidden="true" style={{ flex: "1 1 560px", minWidth: "0", position: "relative", height: "540px" }}>
            {" "}
            <span
              className="bob"
              style={{
                "--r": "0deg",
                position: "absolute",
                left: "4%",
                top: "30px",
                width: "74px",
                height: "74px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #F8E58B 0 18%, #9CCB5F 19% 64%, #6A9C35 65% 78%, #8A6A3A 79%)",
              }}
            ></span>{" "}
            <span
              className="bob2"
              style={{
                "--r": "20deg",
                position: "absolute",
                right: "2%",
                top: "10px",
                width: "86px",
                height: "86px",
                borderRadius: "50%",
                background: "repeating-conic-gradient(#FFB648 0 26deg, #FFD27E 26deg 30deg)",
                boxShadow: "inset 0 0 0 7px #FFF3D6, 0 0 0 4px #F59E0B",
              }}
            ></span>{" "}
            <span
              className="bob"
              style={{
                "--r": "-15deg",
                position: "absolute",
                right: "10%",
                bottom: "10px",
                width: "54px",
                height: "64px",
                borderRadius: "50% 50% 46% 46% / 60% 60% 40% 40%",
                background: "radial-gradient(circle at 35% 30%, #FF8A8A, #E5322D)",
                boxShadow: "0 14px 18px -10px rgba(229,50,45,.6)",
              }}
            ></span>{" "}
            <svg viewBox="0 0 560 460" width="100%" style={{ position: "absolute", left: "0", top: "50px" }}>
              <defs>
                <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#A6D67A"></stop>
                  <stop offset="1" stopColor="#5E9A35"></stop>
                </linearGradient>
                <linearGradient id="jar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="rgba(255,255,255,.55)"></stop>
                  <stop offset=".5" stopColor="rgba(255,255,255,.15)"></stop>
                  <stop offset="1" stopColor="rgba(255,255,255,.5)"></stop>
                </linearGradient>
                <linearGradient id="smoothie" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#FF8E7C"></stop>
                  <stop offset="1" stopColor="#EC634C"></stop>
                </linearGradient>
                <clipPath id="jarClip">
                  <path d="M366 92 L446 92 L436 210 L376 210 Z"></path>
                </clipPath>
              </defs>
              <ellipse cx="280" cy="440" rx="240" ry="14" fill="rgba(58,46,42,.15)"></ellipse>
              <g className="wheel">
                <circle cx="140" cy="340" r="96" fill="#3F8F3A"></circle>
                <circle cx="140" cy="340" r="86" fill="#E9F5D8"></circle>
                <circle cx="140" cy="340" r="78" fill="#F2707E"></circle>
                <g fill="#2A1A1A">
                  <ellipse cx="140" cy="285" rx="4" ry="7"></ellipse>
                  <ellipse cx="190" cy="320" rx="4" ry="7" transform="rotate(60 190 320)"></ellipse>
                  <ellipse cx="180" cy="380" rx="4" ry="7" transform="rotate(120 180 380)"></ellipse>
                  <ellipse cx="120" cy="395" rx="4" ry="7" transform="rotate(200 120 395)"></ellipse>
                  <ellipse cx="92" cy="335" rx="4" ry="7" transform="rotate(270 92 335)"></ellipse>
                  <ellipse cx="110" cy="300" rx="4" ry="7" transform="rotate(320 110 300)"></ellipse>
                </g>
                <circle cx="140" cy="340" r="10" fill="#3A2E2A"></circle>
              </g>
              <g className="wheel">
                <circle cx="440" cy="350" r="80" fill="#F59E0B"></circle>
                <circle cx="440" cy="350" r="72" fill="#FFF3D6"></circle>
                <circle
                  cx="440"
                  cy="350"
                  r="66"
                  fill="none"
                  stroke="#FFB648"
                  strokeWidth="58"
                  strokeDasharray="20 4"
                ></circle>
                <circle cx="440" cy="350" r="9" fill="#3A2E2A"></circle>
              </g>
              <path
                d="M140 340 L250 340 L330 210 L210 210 Z M250 340 L210 210 M330 210 L440 350 M330 210 L345 160"
                fill="none"
                stroke="url(#frame)"
                strokeWidth="16"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
              <path d="M180 192 Q210 178 244 190 L240 202 Q210 196 184 204 Z" fill="#8A5A3A"></path>
              <path d="M210 205 L212 196" stroke="#5E9A35" strokeWidth="12"></path>
              <path
                d="M338 160 Q360 140 392 148"
                fill="none"
                stroke="#3A2E2A"
                strokeWidth="10"
                strokeLinecap="round"
              ></path>
              <g className="crank">
                <circle cx="250" cy="340" r="22" fill="#3A2E2A"></circle>
                <path
                  d="M250 340 L250 300 M250 340 L250 380"
                  stroke="#3A2E2A"
                  strokeWidth="8"
                  strokeLinecap="round"
                ></path>
                <rect x="236" y="292" width="28" height="9" rx="4" fill="#EC634C"></rect>
                <rect x="236" y="379" width="28" height="9" rx="4" fill="#EC634C"></rect>
              </g>
              <rect x="356" y="210" width="100" height="26" rx="8" fill="#3A2E2A"></rect>
              <g clipPath="url(#jarClip)">
                <rect className="fill" x="360" y="100" width="90" height="112" fill="url(#smoothie)"></rect>
              </g>
              <path d="M366 92 L446 92 L436 210 L376 210 Z" fill="url(#jar)" stroke="#FFFFFF" strokeWidth="4"></path>
              <rect x="360" y="80" width="92" height="16" rx="6" fill="#3A2E2A"></rect>
              <circle className="bubble" cx="396" cy="180" r="5" fill="#FFD2C9"></circle>
              <circle
                className="bubble"
                cx="414"
                cy="190"
                r="4"
                fill="#FFD2C9"
                style={{ animationDelay: "-1.5s" }}
              ></circle>
              <path d="M60 250 L130 250 L124 290 L66 290 Z" fill="#E5B66E" stroke="#B5813A" strokeWidth="4"></path>
              <path d="M70 262 H120 M72 276 H118" stroke="#B5813A" strokeWidth="3"></path>
            </svg>
          </div>
        </div>
      </section>
      {/* 01 PROBLEM */}
      <section style={{ background: "#FFFFFF", padding: "110px 24px" }}>
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
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#EC634C" }}>
              step one — what went wrong
            </p>
            <h2
              className="disp"
              style={{ margin: "8px 0 0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "700" }}
            >
              Too many ingredients, no recipe.
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.65" }}>
              The offer goes from a single child-sized bike to a full smoothie parade. Organisers didn't know which
              package fit their event, so every booking turned into a long thread of emails and phone calls.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "18px", lineHeight: "1.65" }}>
              And in Montreal, half of them wanted to do it in English, the other half in French.
            </p>
          </div>
          <div aria-hidden="true" style={{ flex: "1 1 460px", position: "relative", height: "420px" }}>
            <div
              style={{
                position: "absolute",
                left: "6%",
                top: "30px",
                width: "76%",
                padding: "18px 20px",
                borderRadius: "16px",
                background: "#FFF6EC",
                boxShadow: "0 20px 30px -18px rgba(58,46,42,.4)",
                transform: "rotate(-4deg)",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#7A6A62" }}>
                inbox
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Re: Re: Re: smoothie bikes for Saturday?</p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#7A6A62" }}>Which package for a school fair…</p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "14%",
                top: "130px",
                width: "76%",
                padding: "18px 20px",
                borderRadius: "16px",
                background: "#FFF6EC",
                boxShadow: "0 20px 30px -18px rgba(58,46,42,.4)",
                transform: "rotate(3deg)",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#7A6A62" }}>
                inbox
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Re: Fwd: quote — corporate day</p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#7A6A62" }}>
                Can you send the details in English?
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                left: "4%",
                top: "230px",
                width: "76%",
                padding: "18px 20px",
                borderRadius: "16px",
                background: "#FFF6EC",
                boxShadow: "0 20px 30px -18px rgba(58,46,42,.4)",
                transform: "rotate(-2deg)",
              }}
            >
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#7A6A62" }}>
                inbox
              </p>
              <p style={{ margin: "6px 0 0", fontWeight: "700" }}>Re: anniversaire — vélo pour enfants ?</p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#7A6A62" }}>Is the small bike enough for…</p>
            </div>{" "}
            <span
              className="bob"
              style={{
                "--r": "0deg",
                position: "absolute",
                right: "2%",
                top: "60px",
                width: "76px",
                height: "76px",
                borderRadius: "50%",
                background: "#EC634C",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: "700",
                fontSize: "34px",
                boxShadow: "0 20px 26px -12px rgba(236,99,76,.7)",
              }}
            >
              ?
            </span>{" "}
          </div>
        </div>
      </section>
      {/* 02 INGREDIENTS (research) */}
      <section style={{ background: "#FFF6EC", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#EC634C" }}>
            step two — the ingredients
          </p>
          <h2
            className="disp"
            style={{ margin: "8px 0 0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "700" }}
          >
            What I learned from the people who book.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6" }}>
            A workshop with the founder, a pass through every package, and the questions organisers kept asking.
          </p>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                padding: "30px",
                borderRadius: "30px",
                background: "#FBDCD5",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {" "}
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "86px",
                  height: "86px",
                  borderRadius: "0 0 86px 86px",
                  background: "#F2707E",
                  boxShadow: "inset 0 -10px 0 #E9F5D8, inset 0 -18px 0 #3F8F3A",
                }}
              ></span>{" "}
              <p className="disp" style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
                Pick by event, not by bike
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                Organisers think "school fair" or "team day", never "Double Fun". Packages had to start from the event.
              </p>
            </div>
            <div
              style={{
                padding: "30px",
                borderRadius: "30px",
                background: "#FBEACB",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {" "}
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "86px",
                  height: "86px",
                  borderRadius: "50%",
                  background: "repeating-conic-gradient(#FFB648 0 26deg, #FFD27E 26deg 30deg)",
                  boxShadow: "inset 0 0 0 7px #FFF3D6, 0 0 0 4px #F59E0B",
                  animationDelay: "-1s",
                }}
              ></span>{" "}
              <p className="disp" style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
                Every page leads to booking
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                The goal of the site is one thing: a booking request with date, place and package.
              </p>
            </div>
            <div
              style={{
                padding: "30px",
                borderRadius: "30px",
                background: "#DDEFD0",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {" "}
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "86px",
                  height: "86px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #F8E58B 0 18%, #9CCB5F 19% 64%, #6A9C35 65% 78%, #8A6A3A 79%)",
                  animationDelay: "-2s",
                }}
              ></span>{" "}
              <p className="disp" style={{ margin: "0", fontSize: "24px", fontWeight: "600" }}>
                Bilingual by default
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                Montreal clients switch languages mid-sentence. The whole site had to exist in both.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "50px",
              padding: "30px 34px",
              borderRadius: "26px",
              background: "#3A2E2A",
              color: "#FFF6EC",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {" "}
            <span className="mono" style={{ fontSize: "12px", color: "#F0B860" }}>
              how might we
            </span>{" "}
            <p
              className="disp"
              style={{
                margin: "0",
                flex: "1 1 520px",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: "1.3",
                fontWeight: "500",
              }}
            >
              let an organiser pick the right package and book it in one sitting — in their language?
            </p>
          </div>
        </div>
      </section>
      <Personas slug="velo" />
      {/* 03 METHOD (flow + IA) */}
      <section style={{ background: "#FFFFFF", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#EC634C" }}>
            step three — the method
          </p>
          <h2
            className="disp"
            style={{ margin: "8px 0 0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "700" }}
          >
            Pedal until it's booked.
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "600px", fontSize: "18px", lineHeight: "1.6" }}>
            The booking flow, one blender at a time. Every step fills the glass a little more.
          </p>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "18px",
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
                  position: "relative",
                  width: "70px",
                  height: "110px",
                  border: "4px solid #3A2E2A",
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "15%",
                    background: "#F2707E",
                  }}
                ></span>
              </div>
              <p className="disp" style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                Pick the event
              </p>
              <p style={{ margin: "0", fontSize: "13px", color: "#7A6A62" }}>school, office, party</p>
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
                  position: "relative",
                  width: "70px",
                  height: "110px",
                  border: "4px solid #3A2E2A",
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "32%",
                    background: "linear-gradient(#F59E0B, #F2707E)",
                  }}
                ></span>
              </div>
              <p className="disp" style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                Choose a package
              </p>
              <p style={{ margin: "0", fontSize: "13px", color: "#7A6A62" }}>from one bike to a parade</p>
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
                  position: "relative",
                  width: "70px",
                  height: "110px",
                  border: "4px solid #3A2E2A",
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "50%",
                    background: "linear-gradient(#F0B860, #F2707E)",
                  }}
                ></span>
              </div>
              <p className="disp" style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                Date & place
              </p>
              <p style={{ margin: "0", fontSize: "13px", color: "#7A6A62" }}>indoor or outdoor</p>
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
                  position: "relative",
                  width: "70px",
                  height: "110px",
                  border: "4px solid #3A2E2A",
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "68%",
                    background: "linear-gradient(#85BA5D, #F0B860)",
                  }}
                ></span>
              </div>
              <p className="disp" style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                Event details
              </p>
              <p style={{ margin: "0", fontSize: "13px", color: "#7A6A62" }}>guests, contact</p>
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
                  position: "relative",
                  width: "70px",
                  height: "110px",
                  border: "4px solid #3A2E2A",
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "86%",
                    background: "linear-gradient(#85BA5D, #EC634C)",
                  }}
                ></span>
              </div>
              <p className="disp" style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
                Request sent
              </p>
              <p style={{ margin: "0", fontSize: "13px", color: "#7A6A62" }}>in FR or EN</p>
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
                  position: "relative",
                  width: "70px",
                  height: "110px",
                  border: "4px solid #3A2E2A",
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  overflow: "visible",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "100%",
                    borderRadius: "0 0 14px 14px",
                    background: "linear-gradient(#F2707E, #EC634C)",
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    right: "8px",
                    top: "-40px",
                    width: "6px",
                    height: "70px",
                    background: "#85BA5D",
                    borderRadius: "3px",
                    transform: "rotate(14deg)",
                  }}
                ></span>
              </div>
              <p className="disp" style={{ margin: "0", fontSize: "18px", fontWeight: "600", color: "#B84D3B" }}>
                Booked!
              </p>
              <p style={{ margin: "0", fontSize: "13px", color: "#7A6A62" }}>confirmation</p>
            </div>
          </div>{" "}
          <div
            style={{
              marginTop: "80px",
              padding: "40px",
              borderRadius: "26px",
              background: "#2F3A33",
              color: "#F2F0E6",
              boxShadow: "inset 0 0 0 12px #8A5A3A, 0 30px 50px -30px rgba(58,46,42,.6)",
            }}
          >
            <p className="hand" style={{ margin: "0", fontSize: "34px", color: "#F0B860" }}>
              Le menu du site · site map
            </p>
            <div
              style={{
                marginTop: "22px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "28px",
              }}
            >
              <div>
                <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#F2707E" }}>
                  Forfaits
                </p>
                <p className="hand" style={{ margin: "6px 0 0", fontSize: "22px", lineHeight: "1.35" }}>
                  La petite Koki
                  <br />
                  Pop Solo
                  <br />
                  Double Fun
                  <br />
                  Ready Set Blend
                  <br />
                  Défi Parent-Enfant
                  <br />
                  La Smoothie Parade
                  <br />
                  Signature
                </p>
              </div>
              <div>
                <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#85BA5D" }}>
                  Événements
                </p>
                <p className="hand" style={{ margin: "6px 0 0", fontSize: "22px", lineHeight: "1.35" }}>
                  Corporatif
                  <br />
                  Écoles
                  <br />
                  Centres commerciaux
                  <br />
                  Fêtes
                </p>
              </div>
              <div>
                <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#F0B860" }}>
                  À propos
                </p>
                <p className="hand" style={{ margin: "6px 0 0", fontSize: "22px", lineHeight: "1.35" }}>
                  Mission
                  <br />
                  Partenaires
                  <br />
                  Comment ça marche
                  <br />
                  Blogue
                </p>
              </div>
              <div>
                <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#FFFFFF" }}>
                  Réserver
                </p>
                <p className="hand" style={{ margin: "6px 0 0", fontSize: "22px", lineHeight: "1.35" }}>
                  Formulaire
                  <br />
                  Contact
                  <br />
                  FR / EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 SKETCHES */}
      <section style={{ background: "#FFF6EC", padding: "110px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#EC634C" }}>
            step four — first drafts
          </p>
          <h2
            className="disp"
            style={{ margin: "8px 0 0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "700" }}
          >
            Sketched with sticky fingers.
          </h2>
          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              alignItems: "start",
            }}
          >
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  position: "relative",
                  padding: "28px",
                  minHeight: "380px",
                  borderRadius: "6px",
                  background: "#FFFDF8",
                  backgroundImage: "repeating-linear-gradient(#FFFDF8 0 27px, #F3D9C9 27px 28px)",
                  boxShadow: "0 24px 40px -24px rgba(58,46,42,.45)",
                  transform: "rotate(-2deg)",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: "30px",
                    bottom: "40px",
                    width: "110px",
                    height: "90px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse, rgba(242,112,126,.28), rgba(242,112,126,.08) 60%, transparent 70%)",
                  }}
                ></span>{" "}
                <p className="hand" style={{ margin: "0 0 10px", fontSize: "26px", color: "#3A2E2A" }}>
                  home ↓
                </p>
                <div
                  style={{
                    height: "70px",
                    border: "2.5px dashed #3A2E2A",
                    borderRadius: "8px",
                    padding: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <span className="hand" style={{ fontSize: "18px" }}>
                    big title + bike photo
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                  <span
                    style={{ flex: "1", height: "80px", border: "2.5px dashed #3A2E2A", borderRadius: "8px" }}
                  ></span>
                  <span
                    style={{ flex: "1", height: "80px", border: "2.5px dashed #3A2E2A", borderRadius: "8px" }}
                  ></span>
                  <span
                    style={{ flex: "1", height: "80px", border: "2.5px dashed #3A2E2A", borderRadius: "8px" }}
                  ></span>
                </div>
                <p className="hand" style={{ margin: "8px 0 0", fontSize: "20px", color: "#EC634C" }}>
                  3 bikes = 3 flavours?
                </p>
                <div
                  style={{
                    marginTop: "10px",
                    height: "46px",
                    border: "2.5px solid #EC634C",
                    borderRadius: "999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="hand" style={{ fontSize: "22px", color: "#EC634C" }}>
                    RÉSERVER
                  </span>
                </div>
              </div>
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Notebook sketch
              </figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{
                  padding: "20px",
                  minHeight: "380px",
                  borderRadius: "18px",
                  background: "#F1ECE5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxSizing: "border-box",
                }}
              >
                {" "}
                <span style={{ height: "30px", borderRadius: "8px", background: "#E0D9CF" }}></span>{" "}
                <span style={{ height: "80px", borderRadius: "10px", background: "#E0D9CF" }}></span>{" "}
                <div style={{ display: "flex", gap: "10px" }}>
                  <span style={{ flex: "1", height: "100px", borderRadius: "14px", background: "#E8E2D9" }}></span>
                  <span style={{ flex: "1", height: "100px", borderRadius: "14px", background: "#E8E2D9" }}></span>
                  <span style={{ flex: "1", height: "100px", borderRadius: "14px", background: "#E8E2D9" }}></span>
                </div>{" "}
                <span
                  style={{
                    alignSelf: "center",
                    width: "40%",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#D2CABE",
                  }}
                ></span>{" "}
              </div>
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Wireframe
              </figcaption>
            </figure>
            <figure style={{ margin: "0" }}>
              <div
                style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 30px 50px -28px rgba(58,46,42,.55)" }}
              >
                <img
                  src="/img/da8e96b7c7267ffc9f50a856b54cd834.jpg"
                  alt="Voilà Vélo home page"
                  style={{ display: "block", width: "100%", aspectRatio: "800 / 499", objectFit: "cover" }}
                />
              </div>
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Served
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 05 FLAVOURS (visual) */}
      <section style={{ background: "#3A2E2A", color: "#FFF6EC", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#F0B860" }}>
            step five — the flavours
          </p>
          <h2
            className="disp"
            style={{
              margin: "8px 0 0",
              maxWidth: "760px",
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "1",
              fontWeight: "700",
            }}
          >
            A palette you could drink.
          </h2>
          <div
            style={{
              marginTop: "54px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "26px",
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
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "repeating-conic-gradient(#EC634C 0 28deg, #F58C78 28deg 32deg)",
                  boxShadow: "inset 0 0 0 8px #FFE3DC, 0 0 0 5px #C94A35",
                }}
              ></span>
              <b className="disp" style={{ fontSize: "20px" }}>
                Grapefruit coral
              </b>
              <span className="mono" style={{ fontSize: "12px", color: "#C9B8AE" }}>
                #EC634C · actions
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
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 40% 35%, #FFD98F, #F0B860 60%, #D9952E)",
                  animationDelay: "-.7s",
                }}
              ></span>
              <b className="disp" style={{ fontSize: "20px" }}>
                Mango honey
              </b>
              <span className="mono" style={{ fontSize: "12px", color: "#C9B8AE" }}>
                #F0B860 · warmth
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
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #F8E58B 0 16%, #A8D47A 17% 64%, #85BA5D 65% 80%, #8A6A3A 81%)",
                  animationDelay: "-1.4s",
                }}
              ></span>
              <b className="disp" style={{ fontSize: "20px" }}>
                Kiwi leaf
              </b>
              <span className="mono" style={{ fontSize: "12px", color: "#C9B8AE" }}>
                #85BA5D · eco
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
              <span
                aria-hidden="true"
                className="wobble"
                style={{
                  width: "120px",
                  height: "60px",
                  marginTop: "60px",
                  borderRadius: "0 0 120px 120px",
                  background: "#F2707E",
                  boxShadow: "inset 0 -10px 0 #E9F5D8, inset 0 -18px 0 #3F8F3A",
                  animationDelay: "-2.1s",
                }}
              ></span>
              <b className="disp" style={{ fontSize: "20px" }}>
                Watermelon
              </b>
              <span className="mono" style={{ fontSize: "12px", color: "#C9B8AE" }}>
                #F2707E · fun
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
              <span
                aria-hidden="true"
                style={{ width: "120px", height: "120px", borderRadius: "30px", background: "#FFF6EC" }}
              ></span>
              <b className="disp" style={{ fontSize: "20px" }}>
                Oat cream
              </b>
              <span className="mono" style={{ fontSize: "12px", color: "#C9B8AE" }}>
                #FFF6EC · ground
              </span>
            </div>
          </div>
          <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", gap: "18px" }}>
            <div style={{ flex: "1 1 320px", padding: "28px", borderRadius: "24px", background: "#4A3C36" }}>
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#C9B8AE" }}>
                display · Fredoka (round, juicy)
              </p>
              <p className="disp" style={{ margin: "10px 0 0", fontSize: "50px", lineHeight: "1", fontWeight: "700" }}>
                Smoothies frais
              </p>
            </div>
            <div style={{ flex: "1 1 320px", padding: "28px", borderRadius: "24px", background: "#4A3C36" }}>
              <p className="mono" style={{ margin: "0", fontSize: "11px", color: "#C9B8AE" }}>
                body · Open Sans (the brand's text face)
              </p>
              <p style={{ margin: "10px 0 0", fontSize: "18px", lineHeight: "1.6" }}>
                Bonnes vibrations, vélos verts, goût excellent. Good vibes, green bikes, great taste.
              </p>
            </div>
            <div
              style={{
                flex: "1 1 260px",
                padding: "28px",
                borderRadius: "24px",
                background: "#FFF6EC",
                color: "#3A2E2A",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span className="mono" style={{ fontSize: "11px", color: "#7A6A62" }}>
                components
              </span>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  background: "#B84D3B",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Réserver →
              </span>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "11px 21px",
                  borderRadius: "999px",
                  border: "2px solid #85BA5D",
                  color: "#3F7A25",
                  fontWeight: "700",
                }}
              >
                Voir les forfaits
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 06 SERVED (screens) */}
      <section
        style={{ background: "radial-gradient(80% 60% at 50% 0%, #FFE2C6, #FFF6EC 60%)", padding: "120px 24px" }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#EC634C" }}>
            step six — serve
          </p>
          <h2
            className="disp"
            style={{ margin: "8px 0 0", fontSize: "clamp(40px, 5vw, 66px)", lineHeight: "1", fontWeight: "700" }}
          >
            Booked in three sips.
          </h2>
          <div
            style={{
              marginTop: "56px",
              maxWidth: "980px",
              marginLeft: "auto",
              marginRight: "auto",
              perspective: "1800px",
            }}
          >
            <div style={{ transform: "rotateX(8deg)" }}>
              <div
                style={{
                  padding: "14px 14px 18px",
                  borderRadius: "20px 20px 4px 4px",
                  background: "linear-gradient(#4A3C36, #2A201C)",
                  boxShadow: "0 50px 70px -40px rgba(58,46,42,.7)",
                }}
              >
                <img
                  src="/img/9028a1859b0c19ccd31a67c05a61c0ba.jpg"
                  alt="Voilà Vélo — event section on a laptop"
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
                  background: "linear-gradient(#EFE6DA, #C2B5A4)",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              marginTop: "90px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "28px",
            }}
          >
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "240px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#2A201C",
                  boxShadow: "0 40px 60px -30px rgba(58,46,42,.6)",
                  transform: "rotate(-4deg)",
                }}
              >
                <div
                  style={{
                    height: "500px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#FFF6EC",
                    padding: "30px 14px 14px",
                    boxSizing: "border-box",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p className="disp" style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    What's the occasion?
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {" "}
                    <span
                      style={{
                        padding: "16px 10px",
                        borderRadius: "16px",
                        background: "#B84D3B",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        textAlign: "center",
                      }}
                    >
                      School fair
                    </span>{" "}
                    <span
                      style={{
                        padding: "16px 10px",
                        borderRadius: "16px",
                        background: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        textAlign: "center",
                      }}
                    >
                      Team day
                    </span>{" "}
                    <span
                      style={{
                        padding: "16px 10px",
                        borderRadius: "16px",
                        background: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        textAlign: "center",
                      }}
                    >
                      Mall weekend
                    </span>{" "}
                    <span
                      style={{
                        padding: "16px 10px",
                        borderRadius: "16px",
                        background: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        textAlign: "center",
                      }}
                    >
                      Birthday
                    </span>{" "}
                  </div>{" "}
                  <span
                    aria-hidden="true"
                    style={{
                      margin: "14px auto 0",
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "repeating-conic-gradient(#FFB648 0 26deg, #FFD27E 26deg 30deg)",
                      boxShadow: "inset 0 0 0 9px #FFF3D6, 0 0 0 5px #F59E0B",
                    }}
                  ></span>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      padding: "12px",
                      borderRadius: "999px",
                      background: "#3A2E2A",
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    Next
                  </span>{" "}
                </div>
              </div>
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Pick the event
              </figcaption>
            </figure>
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "250px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#2A201C",
                  boxShadow: "0 50px 70px -30px rgba(58,46,42,.65)",
                }}
              >
                <div
                  style={{
                    height: "520px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "#FFFFFF",
                    padding: "30px 14px 14px",
                    boxSizing: "border-box",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p className="disp" style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
                    Packages for a school fair
                  </p>
                  <div
                    style={{
                      padding: "12px",
                      borderRadius: "18px",
                      background: "#DDEFD0",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "#F2707E",
                        boxShadow: "inset 0 0 0 5px #E9F5D8, 0 0 0 3px #3F8F3A",
                      }}
                    ></span>
                    <div>
                      <p style={{ margin: "0", fontWeight: "700", fontSize: "14px" }}>Double Fun</p>
                      <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#4E6B3A" }}>
                        Two bikes, a duel of flavours
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "12px",
                      borderRadius: "18px",
                      background: "#FBEACB",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "repeating-conic-gradient(#FFB648 0 26deg, #FFD27E 26deg 30deg)",
                        boxShadow: "inset 0 0 0 5px #FFF3D6",
                      }}
                    ></span>
                    <div>
                      <p style={{ margin: "0", fontWeight: "700", fontSize: "14px" }}>Défi Parent-Enfant</p>
                      <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#7A5A20" }}>Big bike, small bike</p>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "12px",
                      borderRadius: "18px",
                      background: "#FBDCD5",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, #F8E58B 0 16%, #A8D47A 17% 64%, #85BA5D 65%)",
                      }}
                    ></span>
                    <div>
                      <p style={{ margin: "0", fontWeight: "700", fontSize: "14px" }}>La Smoothie Parade</p>
                      <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#8A3A2C" }}>The whole fleet</p>
                    </div>
                  </div>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      padding: "12px",
                      borderRadius: "999px",
                      background: "#B84D3B",
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    Choose Double Fun
                  </span>{" "}
                </div>
              </div>
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Pick the package
              </figcaption>
            </figure>
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "240px",
                  padding: "8px",
                  borderRadius: "40px",
                  background: "#2A201C",
                  boxShadow: "0 40px 60px -30px rgba(58,46,42,.6)",
                  transform: "rotate(4deg)",
                }}
              >
                <div
                  style={{
                    height: "500px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "linear-gradient(#FFE2C6, #FFF6EC)",
                    padding: "30px 14px 14px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <svg viewBox="0 0 120 170" width="120" aria-hidden="true">
                    <path d="M20 30 H100 L90 160 H30 Z" fill="#FFFFFF" stroke="#3A2E2A" strokeWidth="4"></path>
                    <path d="M24 70 H96 L90 160 H30 Z" fill="#EC634C"></path>
                    <path d="M78 6 L70 70" stroke="#85BA5D" strokeWidth="8" strokeLinecap="round"></path>
                    <circle cx="44" cy="50" r="10" fill="#F2707E"></circle>
                  </svg>
                  <p className="disp" style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#EC634C" }}>
                    C'est réservé !
                  </p>
                  <p style={{ margin: "0", fontSize: "13px", textAlign: "center" }}>
                    Double Fun · school fair · Saturday
                    <br />
                    We'll confirm by email.
                  </p>{" "}
                  <span
                    style={{
                      marginTop: "auto",
                      alignSelf: "stretch",
                      padding: "12px",
                      borderRadius: "999px",
                      background: "#3A2E2A",
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    Back to home
                  </span>{" "}
                </div>
              </div>
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Booked
              </figcaption>
            </figure>
            <figure style={{ margin: "0", textAlign: "center" }}>
              <div
                style={{
                  width: "220px",
                  padding: "8px",
                  borderRadius: "38px",
                  background: "#2A201C",
                  boxShadow: "0 40px 60px -30px rgba(58,46,42,.6)",
                }}
              >
                <img
                  src="/img/74835d23b68aeadbb8d20233a53ea52a.jpg"
                  alt="Voilà Vélo live site on mobile"
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
              <figcaption className="disp" style={{ marginTop: "16px", fontWeight: "600", fontSize: "18px" }}>
                Live site, mobile
              </figcaption>
            </figure>
          </div>
          <p className="mono" style={{ margin: "30px 0 0", textAlign: "center", fontSize: "12px", color: "#7A6A62" }}>
            booking screens redrawn for this case study
          </p>
        </div>
      </section>
      {/* 07 CHEERS */}
      <section style={{ background: "#4E7F31", color: "#1F3312", padding: "110px 24px" }}>
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
          <div style={{ flex: "1 1 460px" }}>
            <p className="hand" style={{ margin: "0", fontSize: "28px", color: "#FFFFFF" }}>
              step seven — cheers
            </p>
            <h2
              className="disp"
              style={{
                margin: "8px 0 0",
                fontSize: "clamp(40px, 5vw, 66px)",
                lineHeight: "1",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              From email threads to one booking form.
            </h2>
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p
                style={{
                  margin: "0",
                  padding: "18px 22px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.85)",
                  fontSize: "17px",
                }}
              >
                <b>Packages by event</b> — organisers start from their occasion.
              </p>
              <p
                style={{
                  margin: "0",
                  padding: "18px 22px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.85)",
                  fontSize: "17px",
                }}
              >
                <b>Booking in one go</b> — requests arrive with date, place and package.
              </p>
              <p
                style={{
                  margin: "0",
                  padding: "18px 22px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.85)",
                  fontSize: "17px",
                }}
              >
                <b>Fully bilingual</b> — every page in French and English.
              </p>
            </div>
            <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              {" "}
              <span
                style={{
                  padding: "9px 16px",
                  borderRadius: "999px",
                  background: "#1F3312",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                Next.js
              </span>{" "}
              <span
                style={{
                  padding: "9px 16px",
                  borderRadius: "999px",
                  background: "#1F3312",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                React
              </span>{" "}
              <span
                style={{
                  padding: "9px 16px",
                  borderRadius: "999px",
                  background: "#1F3312",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                Tailwind CSS
              </span>{" "}
              <span
                style={{
                  padding: "9px 16px",
                  borderRadius: "999px",
                  background: "#1F3312",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                i18n
              </span>{" "}
              <a
                href="https://v0-image-analysis-d1-lac.vercel.app/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "48px",
                  padding: "0 22px",
                  borderRadius: "999px",
                  background: "#B84D3B",
                  color: "#fff",
                  fontWeight: "700",
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
          <div
            aria-hidden="true"
            style={{
              flex: "1 1 360px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "6px",
              height: "300px",
            }}
          >
            <svg className="wobble" viewBox="0 0 120 200" width="150">
              <path d="M20 30 H100 L90 190 H30 Z" fill="rgba(255,255,255,.7)" stroke="#FFFFFF" strokeWidth="4"></path>
              <path d="M24 70 H96 L90 190 H30 Z" fill="#EC634C"></path>
              <path d="M80 4 L70 70" stroke="#3A2E2A" strokeWidth="7" strokeLinecap="round"></path>
            </svg>
            <svg className="wobble" viewBox="0 0 120 200" width="150" style={{ animationDelay: "-1.5s" }}>
              <path d="M20 30 H100 L90 190 H30 Z" fill="rgba(255,255,255,.7)" stroke="#FFFFFF" strokeWidth="4"></path>
              <path d="M24 80 H96 L90 190 H30 Z" fill="#F0B860"></path>
              <path d="M40 4 L50 80" stroke="#3A2E2A" strokeWidth="7" strokeLinecap="round"></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
