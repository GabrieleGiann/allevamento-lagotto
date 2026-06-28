"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const [status, setStatus] = useState(null); // { ok: boolean, msg: string }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus({ ok: false, msg: "Compila i campi obbligatori per inviare la richiesta." });
      form.reportValidity();
      return;
    }
    const d = new FormData(form);
    const body = encodeURIComponent(
      `Nome: ${d.get("nome")}\n` +
        `Telefono: ${d.get("telefono")}\n` +
        `Email: ${d.get("email")}\n` +
        `Profilo: ${d.get("profilo")}\n\n` +
        `Messaggio:\n${d.get("messaggio") || ""}`
    );
    window.location.href =
      `mailto:${siteConfig.email}?subject=` +
      encodeURIComponent("Richiesta info cuccioli Lagotto da tartufo") +
      "&body=" +
      body;
    setStatus({
      ok: true,
      msg: "Grazie! Apriamo la tua email per completare l'invio. Ti risponderemo al più presto.",
    });
  };

  const inputClass =
    "w-full rounded-lg border border-bark/30 bg-white px-4 py-3 focus:border-forest focus:ring-1 focus:ring-forest outline-none";

  return (
    <section id="contatti" className="py-20 sm:py-28 bg-forest-dark text-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-10 lg:gap-14">
        <Reveal className="lg:col-span-2">
          <p className="text-moss font-semibold tracking-wide uppercase text-sm mb-3">Contatti</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight">
            Contatta l&apos;Allevamento: Trova il tuo Compagno di Cerca
          </h2>
          <p className="mt-5 text-cream/80 leading-relaxed text-lg">
            Raccontaci le tue esigenze: ti risponderemo il prima possibile per fissare una visita e
            conoscere i nostri cani.
          </p>

          <div className="mt-8 space-y-4">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 group">
              <span className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-cream/20 transition-colors" aria-hidden="true">📞</span>
              <span>
                <span className="block text-cream/60 text-xs uppercase tracking-wide">Telefono</span>
                <span className="font-semibold">{siteConfig.phone}</span>
              </span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
              <span className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-cream/20 transition-colors" aria-hidden="true">✉️</span>
              <span>
                <span className="block text-cream/60 text-xs uppercase tracking-wide">Email</span>
                <span className="font-semibold">{siteConfig.email}</span>
              </span>
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener" aria-label="Seguici su Instagram" className="w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener" aria-label="Seguici su Facebook" className="w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-cream text-truffle rounded-2xl p-6 sm:p-8 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold mb-1.5">
                  Nome <span className="text-bark">*</span>
                </label>
                <input id="nome" name="nome" type="text" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold mb-1.5">
                  Telefono <span className="text-bark">*</span>
                </label>
                <input id="telefono" name="telefono" type="tel" required autoComplete="tel" className={inputClass} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                Email <span className="text-bark">*</span>
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div className="mt-5">
              <label htmlFor="profilo" className="block text-sm font-semibold mb-1.5">
                Sei un cercatore o cerchi un cane da compagnia? <span className="text-bark">*</span>
              </label>
              <select id="profilo" name="profilo" required defaultValue="" className={inputClass}>
                <option value="" disabled>Seleziona…</option>
                <option>Cercatore di tartufi (lavoro)</option>
                <option>Cane da compagnia ed equilibrio in famiglia</option>
                <option>Entrambi: famiglia e cerca</option>
                <option>Altro / informazioni generali</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="messaggio" className="block text-sm font-semibold mb-1.5">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows={4}
                className={`${inputClass} resize-y`}
                placeholder="Raccontaci le tue esigenze, ti risponderemo il prima possibile per fissare una visita."
              />
            </div>
            <div className="mt-5 flex items-start gap-2.5">
              <input id="privacy" name="privacy" type="checkbox" required className="mt-1 w-5 h-5 accent-forest" />
              <label htmlFor="privacy" className="text-sm text-truffle/75">
                Ho letto e accetto la{" "}
                <a href="#" className="underline hover:text-forest">privacy policy</a>.{" "}
                <span className="text-bark">*</span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-forest hover:bg-forest-dark text-cream font-semibold py-3.5 rounded-full transition-colors min-h-[48px]"
            >
              Invia richiesta
            </button>
            {status && (
              <p
                className={`mt-4 text-sm text-center ${status.ok ? "text-forest" : "text-bark"}`}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
