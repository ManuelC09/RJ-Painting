import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InteriorFeatures from "@/components/services/interior/InteriorFeatures";
import InteriorHero from "@/components/services/interior/InteriorHero";
import InteriorIntro from "@/components/services/interior/InteriorIntro";
import InteriorServices from "@/components/services/interior/InteriorServices";
import InteriorGallery from "@/components/services/interior/InteriorGallery";
import InteriorCTA from "@/components/services/interior/InteriorCTA";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

interface InteriorPaintingPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function InteriorPaintingPage({
  params,
}: InteriorPaintingPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <InteriorHero lang={lang} />

      <ServiceTestimonial
        lang={lang}
        testimonial={serviceTestimonials.interiorPainting[lang]}
      />

      <InteriorIntro lang={lang} />

      <InteriorServices lang={lang} />

      <InteriorFeatures lang={lang} />

      <InteriorGallery lang={lang} />

      <InteriorCTA lang={lang} />

      <Footer />
    </main>
  );
}