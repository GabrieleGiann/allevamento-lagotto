// Configurazione centrale del sito.
// Tutti i segnaposto sono qui: modificali una volta sola.
// In ottica WordPress headless, questi valori possono essere sovrascritti
// da Opzioni/ACF lette via API (vedi lib/wordpress.js -> getSiteSettings).
export const siteConfig = {
  siteUrl: "https://www.iltuodominio.it",
  kennelName: "[Nome Allevamento]",
  brand: "Allevamento Lagotto Romagnolo",
  vat: "[00000000000]",
  region: "Campania",
  city: "Montoro (AV)",
  address: "Piazza Michele Pironti, Piano, 83025 Montoro (AV)",
  phone: "+39 379 228 8372",
  phoneHref: "tel:+393792288372",
  // Numero WhatsApp in formato internazionale senza "+", spazi o zeri iniziali
  // (es. 39 per l'Italia seguito dal numero). Usato per il link wa.me.
  whatsapp: "393792288372",
  email: "info@iltuodominio.it",
  mapQuery: "Piazza Michele Pironti, Piano, Montoro AV",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};
