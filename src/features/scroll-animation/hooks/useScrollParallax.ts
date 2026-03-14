import { useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

interface UseScrollParallaxProps {
  speed: number;
  baseRotation: number;
}

export const useScrollParallax = ({ speed, baseRotation }: UseScrollParallaxProps) => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Negative gravity parallax: as scroll goes down (increases), y goes up (negative value)
  const yRaw = useTransform(scrollY, [0, 1000], [0, -speed * 100]);
  
  // Rotation: slightly rotate based on scroll to simulate floating in water
  const rotationRaw = useTransform(scrollY, [0, 1000], [baseRotation, baseRotation + (speed * 10)]);

  // Apply Ease-Out quintic-like spring physics for an organic feel.
  const springConfig = { mass: 0.1, stiffness: 50, damping: 20 };
  
  const y = useSpring(yRaw, springConfig);
  const rotate = useSpring(rotationRaw, springConfig);

  // If the user prefers reduced motion, return static values instead of the spring transforms
  if (shouldReduceMotion) {
    return { y: 0, rotate: baseRotation };
  }

  return { y, rotate };
};
