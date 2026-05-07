import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExteriorHero from "@/components/services/exterior/ExteriorHero";
import ExteriorIntro from "@/components/services/exterior/ExteriorIntro";
import ExteriorServices from "@/components/services/exterior/ExteriorServices";
import ExteriorFeatures from "@/components/services/exterior/ExteriorFeatures";
import ExteriorGallery from "@/components/services/exterior/ExteriorGallery";
import ExteriorCTA from "@/components/services/exterior/ExteriorCTA";

export default function InteriorPaintingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
        <ExteriorHero />
        <ExteriorIntro />
        <ExteriorServices />
        <ExteriorFeatures />
        <ExteriorGallery />
        <ExteriorCTA />
      <Footer />
    </main>
  );
}