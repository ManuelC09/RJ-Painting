import Footer from "@/components/Footer";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import Navbar from "@/components/Navbar";

interface GalleryPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function GalleryPage({
  params,
}: GalleryPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />
      <GalleryHero lang={lang} />
      <GalleryGrid lang={lang} />
      <GalleryCTA lang={lang} />
      <Footer />
    </main>
  );
}