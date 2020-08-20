import { Quote } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { testimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RatingStars } from "@/components/ui/RatingStars";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-noir-soft py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={dict.home.testimonials.eyebrow}
          title={dict.home.testimonials.title}
          subtitle={dict.home.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const t = dict.testimonials[testimonial.id as keyof Dictionary["testimonials"]];
            return (
              <Reveal key={testimonial.id} delay={(index % 3) * 0.08}>
                <div className="flex h-full flex-col gap-5 border border-line bg-noir p-8">
                  <Quote size={26} className="text-gold/40" strokeWidth={1.5} />
                  <p className="font-body text-sm leading-relaxed text-cream-dim">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-auto flex items-center gap-4 border-t border-line pt-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 font-display text-sm text-gold">
                      {testimonial.initials}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-base text-cream">{t.name}</span>
                      <span className="text-xs uppercase tracking-wider text-cream-dim">{t.role}</span>
                    </div>
                    <RatingStars rating={testimonial.rating} className="ms-auto" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
