"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const featureConfig = [
  {
    key: "modernizedAppearance",
    icon: Home,
  },
  {
    key: "curbAppeal",
    icon: Sparkles,
  },
  {
    key: "surfaceProtection",
    icon: ShieldCheck,
  },
  {
    key: "costEffective",
    icon: BadgeDollarSign,
  },
] as const;

const translations = {
  en: {
    badge: "Why Paint Brick & Stucco?",

    title:
      "A Powerful Exterior Upgrade Without Full Replacement",

    description:
      "Brick and stucco painting can dramatically update the look of your home while helping protect exterior surfaces from ongoing exposure.",

    features: {
      modernizedAppearance: {
        title: "Modernized Exterior Appearance",
        description:
          "Update older brick and stucco surfaces with a cleaner, more current look.",
      },

      curbAppeal: {
        title: "Improved Curb Appeal",
        description:
          "A refreshed exterior can completely change the way your home presents from the street.",
      },

      surfaceProtection: {
        title: "Added Surface Protection",
        description:
          "Proper exterior coatings help protect surfaces from seasonal wear and exposure.",
      },

      costEffective: {
        title: "Cost-Effective Transformation",
        description:
          "Painting brick and stucco can create major visual impact without full exterior replacement.",
      },
    },
  },

  fr: {
    badge: "Pourquoi peindre la brique et le stuc?",

    title:
      "Une transformation extérieure remarquable sans remplacement complet",

    description:
      "La peinture de la brique et du stuc peut transformer considérablement l’apparence de votre maison tout en aidant à protéger les surfaces extérieures contre les intempéries et l’usure.",

    features: {
      modernizedAppearance: {
        title: "Apparence extérieure modernisée",
        description:
          "Modernisez les surfaces de brique et de stuc plus anciennes pour leur donner une apparence plus propre et actuelle.",
      },

      curbAppeal: {
        title: "Attrait extérieur amélioré",
        description:
          "Un extérieur rafraîchi peut complètement transformer l’apparence de votre maison vue de la rue.",
      },

      surfaceProtection: {
        title: "Protection accrue des surfaces",
        description:
          "Des revêtements extérieurs appropriés aident à protéger les surfaces contre l’usure saisonnière et l’exposition aux éléments.",
      },

      costEffective: {
        title: "Transformation économique",
        description:
          "Peindre la brique et le stuc peut créer un impact visuel important sans avoir à remplacer entièrement les surfaces extérieures.",
      },
    },
  },
} as const;

interface BrickStuccoFeaturesProps {
  lang: "en" | "fr";
}

export default function BrickStuccoFeatures({
  lang,
}: BrickStuccoFeaturesProps) {
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