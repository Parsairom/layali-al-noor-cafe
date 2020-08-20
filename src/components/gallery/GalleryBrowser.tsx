"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { galleryCategoryIds, galleryItems, type GalleryCategoryId } from "@/lib/data/gallery";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type FilterId = "all" | GalleryCategoryId;

export function GalleryBrowser({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter]
  );

  const caption = (id: string) => dict.galleryCaptions[id as keyof Dictionary["galleryCaptions"]];

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : locale === "ar" ? (i - 1 + filtered.length) % filtered.length : (i + 1) % filtered.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) => (i === null ? i : locale === "ar" ? (i + 1) % filtered.length : (i - 1 + filtered.length) % filtered.length));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, filtered.length, locale]);

  const filters: FilterId[] = ["all", ...galleryCategoryIds];

  return (
    <>
      <div className="sticky top-[64px] z-30 border-b border-line bg-noir/95 backdrop-blur-sm">
        <Container className="flex justify-center gap-2 overflow-x-auto py-4 no-scrollbar">
          {filters.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2 font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 sm:text-sm",
                filter === id
                  ? "border-gold bg-gold text-noir"
                  : "border-line text-cream-dim hover:border-gold/50 hover:text-cream"
              )}
            >
              {dict.galleryPage.filters[id]}
            </button>
          ))}
        </Container>
      </div>

      <Container className="py-16 sm:py-20">
        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const globalIndex = filtered.indexOf(item);
              return (
                <motion.button
                  key={item.id}
                  layout
                  type="button"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveIndex(globalIndex)}
                  className="group relative aspect-square overflow-hidden bg-noir-soft text-start"
                >
                  <Image
                    src={item.image}
                    alt={caption(item.id)}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-noir/0 to-noir/0 p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-xs text-cream">
                      <Expand size={14} className="text-gold" />
                      {caption(item.id)}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && filtered[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-4 sm:p-10"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute end-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream hover:border-gold hover:text-gold"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) =>
                  i === null ? i : locale === "ar" ? (i + 1) % filtered.length : (i - 1 + filtered.length) % filtered.length
                );
              }}
              aria-label="Previous"
              className="absolute start-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-cream hover:border-gold hover:text-gold sm:start-6"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) =>
                  i === null ? i : locale === "ar" ? (i - 1 + filtered.length) % filtered.length : (i + 1) % filtered.length
                );
              }}
              aria-label="Next"
              className="absolute end-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-cream hover:border-gold hover:text-gold sm:end-6"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={filtered[activeIndex].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-full max-w-4xl flex-col items-center gap-4"
            >
              <div className="relative aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-sm">
                <Image
                  src={filtered[activeIndex].image}
                  alt={caption(filtered[activeIndex].id)}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="text-center font-body text-sm text-cream-dim">{caption(filtered[activeIndex].id)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
