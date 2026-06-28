# Allevamento Lagotto Romagnolo da Tartufo — Sito (Next.js)

Landing page in **Next.js 14 (App Router)** + **Tailwind CSS**, ottimizzata per SEO e pronta per la presentazione. Le immagini sono già incluse in `public/images`.

## Avvio rapido

```bash
cd lagotto-site
npm install
npm run dev
```

Apri http://localhost:3000

Per la build di produzione:

```bash
npm run build
npm start
```

## Struttura

```
app/
  layout.jsx     -> font (Lora + Inter), metadata SEO, JSON-LD LocalBusiness
  page.jsx       -> composizione delle sezioni
  globals.css    -> Tailwind + stili custom
components/      -> Header, Hero, Gallery (+ lightbox), ValueStrip, Location, Contact, Footer, Reveal
lib/
  gallery-data.js -> contenuti della galleria (facile da sostituire con dati WordPress)
public/
  images/        -> foto ottimizzate
  robots.txt, sitemap.xml
```

## Cosa personalizzare (segnaposto)

**Quasi tutto è in un unico file: [`lib/site-config.js`](lib/site-config.js)**
(nome allevamento, P.IVA, telefono, email, social, regione, query mappa, dominio).

Restano negli altri file:
- Foto e schede tecniche → [`lib/gallery-data.js`](lib/gallery-data.js)
- Testi delle sezioni (Hero, Territorio…) → relativi componenti in `components/`

Crediti foto segnaposto: vedi [`CREDITS.md`](CREDITS.md).

## Collegamento a WordPress (headless) — già predisposto

Il layer dati è già pronto in [`lib/wordpress.js`](lib/wordpress.js) con **fallback automatico**:
finché non configuri WordPress, il sito usa i dati locali e funziona normalmente.

Per attivarlo:

1. **CMS**: usa WordPress come headless. Crea un Custom Post Type `cani`
   (es. con il plugin *CPT UI*) e i campi **ACF** usati in `mapWpPost()`:
   `categoria`, `badge`, `sottotitolo`, `descrizione`, `scheda` (ripetitore
   `etichetta`/`valore`), più immagine in evidenza.
2. **.env**: copia `.env.example` in `.env.local` e imposta
   `WORDPRESS_API_URL=https://cms.iltuodominio.it`.
3. **Immagini WP**: aggiungi il dominio del media in `next.config.mjs`
   → `images.remotePatterns`.
4. Fatto: `page.jsx` chiama `getGalleryItems()` e i contenuti arrivano da WP
   (con **ISR**, rigenerazione ogni 60s). Nessun'altra modifica ai componenti.

> Vuoi gestire da WP anche contatti/testi? Esponi un endpoint Opzioni/ACF e
> aggiungi una `getSiteSettings()` in `lib/wordpress.js` che sovrascrive `site-config.js`.

> Nota SEO: title 50-60 caratteri, meta description ~155, un solo H1, immagini con `alt` descrittivo e `next/image` (lazy + formati moderni), dati strutturati `LocalBusiness`, `robots.txt` e `sitemap.xml` inclusi.
