"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Fence,
  PaintRoller,
  ShieldCheck,
} from "lucide-react";

const serviceConfig = [
  {
    key: "deckStaining",
    icon: Brush,
  },
  {
    key: "deckPainting",
    icon: PaintRoller,
  },
  {
    key: "fenceFinishing",
    icon: Fence,
  },
  {
    key: "surfacePreparation",
    icon: ShieldCheck,
  },
] as const;

const translations = {
  en: {
    badge: "Deck & Outdoor Wood Services",

    title:
      "Professional Finishing For Decks, Fences & Outdoor Wood",

    description:
      "RJ Painting helps homeowners refresh outdoor spaces with professional deck staining, painting, surface preparation, and wood protection.",

    services: {
      deckStaining: {
        title: "Deck Staining",
        description:
          "Restore faded decks with rich, professional wood finishes designed for outdoor durability.",
      },

      deckPainting: {
        title: "Deck Painting",
        description:
          "Modernize outdoor spaces with clean painted surfaces and proper preparation.",
      },

      fenceFinishing: {
        title: "Fence Painting & Staining",
        description:
          "Improve the appearance and protection of fencing and perimeter wood structures.",
      },

      surfacePreparation: {
        title: "Surface Preparation",
        description:
          "Proper sanding, cleaning, and preparation designed for longer-lasting results.",
      },
    },
  },

  fr: {
    badge: "Services pour terrasses et bois extérieur",

    title:
      "Finition professionnelle pour terrasses, clôtures et surfaces extérieures en bois",

    description:
      "RJ Painting aide les propriétaires à rafraîchir leurs espaces extérieurs grâce à des services professionnels de teinture, de peinture, de préparation des surfaces et de protection du bois.",

    services: {
      deckStaining: {
        title: "Teinture de terrasse",
        description:
          "Redonnez vie aux terrasses décolorées avec des finis professionnels pour le bois conçus pour résister aux conditions extérieures.",
      },

      deckPainting: {
        title: "Peinture de terrasse",
        description:
          "Modernisez vos espaces extérieurs avec des surfaces peintes proprement et une préparation adéquate.",
      },

      fenceFinishing: {
        title: "Peinture et teinture de clôtures",
        description:
          "Améliorez l’apparence et la protection des clôtures et autres structures extérieures en bois.",
      },

      surfacePreparation: {
        title: "Préparation des surfaces",
        description:
          "Un ponçage, un nettoyage et une préparation adéquats conçus pour obtenir des résultats plus durables.",
      },
    },
  },
} as const;

interface DeckServicesProps {
  lang: "en" | "fr";
}

export default function DeckServices({
  lang,
}: DeckServicesProps) {
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
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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