import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactTrust from "@/components/contact/ContactTrust";

interface ContactPageProps {
  params: Promise<{
    lang: "en" | "fr";
  }>;
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen">
      <Navbar />

      <ContactHero lang={lang} />

      <ContactFormSection lang={lang} />

      <ContactTrust lang={lang} />

      <ContactCTA lang={lang} />

      <Footer />
    </main>
  );
}