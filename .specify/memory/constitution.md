<!--
Sync Impact Report:
- Version change: [NEW] → 1.0.0
- Modified principles:
  - [PRINCIPLE_1_NAME] → Feature-Based Architecture
  - [PRINCIPLE_2_NAME] → Clean Code & React Best Practices
  - [PRINCIPLE_3_NAME] → Next.js App Router Standards
  - [PRINCIPLE_4_NAME] → Strict Typing (TypeScript)
  - [PRINCIPLE_5_NAME] → Simplicity & Scalability
- Added sections: Technology Stack Requirements, Quality & Workflow Gates
- Removed sections: None
- Templates requiring updates:
  - ✅ plan-template.md 
  - ✅ spec-template.md 
  - ✅ tasks-template.md
- Follow-up TODOs: None
-->

# Portfolio Constitution

## Core Principles

### I. Feature-Based Architecture
Every major piece of functionality must be encapsulated within a feature-specific directory under `src/features/`. Each feature module must cleanly export its public interfaces and internalize its own components, hooks, services, and types to prevent cross-domain coupling.

### II. Clean Code & React Best Practices
All code must prioritize readability, maintainability, and simplicity. Functions and components should be small, focused, and do one thing well. Avoid deeply nested logic and prefer descriptive, self-documenting naming conventions. Presentational UI must be decoupled from business logic.

### III. Next.js App Router Standards
The application must strictly adhere to Next.js App Router conventions. Server Components should be used by default to maximize performance and SEO. Client Components (`"use client"`) must only be used when interactivity or client-side state is explicitly required.

### IV. Strict Typing (TypeScript)
TypeScript must be used strictly across the entire codebase. The use of `any` is strictly prohibited. All props, state, API responses, and shared data models must have explicitly defined interfaces or types to ensure type safety.

### V. Simplicity & Scalability
Start simple using YAGNI (You Aren't Gonna Need It) principles. Architecture and abstraction should only be introduced when there is a concrete need. The folder structure must scale predictably as the application grows without becoming a monolith of unorganized files.

## Technology Stack Requirements

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (preferred) or Vanilla CSS (if explicitly chosen), strictly modularized
- **Project Structure**: Feature-based slices (e.g., `src/features/[featureName]/`)

## Quality & Workflow Gates

- **Code Review**: All logic must be reviewed against the Core Principles before merging.
- **Organization Check**: No domain-specific components or logic should reside in global `src/components/` or `src/hooks/`; they must belong to their respective `src/features/`.
- **Performance**: Server Components are the default. Client side bundles must be kept as small as possible.

## Governance

The Portfolio Constitution supersedes all other architectural practices. Any changes to the core technology stack or folder structure paradigm require an amendment to this living document. All new feature planning (`speckit.plan`) must pass the Constitution Check against these principles.

**Version**: 1.0.0 | **Ratified**: 2026-03-12 | **Last Amended**: 2026-03-12
