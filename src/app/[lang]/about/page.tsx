import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutCTA from "@/components/about/AboutCTA";
import AboutExperience from "@/components/about/AboutExperience";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";

interface AboutPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <AboutHero lang={lang} />

      <AboutStory lang={lang} />
      <AboutValues  lang={lang} />
      <AboutExperience  lang={lang} />
      <AboutCTA  lang={lang} />

      <Footer />
    </main>
  );
}