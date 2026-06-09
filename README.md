# Sohrex — Personal Portfolio

Personal portfolio of **Soham Chavan**, a software developer who builds backend-first, logic-driven systems.

Live at: https://sohrex.vercel.app

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| 3D | Three.js · @react-three/fiber · @react-three/drei |
| Animation | Framer Motion |
| Styling | Tailwind CSS · CSS custom properties |
| Fonts | Bebas Neue · JetBrains Mono · DM Sans |

---

## Structure

```
src/
├── components/
│   ├── canvas/         # Three.js scene and floating 3D objects
│   ├── sections/       # Page sections (Hero, About, Projects, Skills, ...)
│   └── ui/             # Shared UI (Navbar, Footer, TerminalBoot, ...)
├── data/
│   ├── projects.js     # Featured and other project entries
│   └── skills.js       # Skill groups and exploring interests
├── hooks/
│   └── useMousePosition.js
├── App.jsx
├── index.css           # Design tokens, global styles, utility classes
└── main.jsx
```

---

## Sections

- **Terminal Boot** — animated boot sequence gates the site on load
- **Hero** — full-screen with live Three.js 3D canvas background
- **About** — background, philosophy, stats
- **Projects** — expandable cards with problem / solution / impact breakdown
- **Skills** — grouped skill modules (Backend, Frontend, Data & AI, Tools)
- **Exploring** — current interests outside of work
- **Philosophy** — design statement
- **Contact** — social links + message form

---

## Branch Structure

Feature branches follow the incremental build of the site:

```
main
└── dev
    ├── feat/project-setup       — Vite config, Tailwind, dependencies, public assets
    ├── feat/global-styles       — CSS design tokens, utility classes, fonts
    ├── feat/ui-components       — Navbar, Footer, TerminalBoot, SectionWrapper
    ├── feat/hero-canvas         — Three.js scene, floating objects, Hero section
    ├── feat/about-projects      — About section, Projects cards, project data
    ├── feat/skills-exploring    — Skills modules, Exploring section, skills data
    └── feat/philosophy-contact  — Philosophy quote, Contact form
```

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#0B0B0B` |
| `--accent` | `#00FF94` |
| `--text-primary` | `#F0F0F0` |
| `--font-heading` | Bebas Neue |
| `--font-mono` | JetBrains Mono |
| `--font-body` | DM Sans |
