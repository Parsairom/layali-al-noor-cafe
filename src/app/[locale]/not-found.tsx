import Link from "next/link";
import { defaultLocale } from "@/lib/i18n/config";
import { path } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-7xl text-gold-gradient sm:text-8xl">404</span>
        <h1 className="font-display text-2xl text-cream sm:text-3xl">Page Not Found</h1>
        <p className="max-w-md font-body text-sm leading-relaxed text-cream-dim">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          href={path(defaultLocale, "home")}
          className="mt-2 border border-gold/50 px-8 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:bg-gold/10"
        >
          Return Home
        </Link>
      </Container>
    </section>
  );
}
