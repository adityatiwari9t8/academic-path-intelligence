# Academic Path Intelligence

A learning-roadmap builder. Pick the technologies you know or want to build on, and it lays out a path with every prerequisite placed ahead of the subject that needs it. It runs entirely in the browser, with no backend.

## Features

- Skill picker grouped by category, with search and a "Clear all" button
- Three example starting points (self-taught web developer, aspiring ML engineer, backend to infrastructure)
- A roadmap that updates as you pick, with each step labelled Prerequisite, Foundation, Core track or Advanced track
- "Review first" gaps and the reason each subject is on the path ("Because you picked" / "Needed by")
- A detail view per subject with its learning resources
- Mark steps as done and watch a progress bar
- Copy the whole path as plain text
- Light and dark theme, saved in `localStorage` and defaulting to your system setting

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check and production build into dist/
npm run preview  # serve the production build
```

Stack: Vite, React 18, TypeScript, Tailwind CSS 3, lucide-react.

## Project structure

```
src/
  main.tsx              entry point, loads the fonts and global CSS
  App.tsx               shell: light/dark toggle plus the demo
  index.css             Tailwind layers, body colours, .accent, .custom-scrollbar
  demo/
    academic-path/      the demo, copied unchanged from the portfolio
      AcademicPathDemo.tsx
      constants.ts      subject models, skill categories, resources, examples
      types.ts
      utils.ts          roadmap generation
  lib/
    useDialog.ts        dialog behaviour (Esc, focus trap, scroll lock) used by the demo
```

`src/demo/` is a plain copy of the demo folder from the portfolio. To update it, copy the folder over. The only edit after copying is the `useDialog` import in `AcademicPathDemo.tsx`, which points at `../../lib/useDialog`.

## Limits

- It is rule-based, not machine learning.
- There are 13 subject models.
- The resource links are hand-picked and are not checked automatically.
- Picks that map to no subject are listed as "not mapped".
