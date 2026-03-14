# Data Model: Section Scroll Animation

## Types

```typescript
export interface FloatingElementProps {
  /** Uniquely identifies the logo element */
  id: string;
  /** The URL or static import of the logo image */
  src: string;
  /** Accessibilty text for the logo */
  alt: string;
  /** The starting floating speed/parallax weight (higher = moves faster upward) */
  speed: number;
  /** Initial base rotation offset (degrees) before scroll interaction */
  baseRotation: number;
  /** Layout positioning constraint (e.g., 'top-10 left-20') */
  className?: string;
  /** The scale multiplier (e.g., 0.8 for smaller objects in background) */
  scale?: number;
}
```

## Internal Hook State (`useScrollParallax`)

- `scrollY`: The global vertical scroll progress of the window.
- `yOffset`: A computed transformation derived from `scrollY` and the element's `speed` factor (representing the Upward Parallax).
- `rotation`: A computed transformation derived from `scrollY` (adding/subtracting degrees dynamically) and base rotation, simulating water dynamics.
- `springY`, `springRotation`: The smoothed versions of the above values using Framer Motion's `useSpring` with the stiffness/damping settings that match an "Ease-Out quintic" feel.

## Entities (Constants)

A local array of `FloatingElementProps` objects will be used to render the list of logos in the section wrapper. This avoids backend queries and strictly bounds the scope to UI representation.
