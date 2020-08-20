"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

export function LanguageSwitcher({
  locale,
  className,
  variant = "light",
}: {
  locale: Locale;
  className?: string;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border p-1 text-xs uppercase tracking-[0.2em]",
        variant === "light" ? "border-gold/30" : "border-noir/20",
        className
      )}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={swapLocale(pathname, code)}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors duration-300",
              active
                ? "bg-gold text-noir"
                : variant === "light"
                  ? "text-cream-dim hover:text-cream"
                  : "text-espresso-light hover:text-noir"
            )}
          >
            {code === "ar" ? "عربي" : "EN"}
          </Link>
        );
      })}
    </div>
  );
}
