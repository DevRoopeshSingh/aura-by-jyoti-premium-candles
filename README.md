# Aura by Jyoti — Premium Candle Storefront

An artisan e-commerce experience celebrating Jyoti’s handcrafted candles. Built with React + Vite, TypeScript, Tailwind CSS, and shadcn-ui, the site blends storytelling, product discovery, and WhatsApp-based checkout into a cohesive brand journey.

---

## ⚙️ Tech Stack
- **Framework**: React 18 with React Router DOM
- **Build Tooling**: Vite (SWC) + TypeScript
- **Styling**: Tailwind CSS, custom design tokens, Tailwind Merge
- **UI Kit**: shadcn-ui (Radix primitives styled with Tailwind)
- **State Management**: React Context for the cart, React Query pre-configured
- **Icons & Feedback**: lucide-react, sonner toasts, shadcn toaster
- **Tooling**: ESLint, PostCSS, autoprefixer

---

## 🚀 Getting Started
Prerequisites: Node.js 18+ (install via `nvm` if possible) and npm.

```sh
git clone <YOUR_GIT_URL>
cd aura-by-jyoti-premium-candles-main
npm install
npm run dev
```

The dev server runs on `http://localhost:8080` (configured in `vite.config.ts`).

---

## 📦 NPM Scripts
| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build output to `dist/` |
| `npm run build:dev` | Development-mode build (useful for debugging) |
| `npm run preview` | Preview the built site locally |
| `npm run lint` | Run ESLint across the repo |

---

## 🗂️ Project Structure
```
src/
 ├─ assets/           Brand imagery (hero, product shots, portrait)
 ├─ components/       Shared UI: Navbar, Footer, ProductCard, shadcn primitives
 ├─ contexts/         App-wide state providers (CartContext)
 ├─ data/             Static data sources (`products.ts`, `blog.ts`)
 ├─ hooks/            Utility hooks (mobile detection, toast helpers)
 ├─ lib/              Reusable utilities (Tailwind class merger)
 ├─ pages/            Route-level views (Index, Shop, ProductDetail, Blog, etc.)
 ├─ App.tsx           Router + global providers (toasts, tooltips, cart)
 └─ main.tsx          React entry point (`createRoot`)
```

Config highlights:
- `tailwind.config.ts` — Tailwind theme extensions + shadcn preset
- `index.css` — Tailwind directives, custom color palette, gradients, shadows
- `vite.config.ts` — SWC React plugin + `@` alias
- `eslint.config.js` — lint rules and recommended presets
- `tsconfig*.json` — TypeScript compiler options

---

## 🌐 Routing & Page Overview
- `/` — **Home**: hero storytelling, feature highlights, featured products, newsletter CTA.
- `/shop` — **Catalog**: category filters, search via query params, sorting controls, graceful empty states.
- `/product/:id` — **Product Detail**: product story, trust badges, faux reviews, feature list, related products.
- `/cart` — **Cart**: quantity controls, price breakdown, WhatsApp checkout handoff.
- `/about` — **Meet Jyoti**: founder story, brand values, process milestones.
- `/contact` — **Contact & WhatsApp Form**: form submission opens WhatsApp with pre-filled message, static contact info blocks.
- `/faq` — **FAQs**: accordion-based answers, consistent WhatsApp CTA & contact form link.
- `/blog` — **Blog Index**: curated articles with publish date and reading time chips.
- `/blog/:id` — **Blog Detail**: structured sections, tips, quotes, reading progress bar, share button, key takeaways, related posts.
- `*` — **404**: simple not-found state with SPA navigation back home.

---

## 🛒 Products & Cart
- `src/data/products.ts` contains structured product metadata (category, scent, features, burn time).
- `CartContext` manages items in memory with add/remove/update APIs and toast notifications.
- Checkout is intentionally lightweight: “Checkout via WhatsApp” opens `wa.me` with an order summary directed to `+91 98765 43210`.

---

## ✨ Blog System
- `src/data/blog.ts` models each article with sections, tips, quotes, reading time, and takeaways.
- Blog index surfaces metadata for quick scanning.
- Blog detail page enhances reading flow with:
  - Scroll-progress indicator
  - Share/copy handling (native share API with clipboard fallback)
  - Highlighted excerpt + key takeaways
  - Related post recommendations

---

## 🎨 Design Language
- Palette, gradients, shadows, and transition tokens defined in `index.css`.
- Utility classes like `.gradient-warm`, `.shadow-elegant`, `.transition-smooth` keep styling consistent.
- Typography pairs Playfair Display (headlines) with Inter (body).

---

## 🔄 SPA & UX Enhancements
- Navbar search routes directly to `/shop?search=...` and resets cleanly from the catalog page.
- FAQ contact options use consistent numbers and React Router navigation.
- 404 “Return to Home” now leverages `<Link>` to avoid full reloads.
- Blog “Read More” entries map to actual detail routes.

---

## ✅ Quality Notes
- ESLint is configured (`npm run lint`) but currently flags upstream shadcn template issues (non-component exports, `require()` usage). Address these when updating the shadcn primitives.
- React Query is instantiated but unused—kept ready for future remote data fetching.
- No automated tests yet; Vitest + React Testing Library are the preferred stack when coverage becomes a priority.

---

## 📦 Build & Deployment
```sh
npm run build     # creates production assets in dist/
npm run preview   # serve the production build locally
```
Deploy the contents of `dist/` to your static host of choice (Vercel, Netlify, Cloudflare Pages, etc.).

---

## 🛠️ Future Ideas
- Persist cart contents with localStorage for session continuity.
- Fetch products/blog posts from a CMS or API using the existing React Query setup.
- Add Vitest-based unit/integration tests around cart logic and key pages.
- Replace WhatsApp checkout with a dedicated payment flow if business needs evolve.

---

Enjoy extending Aura by Jyoti—keep the craftsmanship front and center. 🌿🕯️

