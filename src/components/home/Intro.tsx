import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { images } from "@/lib/data/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Intro({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const stats = [
    { value: dict.home.intro.stat1Value, label: dict.home.intro.stat1Label },
    { value: dict.home.intro.stat2Value, label: dict.home.intro.stat2Label },
    { value: dict.home.intro.stat3Value, label: dict.home.intro.stat3Label },
  ];

  return (
    <section className="relative bg-noir py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={images.homeIntro}
              alt="Close detail of roasted coffee beans at Layali Al Noor"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -start-6 hidden h-40 w-40 border border-gold/40 sm:block"
          />
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-6 text-start md:order-2">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.home.intro.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl leading-[1.15] text-cream sm:text-4xl md:text-5xl">
              {dict.home.intro.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.home.intro.paragraph1}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.home.intro.paragraph2}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="grid w-full grid-cols-3 gap-4 border-t border-line pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-2xl text-gold sm:text-3xl">{stat.value}</span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-cream-dim sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.3}>
            <Button href={path(locale, "about")} variant="ghost" className="mt-2">
              {dict.home.intro.cta} {locale === "ar" ? "←" : "→"}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
