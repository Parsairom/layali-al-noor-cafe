import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Experience } from "@/components/home/Experience";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationHours } from "@/components/home/LocationHours";
import { ReservationCta } from "@/components/home/ReservationCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.tagline,
    description: dict.meta.defaultDescription,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Intro locale={locale} dict={dict} />
      <Experience dict={dict} />
      <FeaturedMenu locale={locale} dict={dict} />
      <Testimonials dict={dict} />
      <GalleryPreview locale={locale} dict={dict} />
      <LocationHours locale={locale} dict={dict} />
      <ReservationCta locale={locale} dict={dict} />
    </>
  );
}
