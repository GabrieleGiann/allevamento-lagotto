import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden"
    >
      <Image
        src="/images/lagotto-romagnolo-cucciolo-tartufo-cesto.jpg"
        alt="Cucciolo di Lagotto Romagnolo seduto accanto a un cesto di tartufi in un bosco autunnale"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-truffle/70 via-truffle/55 to-truffle/80"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl px-6 pt-20">
        <p className="inline-block mb-5 text-cream/90 text-xs sm:text-sm tracking-[0.25em] uppercase border border-cream/30 rounded-full px-4 py-1.5">
          Allevamento amatoriale &bull; Selezione da tartufo
        </p>
        <h1 className="font-heading text-cream text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow">
          Allevamento Amatoriale Lagotto Romagnolo: Passione e Tradizione per il Tartufo
        </h1>
        <p className="mt-6 text-cream/90 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Cuccioli selezionati per l&apos;eccellenza nella cerca del tartufo, salute controllata e
          carattere equilibrato.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 bg-cream text-forest-dark font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors shadow-soft min-h-[48px]"
          >
            Scopri le nostre cucciolate
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center bg-transparent border-2 border-cream/70 text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-cream/10 transition-colors min-h-[48px]"
          >
            Richiedi informazioni
          </a>
        </div>
      </div>

      <a
        href="#gallery"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/70 hover:text-cream animate-bounce"
        aria-label="Scorri verso il basso"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
