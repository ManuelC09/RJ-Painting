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

export default function PlasteringSurfaceRepairsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PlasteringHero />
      <ServiceTestimonial testimonial={serviceTestimonials.plastering} />
      <PlasteringIntro />
      <PlasteringServices />
      <PlasteringFeatures />
      <PlasteringGallery />
      <PlasteringCTA />
      <Footer />
    </main>
  );
}