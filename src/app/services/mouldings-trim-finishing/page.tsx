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

export default function MouldingsTrimFinishingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MouldingsHero />
      <ServiceTestimonial testimonial={serviceTestimonials.mouldings} />
      <MouldingsIntro />
      <MouldingsServices />
      <MouldingsFeatures />
      <MouldingsGallery />
      <MouldingsCTA />
      <Footer />
    </main>
  );
}