"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest-dark/95 backdrop-blur shadow-soft" : ""
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between"
        aria-label="Navigazione principale"
      >
        <a
          href="#hero"
          className="flex items-center gap-2 text-cream font-heading text-lg sm:text-xl font-semibold tracking-tight"
        >
          <span aria-hidden="true" className="text-2xl">🐾</span>
          <span>
            Allevamento Lagotto <span className="hidden sm:inline">Romagnolo</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-cream/90">
          <a href="#gallery" className="hover:text-cream transition-colors">I nostri cani</a>
          <a href="#dove-siamo" className="hover:text-cream transition-colors">Dove siamo</a>
          <a
            href="#contatti"
            className="px-4 py-2 rounded-full bg-cream text-forest-dark font-semibold hover:bg-white transition-colors"
          >
            Contattaci
          </a>
        </div>

        <button
          className="md:hidden text-cream p-2 -mr-2"
          aria-label={menuOpen ? "Chiudi il menù" : "Apri il menù"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden bg-forest-dark/98 backdrop-blur border-t border-cream/10 ${menuOpen ? "" : "hidden"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-1 text-cream">
          <a href="#gallery" className="py-3 border-b border-cream/10" onClick={() => setMenuOpen(false)}>I nostri cani</a>
          <a href="#dove-siamo" className="py-3 border-b border-cream/10" onClick={() => setMenuOpen(false)}>Dove siamo</a>
          <a href="#contatti" className="py-3 font-semibold" onClick={() => setMenuOpen(false)}>Contattaci</a>
        </div>
      </div>
    </header>
  );
}
