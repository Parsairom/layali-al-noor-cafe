# Layali Al Noor Café

A fully bilingual (English / Arabic), production-ready marketing website for **Layali Al Noor Café** — a luxury Arabic coffeehouse in Jumeirah, Dubai. This was a real freelance commission: the client wanted a digital presence with the same polish as their physical space — reservations, a full digital menu, a photo gallery, and a bilingual RTL/LTR experience that feels like it belongs to a five-star hospitality brand, not a template with a coffee-shop skin on top.

**Live demo:** the client's production domain isn't publicly linked here — happy to walk through it live instead.

🇮🇷 نسخه فارسی این README رو [همین‌جا، پایین صفحه](#فارسی) بخون.

---

## Overview

Layali Al Noor — "the nights of light" — is a real café in Jumeirah that came to me wanting a web presence matching the ambition of the physical space: dark, gold-accented, cinematic, and equally at home in English and Arabic. The brief was short on specifics and long on vibe ("make it feel like walking into the majlis at night"), which meant most of the work was translating that feeling into an actual design system. What shipped is a modern, statically-optimized Next.js application with:

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

The visual language draws from the hospitality of the Arabian majlis filtered through the restraint of a contemporary five-star lounge: deep charcoal and espresso backgrounds, warm brass and gold accenting, generous whitespace, and slow, deliberate motion. Photography leans into candlelight, brass dallah service and architectural detail rather than generic stock imagery. The goal throughout was a site that could plausibly sit alongside the digital presence of a Dubai luxury hospitality group.

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

---

## فارسی

### داستان این پروژه چیه؟

این یه پروژه‌ی واقعیه، نه دمو یا نمونه‌کار فرضی. کافه **لیالی النور** یه کافه‌ی لاکچری عربیه تو جمیرا، دبی، که کارفرماش (یه کارفرمای عرب) اومد سراغم برای طراحی و ساخت وبسایتش. بریف اولش خیلی فنی نبود، بیشتر حس و حال بود: "می‌خوایم وبسایت همون حسی رو بده که وارد مجلس شبونه‌مون می‌شی" — طلایی، تاریک، آرومِ لاکچری. کار من این بود که این حس رو تبدیل کنم به یه دیزاین سیستم واقعی و یه سایت کامل که هم انگلیسی جواب بده هم عربی، هم راست‌به‌چپش درست از آب دربیاد نه فقط ترجمه‌ی چپ‌به‌راست.

دامنه‌ی اصلی و لینک لایو سایت رو اینجا نمی‌گذارم (مسائل مربوط به کارفرما)، ولی اگه بخواید می‌تونم لایو دمو رو نشونتون بدم.

### چی توش هست؟

- یه صفحه اصلی سینمایی: هیرو، معرفی برند، تجربه قهوه، منوی ویژه، نظر مشتری‌ها، پیش‌نمایش گالری، لوکیشن و ساعت کاری، دعوت به رزرو
- صفحه منو با دسته‌بندی (قهوه عربی، قهوه تخصصی، دسر، صبحانه، نوشیدنی مخصوص) و قیمت واقعی به درهم
- صفحه درباره ما با داستان برند و ارزش‌ها
- گالری با فیلتر دسته‌بندی + لایت‌باکس (کلیک می‌کنی، عکس بزرگ می‌شه، با دکمه بعدی/قبلی می‌گردی)
- فرم رزرو کامل با اعتبارسنجی واقعی (اسم، ایمیل، شماره، تاریخ، ساعت، تعداد نفرات) و یه پیام موفقیت شخصی‌سازی‌شده بعد از ثبت
- صفحه تماس با نقشه گوگل و راه‌های ارتباطی
- تمام سایت کامل دوزبانه‌ست و طرف عربیش صرفاً ترجمه نیست؛ واقعاً RTL کامله — چیدمان، فاصله‌گذاری، آیکون‌ها و فونت‌ها همه درست می‌چرخن سمت راست

### با چی ساخته شده؟

Next.js (با App Router) + TypeScript + Tailwind CSS v4 برای استایل، Framer Motion برای انیمیشن‌ها و افکت‌های اسکرول، آیکون‌ها از Lucide. فونت انگلیسی ترکیب Playfair Display و Jost، فونت عربی ترکیب Amiri و Cairo. هیچ CMS یا بک‌اندی لازم نیست — همه‌چیز خودکفاست و محتوا (ترجمه‌ها، منو، گالری) داخل خود کد مدیریت می‌شه؛ برای همینم دیپلویش تقریباً هیچ دردسری نداره.

### چطور اجراش کنم؟

```bash
npm install
npm run dev
```

بعدش برو رو `http://localhost:3000` — خودش بسته به زبان مرورگرت می‌فرسته رو `/en` یا `/ar`.

برای بیلد نهایی:

```bash
npm run build
npm run start
```

### ساختار پروژه دستته؟

هر صفحه زیر `src/app/[locale]/` هست (یعنی یه پوشه برای هر مسیر، مثل `menu`، `about`، `gallery`...). کامپوننت‌های قابل استفاده مجدد تو `src/components` دسته‌بندی شدن (layout، home، menu، gallery، reservation، ui). و نکته مهم: **متن‌های ترجمه‌شده از داده‌های ساختاری جدا هستن** — قیمت‌ها، عکس‌ها و دسته‌بندی‌ها تو `src/lib/data` هستن (زبان‌مستقل)، ولی خود متن‌ها (اسم آیتم منو، توضیحات، نظرات مشتری‌ها و...) تو `src/lib/i18n/dictionaries/en.json` و `ar.json` هستن. یعنی اگه بخوای یه آیتم منو اضافه کنی یا یه متن رو عوض کنی، دقیقاً می‌دونی کجا باید بری و لازم نیست منطق برنامه رو دست بزنی.

### مالکیت

این پروژه یه کار سفارشی واقعیه که برای کارفرمای کافه‌ی لیالی النور انجام شده. اسم برند، متن‌ها و رفرنس‌های تصویری تحت مجوز همین پروژه استفاده شدن و بدون اجازه قابل استفاده مجدد نیستن. کد و ساختار پروژه اینجا صرفاً به‌عنوان نمونه‌کار فنی به اشتراک گذاشته شده.
