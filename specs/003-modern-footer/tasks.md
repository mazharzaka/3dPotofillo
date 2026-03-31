# Tasks: Modern Footer with Contact Info

**Input**: Design documents from `/specs/003-modern-footer/`
**Prerequisites**: [plan.md](./plan.md) ✅ | [spec.md](./spec.md) ✅ | [research.md](./research.md) ✅ | [data-model.md](./data-model.md) ✅

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the feature folder structure and shared types/data that all stories depend on.

- [ ] T001 Create feature directory structure `src/features/footer/components/`, `src/features/footer/data/`, `src/features/footer/types/`
- [ ] T002 [P] Create TypeScript interfaces for `ContactItem` and `SocialLink` in `src/features/footer/types/index.ts`
- [ ] T003 [P] Create static contact data and social link data in `src/features/footer/data/contact.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core shell component with layout and glassmorphism background — must exist before any user story adds content to it.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T004 Create `Footer.tsx` Server Component shell with dark glassmorphism background (`bg-slate-950/80 backdrop-blur-xl border-t border-white/[0.06]`) in `src/features/footer/components/Footer.tsx`
- [ ] T005 Integrate `<Footer />` at the bottom of `<main>` in `src/app/page.tsx`

**Checkpoint**: Footer container visible at bottom of page with correct background.

---

## Phase 3: User Story 1 — Find Contact Information (Priority: P1) 🎯 MVP

**Goal**: Visitor can read email, phone, and location at the bottom of the page, and click email/phone to contact.

**Independent Test**: Scroll to very bottom → see Email, Phone, Location. Click email → mail client opens with `hello@yourdomain.com`. Click phone → dialler opens with `+1234567890`. Location shows `Cairo, Egypt` as text only.

### Implementation for User Story 1

- [ ] T006 [US1] Build contact info section inside `Footer.tsx` using `ContactItem` data from `src/features/footer/data/contact.ts` — render email as `mailto:` link, phone as `tel:` link, location as plain text
- [ ] T007 [US1] Create `ContactButton.tsx` Server Component with "Send Message" button opening `mailto:hello@yourdomain.com?subject=Inquiry%20from%20Portfolio` in `src/features/footer/components/ContactButton.tsx`
- [ ] T008 [US1] Integrate `<ContactButton />` into `Footer.tsx` below the contact info block

**Checkpoint**: US1 fully functional — contact details visible, all links operational.

---

## Phase 4: User Story 2 — Social Connectivity (Priority: P2)

**Goal**: Visitor can find and click GitHub, LinkedIn, and Instagram icons that open the correct profiles in a new tab.

**Independent Test**: Three social icons visible in footer. Hover each → animation effect plays. Click each → correct profile URL opens in new tab.

### Implementation for User Story 2

- [ ] T009 [P] [US2] Create inline SVG icon components for GitHub, LinkedIn, and Instagram inside `src/features/footer/components/SocialLinks.tsx`
- [ ] T010 [US2] Build the `SocialLinks` Client Component (`"use client"`) with Framer Motion `whileHover` scale + color animations on each icon in `src/features/footer/components/SocialLinks.tsx` — use `SocialLink[]` data from `src/features/footer/data/contact.ts`
- [ ] T011 [US2] Integrate `<SocialLinks />` into `Footer.tsx` beside or below contact info block; ensure all `href`s have `target="_blank" rel="noopener noreferrer"`

**Checkpoint**: US2 fully functional — social icons appear, hover animations work, links open in new tab.

---

## Phase 5: User Story 3 — Visual Consistency & Modern Design (Priority: P3)

**Goal**: Footer matches the "Magical 3D" dark aesthetic of the rest of the site and is fully responsive.

**Independent Test**: Desktop → 3-column layout with spacious padding. Mobile → single column, all items legible, no overflow. Colors/shadows match Header and StickyImage sections.

### Implementation for User Story 3

- [ ] T012 [US3] Apply responsive Tailwind grid layout inside `Footer.tsx` — `grid-cols-1 md:grid-cols-3` with appropriate `gap` and `px`/`py` padding
- [ ] T013 [US3] Add branding/logo column to footer left — name + tagline using `rgba(255,255,255,0.9)` text matching `Header.tsx` style in `src/features/footer/components/Footer.tsx`
- [ ] T014 [US3] Add `@media (max-width: 320px)` guard in Tailwind (or `min-w-0 overflow-hidden` utilities) to prevent horizontal overflow on very small screens in `src/features/footer/components/Footer.tsx`
- [ ] T015 [US3] Add a thin copyright bar at the very bottom of the footer with `text-white/30` muted text in `src/features/footer/components/Footer.tsx`

**Checkpoint**: US3 complete — footer looks premium on both desktop and mobile.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality pass across all stories.

- [ ] T016 [P] Verify all TypeScript interfaces are strictly typed (no `any`) across all files in `src/features/footer/`
- [ ] T017 [P] Verify color contrast ≥ 4.5:1 for all text elements (SC-003) — adjust `text-white/XX` opacity values if needed
- [ ] T018 Update `specs/003-modern-footer/spec.md` Status from `Draft` to `Implemented`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on T001–T003 (types + data must exist first)
- **User Stories (Phase 3–5)**: All depend on Foundational (T004–T005)
  - US1 (Phase 3): No story dependencies
  - US2 (Phase 4): No story dependencies on US1 — can run in parallel with Phase 3
  - US3 (Phase 5): Depends on Phase 3 + 4 being complete (adds layout around existing content)
- **Polish (Phase 6)**: Depends on all user story phases being complete

### Parallel Opportunities

```
Phase 1 Parallel:  T002 ‖ T003
Phase 3+4 Parallel: Phase 3 (US1) ‖ Phase 4 (US2)  — different components, no conflicts
Phase 6 Parallel:  T016 ‖ T017
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T003)
2. Complete Phase 2: Foundational (T004–T005)
3. Complete Phase 3: User Story 1 (T006–T008)
4. **STOP and VALIDATE**: Contact info + Send Message button visible and functional
5. Proceed to social links (Phase 4) if MVP is confirmed

### Incremental Delivery

1. Phase 1 + 2 → Footer shell visible on page
2. Phase 3 → Contact info + CTA button (MVP ✅)
3. Phase 4 → Social icons with hover animations
4. Phase 5 → Responsive polish + branding column
5. Phase 6 → Final QA pass

---

## Notes

- **No test tasks included** — not requested in spec.md
- `SocialLinks.tsx` is the ONLY `"use client"` component (Framer Motion hover requires browser APIs)
- Replace placeholder data in `src/features/footer/data/contact.ts` with real info before going live
- [P] tasks = different files, no blocking dependencies between them
