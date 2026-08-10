"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

const translations = {
  en: {
    badge: "RJ Painting Gallery",

    titleBefore: "Recent Residential Painting",
    titleHighlight: "Transformations",

    description:
      "Explore recent interior, exterior, deck, trim, and surface preparation projects completed throughout Montreal’s West Island.",

    button: "Request a Free Estimate",
  },

  fr: {
    badge: "Galerie RJ Painting",

    titleBefore: "Transformations récentes en",
    titleHighlight: "peinture résidentielle",

    description:
      "Découvrez nos récents projets de peinture intérieure et extérieure, de terrasses, de moulures et de préparation de surfaces réalisés partout dans l’Ouest-de-l’Île de Montréal.",

    button: "Demander une estimation gratuite",
  },
} as const;

interface GalleryHeroProps {
  lang: "en" | "fr";
}

export default function GalleryHero({
  lang,
}: GalleryHeroProps) {
  const t = translations[lang];

  return (
    <section className="relative min-h-[78vh] overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-[url('/images/exterior-gallery-1.png')] bg-cover bg-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/30" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pb-16 pt-48 lg:pt-44">
        <div className="max-w-4xl">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
          >
            <Images size={16} />
            {t.badge}
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t.titleBefore}{" "}

            <span className="text-[#8B2E35]">
              {t.titleHighlight}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg"
          >
            {t.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-9"
          >
            <Link
              href={`/${lang}/contact`}
              className="group inline-flex items-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
            >
              {t.button}

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}