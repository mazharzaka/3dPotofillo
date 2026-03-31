# Phase 0 Research: Modern Footer with Contact Info

**Date**: 2026-03-30 | **Feature**: `003-modern-footer`

## Research Summary

The feature is a pure UI component with no external APIs, backend dependencies, or data model complexity. Research focused on: (1) React/Next.js Server vs Client Component split, (2) SVG icon sourcing strategy, and (3) Tailwind CSS 4 glassmorphism patterns.

---

## Decision 1: Server vs Client Component Split

- **Decision**: `Footer.tsx` and `ContactButton.tsx` → Server Components. `SocialLinks.tsx` → Client Component.
- **Rationale**: Hover animations via Framer Motion require browser APIs, mandating `"use client"`. All static markup (contact info, layout structure) belongs in Server Components to maximize SSR performance. This minimises the client-side JS bundle.
- **Alternatives considered**:
  - _Full client footer_: Rejected — unnecessarily ships all footer markup as JS.
  - _CSS-only hover effects_: Viable, but Framer Motion `whileHover` gives richer and more consistent animations matching the project's existing motion patterns.

---

## Decision 2: SVG Icon Strategy

- **Decision**: Inline SVG components (no third-party icon library).
- **Rationale**: The project has no existing icon library (`react-icons`, `heroicons`, etc.) installed. Adding one for only 3 icons (GitHub, LinkedIn, Instagram) would inflate `node_modules` unnecessarily. Inline SVGs are zero-cost in JS terms for Server Components, fully customisable, and tree-shakeable.
- **Alternatives considered**:
  - _`react-icons` package_: Rejected — overkill for 3 icons, adds bundle weight.
  - _Image files_: Rejected — harder to style, colour, and animate.

---

## Decision 3: Glassmorphism Implementation

- **Decision**: Use Tailwind `backdrop-blur-xl`, `bg-slate-950/80`, and `border-t border-white/[0.06]`.
- **Rationale**: Matches the exact pattern used in `Header.tsx` (`backdrop-blur-xl bg-[#020617]/60 border-b border-white/[0.06]`), ensuring visual consistency across the portfolio.
- **Alternatives considered**:
  - _Solid dark background_: Less premium, breaks visual continuity.
  - _Custom CSS module_: More verbose; Tailwind utilities already cover this pattern.

---

## Decision 4: Data Management

- **Decision**: Static typed data in `src/features/footer/data/contact.ts`.
- **Rationale**: Contact info is static and won't change at runtime. Exporting as a typed constant allows easy editing without touching component logic.
- **Alternatives considered**:
  - _Hard-coded in JSX_: Harder to maintain; violates single-responsibility.
  - _Environment variables_: Overkill for a portfolio; private email in `.env` is unnecessary here since it's displayed publicly.

---

## No NEEDS CLARIFICATION Items Remain

All ambiguities were resolved during `/speckit.clarify`. No further research blockers.
