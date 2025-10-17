# Aura by Jyoti — Premium Candle Storefront

An artisan e-commerce experience celebrating Jyoti’s handcrafted candles. The site now runs on **Next.js 14 (App Router)** with TypeScript, Tailwind CSS, and shadcn-ui to blend storytelling, product discovery, and WhatsApp-based ordering into a cohesive brand journey.

---

## ⚙️ Tech Stack
- **Framework**: Next.js 14 (App Router) + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens, Tailwind Merge
- **UI Kit**: shadcn-ui (Radix UI primitives)
- **State**: React Context (cart)
- **Icons & Feedback**: lucide-react, sonner toasts, shadcn toaster
- **Fonts**: Playfair Display & Inter via `next/font`
- **Tooling**: ESLint (`core-web-vitals`), PostCSS, autoprefixer

---

## 🚀 Getting Started
Prerequisites: Node.js 18+ (install via `nvm` if possible) and npm.

```sh
git clone <YOUR_GIT_URL>
cd aura-by-jyoti-premium-candles-main
npm install
npm run dev
```

The dev server runs on `http://localhost:3000` by default.

---

## 📦 NPM Scripts
| Script | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with HMR |
| `npm run build` | Create a production build in `.next/` |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the repo |

---

## 🗂️ Project Structure
```
src/
 ├─ app/                  App Router entrypoints, layouts, route groups
 ├─ assets/               Brand imagery (hero, product shots, portrait)
 ├─ components/
 │   ├─ ui/               shadcn primitives
 │   ├─ cart/             Cart-specific client components
 │   ├─ product/          Product detail UI
 │   ├─ blog/             Blog detail UI
 │   ├─ shop/             Catalog filters and grid
 │   └─ Providers.tsx     App-level providers (tooltips, cart, toasts)
 ├─ contexts/             Global state (CartContext)
 ├─ data/                 Static data (`products.ts`, `blog.ts`)
 ├─ hooks/                Utility hooks (mobile detection, toast helpers)
 ├─ lib/                  Reusable utilities (`cn` class merger)
 └─ app/globals.css       Tailwind directives, tokens, gradients, shadows
```

Config highlights:
- `next.config.mjs` — Next.js configuration
- `tailwind.config.ts` — Tailwind theme extensions + shadcn preset
- `tsconfig.json` — TypeScript compiler settings
- `eslint.config.js` — ESLint rules (includes Next core-web-vitals)

---

## 🌐 Routing & Pages
- `/` — **Home**: preloaded hero image, feature highlights, featured products, newsletter CTA.
- `/shop` — **Catalog**: query-aware filters (Suspense-wrapped), client sorting, server-rendered product data.
- `/product/[id]` — **Product Detail**: statically generated pages with trust badges, faux reviews, related products, add-to-cart.
- `/cart` — **Cart**: client-managed quantities, totals, WhatsApp checkout.
- `/about` — **Meet Jyoti**: founder story, brand values, process milestones.
- `/contact` — **Contact & WhatsApp Form**: WhatsApp-powered outreach plus direct contact info.
- `/faq` — **FAQs**: accordion answers with consistent WhatsApp CTA and contact link.
- `/blog` — **Blog Index**: SSG listing with publish date & reading time chips.
- `/blog/[id]` — **Blog Detail**: structured sections, tips, quotes, reading progress bar, share button, takeaways, related posts.
- `not-found.tsx` — custom 404 experience.

---

## 🛒 Commerce & Data
- `src/data/products.ts` stores structured product metadata (category, scent, burn time, features).
- `CartContext` manages items in-memory (add/remove/update) with toast feedback.
- Checkout is WhatsApp-based (`wa.me/919876543210`) for lightweight order capture.

---

## ✨ Blog System
- `src/data/blog.ts` models articles with sections, tips, quotes, reading time, takeaways.
- Blog index is SSG; detail pages offer:
  - Scroll-progress indicator
  - Native share API with clipboard fallback
  - Highlighted excerpt & key takeaways
  - Related post recommendations

---

## 🎨 Design Language
- Color palette, gradients, shadows, and transition tokens live in `globals.css`.
- Utility helpers (`.gradient-warm`, `.shadow-elegant`, `.transition-smooth`) ensure consistent theming.
- Typography uses `next/font` to inline Playfair Display (headlines) and Inter (UI copy) via CSS variables referenced in Tailwind.

---

## 🔄 UX & Performance Enhancements
- Navbar search hydrates to `/shop?search=…` without full reloads.
- Product cards are server components; the add-to-cart CTA is a tiny client component.
- Hero imagery uses `next/image` with `priority` + blur placeholder for better Largest Contentful Paint (LCP).
- Fonts load via `next/font` (display swap) to reduce blocking resources.
- React Query was removed to shrink the JavaScript bundle; only necessary client components ship to the browser.

---

## ✅ Quality Notes
- `npm run lint` enforces Next.js core-web-vitals and TypeScript best practices.
- `npm run build` validates type safety and static generation (SSG for catalog/blog).
- No automated tests yet—recommend Vitest + React Testing Library (unit) and Playwright (end-to-end) as future additions.

---

## 📦 Build & Deployment
```sh
npm run build   # produce the production bundle
npm start       # run the built app locally
```
Deploy to Vercel (ideal for Next.js) or any Node host that can execute `next start`. For optimal image performance in production, install the optional `sharp` dependency (`npm i sharp`).

---

## 🛠️ Future Ideas
- Persist cart contents with `localStorage` or cookies for session continuity.
- Fetch products and blog content from a headless CMS or database (use Next.js Route Handlers + Prisma or REST APIs).
- Add Vitest/Playwright test coverage for cart flows and WhatsApp checkout.
- Expand checkout beyond WhatsApp (Stripe Checkout, Razorpay, etc.) if business needs evolve.

---

Enjoy extending Aura by Jyoti—keep the craftsmanship front and center. 🌿🕯️

