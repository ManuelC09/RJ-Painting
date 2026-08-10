import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DeckCTA from "@/components/services/deck/DeckCTA";
import DeckFeatures from "@/components/services/deck/DeckFeatures";
import DeckGallery from "@/components/services/deck/DeckGallery";
import DeckHero from "@/components/services/deck/DeckHero";
import DeckIntro from "@/components/services/deck/DeckIntro";
import DeckServices from "@/components/services/deck/DeckServices";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

interface DeckPaintingStainingPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function DeckPaintingStainingPage({
  params,
}: DeckPaintingStainingPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <DeckHero lang={lang} />

      <ServiceTestimonial
        lang={lang}
        testimonial={serviceTestimonials.deckStaining[lang]}
      />

      <DeckIntro lang={lang} />

      <DeckServices lang={lang} />

      <DeckFeatures lang={lang} />

      <DeckGallery lang={lang} />

      <DeckCTA lang={lang} />

      <Footer />
    </main>
  );
}