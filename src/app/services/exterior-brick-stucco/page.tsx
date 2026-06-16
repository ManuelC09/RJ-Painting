import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BrickStuccoCTA from "@/components/services/brick-stucco/BrickStuccoCTA";
import BrickStuccoFeatures from "@/components/services/brick-stucco/BrickStuccoFeatures";
import BrickStuccoGallery from "@/components/services/brick-stucco/BrickStuccoGallery";
import BrickStuccoHero from "@/components/services/brick-stucco/BrickStuccoHero";
import BrickStuccoIntro from "@/components/services/brick-stucco/BrickStuccoIntro";
import BrickStuccoServices from "@/components/services/brick-stucco/BrickStuccoServices";
import ServiceTestimonial from "@/components/services/ServiceTestimonial";
import { serviceTestimonials } from "@/data/serviceTestimonials";

export default function ExteriorBrickStuccoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BrickStuccoHero />
      <BrickStuccoIntro />
      <BrickStuccoServices />
      <BrickStuccoFeatures />
      <ServiceTestimonial testimonial={serviceTestimonials.brickStucco} />
      <BrickStuccoGallery />
      <BrickStuccoCTA />
      <Footer />
    </main>
  );
}