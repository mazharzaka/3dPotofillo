"use client";

import { FloatingElement } from "./FloatingElement";
import { FloatingElementProps } from "../types";

// Pre-defined array of floating logos
const FLOATING_ELEMENTS: FloatingElementProps[] = [
  {
    id: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
    speed: 1.5,
    baseRotation: -10,
    className: "top-[20%] left-[10%]",
    scale: 1.2,
  },
  {
    id: "nextjs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
    speed: 2.5,
    baseRotation: 15,
    className: "top-[40%] right-[15%]",
    scale: 1.5,
  },
  {
    id: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    speed: 1.2,
    baseRotation: -5,
    className: "top-[60%] left-[25%]",
    scale: 0.9,
  },
  {
    id: "tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
    speed: 3.0,
    baseRotation: 25,
    className: "bottom-[20%] right-[30%]",
    scale: 1.1,
  },
  {
    id: "framer",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    alt: "Framer Motion",
    speed: 0.8,
    baseRotation: 5,
    className: "top-[10%] right-[40%]",
    scale: 0.8,
  },
];

export const ScrollParallaxSection = () => {
  return (
    <section className="relative w-full min-h-[150vh] bg-slate-950 overflow-hidden flex flex-col items-center justify-center">
      {/* Central Content */}
      <div className="z-10 text-center text-white px-4 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Magical Frontend
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
          Scroll down to experience the negative gravity parallax effect.
        </p>
      </div>

      {/* Floating Elements Container */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_ELEMENTS.map((el) => (
          <FloatingElement key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};
