import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, ChefHat, Gem, Leaf } from "lucide-react";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { images } from "@/lib/data/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.about,
    description: dict.aboutPage.hero.subtitle,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  const values = [
    { icon: Sparkles, title: dict.aboutPage.values.value1Title, text: dict.aboutPage.values.value1Description },
    { icon: ChefHat, title: dict.aboutPage.values.value2Title, text: dict.aboutPage.values.value2Description },
    { icon: Gem, title: dict.aboutPage.values.value3Title, text: dict.aboutPage.values.value3Description },
    { icon: Leaf, title: dict.aboutPage.values.value4Title, text: dict.aboutPage.values.value4Description },
  ];

  return (
    <>
      <section className="relative flex h-[56svh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image src={images.aboutHero} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/60 to-noir" />
        <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.aboutPage.hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-[1.15] text-cream sm:text-5xl md:text-6xl">
              {dict.aboutPage.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.aboutPage.hero.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-noir py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col items-start gap-6 text-start">
            <Reveal>
              <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
                {dict.aboutPage.story.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl leading-[1.15] text-cream sm:text-4xl">
                {dict.aboutPage.story.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-base leading-relaxed text-cream-dim">
                {dict.aboutPage.story.paragraph1}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-body text-base leading-relaxed text-cream-dim">
                {dict.aboutPage.story.paragraph2}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src={images.aboutStory1}
                alt="Macro detail of Arabic coffee beans"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-body text-base leading-relaxed text-cream-dim">
                {dict.aboutPage.story.paragraph3}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-body text-base leading-relaxed text-cream-dim">
                {dict.aboutPage.story.paragraph4}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="relative h-64 w-full overflow-hidden sm:h-80">
        <Image src={images.aboutDivider} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-noir/70" />
      </div>

      <section className="bg-noir-soft py-24 sm:py-32">
        <Container className="flex flex-col gap-16">
          <SectionHeading eyebrow={dict.aboutPage.values.eyebrow} title={dict.aboutPage.values.title} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="flex h-full flex-col items-center gap-4 border border-line bg-noir p-8 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <value.icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-lg text-cream">{value.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-cream-dim">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-noir py-24 sm:py-32">
        <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={images.aboutStory2}
              alt="Dubai marina waterfront"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <div className="flex flex-col items-start gap-6 text-start">
            <Reveal>
              <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
                {dict.aboutPage.philosophy.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl leading-[1.15] text-cream sm:text-4xl">
                {dict.aboutPage.philosophy.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-base leading-relaxed text-cream-dim">
                {dict.aboutPage.philosophy.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote className="border-s-2 border-gold ps-6">
                <p className="font-display text-xl italic leading-relaxed text-gold-soft sm:text-2xl">
                  &ldquo;{dict.aboutPage.philosophy.quote}&rdquo;
                </p>
                <cite className="mt-3 block font-body text-xs uppercase tracking-[0.2em] text-cream-dim not-italic">
                  {dict.aboutPage.philosophy.quoteAuthor}
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative bg-noir-soft py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-7 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{dict.aboutPage.cta.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg font-body text-base text-cream-dim">{dict.aboutPage.cta.subtitle}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <Button href={path(locale, "reservation")} variant="primary">
              {dict.aboutPage.cta.button}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
