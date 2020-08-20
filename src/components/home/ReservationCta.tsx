import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ReservationCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,92,0.14),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(201,164,92,0.12),transparent_45%)]"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
            {dict.home.reservationCta.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl leading-[1.15] text-cream sm:text-4xl md:text-5xl">
            {dict.home.reservationCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
            {dict.home.reservationCta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Button href={path(locale, "reservation")} variant="primary">
            {dict.home.reservationCta.button}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
