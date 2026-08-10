"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brush,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const valueConfig = [
  {
    key: "workmanship",
    icon: Brush,
  },
  {
    key: "reliableService",
    icon: ShieldCheck,
  },
  {
    key: "cleanFinishes",
    icon: Sparkles,
  },
  {
    key: "experience",
    icon: BadgeCheck,
  },
] as const;

const translations = {
  en: {
    badge: "What We Stand For",

    title:
      "Residential Painting With Professional Standards",

    values: {
      workmanship: {
        title: "Professional Workmanship",
        description:
          "Careful preparation and detailed painting for high-quality residential finishes.",
      },

      reliableService: {
        title: "Reliable Service",
        description:
          "Clear communication, punctuality, and professionalism throughout every project.",
      },

      cleanFinishes: {
        title: "Clean Finishes",
        description:
          "Modern, polished painting results designed to elevate your home.",
      },

      experience: {
        title: "36+ Years Experience",
        description:
          "Trusted residential painting experience throughout Montreal’s West Island.",
      },
    },
  },

  fr: {
    badge: "Nos valeurs",

    title:
      "Une peinture résidentielle selon des normes professionnelles",

    values: {
      workmanship: {
        title: "Travail professionnel",
        description:
          "Une préparation minutieuse et un travail de peinture détaillé pour des finis résidentiels de haute qualité.",
      },

      reliableService: {
        title: "Service fiable",
        description:
          "Une communication claire, de la ponctualité et du professionnalisme tout au long de chaque projet.",
      },

      cleanFinishes: {
        title: "Finis soignés",
        description:
          "Des résultats modernes et raffinés conçus pour mettre votre maison en valeur.",
      },

      experience: {
        title: "Plus de 36 ans d’expérience",
        description:
          "Une expérience reconnue en peinture résidentielle partout dans l’Ouest-de-l’Île de Montréal.",
      },
    },
  },
} as const;

interface AboutValuesProps {
  lang: "en" | "fr";
}

export default function AboutValues({
  lang,
}: AboutValuesProps) {
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
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        {/* VALUES */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueConfig.map((value, index) => {
            const Icon = value.icon;
            const valueText = t.values[value.key];

            return (
              <motion.div
                key={value.key}
                initial={{
                  opacity: 0,
                  y: 30,
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
                className="rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                  <Icon size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-[#152536]">
                  {valueText.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#152536]/70">
                  {valueText.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}