import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExteriorHero from "@/components/services/exterior/ExteriorHero";
import ExteriorIntro from "@/components/services/exterior/ExteriorIntro";
import ExteriorServices from "@/components/services/exterior/ExteriorServices";
import ExteriorFeatures from "@/components/services/exterior/ExteriorFeatures";
import ExteriorGallery from "@/components/services/exterior/ExteriorGallery";
import ExteriorCTA from "@/components/services/exterior/ExteriorCTA";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

interface ExteriorPaintingPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function ExteriorPaintingPage({
  params,
}: ExteriorPaintingPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <ExteriorHero lang={lang} />

      <ServiceTestimonial
        lang={lang}
        testimonial={serviceTestimonials.exteriorPainting[lang]}
      />

      <ExteriorIntro lang={lang} />

      <ExteriorServices lang={lang} />

      <ExteriorFeatures lang={lang} />

      <ExteriorGallery lang={lang} />

      <ExteriorCTA lang={lang} />

      <Footer />
    </main>
  );
}