import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MouldingsCTA from "@/components/services/mouldings/MouldingsCTA";
import MouldingsFeatures from "@/components/services/mouldings/MouldingsFeatures";
import MouldingsGallery from "@/components/services/mouldings/MouldingsGallery";
import MouldingsHero from "@/components/services/mouldings/MouldingsHero";
import MouldingsIntro from "@/components/services/mouldings/MouldingsIntro";
import MouldingsServices from "@/components/services/mouldings/MouldingsServices";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

interface MouldingsTrimFinishingPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function MouldingsTrimFinishingPage({
  params,
}: MouldingsTrimFinishingPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <MouldingsHero lang={lang} />

      <ServiceTestimonial
        lang={lang}
        testimonial={serviceTestimonials.mouldings[lang]}
      />

      <MouldingsIntro lang={lang} />

      <MouldingsServices lang={lang} />

      <MouldingsFeatures lang={lang} />

      <MouldingsGallery lang={lang} />

      <MouldingsCTA lang={lang} />

      <Footer />
    </main>
  );
}