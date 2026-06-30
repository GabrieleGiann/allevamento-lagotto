import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const whatsappHref =
    `https://wa.me/${siteConfig.whatsapp}?text=` +
    encodeURIComponent(
      "Ciao! Vorrei informazioni sui cuccioli di Lagotto Romagnolo da tartufo."
    );

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
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3">
          <div className="bg-cream text-truffle rounded-2xl p-6 sm:p-8 shadow-soft flex flex-col items-center text-center">
            <span
              className="w-16 h-16 rounded-full bg-[#25D366]/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.516 5.26l-.999 3.648 3.748-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
              </svg>
            </span>
            <h3 className="mt-5 font-heading text-2xl sm:text-3xl font-semibold leading-tight">
              Scrivici su WhatsApp
            </h3>
            <p className="mt-3 text-truffle/75 leading-relaxed max-w-md">
              Il modo più veloce per avere informazioni sui cuccioli, fissare una visita e
              raccontarci le tue esigenze. Ti rispondiamo direttamente in chat.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-3.5 rounded-full transition-colors min-h-[48px]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.516 5.26l-.999 3.648 3.748-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
              </svg>
              Scrivi su WhatsApp
            </a>
            <p className="mt-4 text-sm text-truffle/60">
              Preferisci chiamare?{" "}
              <a href={siteConfig.phoneHref} className="underline hover:text-forest font-medium">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
