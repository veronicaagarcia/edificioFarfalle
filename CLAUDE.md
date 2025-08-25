# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Edificio Farfalle is a React TypeScript website for temporary apartment rentals in La Plata, Argentina. The site showcases different apartment units with detailed image galleries, services, and contact/reservation forms.

**Live Sites:**
- GitHub Pages: https://veronicaagarcia.github.io/edificioFarfalle/
- Main site: https://www.edificiofarfalle.com

## Architecture
- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** HashRouter (React Router DOM)
- **State Management:** Zustand store (`src/store/farfalle.ts`)
- **UI Libraries:** Material-UI, Tailwind CSS, FontAwesome
- **Package Manager:** pnpm

## Key Components Structure
- **App.tsx:** Main router with conditional rendering (Start screen → Main app)
- **Pages:** Individual apartment pages (PlantaBajaA, PrimeroA, etc.) and info pages
- **Components:** Shared UI components in `src/components/common/`
- **Store:** Simple Zustand store managing app start state

## Development Commands

**Development server:**
```bash
npm run dev
# or
pnpm dev
```

**Build for production:**
```bash
npm run build
# or
pnpm build
```

**Lint code:**
```bash
npm run lint
# or
pnpm lint
```

**Preview build:**
```bash
npm run preview
# or
pnpm preview
```

**Deploy to GitHub Pages:**
```bash
npm run deploy
# or
pnpm deploy
```

## Deployment Configuration
The project supports dual deployment:
- **GitHub Pages:** Uses `/edificioFarfalle/` base path when `GITHUB_ACTIONS` env is set
- **Netlify:** Uses `./` base path for all other environments
- Configuration handled in `vite.config.ts:9-12`

## Apartment Structure
Each apartment page follows the pattern:
- PbA (Planta Baja A), PbB (Planta Baja B)  
- 1A (Primero A), 1B (Primero B)
- 2B (Segundo B)

Images are organized in `public/images/` with corresponding folders for each unit.