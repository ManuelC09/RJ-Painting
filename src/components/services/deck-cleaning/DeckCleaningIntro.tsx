"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const translations = {
  en: {
    badge: "Outdoor Wood Care",

    title:
      "Maintain A Cleaner, Better Protected Deck",

    paragraphOne:
      "Decks are exposed to moisture, sunlight, dirt, mildew, and changing weather conditions. Professional cleaning helps restore the look of the surface and prepare it for proper protection.",

    paragraphTwo:
      "RJ Painting helps homeowners keep outdoor spaces looking clean, maintained, and ready for long-term use with careful deck cleaning and protective preparation.",

    highlights: [
      "Deck Washing",
      "Wood Surface Cleaning",
      "Protective Finish Preparation",
      "Seasonal Deck Maintenance",
    ],

    imageAlt:
      "Deck cleaning and protection",

    cardBadge:
      "Clean & Protected",

    cardTitle:
      "Deck Maintenance",

    cardDescription:
      "Professional cleaning and preparation to help protect your outdoor wood surfaces.",
  },

  fr: {
    badge: "Entretien du bois extérieur",

    title:
      "Gardez votre terrasse plus propre et mieux protégée",

    paragraphOne:
      "Les terrasses sont exposées à l’humidité, au soleil, à la saleté, à la moisissure et aux variations des conditions météorologiques. Un nettoyage professionnel aide à restaurer l’apparence de la surface et à la préparer pour une protection adéquate.",

    paragraphTwo:
      "RJ Painting aide les propriétaires à garder leurs espaces extérieurs propres, bien entretenus et prêts pour une utilisation à long terme grâce à un nettoyage minutieux de la terrasse et à une préparation protectrice.",

    highlights: [
      "Lavage de terrasse",
      "Nettoyage des surfaces en bois",
      "Préparation pour un fini protecteur",
      "Entretien saisonnier de terrasse",
    ],

    imageAlt:
      "Nettoyage et protection de terrasse",

    cardBadge:
      "Propre et protégée",

    cardTitle:
      "Entretien de terrasse",

    cardDescription:
      "Nettoyage et préparation professionnels pour aider à protéger vos surfaces extérieures en bois.",
  },
} as const;

interface DeckCleaningIntroProps {
  lang: "en" | "fr";
}

export default function DeckCleaningIntro({
  lang,
}: DeckCleaningIntroProps) {
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
                src="/images/deck-cleaning-about.webp"
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