import { ImageResponse } from "next/og"

export const alt = "Urbit – Ihre IT. Ein Ansprechpartner. Persönliche IT aus Oberhasli."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px 80px",
        background: "#160f20",
        color: "#faf7fe",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 56, letterSpacing: -3 }}>urbit.</span>
        <span style={{ fontSize: 24, color: "#c299e4" }}>Urbanetz IT Consulting</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 80,
          letterSpacing: -4,
          lineHeight: 1.1,
        }}
      >
        <span>Ihre IT.</span>
        <span>Ein Ansprechpartner.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#c299e4",
          borderTop: "1px solid #584069",
          paddingTop: 28,
        }}
      >
        <span>Persönliche IT aus Oberhasli</span>
        <span>urbit.ch</span>
      </div>
    </div>,
    size,
  )
}
