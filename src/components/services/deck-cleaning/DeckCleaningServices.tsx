"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Droplets,
  Leaf,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

const serviceConfig = [
  {
    key: "deckWashing",
    icon: Droplets,
  },
  {
    key: "surfaceCleaning",
    icon: Waves,
  },
  {
    key: "buildupRemoval",
    icon: Leaf,
  },
  {
    key: "protectionPreparation",
    icon: ShieldCheck,
  },
  {
    key: "maintenanceBeforeFinishing",
    icon: Brush,
  },
  {
    key: "outdoorRefresh",
    icon: Sparkles,
  },
] as const;

const translations = {
  en: {
    badge: "Deck Cleaning Services Include",

    title:
      "Professional Cleaning & Protection Preparation For Outdoor Wood",

    description:
      "RJ Painting helps homeowners refresh outdoor deck surfaces with careful cleaning, preparation, and wood protection support.",

    services: {
      deckWashing: {
        title: "Deck Washing",
        description:
          "Careful cleaning designed to remove dirt, buildup, and outdoor surface grime.",
      },

      surfaceCleaning: {
        title: "Surface Cleaning",
        description:
          "Refresh wood surfaces before staining, painting, or protective finishing.",
      },

      buildupRemoval: {
        title: "Mildew & Weather Buildup Removal",
        description:
          "Help clear common outdoor buildup caused by moisture and seasonal exposure.",
      },

      protectionPreparation: {
        title: "Protection Preparation",
        description:
          "Prepare the deck surface for protective coatings, staining, or sealing.",
      },

      maintenanceBeforeFinishing: {
        title: "Maintenance Before Finishing",
        description:
          "Cleaning and preparation before deck painting or staining services.",
      },

      outdoorRefresh: {
        title: "Outdoor Refresh",
        description:
          "Improve the look and feel of your backyard deck with a cleaner finish.",
      },
    },
  },

  fr: {
    badge: "Nos services de nettoyage de terrasses",

    title:
      "Nettoyage professionnel et préparation protectrice pour le bois extérieur",

    description:
      "RJ Painting aide les propriétaires à rafraîchir leurs terrasses grâce à un nettoyage soigné, une préparation adéquate et un soutien à la protection du bois.",

    services: {
      deckWashing: {
        title: "Lavage de terrasse",
        description:
          "Un nettoyage minutieux conçu pour éliminer la saleté, les accumulations et les résidus présents sur les surfaces extérieures.",
      },

      surfaceCleaning: {
        title: "Nettoyage des surfaces",
        description:
          "Rafraîchissez les surfaces en bois avant l’application de teinture, de peinture ou d’un fini protecteur.",
      },

      buildupRemoval: {
        title: "Élimination de la moisissure et des accumulations",
        description:
          "Aidez à éliminer les accumulations courantes causées par l’humidité et l’exposition saisonnière.",
      },

      protectionPreparation: {
        title: "Préparation pour la protection",
        description:
          "Préparez la surface de la terrasse avant l’application de revêtements protecteurs, de teinture ou de scellant.",
      },

      maintenanceBeforeFinishing: {
        title: "Entretien avant la finition",
        description:
          "Nettoyage et préparation avant les travaux de peinture ou de teinture de terrasse.",
      },

      outdoorRefresh: {
        title: "Rafraîchissement extérieur",
        description:
          "Améliorez l’apparence et l’ambiance de votre terrasse arrière avec un fini plus propre.",
      },
    },
  },
} as const;

interface DeckCleaningServicesProps {
  lang: "en" | "fr";
}

export default function DeckCleaningServices({
  lang,
}: DeckCleaningServicesProps) {
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