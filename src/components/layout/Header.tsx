"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { path, type RouteKey } from "@/lib/i18n/paths";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navOrder: RouteKey[] = ["home", "menu", "about", "gallery", "contact"];

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-noir/90 backdrop-blur-md border-b border-line py-3"
          : "bg-gradient-to-b from-noir/70 to-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Logo locale={locale} className="text-gold" />

        <nav className="hidden lg:flex items-center gap-9">
          {navOrder.map((key) => {
            const href = path(locale, key);
            const isActive = pathname === href || (key !== "home" && pathname?.startsWith(href));
            return (
              <Link
                key={key}
                href={href}
                className={`link-underline font-body text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-cream-dim hover:text-cream"
                }`}
              >
                {dict.nav[key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher locale={locale} />
          <Button href={path(locale, "reservation")} variant="primary" className="text-[11px] px-6 py-3">
            {dict.nav.reserveButton}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-line bg-noir"
          >
            <Container className="flex flex-col gap-1 py-6">
              {[...navOrder, "reservation" as RouteKey].map((key) => (
                <Link
                  key={key}
                  href={path(locale, key)}
                  className="py-3 border-b border-line/60 font-display text-xl text-cream hover:text-gold transition-colors"
                >
                  {dict.nav[key]}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-6">
                <LanguageSwitcher locale={locale} />
                <Button href={path(locale, "reservation")} variant="primary" className="text-[11px] px-6 py-3">
                  {dict.nav.reserveButton}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
