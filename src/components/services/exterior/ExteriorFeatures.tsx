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
    key: "curbAppeal",
    icon: Home,
  },
  {
    key: "surfaceProtection",
    icon: ShieldCheck,
  },
  {
    key: "propertyValue",
    icon: BadgeDollarSign,
  },
  {
    key: "professionalFinishes",
    icon: Sparkles,
  },
] as const;

const translations = {
  en: {
    badge: "Benefits of Exterior Painting",

    title:
      "Exterior Painting That Protects, Modernizes & Elevates Your Home",

    description:
      "RJ Painting focuses on preparation, durability, and clean workmanship to help your home look better while protecting its exterior surfaces from long-term wear.",

    features: {
      curbAppeal: {
        title: "Increased Curb Appeal",
        description:
          "Create a cleaner, more modern exterior appearance that improves the first impression of your home.",
      },

      surfaceProtection: {
        title: "Long-Term Surface Protection",
        description:
          "Protect exterior materials from weather exposure, moisture, sunlight, and seasonal wear.",
      },

      propertyValue: {
        title: "Improved Property Value",
        description:
          "A professionally maintained exterior helps improve perceived value and overall presentation.",
      },

      professionalFinishes: {
        title: "Clean Professional Finishes",
        description:
          "Detailed workmanship designed for long-lasting visual impact and refined exterior results.",
      },
    },
  },

  fr: {
    badge: "Les avantages de la peinture extérieure",

    title:
      "Une peinture extérieure qui protège, modernise et met votre maison en valeur",

    description:
      "RJ Painting mise sur une préparation soignée, la durabilité et un travail propre afin d’améliorer l’apparence de votre maison tout en protégeant ses surfaces extérieures contre l’usure à long terme.",

    features: {
      curbAppeal: {
        title: "Apparence extérieure améliorée",
        description:
          "Créez une apparence extérieure plus propre et moderne qui améliore la première impression de votre maison.",
      },

      surfaceProtection: {
        title: "Protection durable des surfaces",
        description:
          "Protégez les matériaux extérieurs contre les intempéries, l’humidité, le soleil et l’usure saisonnière.",
      },

      propertyValue: {
        title: "Valeur de la propriété améliorée",
        description:
          "Un extérieur entretenu professionnellement contribue à améliorer la valeur perçue et la présentation générale de votre propriété.",
      },

      professionalFinishes: {
        title: "Finis professionnels et soignés",
        description:
          "Un travail minutieux conçu pour offrir un impact visuel durable et des résultats extérieurs raffinés.",
      },
    },
  },
} as const;

interface ExteriorFeaturesProps {
  lang: "en" | "fr";
}

export default function ExteriorFeatures({
  lang,
}: ExteriorFeaturesProps) {
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