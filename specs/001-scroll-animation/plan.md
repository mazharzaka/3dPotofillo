# Implementation Plan: Section Scroll Animation

**Branch**: `001-scroll-animation` | **Date**: 2026-03-12 | **Spec**: [specs/001-scroll-animation/spec.md](specs/001-scroll-animation/spec.md)
**Input**: Feature specification from `/specs/001-scroll-animation/spec.md`

## Summary

The goal is to implement a section in the Next.js portfolio where foreground elements (e.g., frontend technology logos) float upwards faster than the user's scroll speed (a negative gravity parallax effect). As they move, the elements should rotate slightly to simulate floating in water, utilizing an Ease-Out quintic timing function (or spring physics) for a natural, organic feel. The provided video is to be used strictly as a visual reference for the desired effect.

## Technical Context

**Language/Version**: TypeScript  
**Primary Dependencies**: Next.js (App Router), React, Tailwind CSS, Framer Motion (or GSAP/Lenis) [NEEDS CLARIFICATION: Which animation/scroll library should be used?]  
**Storage**: N/A (UI only)  
**Testing**: Jest / React Testing Library (for unit testing rendering), Playwright (for visual/scroll integration testing if applicable) [NEEDS CLARIFICATION: What is the preferred testing stack?]  
**Target Platform**: Modern Web Browsers (Desktop & Mobile)  
**Project Type**: Next.js Web Application (Feature Slice)  
**Performance Goals**: 60 fps during scroll, minimal main thread blocking  
**Constraints**: Must degrade gracefully with `prefers-reduced-motion`  
**Scale/Scope**: Single portfolio section with 5-10 floating elements  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Feature-Based Architecture**: Does the plan place domain logic in `src/features/` instead of global scopes?
  - Yes. The animation logic and components will be housed in `src/features/scroll-animation/`.
- [x] **Clean Code**: Are the proposed implementations prioritizing small, readable, and decoupled functions/components?
  - Yes. The Parallax container and the Floating Elements will be separate components.
- [x] **Next.js Standards**: Are Server Components used by default? Is client-side state minimized?
  - The main section wrapper can be a Server Component, but the interactive parallax and floating logic requires `"use client"`. This will be pushed to the leaf components.
- [x] **Typing**: Are strict TypeScript interfaces defined for new data structures and props without using `any`?
  - Yes, strict interfaces will be defined for element props (speed, rotation vectors, image sources).

## Project Structure

### Documentation (this feature)

```text
specs/001-scroll-animation/
├── plan.md              # This file
├── research.md          # 
└── tasks.md             # 
```

### Source Code (repository root)

```text
src/
├── app/
│   └── page.tsx                         # Integrates the feature
├── features/
│   └── scroll-animation/
│       ├── components/
│       │   ├── FloatingElement.tsx      # Individual floating logo
│       │   └── ScrollParallaxSection.tsx # The client wrapper handling scroll events
│       ├── hooks/
│       │   └── useScrollParallax.ts     # Hook to compute parallax/rotation offsets
│       └── types/
│           └── index.ts                 # Type definitions for the element props
└── lib/
    └── utils.ts                         # Tailwind/class merging utilities
```

**Structure Decision**: Option 1: Next.js Feature-Based Project.
The code resides entirely within `src/features/scroll-animation/` with strict separation of hooks (logic) and components (UI).

## Phase 0 Research Tasks Needed
1. Evaluate Framer Motion vs GSAP vs Lenis for performant scroll-linked animations in Next.js App Router.
2. Determine the testing stack for validating visual scroll effects.
