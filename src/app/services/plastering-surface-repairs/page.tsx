import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlasteringCTA from "@/components/services/plastering/PlasteringCTA";
import PlasteringFeatures from "@/components/services/plastering/PlasteringFeatures";
import PlasteringGallery from "@/components/services/plastering/PlasteringGallery";
import PlasteringHero from "@/components/services/plastering/PlasteringHero";
import PlasteringIntro from "@/components/services/plastering/PlasteringIntro";
import PlasteringServices from "@/components/services/plastering/PlasteringServices";

export default function PlasteringSurfaceRepairsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PlasteringHero />
      <PlasteringIntro />
      <PlasteringServices />
      <PlasteringFeatures />
      <PlasteringGallery />
      <PlasteringCTA />
      <Footer />
    </main>
  );
}