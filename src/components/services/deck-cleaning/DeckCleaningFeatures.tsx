"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react";

const featureConfig = [
  {
    key: "cleanerAppearance",
    icon: Sparkles,
  },
  {
    key: "surfaceProtection",
    icon: ShieldCheck,
  },
  {
    key: "longerLasting",
    icon: Clock,
  },
  {
    key: "outdoorLiving",
    icon: Sun,
  },
] as const;

const translations = {
  en: {
    badge: "Why Deck Protection Matters",

    title:
      "Keep Your Deck Looking Better For Longer",

    description:
      "Deck cleaning and protection helps preserve the appearance of your outdoor space while preparing the surface for stronger, longer-lasting finishes.",

    features: {
      cleanerAppearance: {
        title: "Cleaner Appearance",
        description:
          "Remove surface buildup and refresh the overall look of your outdoor deck.",
      },

      surfaceProtection: {
        title: "Better Surface Protection",
        description:
          "Proper cleaning helps prepare the deck for protective coatings, stains, or finishes.",
      },

      longerLasting: {
        title: "Longer Lasting Outdoor Surfaces",
        description:
          "Routine maintenance helps reduce premature wear from outdoor exposure.",
      },

      outdoorLiving: {
        title: "Improved Outdoor Living Space",
        description:
          "A cleaner deck creates a more inviting area for relaxing, hosting, and enjoying your backyard.",
      },
    },
  },

  fr: {
    badge: "Pourquoi la protection de votre terrasse est importante",

    title:
      "Gardez votre terrasse en meilleur état plus longtemps",

    description:
      "Le nettoyage et la protection de votre terrasse aident à préserver l’apparence de votre espace extérieur tout en préparant la surface pour des finis plus résistants et durables.",

    features: {
      cleanerAppearance: {
        title: "Apparence plus propre",
        description:
          "Éliminez l’accumulation de saleté et rafraîchissez l’apparence générale de votre terrasse extérieure.",
      },

      surfaceProtection: {
        title: "Meilleure protection des surfaces",
        description:
          "Un nettoyage adéquat aide à préparer la terrasse pour l’application de revêtements protecteurs, de teintures ou de finis.",
      },

      longerLasting: {
        title: "Surfaces extérieures plus durables",
        description:
          "Un entretien régulier aide à réduire l’usure prématurée causée par l’exposition aux conditions extérieures.",
      },

      outdoorLiving: {
        title: "Un espace extérieur plus agréable",
        description:
          "Une terrasse propre crée un espace plus accueillant pour se détendre, recevoir des invités et profiter de votre cour.",
      },
    },
  },
} as const;

interface DeckCleaningFeaturesProps {
  lang: "en" | "fr";
}

export default function DeckCleaningFeatures({
  lang,
}: DeckCleaningFeaturesProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#152536] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

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
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              {t.badge}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {t.description}
            </p>
          </motion.div>

          {/* FEATURES */}
          <div className="grid gap-6 sm:grid-cols-2">
            {featureConfig.map((feature, index) => {
              const Icon = feature.icon;
              const featureText = t.features[feature.key];

              return (
                <motion.div
                  key={feature.key}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-white">
                    {featureText.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {featureText.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}