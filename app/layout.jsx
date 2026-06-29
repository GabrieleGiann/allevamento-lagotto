import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const SITE_URL = siteConfig.siteUrl;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Allevamento Lagotto Romagnolo da Tartufo | Cuccioli Selezionati",
  description:
    "Allevamento amatoriale di Lagotto Romagnolo da tartufo: cuccioli da linee selezionate, salute controllata e carattere equilibrato per la cerca e la famiglia. Visite su appuntamento.",
  keywords: [
    "allevamento amatoriale Lagotto Romagnolo",
    "cuccioli Lagotto da tartufo",
    "cani da tartufo addestrati",
    "selezione genetica Lagotto Romagnolo",
    "prezzo Lagotto Romagnolo da tartufo",
  ],
  authors: [{ name: "Allevamento Lagotto Romagnolo [Nome Allevamento]" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    title: "Allevamento Lagotto Romagnolo da Tartufo | Cuccioli Selezionati",
    description:
      "Cuccioli di Lagotto Romagnolo selezionati per l'eccellenza nella cerca del tartufo. Salute controllata e carattere equilibrato. Visite su appuntamento.",
    images: [
      {
        url: "/images/og-cover-lagotto-tartufo.jpg",
        width: 1200,
        height: 630,
        alt: "Cucciolo di Lagotto Romagnolo accanto a un cesto di tartufi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allevamento Lagotto Romagnolo da Tartufo",
    description:
      "Cuccioli di Lagotto Romagnolo selezionati per la cerca del tartufo. Visite su appuntamento.",
    images: ["/images/og-cover-lagotto-tartufo.jpg"],
  },
};

export const viewport = {
  themeColor: "#3b4a2f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Allevamento Lagotto Romagnolo da Tartufo [Nome Allevamento]",
  description:
    "Allevamento amatoriale di Lagotto Romagnolo da tartufo. Cuccioli da linee selezionate, salute controllata e carattere equilibrato per la cerca e la famiglia.",
  image: `${SITE_URL}/images/og-cover-lagotto-tartufo.jpg`,
  url: SITE_URL,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "€€",
  areaServed: "Italia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Michele Pironti, Piano",
    addressLocality: "Montoro",
    addressRegion: siteConfig.region,
    postalCode: "83025",
    addressCountry: "IT",
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  knowsAbout: [
    "Lagotto Romagnolo",
    "Cani da tartufo",
    "Cerca del tartufo",
    "Selezione genetica canina",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans text-truffle antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Salta al contenuto
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
