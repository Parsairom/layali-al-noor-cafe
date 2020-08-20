# Layali Al Noor Café

A fully bilingual (English / Arabic), production-ready marketing website for **Layali Al Noor Café** — a luxury Arabic coffeehouse concept in Jumeirah, Dubai. Built as a complete digital presence for a five-star hospitality brand: reservations, a full digital menu, a photo gallery, and a bilingual RTL/LTR experience with the polish expected of a boutique hotel or Michelin-listed restaurant.

**Live demo:** _add your deployment URL here_

---

## Overview

Layali Al Noor — "the nights of light" — needed a web presence that matched the ambition of the physical space: dark, gold-accented, cinematic, and equally at home in English and Arabic. This project delivers that as a modern, statically-optimized Next.js application with:

- A cinematic home page (hero, brand story, signature experience, featured menu, guest testimonials, gallery preview, location & hours, reservation call-to-action)
- A categorized, filterable digital menu with real AED pricing
- A brand story and values page
- A filterable photo gallery with a full-screen lightbox
- A validated reservation form with a polished confirmation flow
- A contact page with an embedded map and direct booking channels
- Full Arabic localization with native right-to-left layout mirroring — not just translated strings, but a genuinely RTL-aware interface

## Features

- **True bilingual routing** — `/en` and `/ar` locale segments, automatic browser-language detection on first visit, and a persistent language preference
- **Native RTL support** — layout direction, spacing, iconography and typography all mirror correctly in Arabic, powered by CSS logical properties rather than hard-coded left/right values
- **Distinct typography per language** — a classic display serif paired with a modern sans for English; a calligraphic Arabic serif paired with a contemporary Arabic sans for Arabic
- **Motion & micro-interactions** — scroll-triggered reveals, hover states, an animated mobile navigation drawer and a gallery lightbox, all built with performance and reduced-motion accessibility in mind
- **Structured, type-safe content** — menu items, gallery entries, testimonials and business details are modeled as structured data and merged with locale dictionaries at render time, so content and translation never drift apart
- **SEO-complete** — per-locale metadata, Open Graph image generation, JSON-LD structured data for a restaurant/café listing, an auto-generated sitemap with language alternates, and `robots.txt`
- **Fully responsive** — designed mobile-first and refined up through large desktop breakpoints
- **Accessible by default** — semantic landmarks, labeled form controls, visible focus states, and `prefers-reduced-motion` support

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Animation | [Framer Motion](https://motion.dev) |
| Icons | [Lucide](https://lucide.dev) |
| Fonts | Playfair Display, Jost, Amiri, Cairo — via `next/font` |
| Internationalization | Custom lightweight i18n (locale-segmented routing, dictionary-based translations) |

No UI kit, CMS, or backend service is required to run the project — it is entirely self-contained.

## Design Concept

The visual language draws from the hospitality of the Arabian majlis filtered through the restraint of a contemporary five-star lounge: deep charcoal and espresso backgrounds, warm brass and gold accenting, generous whitespace, and slow, deliberate motion. Photography leans into candlelight, brass dallah service and architectural detail rather than generic stock imagery. The goal throughout was a site that could plausibly sit alongside the digital presence of a Dubai luxury hospitality group — not a template with a coffee-shop skin.

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm (or your package manager of choice)

### Installation

```bash
npm install
```

### Environment Variables

Copy the example environment file and adjust as needed:

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The canonical public URL of the deployment, used for metadata, the sitemap and Open Graph tags |

### Local Development

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000) and will redirect automatically to `/en` or `/ar` based on your browser's language settings.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/                 # All localized routes live under this segment
│   │   ├── about/                # Brand story page
│   │   ├── contact/               # Contact & map page
│   │   ├── gallery/               # Filterable photo gallery
│   │   ├── menu/                  # Digital menu
│   │   ├── reservation/           # Reservation form
│   │   ├── layout.tsx             # Locale-aware root layout (fonts, metadata, JSON-LD)
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.tsx    # Dynamically generated per-locale OG image
│   │   └── page.tsx               # Home page
│   ├── globals.css                # Design tokens & global styles (Tailwind v4 theme)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── gallery/                   # Gallery grid + lightbox
│   ├── home/                      # Home page sections
│   ├── layout/                    # Header, footer, language switcher, logo
│   ├── menu/                      # Menu tabs, category sections, item cards
│   ├── reservation/                # Reservation form
│   └── ui/                         # Shared primitives (buttons, containers, reveal animation…)
├── lib/
│   ├── data/                      # Structural content (menu items, gallery, testimonials, business info)
│   └── i18n/                      # Locale config, dictionary loader, route helpers
│       └── dictionaries/          # en.json / ar.json — all translated copy
└── proxy.ts                       # Locale detection & redirect (Next.js Proxy)
```

Content is deliberately split into two layers: **structural data** (prices, images, categories, ratings — language-agnostic) under `lib/data`, and **translated copy** under `lib/i18n/dictionaries`. Pages and components merge the two at render time by a shared identifier, so adding a new menu item or gallery photo never requires touching translation logic, and updating copy never requires touching layout code.

## Future Enhancements

- Wire the reservation form to a real booking backend or email/CRM integration
- Add a CMS layer (e.g. a headless CMS) for the menu and gallery so non-technical staff can update content
- Add automated visual regression and accessibility test coverage
- Add a third language (e.g. Russian or French) to serve Dubai's broader tourist demographic
- Integrate a live table-availability calendar into the reservation flow

## License

This project is proprietary and was developed as a bespoke commission for Layali Al Noor Café. All brand names, copy and imagery references are used under license for this project and may not be reused without permission.
