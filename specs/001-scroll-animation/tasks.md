---
description: "Task list for Section Scroll Animation implementation"
---

# Tasks: Section Scroll Animation

**Input**: Design documents from `/specs/001-scroll-animation/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Feature initialization and dependencies

- [x] T001 Install Framer Motion dependency `npm install framer-motion` (or `pnpm add framer-motion`)
- [x] T002 Create feature directory structure `src/features/scroll-animation/` with `components`, `hooks`, and `types` subdirectories.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T003 Create `src/features/scroll-animation/types/index.ts` and define `FloatingElementProps` interface.
- [x] T004 [P] Create `src/features/scroll-animation/hooks/useScrollParallax.ts` (skeleton hook).

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Scroll Triggered Float Animation (Priority: P1) 🎯 MVP

**Goal**: Implement the core visual scrolling experience where logos float upwards and rotate slightly using Ease-Out quintic spring physics based on scroll position.

**Independent Test**: Can be tested by scrolling down the integrated section and observing the parallax movement and rotation of the logos.

### Implementation for User Story 1

- [x] T005 [US1] Complete `useScrollParallax.ts`. It must accept speed and baseRotation, use `useScroll` from framer-motion, compute the `yOffset` and `rotation`, and apply `useSpring` with quintic-like ease-out stiffness/damping.
- [x] T006 [US1] Create `src/features/scroll-animation/components/FloatingElement.tsx`. This must be a `"use client"` component that uses `motion.div`, consumes `useScrollParallax`, and renders the image via `next/image` or a standard `img` tag.
- [x] T007 [US1] Create `src/features/scroll-animation/components/ScrollParallaxSection.tsx`. This must map over an array of `FloatingElementProps` constants and render the `FloatingElement` components within a relatively positioned full-height or large containment section.
- [x] T008 [US1] Integrate `ScrollParallaxSection.tsx` into `src/app/page.tsx` (or the relevant portfolio route) to mount the section on the screen.

**Checkpoint**: At this point, the scroll animation MVP is functional.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the feature globally

- [x] T009 Ensure UI degrades gracefully when `prefers-reduced-motion` is enabled (media query or framer-motion `useReducedMotion`).
- [x] T010 Adjust spring physics parameters (stiffness, damping, mass) by visually comparing the animation's feel to the reference video `Magical_Frontend_Logo_Explosion_Animation.mp4`.
- [x] T011 Perform manual cross-browser testing (Chrome, Safari, Mobile) to ensure no scroll jank or excessive layout shifts occur.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### Parallel Opportunities

- T004 can be started while waiting for dependencies (T001) to install, though the hook requires the library.

### Implementation Strategy

#### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently by scrolling the page
5. Complete Polish Phase
