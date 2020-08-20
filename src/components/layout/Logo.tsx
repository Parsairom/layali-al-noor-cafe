import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { path } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";

export function Logo({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={path(locale, "home")}
      className={cn("group flex items-center gap-3", className)}
      aria-label="Layali Al Noor Café"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle cx="22" cy="22" r="21" stroke="currentColor" strokeOpacity="0.35" />
        <path
          d="M22 8c-4.5 3.2-7 7.8-7 12.6C15 27.4 18.6 33 22 36c3.4-3 7-8.6 7-15.4C29 15.8 26.5 11.2 22 8Z"
          fill="currentColor"
        />
        <path
          d="M13 26c1.8 4 5.2 7 9 8.4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg sm:text-xl tracking-[0.04em] text-gold-gradient">
          Layali Al Noor
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream-dim">
          Café · Dubai
        </span>
      </span>
    </Link>
  );
}
