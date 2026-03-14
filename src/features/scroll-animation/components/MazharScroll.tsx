"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

/* ─── Config ─────────────────────────────────────────────── */
const TOTAL_FRAMES = 168;
const pad = (n: number) => String(n).padStart(3, "0");
const frameSrc = (i: number) => `/video-split/ezgif-frame-${pad(i)}.jpg`;

/* ─── Story beats ─────────────────────────────────────────── */
const BEATS = [
  {
    from: 0,
    to: 0.18,
    align: "center" as const,
    eyebrow: "Front-End Developer",
    headline: "Mazhar.",
    sub: "Scroll to see what's inside.",
    cta: null,
  },
  {
    from: 0.22,
    to: 0.48,
    align: "left" as const,
    eyebrow: "The blast begins.",
    headline: "Skills\nin Front-End.",
    sub: "Every pixel crafted with intent.",
    cta: null,
  },
  {
    from: 0.52,
    to: 0.78,
    align: "right" as const,
    eyebrow: "The blast continues.",
    headline: "All skills\nrevealed.",
    sub: "React · Next.js · MERN Stack .REACTNATIVE",
    cta: null,
  },
  {
    from: 0.82,
    to: 1.0,
    align: "center" as const,
    eyebrow: "The full picture.",
    headline: "Let's build\ntogether.",
    sub: null,
    cta: "Get in touch →",
  },
];

/* ─── Beat opacity helper ────────────────────────────────── */
function beatOpacity(progress: number, from: number, to: number): number {
  const fadeLen = 0.06;
  if (progress < from || progress > to) return 0;
  const fadeIn = Math.min(1, (progress - from) / fadeLen);
  const fadeOut = Math.min(1, (to - progress) / fadeLen);
  return Math.min(fadeIn, fadeOut);
}

/* ─── Component ──────────────────────────────────────────── */
export const MazharScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const loadedCountRef = useRef(0);
  const rafRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [beatOpacities, setBeatOpacities] = useState<number[]>(
    BEATS.map(() => 0),
  );
  const [scrollHintOpacity, setScrollHintOpacity] = useState(1);

  /* ── Draw frame with "cover" fit (fills entire screen, no bars) ── */
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio ?? 1;
    // Use CSS pixel dimensions for drawing calculations
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // "cover" — fill entire canvas, crop overflow
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  /* ── Resize canvas (DPR-aware, fills viewport) ── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(1, 0, 0, 1, 0, 0);

    const dpr = window.devicePixelRatio ?? 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    if (ctx) ctx.scale(dpr, dpr);
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  /* ── Preload all frames ── */
  useEffect(() => {
    const images: HTMLImageElement[] = Array.from(
      { length: TOTAL_FRAMES },
      (_, i) => {
        const img = new Image();
        img.src = frameSrc(i + 1);
        img.onload = () => {
          loadedCountRef.current += 1;
          const count = loadedCountRef.current;
          setLoadedCount(count);
          if (i === 0) {
            requestAnimationFrame(() => drawFrame(0));
          }
          if (count === TOTAL_FRAMES) {
            setAllLoaded(true);
            requestAnimationFrame(() => drawFrame(currentFrameRef.current));
          }
        };
        img.onerror = () => {
          loadedCountRef.current += 1;
          setLoadedCount(loadedCountRef.current);
          if (loadedCountRef.current === TOTAL_FRAMES) setAllLoaded(true);
        };
        return img;
      },
    );
    framesRef.current = images;
  }, [drawFrame]);

  /* ── Canvas sizing ── */
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  /* ── Scroll → frame + beat opacities ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Frame
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES),
    );
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
    }

    // Beat text opacities
    setBeatOpacities(BEATS.map((b) => beatOpacity(latest, b.from, b.to)));

    // Scroll hint fade
    setScrollHintOpacity(Math.max(0, 1 - latest * 12));
  });

  const loadingPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  /* ── Alignment CSS ── */
  const alignClass = {
    center: "items-center justify-center text-center",
    left: "items-start justify-center text-left",
    right: "items-end justify-center text-right",
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "400vh", background: "#020617" }}
    >
      {/* ── Sticky full-screen viewport ── */}
      <div
        className="sticky top-0 w-screen h-screen overflow-hidden"
        style={{ background: "#020617" }}
      >
        {/* Canvas — full bleed, no borders, no rounded corners */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ display: "block" }}
        />

        {/* ── Story overlays ── */}
        {BEATS.map((beat, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col pointer-events-none
                        px-6 sm:px-12 md:px-20 lg:px-32 ${alignClass[beat.align]}`}
            style={{
              opacity: beatOpacities[i],
              transition: "opacity 0.05s linear",
              willChange: "opacity",
            }}
          >
            {/* Eyebrow */}
            <span
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {beat.eyebrow}
            </span>

            {/* Headline */}
            <h2
              className="text-[clamp(2rem,8vw,7rem)] font-black leading-[0.95] tracking-tight whitespace-pre-line"
              style={{
                color: "rgba(255,255,255,0.92)",
                textShadow:
                  "0 4px 60px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.4)",
              }}
            >
              {beat.headline}
            </h2>

            {/* Sub */}
            {beat.sub && (
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl max-w-sm md:max-w-md mt-3 sm:mt-4"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                {beat.sub}
              </p>
            )}

            {/* CTA */}
            {beat.cta && (
              <button
                className="pointer-events-auto mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 rounded-full
                           text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md
                           hover:bg-white/10 hover:border-white/40 active:scale-95
                           transition-all duration-300 cursor-pointer"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {beat.cta}
              </button>
            )}
          </div>
        ))}

        {/* ── Scroll hint ── */}
        <div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: scrollHintOpacity, transition: "opacity 0.15s" }}
        >
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-8 sm:h-10 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="w-full h-full animate-[scrollHint_1.5s_ease-in-out_infinite]"
              style={{
                background: "rgba(255,255,255,0.5)",
                transform: "translateY(-100%)",
              }}
            />
          </div>
        </div>

        {/* ── Loading overlay ── */}
        {!allLoaded && (
          <div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-5"
            style={{ background: "#020617" }}
          >
            {/* Spinner */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-0 rounded-full border-2 border-t-white/80 border-r-white/10 border-b-transparent border-l-transparent animate-spin" />
            </div>

            {/* Progress bar */}
            <div
              className="w-36 sm:w-48 h-px"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <div
                className="h-full transition-all duration-150"
                style={{
                  width: `${loadingPercent}%`,
                  background: "rgba(255,255,255,0.6)",
                }}
              />
            </div>

            <span
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase tabular-nums"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {loadingPercent}%
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
