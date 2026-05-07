import Footer from "@/components/Footer";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <Footer />
    </main>
  );
}