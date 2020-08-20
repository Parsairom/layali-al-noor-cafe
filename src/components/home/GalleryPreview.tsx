import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { galleryItems } from "@/lib/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const previewIds = ["interior-1", "coffee-3", "desserts-1", "events-2", "interior-3", "coffee-1"];

export function GalleryPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = previewIds
    .map((id) => galleryItems.find((item) => item.id === id))
    .filter((item): item is (typeof galleryItems)[number] => Boolean(item));

  return (
    <section className="relative bg-noir py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={dict.home.gallery.eyebrow}
          title={dict.home.gallery.title}
          subtitle={dict.home.gallery.subtitle}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.06}
              className={index === 0 || index === 3 ? "md:row-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden bg-noir-soft ${
                  index === 0 || index === 3 ? "aspect-[3/4] md:h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={item.image}
                  alt={dict.galleryCaptions[item.id as keyof Dictionary["galleryCaptions"]]}
                  fill
                  sizes="(min-width: 768px) 32vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-noir/0 transition-colors duration-500 group-hover:bg-noir/30" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <Button href={path(locale, "gallery")} variant="outline">
            {dict.home.gallery.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
