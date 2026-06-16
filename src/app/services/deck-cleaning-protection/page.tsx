import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DeckCleaningCTA from "@/components/services/deck-cleaning/DeckCleaningCTA";
import DeckCleaningFeatures from "@/components/services/deck-cleaning/DeckCleaningFeatures";
import DeckCleaningGallery from "@/components/services/deck-cleaning/DeckCleaningGallery";
import DeckCleaningHero from "@/components/services/deck-cleaning/DeckCleaningHero";
import DeckCleaningIntro from "@/components/services/deck-cleaning/DeckCleaningIntro";
import DeckCleaningServices from "@/components/services/deck-cleaning/DeckCleaningServices";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

export default function DeckCleaningProtectionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DeckCleaningHero />
      <DeckCleaningIntro />
      <DeckCleaningServices />
      <DeckCleaningFeatures />
      <DeckCleaningGallery />
      <DeckCleaningCTA />
      <Footer />
    </main>
  );
}