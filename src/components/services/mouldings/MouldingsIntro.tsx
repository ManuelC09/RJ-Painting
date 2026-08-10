"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const translations = {
  en: {
    badge: "Clean Finishing Details",

    title:
      "Finishing Details That Transform Interior Spaces",

    paragraphOne:
      "Freshly painted trim and mouldings help define spaces, improve contrast, and create a cleaner overall appearance throughout the home.",

    paragraphTwo:
      "Whether modernizing existing trim or refreshing detailed finishing work, RJ Painting delivers careful workmanship and refined results.",

    highlights: [
      "Baseboards",
      "Crown Mouldings",
      "Window Trim",
      "Door Frames & Doors",
    ],

    imageAlt:
      "Mouldings and trim finishing",

    cardBadge:
      "Refined Interior Detail",

    cardTitle:
      "Clean Trim Finishes",

    cardDescription:
      "Professional finishing details designed to elevate the look of your home.",
  },

  fr: {
    badge:
      "Détails de finition soignés",

    title:
      "Des détails de finition qui transforment vos espaces intérieurs",

    paragraphOne:
      "Des moulures et boiseries fraîchement peintes permettent de mieux définir les espaces, d’améliorer les contrastes et de créer une apparence plus propre et uniforme dans toute la maison.",

    paragraphTwo:
      "Qu’il s’agisse de moderniser des moulures existantes ou de rafraîchir des travaux de finition détaillés, RJ Painting offre un travail minutieux et des résultats raffinés.",

    highlights: [
      "Plinthes",
      "Moulures couronnées",
      "Encadrements de fenêtres",
      "Cadres de portes et portes",
    ],

    imageAlt:
      "Finition de moulures et boiseries",

    cardBadge:
      "Détails intérieurs raffinés",

    cardTitle:
      "Finitions de moulures soignées",

    cardDescription:
      "Des détails de finition professionnels conçus pour mettre en valeur l’apparence de votre maison.",
  },
} as const;

interface MouldingsIntroProps {
  lang: "en" | "fr";
}

export default function MouldingsIntro({
  lang,
}: MouldingsIntroProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

          {/* LEFT CONTENT */}
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

          {/* RIGHT IMAGE */}
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
                src="/images/mouldings-about.jpg"
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