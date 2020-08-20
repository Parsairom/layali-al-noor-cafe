import type { Metadata } from "next";
import Image from "next/image";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { images } from "@/lib/data/images";
import { menuCategories } from "@/lib/data/menu";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { MenuCategorySection } from "@/components/menu/MenuCategorySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.menu,
    description: dict.menuPage.hero.subtitle,
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative flex h-[56svh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image
          src={images.menuHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/60 to-noir" />
        <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.menuPage.hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-[1.15] text-cream sm:text-5xl md:text-6xl">
              {dict.menuPage.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.menuPage.hero.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <MenuTabs dict={dict} />

      <div>
        {menuCategories.map((category) => (
          <MenuCategorySection key={category.id} category={category} dict={dict} />
        ))}
      </div>

      <Container className="flex flex-col items-center gap-3 py-12 text-center">
        <p className="font-body text-sm text-cream-dim">{dict.menuPage.priceNote}</p>
        <p className="font-body text-xs text-cream-dim/70">{dict.menuPage.dietaryNote}</p>
      </Container>

      <section className="relative bg-noir-soft py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-7 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{dict.menuPage.cta.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg font-body text-base text-cream-dim">{dict.menuPage.cta.subtitle}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <Button href={path(locale, "reservation")} variant="primary">
              {dict.menuPage.cta.button}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
