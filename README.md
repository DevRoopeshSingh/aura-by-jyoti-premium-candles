# Aura by Jyoti — Premium Candles

Handcrafted, eco-friendly candles built with React, Vite, TypeScript, Tailwind CSS, and shadcn-ui. This repository contains the storefront, product pages, cart context, and reusable UI components.

## Quick Start

Prerequisites: Node.js and npm (try nvm for easy setup).

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

## Scripts
- `npm run dev` — start the dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the built app locally
- `npm run lint` — run ESLint

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- shadcn-ui (Radix UI + utilities)

## Project Structure
- `src/pages` — route-level pages (Home, Shop, Product, Cart, etc.)
- `src/components` — shared components and `ui/` primitives
- `src/contexts` — app state (e.g., `CartContext`)
- `src/data` — product data
- `public/` — static assets (favicon, robots.txt)

## Build & Deploy
Build locally and serve the output from any static host or CDN:

```sh
npm run build
npm run preview
```

Configure your chosen host (Netlify, Vercel, Cloudflare, etc.) to serve the `dist/` directory.
