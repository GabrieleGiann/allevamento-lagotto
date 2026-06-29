import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery
  )}&z=15&output=embed`;
  return (
    <section id="dove-siamo" className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-soft border-4 border-cream">
            <iframe
              title="Mappa dell'allevamento — Piazza Michele Pironti, Piano, Montoro (AV)"
              className="map-earthy w-full h-[340px] sm:h-[420px]"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm text-truffle/60">
            Ci troviamo in <strong>{siteConfig.address}</strong>. Riceviamo su appuntamento.
          </p>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="text-moss font-semibold tracking-wide uppercase text-sm mb-3">Territorio</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-forest-dark leading-tight">
            Dove Nascono i Nostri Lagotti: Nel Cuore della Cerca
          </h2>
          <p className="mt-5 text-truffle/80 text-lg leading-relaxed">
            Ci troviamo a <strong>Montoro, nel cuore dell&apos;Irpinia</strong>, in un territorio
            fatto di boschi, querce e sentieri umidi: l&apos;ambiente naturale del tartufo. Qui i
            cuccioli imparano fin da piccoli a muoversi sul terreno reale, sviluppando fiuto,
            sicurezza e quella complicità con l&apos;uomo che rende il Lagotto un compagno di cerca
            insostituibile.
          </p>
          <div className="mt-6 rounded-xl bg-cream/70 border border-bark/20 p-5 flex gap-4 items-start">
            <span className="text-2xl shrink-0" aria-hidden="true">📅</span>
            <p className="text-truffle/85 leading-relaxed">
              <strong>Riceviamo solo su appuntamento</strong> per garantire la massima tranquillità ai
              nostri cani e dedicarti tutto il tempo necessario per conoscerci.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
