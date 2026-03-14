(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Header = ()=>{
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 50)
            }["Header.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
                  px-6 sm:px-10 md:px-16 transition-all duration-500
                  ${scrolled ? "h-14 backdrop-blur-xl bg-[#020617]/60 border-b border-white/[0.06]" : "h-20 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "flex items-center gap-2 group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg sm:text-xl font-black tracking-tight transition-opacity duration-300",
                    style: {
                        color: "rgba(255,255,255,0.9)"
                    },
                    children: [
                        "Mazhar",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-400",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden sm:flex items-center gap-8",
                children: [
                    "Work",
                    "About",
                    "Contact"
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:text-white/90",
                        style: {
                            color: "rgba(255,255,255,0.45)"
                        },
                        children: item
                    }, item, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "text-[11px] sm:text-xs tracking-[0.15em] uppercase font-semibold px-4 sm:px-5 py-2 rounded-full border border-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30",
                style: {
                    color: "rgba(255,255,255,0.7)"
                },
                children: "Hire me"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/scroll-animation/components/MazharScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MazharScroll",
    ()=>MazharScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
        headline: "Skills\nin Front-End.",
        sub: "Every pixel crafted with intent.",
        cta: null
    },
    {
        from: 0.52,
        to: 0.78,
        align: "right",
        eyebrow: "The blast continues.",
        headline: "All skills\nrevealed.",
        sub: "React · Next.js · MERN Stack .REACTNATIVE",
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
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const framesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const currentFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadedCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [loadedCount, setLoadedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allLoaded, setAllLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [beatOpacities, setBeatOpacities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(BEATS.map({
        "MazharScroll.useState": ()=>0
    }["MazharScroll.useState"]));
    const [scrollHintOpacity, setScrollHintOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    /* ── Draw frame with "cover" fit (fills entire screen, no bars) ── */ const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazharScroll.useCallback[drawFrame]": (index)=>{
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
        }
    }["MazharScroll.useCallback[drawFrame]"], []);
    /* ── Resize canvas (DPR-aware, fills viewport) ── */ const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazharScroll.useCallback[resizeCanvas]": ()=>{
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
        }
    }["MazharScroll.useCallback[resizeCanvas]"], [
        drawFrame
    ]);
    /* ── Preload all frames ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazharScroll.useEffect": ()=>{
            const images = Array.from({
                length: TOTAL_FRAMES
            }, {
                "MazharScroll.useEffect.images": (_, i)=>{
                    const img = new Image();
                    img.src = frameSrc(i + 1);
                    img.onload = ({
                        "MazharScroll.useEffect.images": ()=>{
                            loadedCountRef.current += 1;
                            const count = loadedCountRef.current;
                            setLoadedCount(count);
                            if (i === 0) {
                                requestAnimationFrame({
                                    "MazharScroll.useEffect.images": ()=>drawFrame(0)
                                }["MazharScroll.useEffect.images"]);
                            }
                            if (count === TOTAL_FRAMES) {
                                setAllLoaded(true);
                                requestAnimationFrame({
                                    "MazharScroll.useEffect.images": ()=>drawFrame(currentFrameRef.current)
                                }["MazharScroll.useEffect.images"]);
                            }
                        }
                    })["MazharScroll.useEffect.images"];
                    img.onerror = ({
                        "MazharScroll.useEffect.images": ()=>{
                            loadedCountRef.current += 1;
                            setLoadedCount(loadedCountRef.current);
                            if (loadedCountRef.current === TOTAL_FRAMES) setAllLoaded(true);
                        }
                    })["MazharScroll.useEffect.images"];
                    return img;
                }
            }["MazharScroll.useEffect.images"]);
            framesRef.current = images;
        }
    }["MazharScroll.useEffect"], [
        drawFrame
    ]);
    /* ── Canvas sizing ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MazharScroll.useEffect": ()=>{
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "MazharScroll.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["MazharScroll.useEffect"];
        }
    }["MazharScroll.useEffect"], [
        resizeCanvas
    ]);
    /* ── Scroll → frame + beat opacities ── */ const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", {
        "MazharScroll.useMotionValueEvent": (latest)=>{
            // Frame
            const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(latest * TOTAL_FRAMES));
            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                cancelAnimationFrame(rafRef.current);
                rafRef.current = requestAnimationFrame({
                    "MazharScroll.useMotionValueEvent": ()=>drawFrame(frameIndex)
                }["MazharScroll.useMotionValueEvent"]);
            }
            // Beat text opacities
            setBeatOpacities(BEATS.map({
                "MazharScroll.useMotionValueEvent": (b)=>beatOpacity(latest, b.from, b.to)
            }["MazharScroll.useMotionValueEvent"]));
            // Scroll hint fade
            setScrollHintOpacity(Math.max(0, 1 - latest * 12));
        }
    }["MazharScroll.useMotionValueEvent"]);
    const loadingPercent = Math.round(loadedCount / TOTAL_FRAMES * 100);
    /* ── Alignment CSS ── */ const alignClass = {
        center: "items-center justify-center text-center",
        left: "items-start justify-center text-left",
        right: "items-end justify-center text-right"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full",
        style: {
            height: "400vh",
            background: "#020617"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 w-screen h-screen overflow-hidden",
            style: {
                background: "#020617"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0",
                    style: {
                        display: "block"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                BEATS.map((beat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 flex flex-col pointer-events-none
                        px-6 sm:px-12 md:px-20 lg:px-32 ${alignClass[beat.align]}`,
                        style: {
                            opacity: beatOpacities[i],
                            transition: "opacity 0.05s linear",
                            willChange: "opacity"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4",
                                style: {
                                    color: "rgba(255,255,255,0.55)"
                                },
                                children: beat.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[clamp(2rem,8vw,7rem)] font-black leading-[0.95] tracking-tight whitespace-pre-line",
                                style: {
                                    color: "rgba(255,255,255,0.92)",
                                    textShadow: "0 4px 60px rgba(0,0,0,0.7), 0 0 120px rgba(0,0,0,0.4)"
                                },
                                children: beat.headline
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            beat.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base md:text-lg lg:text-xl max-w-sm md:max-w-md mt-3 sm:mt-4",
                                style: {
                                    color: "rgba(255,255,255,0.58)"
                                },
                                children: beat.sub
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            beat.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pointer-events-auto mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300 cursor-pointer",
                                style: {
                                    color: "rgba(255,255,255,0.9)",
                                    background: "rgba(255,255,255,0.06)"
                                },
                                children: beat.cta
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none",
                    style: {
                        opacity: scrollHintOpacity,
                        transition: "opacity 0.15s"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] sm:text-xs tracking-[0.3em] uppercase",
                            style: {
                                color: "rgba(255,255,255,0.35)"
                            },
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-8 sm:h-10 rounded-full overflow-hidden",
                            style: {
                                background: "rgba(255,255,255,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full animate-[scrollHint_1.5s_ease-in-out_infinite]",
                                style: {
                                    background: "rgba(255,255,255,0.5)",
                                    transform: "translateY(-100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !allLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-50 flex flex-col items-center justify-center gap-5",
                    style: {
                        background: "#020617"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-12 h-12 sm:w-16 sm:h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-t-white/80 border-r-white/10 border-b-transparent border-l-transparent animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-36 sm:w-48 h-px",
                            style: {
                                background: "rgba(255,255,255,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full transition-all duration-150",
                                style: {
                                    width: `${loadingPercent}%`,
                                    background: "rgba(255,255,255,0.6)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 314,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            lineNumber: 323,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 299,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
            lineNumber: 201,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MazharScroll, "95sE+GlCgqn21YXvMHLxsoWvESQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = MazharScroll;
var _c;
__turbopack_context__.k.register(_c, "MazharScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e19ec2cc._.js.map