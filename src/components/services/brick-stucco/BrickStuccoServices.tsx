"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Building2,
  Home,
  PaintRoller,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const serviceConfig = [
  {
    key: "brickPainting",
    icon: Building2,
  },
  {
    key: "stuccoPainting",
    icon: Home,
  },
  {
    key: "surfacePreparation",
    icon: ShieldCheck,
  },
  {
    key: "colourUpdates",
    icon: PaintRoller,
  },
  {
    key: "detailPainting",
    icon: Brush,
  },
  {
    key: "curbAppeal",
    icon: Sparkles,
  },
] as const;

const translations = {
  en: {
    badge: "Brick & Stucco Services Include",

    title:
      "Professional Exterior Painting For Brick & Stucco Surfaces",

    description:
      "RJ Painting provides exterior brick and stucco painting services focused on preparation, clean finishes, and long-term curb appeal.",

    services: {
      brickPainting: {
        title: "Brick Painting",
        description:
          "Modernize exterior brick surfaces with clean, professional colour updates.",
      },

      stuccoPainting: {
        title: "Stucco Painting",
        description:
          "Refresh stucco surfaces with exterior finishes designed for a cleaner look.",
      },

      surfacePreparation: {
        title: "Surface Preparation",
        description:
          "Cleaning and preparation designed to support better adhesion and finish quality.",
      },

      colourUpdates: {
        title: "Exterior Colour Updates",
        description:
          "Update outdated exterior colours with a more modern residential palette.",
      },

      detailPainting: {
        title: "Detail Painting",
        description:
          "Clean application around trim, windows, edges, and architectural details.",
      },

      curbAppeal: {
        title: "Curb Appeal Refresh",
        description:
          "Improve the overall presentation and first impression of your home.",
      },
    },
  },

  fr: {
    badge: "Nos services de peinture de brique et de stuc",

    title:
      "Peinture extérieure professionnelle pour les surfaces de brique et de stuc",

    description:
      "RJ Painting offre des services de peinture extérieure pour la brique et le stuc axés sur une préparation soignée, des finis propres et une apparence durable.",

    services: {
      brickPainting: {
        title: "Peinture de brique",
        description:
          "Modernisez les surfaces extérieures en brique avec des couleurs actuelles et une finition professionnelle.",
      },

      stuccoPainting: {
        title: "Peinture de stuc",
        description:
          "Rafraîchissez les surfaces en stuc avec des finis extérieurs conçus pour offrir une apparence plus propre et moderne.",
      },

      surfacePreparation: {
        title: "Préparation des surfaces",
        description:
          "Nettoyage et préparation des surfaces afin de favoriser une meilleure adhérence et une finition de qualité.",
      },

      colourUpdates: {
        title: "Mise à jour des couleurs extérieures",
        description:
          "Remplacez les couleurs extérieures vieillissantes par une palette résidentielle plus moderne.",
      },

      detailPainting: {
        title: "Peinture de précision",
        description:
          "Application soignée autour des moulures, fenêtres, bordures et détails architecturaux.",
      },

      curbAppeal: {
        title: "Rafraîchissement de l’apparence extérieure",
        description:
          "Améliorez l’apparence générale et la première impression de votre maison.",
      },
    },
  },
} as const;

interface BrickStuccoServicesProps {
  lang: "en" | "fr";
}

export default function BrickStuccoServices({
  lang,
}: BrickStuccoServicesProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            {t.description}
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceConfig.map((service, index) => {
            const Icon = service.icon;
            const serviceText = t.services[service.key];

            return (
              <motion.div
                key={service.key}
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
                className="group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#8B2E35]/10 transition duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-[#152536]">
                    {serviceText.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#152536]/70">
                    {serviceText.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}