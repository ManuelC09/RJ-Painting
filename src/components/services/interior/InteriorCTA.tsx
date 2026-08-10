"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const translations = {
  en: {
    eyebrow: "Ready To Refresh Your Interior?",

    title:
      "Transform Your Home With Clean, Modern Interior Painting",

    description:
      "RJ Painting provides premium residential interior painting services designed to modernize, brighten, and transform your living spaces.",

    estimateButton: "Request a Free Estimate",

    callButton: "Call Now",
  },

  fr: {
    eyebrow: "Prêt à rafraîchir votre intérieur?",

    title:
      "Transformez votre maison avec une peinture intérieure propre et moderne",

    description:
      "RJ Painting offre des services haut de gamme de peinture résidentielle intérieure conçus pour moderniser, illuminer et transformer vos espaces de vie.",

    estimateButton: "Demander une estimation gratuite",

    callButton: "Appelez maintenant",
  },
} as const;

interface InteriorCTAProps {
  lang: "en" | "fr";
}

export default function InteriorCTA({
  lang,
}: InteriorCTAProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[2rem] bg-[#152536] px-8 py-20 text-center shadow-2xl sm:px-12 lg:px-20"
        >
          {/* BACKGROUND ACCENTS */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#8B2E35]/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#263E5A]/40 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
              {t.eyebrow}
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={`/${lang}/contact#contact`}
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
              >
                {t.estimateButton}

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:5146304638"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                <Phone size={18} />
                {t.callButton}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}