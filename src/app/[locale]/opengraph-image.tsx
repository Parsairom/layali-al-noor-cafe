import { ImageResponse } from "next/og";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const isAr = locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0908",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(201,164,92,0.22), transparent 45%), radial-gradient(circle at 80% 80%, rgba(201,164,92,0.16), transparent 45%)",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(201,164,92,0.35)",
            borderRadius: "4px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: "#c9a45c",
            }}
          >
            {isAr ? "دبي · جميرا" : "DUBAI · JUMEIRAH"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              color: "#f3ecdd",
              fontWeight: 700,
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.15,
            }}
          >
            {dict.meta.siteName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#cbc0a8",
              textAlign: "center",
            }}
          >
            {dict.meta.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
