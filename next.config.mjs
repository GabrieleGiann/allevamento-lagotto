/** @type {import('next').NextConfig} */

// Quando si crea il pacchetto statico per Hostinger si lancia con
// STATIC_EXPORT=1 (vedi README). In quel caso il sito viene esportato come
// file HTML statici nella cartella "out/", con immagini non ottimizzate
// (necessario senza un server Node). Su Vercel invece la build resta completa.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: "export" } : {}),
  images: {
    // Le immagini sono locali in /public. Quando collegherai WordPress (headless),
    // aggiungi qui il dominio del media server, es:
    // remotePatterns: [{ protocol: "https", hostname: "cms.iltuodominio.it" }],
    formats: ["image/avif", "image/webp"],
    // L'export statico non può ottimizzare le immagini lato server.
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
