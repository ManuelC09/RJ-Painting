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

export default function InteriorPaintingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InteriorHero />
      <InteriorIntro />
      <InteriorServices />
      <InteriorFeatures />
      <ServiceTestimonial testimonial={serviceTestimonials.interiorPainting} />
      <InteriorGallery />
      <InteriorCTA />
      <Footer />
    </main>
  );
}