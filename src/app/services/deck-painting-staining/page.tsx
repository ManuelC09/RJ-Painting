import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DeckCTA from "@/components/services/deck/DeckCTA";
import DeckFeatures from "@/components/services/deck/DeckFeatures";
import DeckGallery from "@/components/services/deck/DeckGallery";
import DeckHero from "@/components/services/deck/DeckHero";
import DeckIntro from "@/components/services/deck/DeckIntro";
import DeckServices from "@/components/services/deck/DeckServices";

export default function DeckPaintingStainingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DeckHero />
      <DeckIntro />
      <DeckServices />
      <DeckFeatures />
      <DeckGallery />
      <DeckCTA />
      <Footer />
    </main>
  );
}