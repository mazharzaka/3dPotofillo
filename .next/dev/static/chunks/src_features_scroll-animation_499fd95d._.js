(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
        headline: "Skills emerging.",
        sub: "Every pixel crafted with intent.",
        cta: null
    },
    {
        from: 0.52,
        to: 0.78,
        align: "right",
        eyebrow: "The blast continues.",
        headline: "All skills revealed.",
        sub: "React · Next.js · Motion · Canvas",
        cta: null
    },
    {
        from: 0.82,
        to: 1.0,
        align: "center",
        eyebrow: "The full picture.",
        headline: "Let's build together.",
        sub: null,
        cta: "Get in touch →"
    }
];
/* ─── Util: ease in/out opacity for a beat ───────────────── */ function beatOpacity(progress, from, to) {
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
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [loadedCount, setLoadedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allLoaded, setAllLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [beatOpacities, setBeatOpacities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(BEATS.map({
        "MazharScroll.useState": ()=>0
    }["MazharScroll.useState"]));
    /* ── Draw a single frame with "contain" fit ── */ const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazharScroll.useCallback[drawFrame]": (index)=>{
            const canvas = canvasRef.current;
            const img = framesRef.current[index];
            if (!canvas || !img || !img.complete || !img.naturalWidth) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;
            const scale = Math.min(cw / iw, ch / ih);
            const dw = iw * scale;
            const dh = ih * scale;
            const dx = (cw - dw) / 2;
            const dy = (ch - dh) / 2;
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, dx, dy, dw, dh);
        }
    }["MazharScroll.useCallback[drawFrame]"], []);
    /* ── Resize canvas (DPR-aware) ── */ const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MazharScroll.useCallback[resizeCanvas]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            // Reset transform before resize
            const ctx = canvas.getContext("2d");
            if (ctx) ctx.setTransform(1, 0, 0, 1, 0, 0);
            const dpr = window.devicePixelRatio ?? 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
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
                            if (i === 0) drawFrame(0);
                            if (count === TOTAL_FRAMES) {
                                setAllLoaded(true);
                                drawFrame(currentFrameRef.current);
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
    /* ── Scroll progress → frame + beat opacities ── */ const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", {
        "MazharScroll.useMotionValueEvent": (latest)=>{
            progressRef.current = latest;
            // Frame index
            const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(latest * TOTAL_FRAMES));
            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                cancelAnimationFrame(rafRef.current);
                rafRef.current = requestAnimationFrame({
                    "MazharScroll.useMotionValueEvent": ()=>drawFrame(frameIndex)
                }["MazharScroll.useMotionValueEvent"]);
            }
            // Text beat opacities
            const opacities = BEATS.map({
                "MazharScroll.useMotionValueEvent.opacities": (b)=>beatOpacity(latest, b.from, b.to)
            }["MazharScroll.useMotionValueEvent.opacities"]);
            setBeatOpacities(opacities);
        }
    }["MazharScroll.useMotionValueEvent"]);
    const loadingPercent = Math.round(loadedCount / TOTAL_FRAMES * 100);
    /* ── Align classes per beat ── */ const alignClass = {
        center: "items-center text-center",
        left: "items-start text-left pl-8 md:pl-20",
        right: "items-end text-right pr-8 md:pr-20"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full h-[400vh]",
        style: {
            background: "#020617"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 w-full h-screen overflow-hidden",
            style: {
                background: "#020617"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0 w-full h-full",
                    style: {
                        display: "block"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                BEATS.map((beat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 flex flex-col justify-center gap-4 pointer-events-none
                        ${alignClass[beat.align]}`,
                        style: {
                            opacity: beatOpacities[i],
                            transition: "opacity 0.05s linear"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs md:text-sm font-semibold tracking-[0.25em] uppercase",
                                style: {
                                    color: "rgba(255,255,255,0.55)",
                                    fontFamily: "'Inter', 'SF Pro Display', sans-serif"
                                },
                                children: beat.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl md:text-8xl font-black leading-none tracking-tight",
                                style: {
                                    color: "rgba(255,255,255,0.92)",
                                    fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                                    textShadow: "0 0 80px rgba(0,0,0,0.8)"
                                },
                                children: beat.headline
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            beat.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base md:text-xl max-w-md",
                                style: {
                                    color: "rgba(255,255,255,0.58)",
                                    fontFamily: "'Inter', sans-serif"
                                },
                                children: beat.sub
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            beat.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pointer-events-auto mt-4 px-8 py-4 rounded-full text-sm font-semibold border border-white/20 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all duration-200",
                                style: {
                                    color: "rgba(255,255,255,0.9)",
                                    fontFamily: "'Inter', sans-serif",
                                    background: "rgba(255,255,255,0.05)"
                                },
                                children: beat.cta
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none",
                    style: {
                        opacity: Math.max(0, 1 - progressRef.current * 10)
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs tracking-widest uppercase",
                            style: {
                                color: "rgba(255,255,255,0.35)"
                            },
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-10 rounded-full overflow-hidden",
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
                                lineNumber: 258,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !allLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-50 flex flex-col items-center justify-center gap-6",
                    style: {
                        background: "#020617"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-16 h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-t-white/90 border-r-white/20 border-b-transparent border-l-transparent animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-48 h-px",
                            style: {
                                background: "rgba(255,255,255,0.1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full transition-all duration-100",
                                style: {
                                    width: `${loadingPercent}%`,
                                    background: "rgba(255,255,255,0.7)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs tracking-widest uppercase tabular-nums",
                            style: {
                                color: "rgba(255,255,255,0.4)"
                            },
                            children: [
                                loadingPercent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/scroll-animation/components/MazharScroll.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MazharScroll, "Rln2EEs2YOt0E6RoUiy6/KIClac=", false, function() {
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
"[project]/src/features/scroll-animation/hooks/useScrollParallax.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollParallax",
    ()=>useScrollParallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useScrollParallax = ({ speed, baseRotation })=>{
    _s();
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Negative gravity parallax: as scroll goes down (increases), y goes up (negative value)
    const yRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        1000
    ], [
        0,
        -speed * 100
    ]);
    // Rotation: slightly rotate based on scroll to simulate floating in water
    const rotationRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        1000
    ], [
        baseRotation,
        baseRotation + speed * 10
    ]);
    // Apply Ease-Out quintic-like spring physics for an organic feel.
    const springConfig = {
        mass: 0.1,
        stiffness: 50,
        damping: 20
    };
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(yRaw, springConfig);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rotationRaw, springConfig);
    // If the user prefers reduced motion, return static values instead of the spring transforms
    if (shouldReduceMotion) {
        return {
            y: 0,
            rotate: baseRotation
        };
    }
    return {
        y,
        rotate
    };
};
_s(useScrollParallax, "AG+O4rcHDUU33VXJmFqSObipwRM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/scroll-animation/components/FloatingElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingElement",
    ()=>FloatingElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scroll$2d$animation$2f$hooks$2f$useScrollParallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/scroll-animation/hooks/useScrollParallax.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FloatingElement = ({ src, alt, speed, baseRotation, className = "", scale = 1 })=>{
    _s();
    const { y, rotate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scroll$2d$animation$2f$hooks$2f$useScrollParallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollParallax"])({
        speed,
        baseRotation
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `absolute ${className}`,
        style: {
            y,
            rotate,
            scale
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-24 h-24 md:w-32 md:h-32 drop-shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                className: "object-contain w-full h-full"
            }, void 0, false, {
                fileName: "[project]/src/features/scroll-animation/components/FloatingElement.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/features/scroll-animation/components/FloatingElement.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/scroll-animation/components/FloatingElement.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FloatingElement, "muoCK0Fhb/M1xdxJJZasoekFJlY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scroll$2d$animation$2f$hooks$2f$useScrollParallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollParallax"]
    ];
});
_c = FloatingElement;
var _c;
__turbopack_context__.k.register(_c, "FloatingElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollParallaxSection",
    ()=>ScrollParallaxSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scroll$2d$animation$2f$components$2f$FloatingElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/scroll-animation/components/FloatingElement.tsx [app-client] (ecmascript)");
"use client";
;
;
// Pre-defined array of floating logos
const FLOATING_ELEMENTS = [
    {
        id: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        alt: "React",
        speed: 1.5,
        baseRotation: -10,
        className: "top-[20%] left-[10%]",
        scale: 1.2
    },
    {
        id: "nextjs",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        alt: "Next.js",
        speed: 2.5,
        baseRotation: 15,
        className: "top-[40%] right-[15%]",
        scale: 1.5
    },
    {
        id: "typescript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        speed: 1.2,
        baseRotation: -5,
        className: "top-[60%] left-[25%]",
        scale: 0.9
    },
    {
        id: "tailwind",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Tailwind CSS",
        speed: 3.0,
        baseRotation: 25,
        className: "bottom-[20%] right-[30%]",
        scale: 1.1
    },
    {
        id: "framer",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
        alt: "Framer Motion",
        speed: 0.8,
        baseRotation: 5,
        className: "top-[10%] right-[40%]",
        scale: 0.8
    }
];
const ScrollParallaxSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-[150vh] bg-slate-950 overflow-hidden flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 text-center text-white px-4 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent",
                        children: "Magical Frontend"
                    }, void 0, false, {
                        fileName: "[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto",
                        children: "Scroll down to experience the negative gravity parallax effect."
                    }, void 0, false, {
                        fileName: "[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: FLOATING_ELEMENTS.map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$scroll$2d$animation$2f$components$2f$FloatingElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                        ...el
                    }, el.id, false, {
                        fileName: "[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/scroll-animation/components/ScrollParallaxSection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ScrollParallaxSection;
var _c;
__turbopack_context__.k.register(_c, "ScrollParallaxSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/scroll-animation/components/VideoScrollSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoScrollSection",
    ()=>VideoScrollSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TOTAL_FRAMES = 168;
const FRAME_BASE = "/mazharFrames/ezgif-frame-";
/** Zero-pads a number to 3 digits, e.g. 1 → "001" */ const pad = (n)=>String(n).padStart(3, "0");
/** Build the src for the nth frame (1-indexed) */ const frameSrc = (index)=>`${FRAME_BASE}${pad(index)}.jpg`;
const VideoScrollSection = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const framesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const currentFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadedCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [loadedCount, setLoadedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allLoaded, setAllLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Draw a specific frame (0-indexed) onto the canvas using "contain" fit
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoScrollSection.useCallback[drawFrame]": (index)=>{
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
        }
    }["VideoScrollSection.useCallback[drawFrame]"], []);
    // Resize canvas to match its CSS size (device pixel ratio aware)
    const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoScrollSection.useCallback[resizeCanvas]": ()=>{
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
        }
    }["VideoScrollSection.useCallback[resizeCanvas]"], [
        drawFrame
    ]);
    // Preload all frames
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoScrollSection.useEffect": ()=>{
            const images = [];
            framesRef.current = images;
            for(let i = 0; i < TOTAL_FRAMES; i++){
                const img = new Image();
                img.src = frameSrc(i + 1); // frames are 1-indexed filenames
                img.onload = ({
                    "VideoScrollSection.useEffect": ()=>{
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
                    }
                })["VideoScrollSection.useEffect"];
                img.onerror = ({
                    "VideoScrollSection.useEffect": ()=>{
                        // Still count it so the spinner can complete even on missing frames
                        loadedCountRef.current += 1;
                        setLoadedCount(loadedCountRef.current);
                        if (loadedCountRef.current === TOTAL_FRAMES) setAllLoaded(true);
                    }
                })["VideoScrollSection.useEffect"];
                images.push(img);
            }
        }
    }["VideoScrollSection.useEffect"], [
        drawFrame
    ]);
    // Keep canvas sized correctly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoScrollSection.useEffect": ()=>{
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "VideoScrollSection.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["VideoScrollSection.useEffect"];
        }
    }["VideoScrollSection.useEffect"], [
        resizeCanvas
    ]);
    // Track scroll progress & map to frame index
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", {
        "VideoScrollSection.useMotionValueEvent": (latest)=>{
            if (shouldReduceMotion) return;
            const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(latest * TOTAL_FRAMES));
            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                drawFrame(frameIndex);
            }
        }
    }["VideoScrollSection.useMotionValueEvent"]);
    const loadingPercent = Math.round(loadedCount / TOTAL_FRAMES * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full h-[800vh] bg-slate-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden gap-6 px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-20 text-center pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tracking-tight drop-shadow-2xl mb-3",
                            children: "Scroll to Animate"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-xl text-slate-400 max-w-lg drop-shadow-md",
                            children: "Scroll ↓ advance ·  Stop = pause ·  Scroll ↑ rewind"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden z-10 bg-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "w-full h-full",
                            style: {
                                display: "block"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !allLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 animate-pulse text-sm",
                            children: [
                                "Loading frames… ",
                                loadingPercent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/scroll-animation/components/VideoScrollSection.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VideoScrollSection, "KnLHgD5rhbY6rRfelFcUKDAqwyw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = VideoScrollSection;
var _c;
__turbopack_context__.k.register(_c, "VideoScrollSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_scroll-animation_499fd95d._.js.map