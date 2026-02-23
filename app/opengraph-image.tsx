import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Auridian Advisors — Executive Systems Architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1C2D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Gold top rule */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "4px",
          background: "#C7A348",
        }} />

        {/* Wordmark */}
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: "28px",
          fontWeight: "400",
          letterSpacing: "0.3em",
          color: "#C7A348",
          marginBottom: "40px",
          textTransform: "uppercase",
        }}>
          AURIDIAN
        </div>

        {/* Headline */}
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: "52px",
          fontWeight: "400",
          color: "#FFFFFF",
          lineHeight: 1.15,
          maxWidth: "800px",
          marginBottom: "32px",
        }}>
          Where Business Vision Meets Intelligent Systems Design.
        </div>

        {/* Subline */}
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: "22px",
          fontWeight: "400",
          color: "rgba(255,255,255,0.55)",
          maxWidth: "620px",
          lineHeight: 1.6,
        }}>
          Executive-level product and platform strategy for founders and enterprise teams.
        </div>

        {/* Bottom rule + domain */}
        <div style={{
          position: "absolute",
          bottom: "48px",
          left: "80px",
          fontFamily: "Georgia, serif",
          fontSize: "16px",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase",
        }}>
          auridian.io
        </div>
      </div>
    ),
    { ...size }
  );
}
