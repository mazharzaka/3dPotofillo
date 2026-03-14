"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
                  px-6 sm:px-10 md:px-16 transition-all duration-500
                  ${scrolled
                    ? "h-14 backdrop-blur-xl bg-[#020617]/60 border-b border-white/[0.06]"
                    : "h-20 bg-transparent"
                  }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <span
          className="text-lg sm:text-xl font-black tracking-tight transition-opacity duration-300"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Mazhar
          <span className="text-blue-400">.</span>
        </span>
      </a>

      {/* Nav */}
      <nav className="hidden sm:flex items-center gap-8">
        {["Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300
                       hover:text-white/90"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#"
        className="text-[11px] sm:text-xs tracking-[0.15em] uppercase font-semibold px-4 sm:px-5 py-2 rounded-full
                   border border-white/15 backdrop-blur-sm transition-all duration-300
                   hover:bg-white/10 hover:border-white/30"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        Hire me
      </a>
    </header>
  );
};
