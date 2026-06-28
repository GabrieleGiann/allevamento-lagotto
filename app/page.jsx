import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ValueStrip from "@/components/ValueStrip";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGalleryItems } from "@/lib/wordpress";

// Rigenerazione statica incrementale: se colleghi WordPress, i contenuti si
// aggiornano automaticamente senza ricostruire tutto il sito.
export const revalidate = 60;

export default async function Home() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery items={galleryItems} />
        <ValueStrip />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
