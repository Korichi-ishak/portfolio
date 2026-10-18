# Ishak Korichi — Portfolio 2026

Next.js 15 (App Router) + Tailwind CSS v4, built from the validated maquette.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export of every page
```

Deploy on Vercel as is (no environment variables).

## Pages

- `/` — the journey: hero, about, then the path from Annaba to Paris drawn as a workflow.
  Scrolling draws the cable and lights each step; each step links to the projects it produced.
  Then the toolbox (skills, certificates).
- `/work` — every project: client work, then academic & startup work.
- `/work/[slug]` — one project per page (case study + story), then "in the journey" (where the
  project sits in the path) and the next project.
- Every page shares the same nav and the same footer: the last node of the workflow, "your project".

## Where things live

| What | File |
| --- | --- |
| Project data (problem, findings, users, IA, flow, palette, admin, outcome…) | `src/data/cases.json` |
| Order, card labels, academic projects | `src/data/projects.ts` |
| The journey (steps, dates, linked projects) | `src/data/journey.ts` |
| Scroll-driven workflow | `src/components/journey/Workflow.tsx` |
| Shared footer | `src/components/SiteFooter.tsx` |
| Hand-drawn stories (FDS, Vélo, Tasshila, AutoTechno, Divan Hane, Wassalni, Queen de Q, Ayan) | `src/components/stories/*Story.tsx` + scoped `*.css` |
| Data-driven case study for the other projects | `src/components/case/GenericCase.tsx` |
| Shared blocks merged into the stories (case file, people & goals, app boards) | `src/components/case/blocks.tsx` |
| Home hero + about | `src/components/home/HomeIntro.tsx` |
| Images exported from the maquette | `public/img/` |

Each story keeps its own fonts and animations; styles are scoped under `.st-<slug>` so they never clash.
Tailwind is loaded without its CSS reset on purpose, so the stories render exactly as designed.

## Accessibility

- One `h1` per page, landmarks (`header`, `main`, `footer`), skip link, visible focus.
- The workflow is a real ordered list; the cable and the moving dot are decoration (`aria-hidden`).
  Content is readable before, during and without the animation.
- `prefers-reduced-motion`: the cable is shown fully drawn and nothing moves, on every page.
- Brand colours used as text are adjusted to reach WCAG AA contrast (`src/lib/contrast.ts`).
- Checked with axe-core on every route (WCAG 2.1 A/AA + best practices): 0 violations.
  Automated checks don't cover everything — test with a keyboard and a screen reader before launch.

## Notes

- Screens marked "redrawn for this case study" or "illustrative data" are recreated, not real client data.
- Tasshila has no real screenshots yet; replace the concept screens when the app is ready.
- The French version of the home page is not coded yet.
