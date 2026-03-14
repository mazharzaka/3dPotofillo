# Research: Scroll Animation Implementation

## Decision 1: Animation Library

**Decision**: Framer Motion (with `useScroll` and `useTransform`)

**Rationale**:
- **Ecosystem Fit**: Framer Motion is the industry standard for React-based animations. It integrates perfectly with Next.js App Router (using `"use client"` directives on wrapper components).
- **Performance**: It uses independent transforms that do not trigger layout calculations. It abstracts complex spring math (Ease-Out quintic) naturally using declarative props.
- **Simplicity**: Unlike GSAP, which requires complex lifecycle management (`useEffect`, cleanup functions, `useRef` arrays), Framer Motion allows entirely declarative scroll tracking via `useScroll`.

**Alternatives considered**:
- **GSAP (with ScrollTrigger)**: Excellent performance and deeply robust, but introduces heavier bundle sizes and a steeper learning curve regarding React lifecycle integration.
- **Lenis Studio / Pure CSS**: Lenis is great for smooth scrolling, but managing individual parallax elements with precise spring physics is best handled by Framer Motion. Pure CSS parallax (using 3D transforms) is notoriously buggy across different mobile browsers (especially Safari).

## Decision 2: Testing Strategy

**Decision**: Visual/Manual Validation + Unit Testing of Logic

**Rationale**:
- Scroll animations and parallax effects are notoriously difficult to test automatically via headless browsers because they rely on viewport dimensions, scroll timing, and rendering frames.
- We will unit test the data structures and hooks (e.g., ensuring `useScrollParallax` returns expected ranges based on mock scroll values).
- Visual feel (the "Ease-Out quintic organic float") must be validated manually against the reference video.

**Alternatives considered**:
- **Playwright Visual Regression**: Overkill for a portfolio feature that might receive minor aesthetic tweaks. It is prone to flakiness with scroll-linked animations.
