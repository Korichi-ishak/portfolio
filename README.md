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

- `/` — hero, about, then FDS Institut and Voilà Vélo told in full (case study + story),
  Tasshila under "academic & startup", a teaser of the other projects with a **See all projects** button,
  experience and contact.
- `/work` — every project, client work and academic/startup work.
- `/work/[slug]` — one project per page, with a link to the next one.

## Where things live

| What | File |
| --- | --- |
| Project data (problem, findings, users, IA, flow, palette, admin, outcome…) | `src/data/cases.json` |
| Order, card labels, which projects show on the home page | `src/data/projects.ts` (`homeClient`, `homeAcademic`, `academic`) |
| Hand-drawn stories (FDS, Vélo, Tasshila, AutoTechno, Divan Hane, Wassalni, Queen de Q, Ayan) | `src/components/stories/*Story.tsx` + scoped `*.css` |
| Data-driven case study for the other projects | `src/components/case/GenericCase.tsx` |
| Shared blocks merged into the stories (case file, people & goals, app boards) | `src/components/case/blocks.tsx` |
| Home sections (hero, about, experience, contact) | `src/components/home/HomeSections.tsx` |
| Images exported from the maquette | `public/img/` |

Each story keeps its own fonts and animations; styles are scoped under `.st-<slug>` so they never clash.
Tailwind is loaded without its CSS reset on purpose, so the stories render exactly as designed.

## Notes

- Screens marked "redrawn for this case study" or "illustrative data" are recreated, not real client data.
- Tasshila has no real screenshots yet; replace the concept screens when the app is ready.
- The French version of the home page is not coded yet.
