"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Layers,
  Paintbrush,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

const serviceConfig = [
  {
    key: "wallPatching",
    icon: Hammer,
  },
  {
    key: "crackRepairs",
    icon: ShieldCheck,
  },
  {
    key: "drywallRepairs",
    icon: Layers,
  },
  {
    key: "surfaceSmoothing",
    icon: ScanLine,
  },
  {
    key: "plasterTouchUps",
    icon: Paintbrush,
  },
] as const;

const translations = {
  en: {
    badge: "Surface Repair Services Include",

    title:
      "Professional Repairs For Smoother Walls & Cleaner Finishes",

    description:
      "Proper surface repairs help improve the appearance, durability, and quality of the final painting result.",

    services: {
      wallPatching: {
        title: "Wall Patching",
        description:
          "Repair holes, dents, and wall imperfections before painting begins.",
      },

      crackRepairs: {
        title: "Crack Repairs",
        description:
          "Restore cracked surfaces for cleaner, smoother, and more polished finishes.",
      },

      drywallRepairs: {
        title: "Minor Drywall Repairs",
        description:
          "Correct surface damage and preparation issues before applying paint.",
      },

      surfaceSmoothing: {
        title: "Surface Smoothing",
        description:
          "Improve uneven wall textures and imperfections for a cleaner final look.",
      },

      plasterTouchUps: {
        title: "Plaster Touch-Ups",
        description:
          "Restore aging plaster surfaces with detailed repair work and preparation.",
      },
    },
  },

  fr: {
    badge: "Nos services de réparation de surfaces",

    title:
      "Des réparations professionnelles pour des murs plus lisses et des finis plus propres",

    description:
      "Une réparation adéquate des surfaces permet d’améliorer l’apparence, la durabilité et la qualité du résultat final de la peinture.",

    services: {
      wallPatching: {
        title: "Réparation des murs",
        description:
          "Réparez les trous, les bosses et les imperfections des murs avant le début des travaux de peinture.",
      },

      crackRepairs: {
        title: "Réparation des fissures",
        description:
          "Restaurez les surfaces fissurées afin d’obtenir des finis plus propres, plus lisses et plus soignés.",
      },

      drywallRepairs: {
        title: "Réparations mineures de cloisons sèches",
        description:
          "Corrigez les dommages de surface et les problèmes de préparation avant l’application de la peinture.",
      },

      surfaceSmoothing: {
        title: "Lissage des surfaces",
        description:
          "Corrigez les textures irrégulières et les imperfections des murs pour obtenir une apparence finale plus propre.",
      },

      plasterTouchUps: {
        title: "Retouches de plâtre",
        description:
          "Restaurez les surfaces de plâtre vieillissantes grâce à des réparations détaillées et une préparation soignée.",
      },
    },
  },
} as const;

interface PlasteringServicesProps {
  lang: "en" | "fr";
}

export default function PlasteringServices({
  lang,
}: PlasteringServicesProps) {
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