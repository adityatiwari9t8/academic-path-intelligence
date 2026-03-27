# Academic Path

A lightweight React + TypeScript + Tailwind learning path builder, built with Vite.

## 🚀 Project Overview

`academic-path` is a client-side web app that helps learners plan a curriculum path with modules, skills, and stack-specific roadmaps.

Key features:
- Module grid and modal details (`RoadmapGrid`, `ModuleModal`)
- Stack selection toolbar (`StackToolbar`)
- Skills selector and filtering (`SkillsSelector`)
- Persistent path state management (`useAcademicPath` custom hook)

## 🧰 Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- lucide-react (icons)

## 📦 Installation

```bash
npm install
```

## ▶️ Development

Start development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 🏗️ Build

```bash
npm run build
```

## 📡 Preview

```bash
npm run preview
```

## 🗂️ Project Structure

- `src/main.tsx` — app entry point
- `src/App.tsx` — root component
- `src/index.css` — Tailwind and global styles
- `src/components/` — UI components
- `src/hooks/useAcademicPath.ts` — custom hook for path state
- `src/constants/index.ts` — constant definitions
- `src/types/index.ts` — shared TypeScript types
- `src/utils/index.ts` — client utilities

## 🛠️ Customization

1. Update module and skill data in `src/constants/index.ts`.
2. Extend types in `src/types/index.ts`.
3. Add new components to `src/components/` and hook into `App.tsx`.

## 🧪 Testing

No test runner is included by default. Add your preferred test framework (e.g. Vitest) as needed.

## 💡 Notes

- The app is configured as `private` in `package.json`.
- Build runs `tsc` and `vite build` for type safety and production assets.

## 🤝 Contributing

1. Fork this repository.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat: description"`
4. Push and open a PR.

## 📄 License

Add your license (MIT/Apache/BSD) if desired.
