import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import ValueStrip from "@/components/ValueStrip";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGalleryItems } from "@/lib/wordpress";

export default async function Home() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ValueStrip />
        <Gallery items={galleryItems} />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
