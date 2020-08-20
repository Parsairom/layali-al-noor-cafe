"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { path } from "@/lib/i18n/paths";
import { images } from "@/lib/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.homeHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/55 to-noir" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/40" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-7 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-xs sm:text-sm uppercase tracking-[0.5em] text-gold"
        >
          {dict.home.hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl leading-[1.15] text-cream sm:text-6xl md:text-7xl"
        >
          <span className="block">{dict.home.hero.titleLine1}</span>
          <span className="block text-gold-gradient">{dict.home.hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg"
        >
          {dict.home.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href={path(locale, "reservation")} variant="primary">
            {dict.home.hero.ctaPrimary}
          </Button>
          <Button href={path(locale, "menu")} variant="outline">
            {dict.home.hero.ctaSecondary}
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-dim"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">{dict.home.hero.scrollHint}</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}
