import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutCTA from "@/components/about/AboutCTA";
import AboutExperience from "@/components/about/AboutExperience";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutExperience />
      <AboutCTA />
      <Footer />
    </main>
  );
}