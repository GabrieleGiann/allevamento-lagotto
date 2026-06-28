// ============================================================================
//  LAYER DATI — WordPress headless (con fallback locale)
// ============================================================================
// Finché NON imposti la variabile d'ambiente WORDPRESS_API_URL, il sito usa i
// dati statici di gallery-data.js (così funziona subito, anche in presentazione).
//
// Quando sei pronto a collegare WordPress:
//   1. Crea un file .env.local con:  WORDPRESS_API_URL=https://cms.iltuodominio.it
//   2. In WordPress crea un Custom Post Type "cani" (o usa un plugin tipo CPT UI)
//      con i campi (ACF) usati in mapWpPost() qui sotto.
//   3. Aggiungi il dominio del CMS in next.config.mjs -> images.remotePatterns.
//
// Tutto il resto del sito non cambia: page.jsx chiama getGalleryItems() e basta.
// ============================================================================

import { galleryItems as fallbackItems } from "./gallery-data";

const WP_URL = process.env.WORDPRESS_API_URL;

// Mappa un post WP (REST API con ACF) sulla forma usata dai componenti.
// Adatta i nomi dei campi ACF ai tuoi.
function mapWpPost(post) {
  const acf = post.acf || {};
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    id: post.slug || String(post.id),
    category: acf.categoria || "riproduttori",
    badge: acf.badge || "",
    title: post.title?.rendered || acf.titolo || "",
    subtitle: acf.sottotitolo || "",
    image: media?.source_url || acf.immagine || "",
    width: media?.media_details?.width || 1200,
    height: media?.media_details?.height || 800,
    alt: media?.alt_text || acf.alt || post.title?.rendered || "",
    desc: acf.descrizione || "",
    meta: Array.isArray(acf.scheda)
      ? acf.scheda.map((r) => ({ l: r.etichetta, v: r.valore }))
      : [],
    credit: null, // le foto caricate su WP sono tue → nessuna attribuzione esterna
  };
}

export async function getGalleryItems() {
  if (!WP_URL) return fallbackItems;

  try {
    // CPT "cani" con featured media incluso. Adatta l'endpoint al tuo CPT.
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/cani?_embed&per_page=50&orderby=menu_order&order=asc`,
      { next: { revalidate: 60 } } // ISR: rigenera al massimo ogni 60s
    );
    if (!res.ok) throw new Error(`WP HTTP ${res.status}`);
    const posts = await res.json();
    const items = posts.map(mapWpPost).filter((i) => i.image);
    return items.length ? items : fallbackItems;
  } catch (err) {
    // In caso di CMS irraggiungibile, non rompiamo il sito: usiamo i dati locali.
    console.error("[wordpress] fetch fallito, uso fallback locale:", err.message);
    return fallbackItems;
  }
}
