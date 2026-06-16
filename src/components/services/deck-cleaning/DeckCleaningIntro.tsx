"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Deck Washing",
  "Wood Surface Cleaning",
  "Protective Finish Preparation",
  "Seasonal Deck Maintenance",
];

export default function DeckCleaningIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
              Outdoor Wood Care
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              Maintain A Cleaner, Better Protected Deck
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#152536]/70">
              Decks are exposed to moisture, sunlight, dirt, mildew, and
              changing weather conditions. Professional cleaning helps restore
              the look of the surface and prepare it for proper protection.
            </p>

            <p className="mt-6 text-base leading-8 text-[#152536]/70">
              RJ Painting helps homeowners keep outdoor spaces looking clean,
              maintained, and ready for long-term use with careful deck cleaning
              and protective preparation.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#152536]/10 bg-white px-5 py-4 shadow-sm"
                >
                  <CheckCircle size={18} className="text-[#8B2E35]" />
                  <span className="text-sm font-semibold text-[#152536]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/deck-cleaning-about.webp"
                alt="Deck cleaning and protection"
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[2rem] bg-white p-8 shadow-2xl lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                Clean & Protected
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#152536]">
                Deck Maintenance
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-7 text-[#152536]/70">
                Professional cleaning and preparation to help protect your
                outdoor wood surfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}