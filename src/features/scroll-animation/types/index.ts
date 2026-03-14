export interface FloatingElementProps {
  /** Uniquely identifies the logo element */
  id: string;
  /** The URL or static import of the logo image */
  src: string;
  /** Accessibility text for the logo */
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
