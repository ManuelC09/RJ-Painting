"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brush,
  Home,
  ShieldCheck,
} from "lucide-react";

const itemConfig = [
  {
    key: "residentialSpecialists",
    icon: Home,
  },
  {
    key: "professionalPreparation",
    icon: ShieldCheck,
  },
  {
    key: "premiumFinishes",
    icon: Brush,
  },
  {
    key: "trustedLocalService",
    icon: BadgeCheck,
  },
] as const;

const translations = {
  en: {
    badge: "Why Homeowners Choose RJ Painting",

    title:
      "Professional Residential Painting With Attention To Detail",

    items: {
      residentialSpecialists: {
        title: "Residential Specialists",
        description:
          "Focused on high-quality residential painting projects.",
      },

      professionalPreparation: {
        title: "Professional Preparation",
        description:
          "Clean preparation and detailed workmanship on every project.",
      },

      premiumFinishes: {
        title: "Premium Finishes",
        description:
          "Interior, exterior, trim, deck, and repair services.",
      },

      trustedLocalService: {
        title: "Trusted Local Service",
        description:
          "Serving homeowners throughout Montreal’s West Island.",
      },
    },
  },

  fr: {
    badge: "Pourquoi les propriétaires choisissent RJ Painting",

    title:
      "Peinture résidentielle professionnelle avec le souci du détail",

    items: {
      residentialSpecialists: {
        title: "Spécialistes résidentiels",
        description:
          "Spécialisés dans des projets de peinture résidentielle de haute qualité.",
      },

      professionalPreparation: {
        title: "Préparation professionnelle",
        description:
          "Une préparation soignée et un travail détaillé pour chaque projet.",
      },

      premiumFinishes: {
        title: "Finis de qualité",
        description:
          "Services de peinture intérieure et extérieure, de moulures, de terrasses et de réparation.",
      },

      trustedLocalService: {
        title: "Service local de confiance",
        description:
          "Au service des propriétaires partout dans l’Ouest-de-l’Île de Montréal.",
      },
    },
  },
} as const;

interface ContactTrustProps {
  lang: "en" | "fr";
}

export default function ContactTrust({
  lang,
}: ContactTrustProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#152536] py-24 sm:py-28">
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
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {itemConfig.map((item, index) => {
            const Icon = item.icon;
            const itemText = t.items[item.key];

            return (
              <motion.div
                key={item.key}
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
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                  <Icon size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-white">
                  {itemText.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {itemText.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}