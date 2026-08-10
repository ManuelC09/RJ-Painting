"use client";

import { motion } from "framer-motion";
import {
  DoorOpen,
  Home,
  Layers,
  PaintRoller,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const serviceConfig = [
  {
    key: "livingRooms",
    icon: Home,
  },
  {
    key: "kitchens",
    icon: PaintRoller,
  },
  {
    key: "bedrooms",
    icon: Sparkles,
  },
  {
    key: "bathrooms",
    icon: Layers,
  },
  {
    key: "basements",
    icon: WandSparkles,
  },
  {
    key: "ceilingsTrim",
    icon: DoorOpen,
  },
] as const;

const translations = {
  en: {
    badge: "Interior Painting Services Include",

    title:
      "Clean, Professional Finishes For Every Interior Space",

    description:
      "From individual rooms to full-home repaints, RJ Painting provides interior painting services designed around preparation, cleanliness, and lasting visual impact.",

    services: {
      livingRooms: {
        title: "Living Rooms",
        description:
          "Bright, clean finishes that modernize gathering spaces and improve the feel of your home.",
      },

      kitchens: {
        title: "Kitchens",
        description:
          "Professional repainting designed to refresh one of the most important spaces in your home.",
      },

      bedrooms: {
        title: "Bedrooms",
        description:
          "Comfortable, modern finishes tailored to your personal style and desired atmosphere.",
      },

      bathrooms: {
        title: "Bathrooms",
        description:
          "Durable interior painting solutions designed for moisture-prone environments.",
      },

      basements: {
        title: "Basements",
        description:
          "Transform unfinished or outdated basement spaces into cleaner, brighter living areas.",
      },

      ceilingsTrim: {
        title: "Ceilings & Trim",
        description:
          "Detailed ceiling, baseboard, moulding, and trim painting for a polished final appearance.",
      },
    },
  },

  fr: {
    badge: "Nos services de peinture intérieure",

    title:
      "Des finis propres et professionnels pour chaque espace intérieur",

    description:
      "Qu’il s’agisse d’une seule pièce ou de repeindre toute la maison, RJ Painting offre des services de peinture intérieure axés sur une préparation soignée, la propreté et un résultat visuel durable.",

    services: {
      livingRooms: {
        title: "Salons",
        description:
          "Des finis lumineux et soignés qui modernisent les espaces de rassemblement et améliorent l’ambiance de votre maison.",
      },

      kitchens: {
        title: "Cuisines",
        description:
          "Une peinture professionnelle conçue pour rafraîchir l’un des espaces les plus importants de votre maison.",
      },

      bedrooms: {
        title: "Chambres",
        description:
          "Des finis confortables et modernes adaptés à votre style personnel et à l’ambiance recherchée.",
      },

      bathrooms: {
        title: "Salles de bain",
        description:
          "Des solutions de peinture intérieure durables conçues pour les environnements exposés à l’humidité.",
      },

      basements: {
        title: "Sous-sols",
        description:
          "Transformez les sous-sols non finis ou démodés en espaces de vie plus propres, lumineux et accueillants.",
      },

      ceilingsTrim: {
        title: "Plafonds et moulures",
        description:
          "Peinture détaillée des plafonds, plinthes, moulures et boiseries pour une finition propre et soignée.",
      },
    },
  },
} as const;

interface InteriorServicesProps {
  lang: "en" | "fr";
}

export default function InteriorServices({
  lang,
}: InteriorServicesProps) {
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