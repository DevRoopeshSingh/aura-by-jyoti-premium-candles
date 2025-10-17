# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/`:
  - Pages: `src/pages` (route-level React components)
  - Components: `src/components` and `src/components/ui` (reusable UI)
  - State/contexts: `src/contexts`
  - Data/utilities: `src/data`, `src/lib`
  - Assets: `src/assets`; static files in `public/`
- Config: `vite.config.ts`, `tailwind.config.ts`, `eslint.config.js`, `tsconfig*.json`
- Import alias: use `@/*` (e.g., `import Button from "@/components/ui/button"`).

## Build, Test, and Development Commands
- `npm run dev` — start Vite dev server with HMR.
- `npm run build` — production build to `dist/`.
- `npm run build:dev` — development-mode build (useful for debugging prod-like output).
- `npm run preview` — serve the built app locally.
- `npm run lint` — run ESLint on the repo.

## Coding Style & Naming Conventions
- Language: React + TypeScript. Prefer explicit types for component props and exported functions.
- Indentation: 2 spaces; max line length per ESLint defaults.
- Naming: PascalCase for components (`ProductCard.tsx`), camelCase for variables/functions, SCREAMING_SNAKE_CASE for constants.
- Files: `.tsx` for React components/pages; `.ts` for utilities/hooks.
- Keep components small and composable; colocate styles with components (`index.css`, Tailwind utilities).

## Testing Guidelines
- No tests are present yet. When adding tests, prefer Vitest + React Testing Library.
- Name tests `*.test.ts(x)` and colocate next to the unit under test or in `src/__tests__`.
- Aim for coverage of pure utilities and critical UI interactions.

## Commit & Pull Request Guidelines
- Keep commits focused and descriptive (imperative mood): `feat: add product skeleton card`.
- Before opening a PR, run `npm run lint` and `npm run build`.
- PRs should include: clear description, linked issue (if any), and screenshots/GIFs for UI changes.
- Avoid unrelated refactors or formatting churn.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local`; expose only `VITE_*` vars to the client.
- Favor data in `src/data` over hardcoding in components.
- Check assets into `public/` for direct serving; import other images from `src/assets`.

## Agent-Specific Instructions
- Follow this guide’s structure and naming. Minimize changes outside the requested scope and keep imports using `@/*`.
