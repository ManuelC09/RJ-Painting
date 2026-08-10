import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import RecentProjects from "@/components/RecentProjects";
import ServicesPreview from "@/components/ServicesPreview";
import TrustIntro from "@/components/TrustIntro";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import ProductBrands from "@/components/ProductBrands";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustIntro />
      <ServicesPreview />
      <RecentProjects />
      <ProcessSection />
      {/* <Testimonials /> */}
      <GoogleReviews />
      <ProductBrands />
      <ServiceAreas />
      <FinalCTA />
      <Footer />
    </main>
  );
}