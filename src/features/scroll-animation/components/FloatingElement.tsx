"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingElementProps } from "../types";
import { useScrollParallax } from "../hooks/useScrollParallax";

export const FloatingElement = ({
  src,
  alt,
  speed,
  baseRotation,
  className = "",
  scale = 1,
}: FloatingElementProps) => {
  const { y, rotate } = useScrollParallax({ speed, baseRotation });

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        y,
        rotate,
        scale,
      }}
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 drop-shadow-xl">
        {/* We use standard img to avoid Next.js Image configuration issues for arbitrary logos, or next/image if configured */}
        <img
          src={src}
          alt={alt}
          className="object-contain w-full h-full"
        />
      </div>
    </motion.div>
  );
};
