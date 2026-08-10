"use client";

import { motion } from "framer-motion";
import {
  Home,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const featureConfig = [
  {
    key: "surfacePreparation",
    icon: ShieldCheck,
  },
  {
    key: "cleanWorksites",
    icon: Home,
  },
  {
    key: "residentialSpecialists",
    icon: Sparkles,
  },
  {
    key: "ownerOperated",
    icon: UserCheck,
  },
] as const;

const translations = {
  en: {
    badge: "Why Homeowners Choose RJ Painting",

    title:
      "Interior Painting With Care, Preparation & Detail",

    description:
      "Every interior painting project is completed with professional preparation, clean execution, and respect for the home from start to finish.",

    features: {
      surfacePreparation: {
        title: "Professional Surface Preparation",
        description:
          "Proper preparation helps create smoother finishes and longer-lasting interior painting results.",
      },

      cleanWorksites: {
        title: "Clean & Respectful Worksites",
        description:
          "Your home is carefully protected throughout every stage of the painting process.",
      },

      residentialSpecialists: {
        title: "Experienced Residential Specialists",
        description:
          "Focused primarily on residential homes throughout Montreal’s West Island.",
      },

      ownerOperated: {
        title: "Owner-Operated Service",
        description:
          "Direct communication and hands-on attention from start to finish.",
      },
    },
  },

  fr: {
    badge: "Pourquoi les propriétaires choisissent RJ Painting",

    title:
      "Une peinture intérieure réalisée avec soin, préparation et précision",

    description:
      "Chaque projet de peinture intérieure est réalisé avec une préparation professionnelle, une exécution propre et un grand respect de votre maison du début à la fin.",

    features: {
      surfacePreparation: {
        title: "Préparation professionnelle des surfaces",
        description:
          "Une préparation adéquate permet d’obtenir des finis plus lisses et des résultats de peinture intérieure plus durables.",
      },

      cleanWorksites: {
        title: "Espaces de travail propres et respectueux",
        description:
          "Votre maison est soigneusement protégée à chaque étape du processus de peinture.",
      },

      residentialSpecialists: {
        title: "Spécialistes résidentiels expérimentés",
        description:
          "Principalement spécialisés dans les maisons résidentielles partout dans l’Ouest-de-l’Île de Montréal.",
      },

      ownerOperated: {
        title: "Service directement assuré par le propriétaire",
        description:
          "Une communication directe et une attention personnalisée du début à la fin.",
      },
    },
  },
} as const;

interface InteriorFeaturesProps {
  lang: "en" | "fr";
}

export default function InteriorFeatures({
  lang,
}: InteriorFeaturesProps) {
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