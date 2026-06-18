import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Monarc Agency — Agence digitale à Bruxelles · Stratégie & croissance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "radial-gradient(140% 100% at 80% 0%, rgba(155,108,255,0.42), transparent 60%)," +
            "radial-gradient(120% 120% at -10% 100%, rgba(109,61,242,0.40), transparent 55%)," +
            "linear-gradient(180deg, #0b0b0b 0%, #131318 100%)",
          color: "#f5f5f5",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* top bar : brand + eyebrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 64,
                background:
                  "linear-gradient(140deg, #ffffff 0%, #b4b4bc 50%, #cfcfd6 100%)",
                clipPath:
                  "polygon(50% 0%, 100% 30%, 100% 80%, 50% 100%, 0% 80%, 0% 30%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  background:
                    "linear-gradient(180deg, #ffffff, #b4b4bc 60%, #cfcfd6)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                MONARC
              </span>
              <span
                style={{
                  fontSize: 14,
                  letterSpacing: "0.42em",
                  color: "#7d7d82",
                  marginTop: 8,
                  textTransform: "uppercase",
                }}
              >
                Agency
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#9b6cff",
              padding: "10px 22px",
              border: "1px solid rgba(155,108,255,0.45)",
              borderRadius: 999,
            }}
          >
            Agence digitale · Bruxelles
          </span>
        </div>

        {/* main title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
            }}
          >
            <span>Nous bâtissons une</span>
            <span
              style={{
                background: "linear-gradient(110deg, #9b6cff, #6d3df2 60%, #9b6cff)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              croissance digitale
            </span>
            <span>pour les marques ambitieuses.</span>
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#b8b8b8",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#9b6cff",
                boxShadow: "0 0 16px #9b6cff",
              }}
            />
            Stratégie · Acquisition · Conversion
          </span>
          <span style={{ color: "#7d7d82", letterSpacing: "0.2em" }}>monarc-agency.be</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
