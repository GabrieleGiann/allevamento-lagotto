import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="chi-siamo" className="py-20 sm:py-28 bg-cream">
      <Reveal className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-moss font-semibold tracking-wide uppercase text-sm mb-3">Chi siamo</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-forest-dark leading-tight">
          Passione e Selezione, con Rispetto per gli Animali
        </h2>
        <p className="mt-6 text-truffle/80 text-lg leading-relaxed">
          Benvenuti nel nostro allevamento amatoriale, dove passione e selezione si incontrano. Ci
          dedichiamo con cura a massimo due cucciolate all&apos;anno, selezionando esemplari eccellenti
          sia per bellezza morfologica che per attitudine al lavoro. Siamo specializzati
          nell&apos;addestramento di cani da tartufo, trasformando l&apos;istinto naturale in
          un&apos;abilità precisa. Grazie ai nostri ausiliari, raccogliamo e vendiamo tartufi freschi
          come prestazione occasionale, garantendo un prodotto genuino e di altissima qualità.
          Scegliere noi significa affidarsi a serietà, rispetto per gli animali e profonda conoscenza
          del territorio. Contattaci per informazioni sui cuccioli disponibili o sulla vendita del
          tartufo!
        </p>
      </Reveal>
    </section>
  );
}
