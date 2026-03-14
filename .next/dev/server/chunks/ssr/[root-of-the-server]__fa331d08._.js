module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/features/scroll-animation/components/MazharScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MazharScroll",
    ()=>MazharScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ─── Config ─────────────────────────────────────────────── */ const TOTAL_FRAMES = 168;
const pad = (n)=>String(n).padStart(3, "0");
const frameSrc = (i)=>`/video-split/ezgif-frame-${pad(i)}.jpg`;
/* ─── Story beats ─────────────────────────────────────────── */ const BEATS = [
    {
        from: 0,
        to: 0.18,
        align: "center",
        eyebrow: "Front-End Developer",
        headline: "Mazhar.",
        sub: "Scroll to see what's inside.",
        cta: null
    },
    {
        from: 0.22,
        to: 0.48,
        align: "left",
        eyebrow: "The blast begins.",
        headline: "Skills\nemerging.",
        sub: "Every pixel crafted with intent.",
        cta: null
    },
    {
        from: 0.52,
        to: 0.78,
        align: "right",
        eyebrow: "The blast continues.",
        headline: "All skills\nrevealed.",
        sub: "React · Next.js · Motion · Canvas",
        cta: null
    },
    {
        from: 0.82,
        to: 1.0,
        align: "center",
        eyebrow: "The full picture.",
        headline: "Let's build\ntogether.",
        sub: null,
        cta: "Get in touch →"
    }
];
/* ─── Beat opacity helper ────────────────────────────────── */ function beatOpacity(progress, from, to) {
    const fadeLen = 0.06;
    if (progress < from || progress > to) return 0;
    const fadeIn = Math.min(1, (progress - from) / fadeLen);
    const fadeOut = Math.min(1, (to - progress) / fadeLen);
    return Math.min(fadeIn, fadeOut);
}
const MazharScroll = ()=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const framesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const currentFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadedCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [loadedCount, setLoadedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allLoaded, setAllLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [beatOpacities, setBeatOpacities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(BEATS.map(()=>0));
    const [scrollHintOpacity, setScrollHintOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    /* ── Draw frame with "cover" fit (fills entire screen, no bars) ── */ const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
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
    /* ── Resize canvas (DPR-aware, fills viewport) ── */ const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, [
        drawFrame
    ]);
    /* ── Preload all frames ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const images = Array.from({
            length: TOTAL_FRAMES
        }, (_, i)=>{
            const img = new Image();
            img.src = frameSrc(i + 1);
            img.onload = ()=>{
                loadedCountRef.current += 1;
                const count = loadedCountRef.current;
                setLoadedCount(count);
                if (i === 0) {
                    requestAnimationFrame(()=>drawFrame(0));
                }
                if (count === TOTAL_FRAMES) {
                    setAllLoaded(true);
                    requestAnimationFrame(()=>drawFrame(currentFrameRef.current));
                }
            };
            img.onerror = ()=>{
                loadedCountRef.current += 1;
                setLoadedCount(loadedCountRef.current);
                if (loadedCountRef.current === TOTAL_FRAMES) setAllLoaded(true);
            };
            return img;
        });
        framesRef.current = images;
    }, [
        drawFrame
    ]);
    /* ── Canvas sizing ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return ()=>window.removeEventListener("resize", resizeCanvas);
    }, [
        resizeCanvas
    ]);
    /* ── Scroll → frame + beat opacities ── */ const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", (latest)=>{
        // Frame
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(latest * TOTAL_FRAMES));
        if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(()=>drawFrame(frameIndex));
        }
        // Beat text opacities
        setBeatOpacities(BEATS.map((b)=>beatOpacity(latest, b.from, b.to)));
        // Scroll hint fade
        setScrollHintOpacity(Math.max(0, 1 - latest * 12));
    });
    const loadingPercent = Math.round(loadedCount / TOTAL_FRAMES * 100);
    /* ── Alignment CSS ── */ const alignClass = {
        center: "items-center justify-center text-center",
        left: "items-start justify-center text-left",
        right: "items-end justify-center text-right"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full",
        style: {
            height: "400vh",
            background: "#020617"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 w-screen h-screen overflow-hidden",
            style: {
                background: "#020617"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0",
                    style: {
                        display: "block"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                BEATS.map((beat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 flex flex-col pointer-events-none
                        px-6 sm:px-12 md:px-20 lg:px-32 ${alignClass[beat.align]}`,
                        style: {
                            opacity: beatOpacities[i],
                            transition: "opacity 0.05s linear",
                            willChange: "opacity"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4",
                                style: {
                                    color: "rgba(255,255,255,0.55)"
                                },
                                children: beat.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[clamp(2rem,8vw,7rem)] font-black leading-[0.95] tracking-tight whitespace-pre-line",
                                style: {
                                    color: "rgba(255,255,255,0.92)",
                                    textShadow: "0 4px 60px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.4)"
                                },
                                children: beat.headline
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            beat.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base md:text-lg lg:text-xl max-w-sm md:max-w-md mt-3 sm:mt-4",
                                style: {
                                    color: "rgba(255,255,255,0.58)"
                                },
                                children: beat.sub
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            beat.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pointer-events-auto mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300 cursor-pointer",
                                style: {
                                    color: "rgba(255,255,255,0.9)",
                                    background: "rgba(255,255,255,0.06)"
                                },
                                children: beat.cta
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none",
                    style: {
                        opacity: scrollHintOpacity,
                        transition: "opacity 0.15s"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] sm:text-xs tracking-[0.3em] uppercase",
                            style: {
                                color: "rgba(255,255,255,0.35)"
                            },
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-8 sm:h-10 rounded-full overflow-hidden",
                            style: {
                                background: "rgba(255,255,255,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full animate-[scrollHint_1.5s_ease-in-out_infinite]",
                                style: {
                                    background: "rgba(255,255,255,0.5)",
                                    transform: "translateY(-100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !allLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-50 flex flex-col items-center justify-center gap-5",
                    style: {
                        background: "#020617"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-12 h-12 sm:w-16 sm:h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-t-white/80 border-r-white/10 border-b-transparent border-l-transparent animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-36 sm:w-48 h-px",
                            style: {
                                background: "rgba(255,255,255,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full transition-all duration-150",
                                style: {
                                    width: `${loadingPercent}%`,
                                    background: "rgba(255,255,255,0.6)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 291,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] sm:text-xs tracking-[0.3em] uppercase tabular-nums",
                            style: {
                                color: "rgba(255,255,255,0.35)"
                            },
                            children: [
                                loadingPercent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa331d08._.js.map