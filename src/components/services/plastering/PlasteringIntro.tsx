"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const translations = {
  en: {
    badge: "Proper Preparation Creates Better Results",

    title:
      "Repair Damaged Walls Before The Final Paint Finish",

    paragraphOne:
      "Cracks, holes, damaged drywall, and uneven surfaces can affect the final appearance of any paint project.",

    paragraphTwo:
      "RJ Painting focuses on proper wall preparation and repair work to help create smoother, cleaner, and more professional finishes throughout your home.",

    highlights: [
      "Wall Patching",
      "Crack Repairs",
      "Minor Drywall Repairs",
      "Surface Smoothing",
    ],

    imageAlt:
      "Plastering and surface repair",

    cardBadge:
      "Smooth Surface Preparation",

    cardTitle:
      "Better Paint Results",

    cardDescription:
      "Professional repairs help create cleaner finishes and better long-term results.",
  },

  fr: {
    badge:
      "Une bonne préparation permet d’obtenir de meilleurs résultats",

    title:
      "Réparez les murs endommagés avant la finition de peinture",

    paragraphOne:
      "Les fissures, les trous, les cloisons sèches endommagées et les surfaces irrégulières peuvent affecter l’apparence finale de tout projet de peinture.",

    paragraphTwo:
      "RJ Painting accorde une attention particulière à la préparation et à la réparation des murs afin d’obtenir des finis plus lisses, plus propres et plus professionnels dans toute votre maison.",

    highlights: [
      "Réparation des murs",
      "Réparation des fissures",
      "Réparations mineures de cloisons sèches",
      "Lissage des surfaces",
    ],

    imageAlt:
      "Plâtrage et réparation de surfaces",

    cardBadge:
      "Préparation lisse des surfaces",

    cardTitle:
      "De meilleurs résultats de peinture",

    cardDescription:
      "Des réparations professionnelles permettent d’obtenir des finis plus propres et de meilleurs résultats à long terme.",
  },
} as const;

interface PlasteringIntroProps {
  lang: "en" | "fr";
}

export default function PlasteringIntro({
  lang,
}: PlasteringIntroProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

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
          >
            <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
              {t.badge}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#152536]/70">
              {t.paragraphOne}
            </p>

            <p className="mt-6 text-base leading-8 text-[#152536]/70">
              {t.paragraphTwo}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#152536]/10 bg-white px-5 py-4 shadow-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#8B2E35]"
                  />

                  <span className="text-sm font-semibold text-[#152536]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/plastering-about.jpg"
                alt={t.imageAlt}
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[2rem] bg-white p-8 shadow-2xl lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                {t.cardBadge}
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#152536]">
                {t.cardTitle}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-7 text-[#152536]/70">
                {t.cardDescription}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}