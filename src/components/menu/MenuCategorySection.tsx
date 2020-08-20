import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { MenuCategory } from "@/lib/data/menu";
import { menuItems } from "@/lib/data/menu";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MenuItemCard } from "./MenuItemCard";

export function MenuCategorySection({ category, dict }: { category: MenuCategory; dict: Dictionary }) {
  const items = category.itemIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is (typeof menuItems)[number] => Boolean(item));

  return (
    <section id={category.id} className="scroll-mt-36 border-b border-line py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_1.4fr]">
          <Reveal className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
            <Image
              src={category.image}
              alt={dict.menuPage.categories[category.id]}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
          </Reveal>
          <div className="flex flex-col items-start gap-4 text-start">
            <Reveal>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
                {dict.menuPage.categories[category.id]}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl text-cream sm:text-4xl">
                {dict.menuPage.categories[category.id]}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-base leading-relaxed text-cream-dim">
                {dict.menuPage.categoryDescriptions[category.id]}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.06}>
              <MenuItemCard id={item.id} price={item.price} dict={dict} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
