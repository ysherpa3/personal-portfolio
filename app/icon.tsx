import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#0f172a",
        borderRadius: 8,
        border: "1px solid #334155",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: 12,
        fontWeight: 700,
        color: "#818cf8",
        letterSpacing: "0.5px",
      }}
    >
      YS
    </div>,
    { ...size },
  );
}
