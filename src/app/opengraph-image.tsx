import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FABOM GLOBAL — Websites Designed to Help Your Business Stand Out";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14243a",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "#c6a66b",
              color: "#14243a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            FG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: 30, fontWeight: 700, letterSpacing: 1 }}>
              FABOM GLOBAL
            </span>
            <span style={{ color: "#c6a66b", fontSize: 15, letterSpacing: 6 }}>
              WEBSITE DESIGN &amp; DEVELOPMENT
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Websites designed to help</span>
            <span>your business stand out.</span>
          </div>
          <div style={{ width: 120, height: 6, background: "#c6a66b", display: "flex" }} />
          <div style={{ color: "#9aa4b2", fontSize: 24, display: "flex" }}>
            Business websites · Redesigns · Landing pages · E-commerce — Oregon, USA
          </div>
        </div>
      </div>
    ),
    size
  );
}
