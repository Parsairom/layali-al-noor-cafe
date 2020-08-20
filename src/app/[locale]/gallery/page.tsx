import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GalleryBrowser } from "@/components/gallery/GalleryBrowser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.gallery,
    description: dict.galleryPage.hero.subtitle,
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden bg-noir-soft py-24 sm:py-28">
        <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.galleryPage.hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-[1.15] text-cream sm:text-5xl md:text-6xl">
              {dict.galleryPage.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.galleryPage.hero.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <GalleryBrowser dict={dict} locale={locale} />

      <section className="relative bg-noir-soft py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-7 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{dict.galleryPage.cta.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg font-body text-base text-cream-dim">{dict.galleryPage.cta.subtitle}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <Button href={path(locale, "reservation")} variant="primary">
              {dict.galleryPage.cta.button}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
