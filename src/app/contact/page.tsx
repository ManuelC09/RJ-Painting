import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactTrust from "@/components/contact/ContactTrust";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactTrust />
      <ContactCTA />
      <Footer />
    </main>
  );
}