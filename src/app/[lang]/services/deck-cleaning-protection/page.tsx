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

interface DeckCleaningProtectionPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function DeckCleaningProtectionPage({
  params,
}: DeckCleaningProtectionPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <DeckCleaningHero lang={lang} />

      <ServiceTestimonial
        lang={lang}
        testimonial={serviceTestimonials.deckCleaning[lang]}
      />

      <DeckCleaningIntro lang={lang} />

      <DeckCleaningServices lang={lang} />

      <DeckCleaningFeatures lang={lang} />

      <DeckCleaningGallery lang={lang} />

      <DeckCleaningCTA lang={lang} />

      <Footer />
    </main>
  );
}