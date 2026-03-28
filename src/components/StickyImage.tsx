"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export function StickyImage({
  image1,
  image2,
  title,
}: {
  image1: string;
  image2: string;
  title: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply different spring-physics for a trailing fluid effect
  // Primary (fastest) - guides the mask and the leading color
  const springX1 = useSpring(mouseX, { damping: 15, stiffness: 400 });
  const springY1 = useSpring(mouseY, { damping: 15, stiffness: 400 });

  // Secondary - creates a fluid trail
  const springX2 = useSpring(mouseX, { damping: 24, stiffness: 200 });
  const springY2 = useSpring(mouseY, { damping: 24, stiffness: 200 });

  // Tertiary (slowest) - completes the trailing fluid tail
  const springX3 = useSpring(mouseX, { damping: 35, stiffness: 100 });
  const springY3 = useSpring(mouseY, { damping: 35, stiffness: 100 });

  // Generate the dynamic mask-image CSS value
  // Raised to 700px mask to make the second image VERY clear and have a massive reveal
  const maskImage = useMotionTemplate`radial-gradient(700px at ${springX1}px ${springY1}px, black 0%, transparent 100%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the container
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-40 w-full h-screen cursor-none overflow-hidden bg-slate-950 -mt-[100vh]"
    >
      {/* Base Image */}
      <Image src={image1} alt={title} fill className="object-cover" priority />

      {/* Revealed Image with Mask */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        <Image src={image2} alt={title} fill className="object-cover" />
      </motion.div>

      {/* Amazing Colors Fluid Cursor Overlay */}
      {/* Reduced opacity to 30% to ensure image2 remains perfectly clear beneath the effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Leading Cyan Blob */}
        <motion.div
          className="absolute rounded-full w-[500px] h-[500px] bg-cyan-400/30 blur-[100px]"
          style={{ x: springX1, y: springY1, marginLeft: "-250px", marginTop: "-250px" }}
        />
        {/* Trailing Fuchsia Blob */}
        <motion.div
          className="absolute rounded-full w-[400px] h-[400px] bg-fuchsia-500/30 blur-[100px]"
          style={{ x: springX2, y: springY2, marginLeft: "-200px", marginTop: "-200px" }}
        />
        {/* Slowest Amber Blob */}
        <motion.div
          className="absolute rounded-full w-[300px] h-[300px] bg-amber-400/30 blur-[100px]"
          style={{ x: springX3, y: springY3, marginLeft: "-150px", marginTop: "-150px" }}
        />
      </motion.div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h1
          className="text-[7vw] font-extrabold text-shadow-2xs text-white mix-blend-overlay"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </section>
  );
}
