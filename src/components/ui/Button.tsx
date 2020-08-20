import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-500 ease-out";

const variants = {
  primary:
    "bg-gold text-noir px-8 py-4 hover:bg-gold-soft shadow-[0_0_0_1px_rgba(201,164,92,0.4)] hover:shadow-[0_0_28px_rgba(201,164,92,0.35)]",
  outline:
    "border border-gold/50 text-cream px-8 py-4 hover:border-gold hover:bg-gold/10",
  ghost: "text-gold px-1 py-1 hover:text-gold-soft",
} as const;

type Variant = keyof typeof variants;

interface ButtonOwnProps {
  variant?: Variant;
  className?: string;
}

type ButtonAsLink = ButtonOwnProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = ButtonOwnProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        <span className="relative z-10">{props.children}</span>
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      <span className="relative z-10">{props.children}</span>
    </button>
  );
}
