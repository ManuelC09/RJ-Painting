"use client";

import { motion } from "framer-motion";
import {
  DoorOpen,
  Frame,
  LayoutPanelTop,
  Sparkles,
  Square,
} from "lucide-react";

const serviceConfig = [
  {
    key: "baseboards",
    icon: Square,
  },
  {
    key: "crownMouldings",
    icon: LayoutPanelTop,
  },
  {
    key: "windowTrim",
    icon: Frame,
  },
  {
    key: "doorFramesDoors",
    icon: DoorOpen,
  },
  {
    key: "accentTrim",
    icon: Sparkles,
  },
] as const;

const translations = {
  en: {
    badge: "Trim & Finishing Services Include",

    title:
      "Professional Trim Work For A Cleaner Interior Appearance",

    description:
      "Detailed finishing helps create polished, refined interiors with clean lines and professional presentation.",

    services: {
      baseboards: {
        title: "Baseboards",
        description:
          "Clean, sharp finishing details throughout living spaces.",
      },

      crownMouldings: {
        title: "Crown Mouldings",
        description:
          "Elegant finishing work that enhances ceilings and interiors.",
      },

      windowTrim: {
        title: "Window Trim",
        description:
          "Detailed trim painting for polished window framing.",
      },

      doorFramesDoors: {
        title: "Door Frames & Doors",
        description:
          "Professional finishing for interior architectural details.",
      },

      accentTrim: {
        title: "Accent Trim",
        description:
          "Decorative trim work designed to modernize and refine interiors.",
      },
    },
  },

  fr: {
    badge: "Nos services de moulures et de finition",

    title:
      "Des finitions professionnelles pour un intérieur plus propre et raffiné",

    description:
      "Un travail de finition détaillé permet de créer des intérieurs soignés et raffinés, avec des lignes nettes et une présentation professionnelle.",

    services: {
      baseboards: {
        title: "Plinthes",
        description:
          "Des détails de finition propres et précis dans vos espaces de vie.",
      },

      crownMouldings: {
        title: "Moulures couronnées",
        description:
          "Des finitions élégantes qui mettent en valeur les plafonds et les espaces intérieurs.",
      },

      windowTrim: {
        title: "Encadrements de fenêtres",
        description:
          "Peinture détaillée des moulures de fenêtres pour une finition propre et soignée.",
      },

      doorFramesDoors: {
        title: "Cadres de portes et portes",
        description:
          "Finition professionnelle des éléments architecturaux intérieurs.",
      },

      accentTrim: {
        title: "Moulures décoratives",
        description:
          "Des finitions décoratives conçues pour moderniser et raffiner vos espaces intérieurs.",
      },
    },
  },
} as const;

interface MouldingsServicesProps {
  lang: "en" | "fr";
}

export default function MouldingsServices({
  lang,
}: MouldingsServicesProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
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