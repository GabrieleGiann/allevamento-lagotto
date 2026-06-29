// Configurazione centrale del sito.
// Tutti i segnaposto sono qui: modificali una volta sola.
// In ottica WordPress headless, questi valori possono essere sovrascritti
// da Opzioni/ACF lette via API (vedi lib/wordpress.js -> getSiteSettings).
export const siteConfig = {
  siteUrl: "https://www.iltuodominio.it",
  kennelName: "[Nome Allevamento]",
  brand: "Allevamento Lagotto Romagnolo",
  vat: "[00000000000]",
  region: "Emilia-Romagna",
  phone: "+39 000 000 0000",
  phoneHref: "tel:+390000000000",
  // Numero WhatsApp in formato internazionale senza "+", spazi o zeri iniziali
  // (es. 39 per l'Italia seguito dal numero). Usato per il link wa.me.
  whatsapp: "390000000000",
  email: "info@iltuodominio.it",
  mapQuery: "Colline Emilia-Romagna",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};
