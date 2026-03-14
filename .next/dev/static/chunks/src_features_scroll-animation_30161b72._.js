(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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

//# sourceMappingURL=src_features_scroll-animation_30161b72._.js.map