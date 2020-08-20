import type { Metadata } from "next";
import { Info } from "lucide-react";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { businessInfo } from "@/lib/data/business";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ReservationForm } from "@/components/reservation/ReservationForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.reservation,
    description: dict.reservationPage.hero.subtitle,
  };
}

export default async function ReservationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  const infoItems = [
    { title: dict.reservationPage.info.item1Title, text: dict.reservationPage.info.item1Text },
    { title: dict.reservationPage.info.item2Title, text: dict.reservationPage.info.item2Text },
    { title: dict.reservationPage.info.item3Title, text: dict.reservationPage.info.item3Text },
    { title: dict.reservationPage.info.item4Title, text: dict.reservationPage.info.item4Text },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-noir-soft py-24 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,92,0.12),transparent_55%)]"
        />
        <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.reservationPage.hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-[1.15] text-cream sm:text-5xl md:text-6xl">
              {dict.reservationPage.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.reservationPage.hero.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-noir py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <ReservationForm locale={locale} dict={dict} />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <div className="border border-line bg-noir-soft p-7 sm:p-8">
              <h3 className="mb-6 font-display text-xl text-cream">{dict.reservationPage.info.title}</h3>
              <div className="flex flex-col gap-5">
                {infoItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Info size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                    <div className="flex flex-col gap-1">
                      <span className="font-body text-sm text-cream">{item.title}</span>
                      <span className="font-body text-xs leading-relaxed text-cream-dim">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 border-s-2 border-gold/40 ps-5">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-gold/80">
                {dict.contactPage.info.phoneTitle}
              </span>
              <a href={businessInfo.phoneHref} dir="ltr" className="font-display text-lg text-cream hover:text-gold">
                {businessInfo.phone}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
