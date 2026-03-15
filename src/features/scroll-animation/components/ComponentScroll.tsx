"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

/* ─── Config ─────────────────────────────────────────────── */

/* ─── Component ──────────────────────────────────────────── */
export const ComponentScroll = ({
  totalFrames,
  folder,
  sequences,
  BEATS = [],
}: {
  totalFrames?: number;
  folder?: string;
  sequences?: { folder: string; totalFrames: number }[];
  BEATS?: any[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const loadedCountRef = useRef(0);
  const rafRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [mobileHeight, setMobileHeight] = useState<number | null>(null);
  const [coverScale, setCoverScale] = useState(1);

  const seqs =
    sequences || (folder && totalFrames ? [{ folder, totalFrames }] : []);
  const TOTAL_FRAMES = seqs.reduce((acc, s) => acc + s.totalFrames, 0);
  const scrollHeight = `${seqs.length > 0 ? seqs.length * 400 : 400}vh`;

  const pad = (n: number) => String(n).padStart(3, "0");
  const frameSrc = (i: number) => {
    let currentFrame = i;
    for (const seq of seqs) {
      if (currentFrame <= seq.totalFrames) {
        return `/${seq.folder}/ezgif-frame-${pad(currentFrame)}.jpg`;
      }
      currentFrame -= seq.totalFrames;
    }
    return "";
  };

  /* ─── Story beats ─────────────────────────────────────────── */

  /* ─── Beat opacity helper ────────────────────────────────── */
  function beatOpacity(progress: number, from: number, to: number): number {
    const fadeLen = 0.06;
    if (progress < from || progress > to) return 0;
    const fadeIn = Math.min(1, (progress - from) / fadeLen);
    const fadeOut = Math.min(1, (to - progress) / fadeLen);
    return Math.min(fadeIn, fadeOut);
  }

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
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, cw, ch);
  }, []);

  /* ── Resize canvas (DPR-aware, fills viewport) ── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(1, 0, 0, 1, 0, 0);

    const dpr = window.devicePixelRatio ?? 1;
    const w = window.innerWidth;
    const isMobile = w < 768;

    // Get image dimensions or fallback to 16:9
    const img = framesRef.current[0];
    const iw = img?.naturalWidth || 1920;
    const ih = img?.naturalHeight || 1080;

    // Mobile wrapper matches image aspect ratio exactly
    const h = isMobile ? w * (ih / iw) : window.innerHeight;

    if (isMobile) {
      setMobileHeight(h);
    } else {
      setMobileHeight(null);
    }

    // Set canvas dimensions to fit strictly inside the screen ("contain")
    const containScale = Math.min(w / iw, h / ih);
    const canvasCssWidth = iw * containScale;
    const canvasCssHeight = ih * containScale;

    // Calculate scale factor to make the contained canvas "cover" the screen
    setCoverScale(Math.max(w / canvasCssWidth, h / canvasCssHeight));

    canvas.width = canvasCssWidth * dpr;
    canvas.height = canvasCssHeight * dpr;
    canvas.style.width = canvasCssWidth + "px";
    canvas.style.height = canvasCssHeight + "px";

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
      style={{ height: scrollHeight, background: "#020617" }}
    >
      {/* ── Sticky viewport ── */}
      <div
        className="sticky w-screen flex items-center justify-center bg-transparent"
        style={{
          height: mobileHeight ? `${mobileHeight}px` : "100vh",
          top: mobileHeight ? "50vh" : "0",
          transform: mobileHeight ? "translateY(-50%)" : "none",
        }}
      >
        {/* ── Certificate Background SVG ── */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
            backgroundImage:
              "radial-gradient(#cca362 0.5px, transparent 0.5px), radial-gradient(#cca362 0.5px, #050532 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        >
          {/* Abstract SVG Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-screen flex items-center justify-center">
            <svg
              width="150%"
              height="150%"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              style={{ top: "-25%", left: "-25%" }}
            >
              <g stroke="#91723e" strokeWidth="0.5" fill="none" opacity="0.4">
                <circle cx="50%" cy="50%" r="15%" />
                <circle cx="50%" cy="50%" r="25%" />
                <circle cx="50%" cy="50%" r="35%" />
                <circle cx="50%" cy="50%" r="45%" />
                <circle cx="50%" cy="50%" r="55%" />
                <circle cx="50%" cy="50%" r="65%" />
                <path d="M 0 0 L 100% 100%" strokeDasharray="10,10" />
                <path d="M 100% 0 L 0 100%" strokeDasharray="10,10" />
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Canvas — full bleed, no borders, scaled down at the end */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 mx-auto my-auto z-10"
          style={{
            display: "block",
            scale: useTransform(scrollYProgress, [0.85, 1], [coverScale, 0.6]),
            borderRadius: useTransform(
              scrollYProgress,
              [0.85, 1],
              ["0px", "1.5rem"],
            ),

            transformOrigin: "center center",
            boxShadow: useTransform(
              scrollYProgress,
              [0.85, 1],
              ["0px 0px 0px rgba(0,0,0,0)", "0px 25px 80px rgba(0,0,0,0.8)"],
            ),
          }}
        />

        {/* ── Certificate Overlay Text ── */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
          }}
        >
          <motion.div
            className="absolute left-[-2%] sm:left-[2%] md:left-[4%] flex flex-col justify-center"
            style={{ x: useTransform(scrollYProgress, [0.85, 1], [-80, 0]) }}
          >
            <h1
              style={{ color: "#cca362" }}
              className="text-[2.5rem] text-shadow-md sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase leading-[0.8] tracking-tighter whitespace-nowrap mb-1"
            >
              Digital Egypt
            </h1>
            <h2 className="text-[2.5rem] text-shadow-md sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black text-white uppercase leading-[0.8] tracking-tighter whitespace-nowrap">
              Youth Program
            </h2>
          </motion.div>

          <motion.div
            className="absolute right-[-2%] sm:right-[2%] md:right-[4%] flex flex-col justify-center items-end text-right"
            style={{ x: useTransform(scrollYProgress, [0.85, 1], [80, 0]) }}
          >
            <h1
              style={{ color: "#cca362" }}
              className="text-[1.5rem] text-shadow-md sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase leading-[0.8] tracking-tighter whitespace-nowrap mb-1"
            >
              Mean-Stack
            </h1>
            <h2 className="text-[2.5rem] text-shadow-md sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] font-black text-white uppercase leading-[0.8] tracking-tighter whitespace-nowrap">
              Web Dev
            </h2>
          </motion.div>

          <motion.div
            className="absolute top-[4%] md:top-[6%] h-12 md:h-16 lg:h-20 bg-white w-[90%] md:w-[70%] max-w-5xl flex items-center justify-between px-2 sm:px-4 md:px-10 rounded shadow-xl"
            style={{ y: useTransform(scrollYProgress, [0.85, 1], [-50, 0]) }}
          >
            <div className="flex items-center gap-2 sm:gap-4 md:gap-8 mx-auto w-full justify-around h-full py-1">
              <div className="flex flex-col items-center">
                <span className="text-[#967131]  font-bold text-[6px] sm:text-[8px] md:text-xs uppercase whitespace-nowrap text-center leading-tight">
                  Ministry of Communications
                  <br />
                  and Information Technology
                </span>
              </div>
              <div className="w-px h-[60%] bg-gray-300"></div>
              <span className="text-black font-black text-[7px] sm:text-[9px] md:text-xs uppercase text-teal-800 tracking-wider text-center leading-tight">
                Digital
                <br />
                Egypt
                <br />
                Youth
              </span>
              <div className="w-px h-[60%] bg-gray-300"></div>
              <span className="text-black font-bold text-[8px] sm:text-[10px] md:text-sm text-blue-900 tracking-wider">
                CREATIVA
              </span>
              <div className="w-px h-[60%] bg-gray-300"></div>
              <span className="text-black font-black text-[10px] sm:text-xs md:text-base tracking-widest text-[#577a94]">
                NTI
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[4%] md:bottom-[6%] flex flex-col items-center justify-center w-full"
            style={{ y: useTransform(scrollYProgress, [0.85, 1], [50, 0]) }}
          >
            <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-widest mb-1 md:mb-2 font-sans text-center">
              08/12/2024 - 21/01/2025
            </p>
            <p className="text-[8px] sm:text-xs md:text-lg lg:text-2xl font-bold text-white tracking-[0.2em] font-sans opacity-95 text-center">
              TECHNICAL HRS: 90 - COACHING HRS: 30
            </p>
          </motion.div>
        </motion.div>

        {/* ── Story overlays ── */}
        {BEATS &&
          BEATS?.map((beat, i) => (
            <div
              key={i}
              className={`absolute z-30 inset-0 flex flex-col pointer-events-none
                        px-6 sm:px-12 md:px-20 lg:px-32 ${alignClass[beat.align as keyof typeof alignClass]}`}
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
