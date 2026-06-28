/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Le immagini sono locali in /public. Quando collegherai WordPress (headless),
    // aggiungi qui il dominio del media server, es:
    // remotePatterns: [{ protocol: "https", hostname: "cms.iltuodominio.it" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
