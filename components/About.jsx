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
          Siamo un <strong>allevamento amatoriale</strong> dove passione e selezione si incontrano.
          Dedichiamo cura a un massimo di <strong>due cucciolate all&apos;anno</strong>, scegliendo
          soggetti eccellenti per bellezza morfologica e attitudine al lavoro.
        </p>
        <p className="mt-4 text-truffle/80 text-lg leading-relaxed">
          Addestriamo i nostri cani alla <strong>cerca del tartufo</strong>, trasformando l&apos;istinto
          naturale in un&apos;abilità precisa; grazie a loro raccogliamo e, in via occasionale,
          vendiamo <strong>tartufi freschi</strong> di altissima qualità. Serietà, rispetto per gli
          animali e profonda conoscenza del territorio sono il nostro impegno di ogni giorno.
        </p>
      </Reveal>
    </section>
  );
}
