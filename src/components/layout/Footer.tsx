import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone, Music2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { path, type RouteKey } from "@/lib/i18n/paths";
import { businessInfo } from "@/lib/data/business";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const links: RouteKey[] = ["home", "menu", "about", "gallery", "reservation", "contact"];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-noir-soft">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-4 flex flex-col gap-5">
          <Logo locale={locale} />
          <p className="max-w-xs font-body text-sm leading-relaxed text-cream-dim">
            {dict.footer.description}
          </p>
          <div className="flex items-center gap-4 pt-1">
            <a
              href={businessInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={16} />
            </a>
            <a
              href={businessInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook size={16} />
            </a>
            <a
              href={businessInfo.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
            >
              <Music2 size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            {dict.footer.quickLinksTitle}
          </h3>
          <ul className="flex flex-col gap-3">
            {links.map((key) => (
              <li key={key}>
                <Link
                  href={path(locale, key)}
                  className="link-underline font-body text-sm text-cream-dim hover:text-cream transition-colors"
                >
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            {dict.footer.contactTitle}
          </h3>
          <div className="flex items-start gap-3 text-sm text-cream-dim">
            <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
            <span>
              {businessInfo.address.line1}
              <br />
              {businessInfo.address.line2}
            </span>
          </div>
          <a
            href={businessInfo.phoneHref}
            className="flex items-center gap-3 text-sm text-cream-dim hover:text-cream transition-colors"
          >
            <Phone size={16} className="shrink-0 text-gold" />
            <span dir="ltr">{businessInfo.phone}</span>
          </a>
          <a
            href={businessInfo.emailHref}
            className="flex items-center gap-3 text-sm text-cream-dim hover:text-cream transition-colors"
          >
            <Mail size={16} className="shrink-0 text-gold" />
            <span dir="ltr">{businessInfo.email}</span>
          </a>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            {dict.footer.hoursTitle}
          </h3>
          <div className="flex flex-col gap-1.5 text-sm text-cream-dim">
            <div className="flex items-center justify-between gap-4">
              <span>
                {dict.days.saturday} – {dict.days.thursday}
              </span>
              <span dir="ltr">08:00 – 00:00</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>{dict.days.friday}</span>
              <span dir="ltr">10:00 – 01:00</span>
            </div>
          </div>
          <p className="text-xs text-cream-dim/70">{dict.footer.hoursNote}</p>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-cream-dim/70">
            © {year} {dict.meta.siteName}. {dict.footer.rights}
          </p>
          <p className="text-xs text-cream-dim/70">{dict.footer.craftedLine}</p>
        </Container>
      </div>
    </footer>
  );
}
