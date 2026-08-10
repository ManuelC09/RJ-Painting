"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DoorOpen,
  Home,
  PaintRoller,
  PanelsTopLeft,
  Warehouse,
} from "lucide-react";

const serviceConfig = [
  {
    key: "siding",
    icon: Home,
  },
  {
    key: "brick",
    icon: Building2,
  },
  {
    key: "garageDoors",
    icon: Warehouse,
  },
  {
    key: "shuttersTrim",
    icon: PanelsTopLeft,
  },
  {
    key: "entrywaysDoors",
    icon: DoorOpen,
  },
  {
    key: "woodSurfaces",
    icon: PaintRoller,
  },
] as const;

const translations = {
  en: {
    badge: "Exterior Painting Services Include",

    title:
      "Exterior Painting Designed For Long-Term Protection & Style",

    description:
      "Professional exterior residential painting focused on curb appeal, durability, preparation, and long-lasting finishes.",

    services: {
      siding: {
        title: "Exterior Siding",
        description:
          "Professional exterior siding painting designed to modernize and protect your home.",
      },

      brick: {
        title: "Brick Painting",
        description:
          "Modern brick repainting solutions that dramatically improve curb appeal and visual style.",
      },

      garageDoors: {
        title: "Garage Doors",
        description:
          "Clean and durable garage door finishes that complement the overall appearance of your home.",
      },

      shuttersTrim: {
        title: "Shutters & Trim",
        description:
          "Detailed painting for shutters, trim, fascia, soffits, and exterior accents.",
      },

      entrywaysDoors: {
        title: "Entryways & Doors",
        description:
          "Front door and entrance repainting designed to create a polished first impression.",
      },

      woodSurfaces: {
        title: "Exterior Wood Surfaces",
        description:
          "Professional repainting and refinishing for outdoor wood details and surfaces.",
      },
    },
  },

  fr: {
    badge: "Nos services de peinture extérieure",

    title:
      "Une peinture extérieure conçue pour une protection durable et un style soigné",

    description:
      "Des services professionnels de peinture résidentielle extérieure axés sur l’apparence, la durabilité, la préparation et des finis conçus pour durer.",

    services: {
      siding: {
        title: "Revêtement extérieur",
        description:
          "Peinture professionnelle de revêtement extérieur conçue pour moderniser et protéger votre maison.",
      },

      brick: {
        title: "Peinture de brique",
        description:
          "Des solutions modernes de peinture de brique qui améliorent considérablement l’apparence extérieure et le style de votre propriété.",
      },

      garageDoors: {
        title: "Portes de garage",
        description:
          "Des finis propres et durables pour les portes de garage qui s’harmonisent avec l’apparence générale de votre maison.",
      },

      shuttersTrim: {
        title: "Volets et moulures",
        description:
          "Peinture détaillée des volets, moulures, fascias, soffites et autres éléments extérieurs.",
      },

      entrywaysDoors: {
        title: "Entrées et portes",
        description:
          "Peinture des portes d’entrée et des accès conçue pour créer une première impression propre et soignée.",
      },

      woodSurfaces: {
        title: "Surfaces extérieures en bois",
        description:
          "Peinture et remise à neuf professionnelles des détails et surfaces extérieures en bois.",
      },
    },
  },
} as const;

interface ExteriorServicesProps {
  lang: "en" | "fr";
}

export default function ExteriorServices({
  lang,
}: ExteriorServicesProps) {
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