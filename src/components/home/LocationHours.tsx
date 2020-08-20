import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { businessInfo } from "@/lib/data/business";
import { images } from "@/lib/data/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function LocationHours({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative bg-noir-soft py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col items-start gap-6 text-start">
          <Reveal>
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
              {dict.home.location.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl leading-[1.15] text-cream sm:text-4xl md:text-5xl">
              {dict.home.location.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-body text-base leading-relaxed text-cream-dim sm:text-lg">
              {dict.home.location.description}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex w-full flex-col gap-6 border-t border-line pt-8">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-gold/80">
                  {dict.home.location.addressTitle}
                </span>
                <span className="font-body text-sm text-cream-dim">
                  {businessInfo.address.line1}, {businessInfo.address.line2}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-gold/80">
                  {dict.home.location.hoursTitle}
                </span>
                <span className="font-body text-sm text-cream-dim">
                  {dict.days.saturday}–{dict.days.thursday}: 08:00–00:00
                </span>
                <span className="font-body text-sm text-cream-dim">{dict.days.friday}: 10:00–01:00</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <Button href={businessInfo.mapLink} variant="outline" target="_blank" rel="noopener noreferrer">
              {dict.home.location.cta}
            </Button>
          </Reveal>
        </div>

        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={images.homeLocation}
              alt="Dubai skyline near Jumeirah at dusk"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-6 -end-6 hidden h-40 w-40 border border-gold/40 sm:block"
          />
        </Reveal>
      </Container>
    </section>
  );
}
