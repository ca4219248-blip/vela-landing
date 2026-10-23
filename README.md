# Vela — SaaS Landing Page

A premium, dark-theme SaaS landing page for **Vela**, a fictional AI-native product analytics
platform. Built with React, TypeScript, Tailwind CSS and Framer Motion, with a hand-rolled
shadcn/ui-style component system.

> Product intelligence, on autopilot.

---

## ✨ Highlights

- **Dark, premium visual language** — deep blue-tinted canvas, layered aurora gradients, frosted
  glass surfaces and hairline gradient borders.
- **Animated hero** — staggered headline entrance, an animated product dashboard mock-up with
  growing bars, and floating insight chips.
- **Bento feature grid** — an asymmetric grid with mini in-card visuals (an SVG area chart, an AI
  chat exchange, an integration matrix).
- **Scroll choreography** — `whileInView` reveals, a stagger system and count-up statistics that
  animate once they enter the viewport.
- **Micro-interactions everywhere** — gradient buttons with an animated sheen, card lift-on-hover,
  a navbar that frosts and condenses on scroll, and an animated accordion.
- **Fully responsive** — mobile-first layouts tuned for phone, tablet and desktop.
- **Accessible** — semantic landmarks, a skip link, visible focus rings, ARIA-wired controls, and
  full `prefers-reduced-motion` support.
- **Fast** — static output, code-split vendor chunks, no runtime CSS-in-JS, and zero web fonts
  blocking first paint (fonts load with `display=swap`).

---

## 🧱 Tech Stack

| Concern        | Choice                                        |
| -------------- | --------------------------------------------- |
| Framework      | React 18 + TypeScript                         |
| Build tool     | Vite 5                                        |
| Styling        | Tailwind CSS 3.4 (custom design tokens)       |
| Animation      | Framer Motion 11                              |
| Components     | shadcn/ui-style primitives over Radix UI      |
| Icons          | lucide-react                                  |
| Variants       | class-variance-authority + tailwind-merge     |

---

## 🚀 Getting Started

Requires **Node 18+** (Node 20 recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build → ./dist
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Type-check only
npm run typecheck
```

---

## 📁 Project Structure

```
vela-landing/
├── index.html                  # Document shell, meta tags, font loading
├── public/
│   ├── favicon.svg             # Gradient brand mark
│   └── .nojekyll               # Keeps GitHub Pages from running Jekyll
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Page composition + skip link
│   ├── index.css               # Tailwind layers, design utilities, base styles
│   ├── lib/
│   │   ├── utils.ts            # `cn()` class-merge helper
│   │   └── content.ts          # All copy/data for the page (single source of truth)
│   ├── hooks/
│   │   ├── useScrolled.ts      # Navbar scroll state
│   │   └── useCountUp.ts       # Viewport-triggered number animation
│   └── components/
│       ├── ui/                 # Reusable primitives (button, card, badge, accordion)
│       ├── primitives/         # Section, Reveal, AuroraBackground, Logo
│       └── sections/           # Navbar, Hero, Features, Stats, … Footer
├── tailwind.config.cjs         # Design tokens: color, type, shadow, motion
├── vite.config.ts              # Relative base for portable static hosting
└── tsconfig.json
```

**Editing content:** almost all text lives in `src/lib/content.ts`, so copy changes don't require
touching component code.

---

## 🎨 Design System

- **Color** — an `ink` near-black canvas, a `brand` violet/indigo ramp, an `aqua` counter-accent,
  and a sparing `ember` warm accent. Defined once in `tailwind.config.cjs`.
- **Type** — `Sora` for display headings, `Inter` for UI/body, `JetBrains Mono` for code. Fluid
  sizes with tight tracking on headings and balanced line wrapping.
- **Surfaces** — three elevation treatments: `glass` (frosted), `gradient-border` (hairline glow
  edge) and `shadow-card` (deep soft shadow).
- **Motion** — one easing curve (`cubic-bezier(0.22, 1, 0.36, 1)`) and consistent durations
  (0.3–0.6s) for a coherent, unhurried feel.

---

## ♿ Accessibility

- Skip-to-content link and landmark regions (`header`, `main`, `footer`, `nav`).
- Keyboard-visible focus rings via `:focus-visible` (mouse clicks don't show rings).
- Interactive controls expose `aria-expanded` / `aria-pressed` / `aria-label` as appropriate.
- Decorative visuals are `aria-hidden`; icon-only buttons carry labels.
- All animation is disabled under `prefers-reduced-motion: reduce`.

---

## 🌐 Deployment (GitHub Pages)

This project is set up for static hosting. `vite.config.ts` uses `base: './'`, so the build works
from any sub-path — a project page, a user page or a custom domain — with no changes.

### Option A — Deploy from a branch (what this repo uses)

The built output is published from the **`gh-pages`** branch:

```bash
npm run build
npx gh-pages -d dist      # or copy dist/ to the root of the gh-pages branch
```

Then in **Settings → Pages**, set **Source = Deploy from a branch**, **Branch = `gh-pages`**,
**Folder = `/ (root)`**. The site goes live at `https://<user>.github.io/<repo>/`.

### Option B — Deploy with GitHub Actions (recommended for future changes)

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

Then set **Settings → Pages → Source = GitHub Actions**.

---

## 📄 License

Released under the MIT License. Vela is a fictional brand created for this demo.
