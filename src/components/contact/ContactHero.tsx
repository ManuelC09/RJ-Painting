"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[65vh] overflow-hidden bg-[#152536]">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/images/contact-hero.png')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/30" />

      <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 pt-48 pb-8">
        <div className="max-w-4xl">
          <motion.div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            Request Your Free Estimate
          </motion.div>

          <motion.h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let’s Transform Your{" "}
            <span className="text-[#D35B66]">Home</span>
          </motion.h1>

          <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            RJ Painting provides professional residential painting services
            throughout Montreal’s West Island including interior, exterior,
            decks, trim finishing, and surface repairs.
          </motion.p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:5146304638"
              className="inline-flex items-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="mailto:info@rjpainting.ca"
              className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}