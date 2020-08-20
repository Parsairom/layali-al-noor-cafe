import { Coffee, Flame, MoonStar, HandHeart } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience({ dict }: { dict: Dictionary }) {
  const features = [
    { icon: Coffee, title: dict.home.experience.feature1Title, text: dict.home.experience.feature1Description },
    { icon: Flame, title: dict.home.experience.feature2Title, text: dict.home.experience.feature2Description },
    { icon: MoonStar, title: dict.home.experience.feature3Title, text: dict.home.experience.feature3Description },
    { icon: HandHeart, title: dict.home.experience.feature4Title, text: dict.home.experience.feature4Description },
  ];

  return (
    <section className="relative bg-noir-soft py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={dict.home.experience.eyebrow}
          title={dict.home.experience.title}
          subtitle={dict.home.experience.subtitle}
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08} className="h-full">
              <div className="group flex h-full flex-col items-start gap-5 bg-noir-soft p-8 transition-colors duration-500 hover:bg-noir-elevated">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold/10">
                  <feature.icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-xl text-cream">{feature.title}</h3>
                <p className="font-body text-sm leading-relaxed text-cream-dim">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
