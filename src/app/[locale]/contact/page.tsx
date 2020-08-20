import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail, MessageCircle, Instagram, Facebook, Music2 } from "lucide-react";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { businessInfo } from "@/lib/data/business";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.contact,
    description: dict.contactPage.hero.subtitle,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  const cards = [
    {
      icon: MapPin,
      title: dict.contactPage.info.addressTitle,
      lines: [businessInfo.address.line1, businessInfo.address.line2],
      href: businessInfo.mapLink,
      dir: undefined as "ltr" | undefined,
    },
    {
      icon: Clock,
      title: dict.contactPage.info.hoursTitle,
      lines: [`${dict.days.saturday}–${dict.days.thursday}: 08:00–00:00`, `${dict.days.friday}: 10:00–01:00`],
    },
    {
      icon: Phone,
      title: dict.contactPage.info.phoneTitle,
      lines: [businessInfo.phone],
      href: businessInfo.phoneHref,
      dir: "ltr" as const,
    },
    {
      icon: MessageCircle,
      title: dict.contactPage.info.whatsappTitle,
      lines: [businessInfo.whatsapp],
      href: businessInfo.whatsappHref,
      dir: "ltr" as const,
    },
    {
      icon: Mail,
      title: dict.contactPage.info.emailTitle,
      lines: [businessInfo.email],
      href: businessInfo.emailHref,
      dir: "ltr" as const,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-noir-soft py-24 sm:py-28">
        <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.contactPage.hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-[1.15] text-cream sm:text-5xl md:text-6xl">
              {dict.contactPage.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.contactPage.hero.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-noir py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => {
            const content = (
              <div className="flex h-full flex-col items-start gap-4 border border-line bg-noir-soft p-7 transition-colors duration-500 hover:border-gold/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <card.icon size={18} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg text-cream">{card.title}</h3>
                <div dir={card.dir} className="flex flex-col gap-0.5 font-body text-sm text-cream-dim">
                  {card.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            );
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                {card.href ? (
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </Container>
      </section>

      <section className="bg-noir-soft py-4">
        <Container className="flex items-center justify-center gap-5 pb-16">
          <a
            href={businessInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram size={16} />
          </a>
          <a
            href={businessInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
          >
            <Facebook size={16} />
          </a>
          <a
            href={businessInfo.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
          >
            <Music2 size={16} />
          </a>
        </Container>
      </section>

      <section className="bg-noir-soft pb-24 sm:pb-32">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2 className="text-center font-display text-2xl text-cream sm:text-3xl">
              {dict.contactPage.mapTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="aspect-[16/8] w-full overflow-hidden rounded-sm border border-line grayscale-[35%] contrast-[1.1] sm:aspect-[16/6]">
              <iframe
                title={dict.contactPage.mapTitle}
                src={businessInfo.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-espresso py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl text-cream sm:text-3xl">{dict.contactPage.events.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg font-body text-base text-cream-dim">{dict.contactPage.events.text}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <Button href={businessInfo.emailHref} variant="primary">
              {dict.contactPage.events.cta}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
