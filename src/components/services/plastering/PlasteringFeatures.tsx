"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  PaintRoller,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const featureConfig = [
  {
    key: "smootherFinishes",
    icon: Sparkles,
  },
  {
    key: "cleanerApplication",
    icon: PaintRoller,
  },
  {
    key: "betterDurability",
    icon: ShieldCheck,
  },
  {
    key: "higherQuality",
    icon: BadgeCheck,
  },
] as const;

const translations = {
  en: {
    badge: "Why Surface Preparation Matters",

    title:
      "A Better Paint Finish Starts With Proper Preparation",

    description:
      "Professional preparation helps create smoother finishes, cleaner paint application, improved durability, and a higher-quality appearance.",

    features: {
      smootherFinishes: {
        title: "Smoother Finishes",
        description:
          "Well-prepared walls help paint apply more evenly and create a cleaner final appearance.",
      },

      cleanerApplication: {
        title: "Cleaner Paint Application",
        description:
          "Surface repairs reduce visible imperfections and help improve the overall paint finish.",
      },

      betterDurability: {
        title: "Better Durability",
        description:
          "Proper repairs and preparation can help the finished surface hold up better over time.",
      },

      higherQuality: {
        title: "Higher-Quality Appearance",
        description:
          "The quality of the preparation directly impacts the quality of the final result.",
      },
    },
  },

  fr: {
    badge: "Pourquoi la préparation des surfaces est importante",

    title:
      "Un meilleur fini de peinture commence par une préparation adéquate",

    description:
      "Une préparation professionnelle permet d’obtenir des surfaces plus lisses, une application de peinture plus propre, une meilleure durabilité et un résultat de qualité supérieure.",

    features: {
      smootherFinishes: {
        title: "Finis plus lisses",
        description:
          "Des murs bien préparés permettent à la peinture de s’appliquer plus uniformément et d’offrir une apparence finale plus propre.",
      },

      cleanerApplication: {
        title: "Application de peinture plus propre",
        description:
          "La réparation des surfaces réduit les imperfections visibles et améliore la qualité générale du fini de peinture.",
      },

      betterDurability: {
        title: "Meilleure durabilité",
        description:
          "Des réparations et une préparation adéquates permettent aux surfaces finies de mieux résister au fil du temps.",
      },

      higherQuality: {
        title: "Apparence de meilleure qualité",
        description:
          "La qualité de la préparation influence directement la qualité du résultat final.",
      },
    },
  },
} as const;

interface PlasteringFeaturesProps {
  lang: "en" | "fr";
}

export default function PlasteringFeatures({
  lang,
}: PlasteringFeaturesProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#152536] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

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