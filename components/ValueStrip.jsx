import Reveal from "./Reveal";

const items = [
  {
    icon: "🧬",
    title: "Salute prima di tutto",
    text: "Genitori testati per displasia (HD/ED) e per le principali patologie genetiche del Lagotto. Trasparenza totale sui certificati.",
  },
  {
    icon: "👃",
    title: "Attitudine alla cerca",
    text: "Selezioniamo per fiuto, concentrazione e voglia di collaborare. L'avvio alla ricerca del tartufo inizia già in cucciolaia.",
  },
  {
    icon: "💛",
    title: "Il valore di un cucciolo",
    text: "Il prezzo di un Lagotto Romagnolo da tartufo riflette test sanitari, pedigree ENCI e cure dei primi mesi. Parliamone insieme, senza sorprese.",
  },
];

export default function ValueStrip() {
  return (
    <section className="py-16 bg-forest text-cream">
      <Reveal className="max-w-5xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.title}>
            <div className="text-4xl mb-3" aria-hidden="true">{it.icon}</div>
            <h3 className="font-heading text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-cream/85 leading-relaxed text-[15px]">{it.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
