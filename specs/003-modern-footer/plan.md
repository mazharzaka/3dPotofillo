# Implementation Plan: Modern Footer with Contact Info

**Branch**: `003-modern-footer` | **Date**: 2026-03-30 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-modern-footer/spec.md`

## Summary

Add a modern, premium footer to the portfolio with contact details (email, phone, location), social media links (GitHub, LinkedIn, Instagram), and a "Send Message" CTA button. The component will follow the feature-based architecture pattern (`src/features/footer/`), use the project's Inter font and `#020617` dark palette with glassmorphism, and render as a React Server Component since it has no client interactivity.

## Technical Context

**Language/Version**: TypeScript 5.9 + React 19 / Next.js 16 (App Router)  
**Primary Dependencies**: Tailwind CSS 4, Framer Motion 12 (for hover micro-animations on social icons)  
**Storage**: N/A  
**Testing**: Manual browser verification  
**Target Platform**: Web (desktop + mobile responsive)  
**Project Type**: Next.js portfolio web app  
**Performance Goals**: Footer renders as part of SSR page; zero additional JS added unless Framer Motion hover on social icons requires `"use client"`  
**Constraints**: No `any` TypeScript usage; no global component pollution (must live in `src/features/footer/`)  
**Scale/Scope**: Single page portfolio — one footer instance

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Feature-Based Architecture**: Footer module lives entirely in `src/features/footer/`. Global `src/components/` untouched.
- [x] **Clean Code**: Footer, social icons, and data are split into small, single-purpose files.
- [x] **Next.js Standards**: Main `Footer.tsx` is a Server Component by default. Only the `SocialLinks` sub-component needs `"use client"` for Framer Motion hover animations.
- [x] **Typing**: TypeScript interfaces defined for `ContactItem`, `SocialLink`, and all component props. No `any`.

## Project Structure

### Documentation (this feature)

```text
specs/003-modern-footer/
├── plan.md              ← this file
├── research.md          ← Phase 0 output
├── data-model.md        ← Phase 1 output
└── checklists/
    └── requirements.md
```

### Source Code

```text
src/
├── app/
│   └── page.tsx         ← [MODIFY] Add <Footer /> import + usage
└── features/
    └── footer/
        ├── components/
        │   ├── Footer.tsx          ← [NEW] Server Component — root layout
        │   ├── SocialLinks.tsx     ← [NEW] Client Component — hover animations
        │   └── ContactButton.tsx   ← [NEW] Server Component — mailto CTA
        ├── data/
        │   └── contact.ts          ← [NEW] Contact & social link data
        └── types/
            └── index.ts            ← [NEW] TypeScript interfaces
```

**Structure Decision**: Option 1 — Next.js Feature-Based. Footer is a pure UI feature with no backend dependency, cleanly encapsulated under `src/features/footer/`.

## Complexity Tracking

No constitution violations. No complexity justification needed.
