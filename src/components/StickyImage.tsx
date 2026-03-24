"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function StickyImage() {
  const [isHovered, setIsHovered] = useState(false);

  // Custom cursor position
  const cursorX = useSpring(-100, { damping: 40, stiffness: 400 });
  const cursorY = useSpring(-100, { damping: 40, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 60);
      cursorY.set(e.clientY - 60);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  const text = "WORK EXPERIENCE • WORK EXPERIENCE • ";

  return (
    <section
      className="relative z-50 w-full min-h-screen bg-slate-950 flex items-center justify-center -mt-[100vh] cursor-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 pointer-events-none z-[100]"
      >
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          {/* The circular text */}
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          >
            {text.split("").map((char, i, arr) => (
              <span
                key={i}
                className="absolute text-white font-mono text-[15px] uppercase font-bold tracking-[0.2em]"
                style={{
                  transform: `rotate(${i * (360 / arr.length)}deg) translateY(-45px)`,
                }}
              >
                {char}
              </span>
            ))}
          </motion.div>

          {/* Inner circle */}
          <div
            className="w-32 h-32 rounded-full border border-white/50 flex items-center justify-center"
            style={{ backdropFilter: "grayscale(1) sepia(0.3) saturate(1.5)" }}
          ></div>
        </div>
      </motion.div>

      <div className="relative w-full h-screen">
        <Image
          src="/stiky.jpg"
          alt="Sticky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-8xl  font-extrabold text-shadow-2xs text-white">
            WORK <span className="text-[#cca362]">EXPERIENCE</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
