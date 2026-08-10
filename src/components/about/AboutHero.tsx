"use client";

import { motion } from "framer-motion";

const translations = {
  en: {
    badge: "About RJ Painting",

    titleBefore: "Residential Painting Built On",
    titleHighlight: "Experience & Detail",

    description:
      "RJ Painting has been helping homeowners throughout Montreal’s West Island transform and maintain their homes with professional residential painting services for over 36 years.",
  },

  fr: {
    badge: "À propos de RJ Painting",

    titleBefore: "Une peinture résidentielle fondée sur",
    titleHighlight: "l’expérience et le souci du détail",

    description:
      "Depuis plus de 36 ans, RJ Painting aide les propriétaires de l’Ouest-de-l’Île de Montréal à transformer et entretenir leur maison grâce à des services professionnels de peinture résidentielle.",
  },
} as const;

interface AboutHeroProps {
  lang: "en" | "fr";
}

export default function AboutHero({
  lang,
}: AboutHeroProps) {
  const t = translations[lang];

  return (
    <section className="relative min-h-[720px] overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-[url('/images/about-hero.png')] bg-cover bg-center lg:bg-[center_35%]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#152536]/70" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-44 lg:pt-40">
        <div className="max-w-4xl">
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
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
          >
            {t.badge}
          </motion.div>

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
            className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t.titleBefore}{" "}

            <span className="text-[#8B2E35]">
              {t.titleHighlight}
            </span>
          </motion.h1>

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
            className="mt-6 max-w-2xl text-lg leading-8 text-white/85"
          >
            {t.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}