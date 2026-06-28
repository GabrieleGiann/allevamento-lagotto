"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { galleryItems as fallbackItems, galleryFilters } from "@/lib/gallery-data";

export default function Gallery({ items }) {
  const data = items && items.length ? items : fallbackItems;
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null); // item aperto nel lightbox
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  const visibleItems = data.filter(
    (it) => filter === "all" || it.category === filter
  );

  // Gestione tasto ESC e scroll-lock quando il lightbox è aperto
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const openLightbox = (item, e) => {
    lastTrigger.current = e.currentTarget;
    setActive(item);
  };
  const closeLightbox = () => {
    setActive(null);
    lastTrigger.current?.focus();
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-moss font-semibold tracking-wide uppercase text-sm mb-3">Galleria</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-forest-dark leading-tight">
            I Nostri Cani da Tartufo: Linee di Sangue Selezionate
          </h2>
          <p className="mt-5 text-truffle/80 text-lg leading-relaxed">
            Ogni cucciolo nasce da una <strong>selezione genetica del Lagotto Romagnolo</strong> attenta e
            responsabile: scegliamo i riproduttori per attitudine alla cerca, equilibrio caratteriale e
            salute. L&apos;addestramento precoce — il gioco con l&apos;odore del tartufo già nelle prime
            settimane — fa la differenza tra un cane comune e un vero{" "}
            <strong>cane da tartufo addestrato</strong>.
          </p>
        </Reveal>

        {/* Filtri */}
        <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filtra la galleria">
          {galleryFilters.map((f) => {
            const on = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={on}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-colors min-h-[44px] ${
                  on
                    ? "bg-forest text-cream border-forest"
                    : "bg-transparent text-forest-dark border-bark/30 hover:border-forest"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Griglia */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleItems.map((it) => (
            <button
              key={it.id}
              onClick={(e) => openLightbox(it, e)}
              className="gallery-item group relative rounded-2xl overflow-hidden shadow-soft text-left bg-bark-dark"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={it.image}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="absolute top-3 left-3 bg-cream/95 text-forest-dark text-xs font-semibold px-3 py-1 rounded-full">
                {it.badge}
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-truffle/85 to-transparent p-4 pt-10">
                <span className="block text-cream font-heading text-lg font-semibold">{it.title}</span>
                <span className="block text-cream/80 text-sm">{it.subtitle}</span>
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-truffle/55 italic">
          Le schede tecniche e le foto sono d&apos;esempio: aggiorna nomi, certificazioni e
          disponibilità con i dati reali dei tuoi soggetti.
        </p>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-truffle/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lb-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="bg-cream rounded-2xl max-w-4xl w-full max-h-[90svh] overflow-auto shadow-soft grid md:grid-cols-2">
            <div className="relative w-full h-64 md:h-auto md:min-h-[420px]">
              <Image src={active.image} alt={active.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover md:rounded-l-2xl" />
            </div>
            <div className="p-6 sm:p-8 relative">
              <button
                ref={closeRef}
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-truffle/10 hover:bg-truffle/20 flex items-center justify-center text-truffle"
                aria-label="Chiudi"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <h3 id="lb-title" className="font-heading text-2xl font-semibold text-forest-dark pr-10">
                {active.title}
              </h3>
              <p className="mt-3 text-truffle/80 leading-relaxed">{active.desc}</p>
              <dl className="mt-6 space-y-3">
                {active.meta.map((m) => (
                  <div key={m.l} className="flex justify-between gap-4 border-b border-bark/15 pb-2">
                    <dt className="text-truffle/60 text-sm">{m.l}</dt>
                    <dd className="font-semibold text-sm text-right">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contatti"
                onClick={closeLightbox}
                className="mt-7 inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-dark text-cream font-semibold px-6 py-3 rounded-full transition-colors min-h-[44px]"
              >
                Richiedi informazioni
              </a>
              {active.credit && (
                <p className="mt-5 text-xs text-truffle/45">
                  Foto: {active.credit.author} — {active.credit.license} ({active.credit.source}). Immagine di esempio.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
