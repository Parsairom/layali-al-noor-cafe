"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { menuCategories, type MenuCategoryId } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

export function MenuTabs({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState<MenuCategoryId>(menuCategories[0].id);

  useEffect(() => {
    const sections = menuCategories
      .map((category) => document.getElementById(category.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id as MenuCategoryId);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[64px] z-30 border-b border-line bg-noir/95 backdrop-blur-sm">
      <div className="container-luxe flex gap-1 overflow-x-auto py-4 no-scrollbar sm:justify-center sm:gap-2">
        {menuCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2 font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 sm:text-sm",
              active === category.id
                ? "border-gold bg-gold text-noir"
                : "border-line text-cream-dim hover:border-gold/50 hover:text-cream"
            )}
          >
            {dict.menuPage.categories[category.id]}
          </a>
        ))}
      </div>
    </div>
  );
}
