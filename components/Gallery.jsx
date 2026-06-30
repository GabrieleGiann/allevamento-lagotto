"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { galleryItems as fallbackItems } from "@/lib/gallery-data";

export default function Gallery({ items }) {
  const data = items && items.length ? items : fallbackItems;
  const [index, setIndex] = useState(null); // indice della foto aperta, null = chiuso

  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % data.length)),
    [data.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + data.length) % data.length)),
    [data.length]
  );

  // Tastiera (frecce + ESC) e blocco dello scroll quando è aperto
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  const current = isOpen ? data[index] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-moss font-semibold tracking-wide uppercase text-sm mb-3">Galleria</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-forest-dark leading-tight">
            I Nostri Lagotti da Tartufo
          </h2>
          <p className="mt-5 text-truffle/80 text-lg leading-relaxed">
            Uno sguardo ai nostri cani e ai loro momenti nel bosco. Tocca una foto per aprirla e
            scorrere la galleria.
          </p>
        </Reveal>

        {/* Griglia foto */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.map((it, i) => (
            <button
              key={it.id}
              onClick={() => setIndex(i)}
              aria-label={`Apri foto: ${it.alt}`}
              className="gallery-item group relative rounded-xl overflow-hidden shadow-soft bg-bark-dark aspect-square"
            >
              <Image
                src={it.image}
                alt={it.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox foto a tutto schermo */}
      {isOpen && current && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-truffle/95 backdrop-blur-sm select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${index + 1} di ${data.length}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Chiudi */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-cream/15 hover:bg-cream/25 flex items-center justify-center text-cream"
            aria-label="Chiudi"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Precedente */}
          <button
            onClick={prev}
            className="absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-cream/15 hover:bg-cream/25 flex items-center justify-center text-cream"
            aria-label="Foto precedente"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Immagine — click = foto successiva (scorri al click) */}
          <button
            onClick={next}
            className="relative w-full h-full max-w-5xl max-h-[82svh] mx-12 sm:mx-20 cursor-pointer"
            aria-label="Foto successiva"
          >
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </button>

          {/* Successiva */}
          <button
            onClick={next}
            className="absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-cream/15 hover:bg-cream/25 flex items-center justify-center text-cream"
            aria-label="Foto successiva"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Contatore + crediti (attribuzione richiesta per le foto con licenza) */}
          <div className="absolute bottom-4 inset-x-0 z-10 text-center px-4">
            <p className="text-cream/80 text-sm font-medium">
              {index + 1} / {data.length}
            </p>
            {current.credit && (
              <p className="mt-1 text-cream/45 text-xs">
                Foto: {current.credit.author} — {current.credit.license} ({current.credit.source})
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
