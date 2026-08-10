"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const translations = {
  en: {
    badge: "Outdoor Wood Restoration",

    title:
      "Restore & Protect Outdoor Living Spaces",

    paragraphOne:
      "Outdoor wood surfaces naturally experience wear from weather, sunlight, moisture, and seasonal exposure. Professional staining and painting helps improve appearance while protecting surfaces from long-term deterioration.",

    paragraphTwo:
      "RJ Painting provides careful preparation and quality finishes designed for lasting outdoor performance and a cleaner backyard appearance.",

    highlights: [
      "Deck Staining",
      "Deck Painting",
      "Fence Painting & Staining",
      "Outdoor Wood Preparation",
    ],

    imageAlt: "Deck Painting and Staining",

    cardBadge: "Durable Outdoor Finishes",

    cardTitle:
      "Backyard Spaces Restored",

    cardDescription:
      "Professional preparation and finishing for decks, fences, and outdoor wood surfaces.",
  },

  fr: {
    badge: "Restauration du bois extérieur",

    title:
      "Restaurez et protégez vos espaces de vie extérieurs",

    paragraphOne:
      "Les surfaces extérieures en bois subissent naturellement l’usure causée par les intempéries, le soleil, l’humidité et les changements saisonniers. Une teinture ou une peinture professionnelle aide à améliorer leur apparence tout en les protégeant contre la détérioration à long terme.",

    paragraphTwo:
      "RJ Painting offre une préparation soignée et des finis de qualité conçus pour assurer une performance durable à l’extérieur et donner à votre cour une apparence plus propre et soignée.",

    highlights: [
      "Teinture de terrasse",
      "Peinture de terrasse",
      "Peinture et teinture de clôtures",
      "Préparation du bois extérieur",
    ],

    imageAlt:
      "Peinture et teinture de terrasse",

    cardBadge:
      "Finis extérieurs durables",

    cardTitle:
      "Espaces extérieurs restaurés",

    cardDescription:
      "Préparation et finition professionnelles pour les terrasses, clôtures et autres surfaces extérieures en bois.",
  },
} as const;

interface DeckIntroProps {
  lang: "en" | "fr";
}

export default function DeckIntro({
  lang,
}: DeckIntroProps) {
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
                src="/images/deck-about.png"
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