import type { Metadata, Viewport } from "next";
import { Playfair_Display, Jost, Amiri, Cairo } from "next/font/google";
import "../globals.css";
import { locales, isValidLocale, getDirection, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { businessInfo } from "@/lib/data/business";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://layalialnoor.ae";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    keywords: [
      "Arabic coffee Dubai",
      "luxury café Dubai",
      "Jumeirah coffee shop",
      "specialty coffee UAE",
      "Dubai reservation",
      "قهوة عربية دبي",
      "مقهى فاخر دبي",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      url: `${siteUrl}/${locale}`,
      siteName: dict.meta.siteName,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
    },
    icons: {
      icon: "/favicon.svg",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const dir = getDirection(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://layalialnoor.ae";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: businessInfo.name,
    image: `${siteUrl}/${locale}/opengraph-image`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    priceRange: "AED 24 - AED 58",
    servesCuisine: ["Arabic", "Middle Eastern", "Coffee House"],
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.line1,
      addressLocality: "Dubai",
      addressRegion: "Jumeirah",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng,
    },
    openingHoursSpecification: businessInfo.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day.charAt(0).toUpperCase() + h.day.slice(1)}`,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: Object.values(businessInfo.social),
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${jost.variable} ${amiri.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-noir text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
