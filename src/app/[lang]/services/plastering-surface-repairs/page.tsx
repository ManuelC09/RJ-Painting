import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlasteringCTA from "@/components/services/plastering/PlasteringCTA";
import PlasteringFeatures from "@/components/services/plastering/PlasteringFeatures";
import PlasteringGallery from "@/components/services/plastering/PlasteringGallery";
import PlasteringHero from "@/components/services/plastering/PlasteringHero";
import PlasteringIntro from "@/components/services/plastering/PlasteringIntro";
import PlasteringServices from "@/components/services/plastering/PlasteringServices";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

interface PlasteringSurfaceRepairsPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function PlasteringSurfaceRepairsPage({
  params,
}: PlasteringSurfaceRepairsPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <PlasteringHero lang={lang} />

      <ServiceTestimonial
        lang={lang}
        testimonial={serviceTestimonials.plastering[lang]}
      />

      <PlasteringIntro lang={lang} />

      <PlasteringServices lang={lang} />

      <PlasteringFeatures lang={lang} />

      <PlasteringGallery lang={lang} />

      <PlasteringCTA lang={lang} />

      <Footer />
    </main>
  );
}