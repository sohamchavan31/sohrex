# Work Log

---

## PENDING
- [ ] Replace `public/resume.pdf` with real resume — Hero download button points to `/resume.pdf`

---

## 2026-06-07 — Production Release: dev → main (v1)

**Requested**: Merge dev into main for production deployment via PR.

**What was done**:
- Created PR #8 on GitHub: `dev` → `main`
- PR merged — all portfolio work now on `main`
- Vercel auto-deploy triggered from `main`
- Local `main` synced with `git pull origin main`

**State after merge**:
- `main` — full portfolio v1, production-ready
- `dev` — in sync with main
- All feature branches archived on GitHub

---

## 2026-06-07 — Contact Section: Start a Project Modal

**Requested**: Add a "Start a Project" discovery modal below the simple contact form.

**What was done**:
- Replaced `Contact.jsx` with new version — layout unchanged on left (social links), right side gets form + new CTA
- Added `START A PROJECT →` banner below the message form that opens a dark glass modal
- Modal is a 4-step flow with step validation and animated transitions:
  - Step 1: Name, Email, Company
  - Step 2: Project type (pill selector) + description textarea
  - Step 3: Budget range (list) + timeline (pills)
  - Step 4: Extra context + summary panel
- Submits to Formspree (`xeewanrl`) as JSON POST
- Success state: personalised confirmation with first name + email
- Backdrop click closes modal; progress bar in header tracks current step
- Matches existing design system: `#111111` background, accent green borders, font-mono labels

**Files modified**: `src/components/sections/Contact.jsx`  
**Commands run**: `git add ... && git commit && git push origin dev`

---

## 2026-06-07 — Portfolio Content Update

**Requested**: Replace all placeholder content with real data across Contact, Hero, TerminalBoot, About, Skills, and Projects sections.

**Changes made**:
- `Contact.jsx` — real email (sohamchavsn03@gmail.com), GitHub (sohamchavan31), LinkedIn (sohamsc01)
- `Hero.jsx` — "SYSTEM BUILDER" → "BACKEND DEVELOPER"
- `TerminalBoot.jsx` — identity line updated to `> identity: Soham_Chavan`
- `About.jsx` — bio updated for Samuel Aaron Trading / Richline Group role; stats: 5+ Projects Built, 2+ Years Building, 1 Production System; tagline updated to "Backend-first. Java-driven."
- `skills.js` — all 4 groups replaced: Backend Systems (Java 17, Spring Boot 3, Python, Django/DRF, Node.js, Express.js, REST APIs, WebSockets), Frontend Systems, Data & Infra, Tools & Auth
- `projects.js` — MIS and Pest Control updated with real descriptions, private repo notes, correct stacks; 4 other cards replaced (F1 Race Replay Engine, Jewelary AR App, Drum Kit, Portfolio)
- `Projects.jsx` — GitHub button now conditionally rendered; shows private note text when `github: null`

**Files modified**: 7 source files  
**Commands run**: `git add ... && git commit && git push origin dev`

---

## 2026-06-07 — README Rewrite

**Requested**: Update README to reflect the actual project.

**What was done**:
- Replaced default Vite template README with project-specific documentation
- Covers stack, folder structure, sections, branch layout, design tokens, and dev commands

**Files modified**: `README.md`

**Commands run**: `git add README.md && git commit && git push origin dev`

---

## 2026-06-07 — Git Branch Setup & GitHub PR Workflow

**Requested**: Organize codebase into multiple feature branches and push to GitHub with PRs.

**What was done**:
- Diagnosed git state — `feat/project-setup` existed locally but was never pushed
- Force-reset `origin/dev` to `a38fa04` so PRs had something to compare against
- Pushed all 8 feature branches to GitHub: `feat/project-setup`, `feat/global-styles`, `feat/ui-components`, `feat/hero-canvas`, `feat/about-projects`, `feat/skills-exploring`, `feat/philosophy-contact`
- Merged PR #6 (`feat/hero-canvas` → `dev`) on GitHub — this pulled in the first 4 branches
- Completed a local merge (origin/dev → dev) which incorporated all remaining branch code into `dev`
- Pushed final merged `dev` to `origin/dev` — all portfolio code now live on GitHub

**Final branch state**:
- `origin/dev` — complete portfolio code (all 7 feature branches included)
- `origin/main` — still at initial GitHub commit (untouched)
- All 8 feature branches visible on GitHub as build documentation

**Commands run**:
- `git push origin a38fa04:refs/heads/dev --force`
- `git fetch origin`
- `git commit --no-edit` (finalized in-progress merge)
- `git push origin dev`

**Issues encountered**:
- Sequential branch chain caused GitHub "nothing to compare" errors — `dev` was ahead of all feature branches after the local merge brought in all commits via `feat/philosophy-contact` ancestry
- Merge commit message included git comment lines (cosmetic issue only)

---

## 2026-05-24 — Initial Project Analysis

**Requested**: Read and analyze the portfolio directory, set up for collaboration.

**What was done**:
- Read all source files: App.jsx, all section components (Hero, About, Projects, Skills, Exploring, Philosophy, Contact), UI components (Navbar, Footer, TerminalBoot, SectionWrapper, SectionLabel), canvas components (Scene, FloatingObjects), data files (projects.js, skills.js), index.css, package.json
- Saved project memory and user profile to Claude's memory system

**Files created**:
- `WORK_LOG.md` (this file)
- Memory files in Claude's project memory store

**Commands run**: None

**Issues / assumptions**:
- Several placeholders found that likely need updating before the site goes live:
  - All GitHub links in `src/data/projects.js` are `'#'`
  - Contact email in `src/components/sections/Contact.jsx` is `soham@example.com` (placeholder)
  - GitHub/LinkedIn URLs in Contact.jsx may not be correct handles
  - No `resume.pdf` exists in `public/` — the Hero download button will 404
- No git repository initialized yet
- The contact form has no backend / submission handler — it's currently a static UI

---
