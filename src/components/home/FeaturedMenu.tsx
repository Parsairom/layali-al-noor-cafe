import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { menuItems, featuredMenuItemIds } from "@/lib/data/menu";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MenuItemCard } from "@/components/menu/MenuItemCard";

export function FeaturedMenu({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = featuredMenuItemIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is (typeof menuItems)[number] => Boolean(item));

  return (
    <section className="relative bg-noir py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={dict.home.featuredMenu.eyebrow}
          title={dict.home.featuredMenu.title}
          subtitle={dict.home.featuredMenu.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.07} className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <MenuItemCard id={item.id} price={item.price} dict={dict} />
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <Button href={path(locale, "menu")} variant="outline">
            {dict.home.featuredMenu.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
