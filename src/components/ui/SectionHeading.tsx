import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15]",
            tone === "light" ? "text-cream" : "text-noir"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {align === "center" && (
        <Reveal delay={0.12}>
          <span className="ornament-divider w-full max-w-[220px]" aria-hidden="true" />
        </Reveal>
      )}
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl font-body text-base sm:text-lg leading-relaxed",
              tone === "light" ? "text-cream-dim" : "text-espresso-light"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
