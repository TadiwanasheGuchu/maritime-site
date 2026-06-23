import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.legalName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#00668a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-0.02em" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24, opacity: 0.9 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
