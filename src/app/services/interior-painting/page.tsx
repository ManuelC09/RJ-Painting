import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InteriorFeatures from "@/components/services/interior/InteriorFeatures";
import InteriorHero from "@/components/services/interior/InteriorHero";
import InteriorIntro from "@/components/services/interior/InteriorIntro";
import InteriorServices from "@/components/services/interior/InteriorServices";
import InteriorGallery from "@/components/services/interior/InteriorGallery";
import InteriorCTA from "@/components/services/interior/InteriorCTA";

export default function InteriorPaintingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InteriorHero />
      <InteriorIntro />
      <InteriorServices />
      <InteriorFeatures />
      <InteriorGallery />
      <InteriorCTA />
      <Footer />
    </main>
  );
}