"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";

const TOTAL_FRAMES = 168;
const FRAME_BASE = "/mazharFrames/ezgif-frame-";

/** Zero-pads a number to 3 digits, e.g. 1 → "001" */
const pad = (n: number) => String(n).padStart(3, "0");

/** Build the src for the nth frame (1-indexed) */
const frameSrc = (index: number) => `${FRAME_BASE}${pad(index)}.jpg`;

export const VideoScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const loadedCountRef = useRef(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Draw a specific frame (0-indexed) onto the canvas using "contain" fit
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    // "contain": scale image to fit inside canvas, centered
    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Resize canvas to match its CSS size (device pixel ratio aware)
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio ?? 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    // Re-draw current frame after resize
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    framesRef.current = images;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameSrc(i + 1); // frames are 1-indexed filenames
      img.onload = () => {
        loadedCountRef.current += 1;
        const count = loadedCountRef.current;
        setLoadedCount(count);

        // Draw frame 0 as soon as it lands
        if (i === 0) {
          drawFrame(0);
        }

        if (count === TOTAL_FRAMES) {
          setAllLoaded(true);
          // Ensure correct frame is rendered after all loaded
          drawFrame(currentFrameRef.current);
        }
      };
      img.onerror = () => {
        // Still count it so the spinner can complete even on missing frames
        loadedCountRef.current += 1;
        setLoadedCount(loadedCountRef.current);
        if (loadedCountRef.current === TOTAL_FRAMES) setAllLoaded(true);
      };
      images.push(img);
    }
  }, [drawFrame]);

  // Keep canvas sized correctly
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Track scroll progress & map to frame index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return;
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES)
    );
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      drawFrame(frameIndex);
    }
  });

  const loadingPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[800vh] bg-slate-950"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden gap-6 px-6">
        {/* Text above */}
        <div className="z-20 text-center pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tracking-tight drop-shadow-2xl mb-3">
            Scroll to Animate
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-lg drop-shadow-md">
            Scroll&nbsp;↓ advance&nbsp;·&nbsp; Stop = pause&nbsp;·&nbsp;
            Scroll&nbsp;↑ rewind
          </p>
        </div>

        {/* Canvas frame display */}
        <div className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden z-10 bg-transparent">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ display: "block" }}
          />
          {/* Inner vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
        </div>

        {/* Loading overlay */}
        {!allLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90">
            <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mb-4" />
            <p className="text-slate-400 animate-pulse text-sm">
              Loading frames… {loadingPercent}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
