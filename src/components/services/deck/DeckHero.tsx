"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Trees,
} from "lucide-react";

const translations = {
  en: {
    badge: "Deck Painting & Staining",

    titleBefore: "Restore & Protect Your",
    titleHighlight: "Outdoor Wood Surfaces",

    description:
      "Professional deck staining and painting services designed to refresh weathered wood, improve outdoor living spaces, and protect surfaces from long-term wear.",

    estimateButton: "Request a Free Estimate",
    galleryButton: "View Deck Projects",

    highlights: [
      "Deck Staining",
      "Deck Painting",
      "Fence Finishing",
      "Wood Prep",
    ],
  },

  fr: {
    badge: "Peinture et teinture de terrasses",

    titleBefore: "Restaurez et protégez vos",
    titleHighlight: "surfaces extérieures en bois",

    description:
      "Des services professionnels de teinture et de peinture de terrasses conçus pour rafraîchir le bois exposé aux intempéries, améliorer vos espaces de vie extérieurs et protéger les surfaces contre l’usure à long terme.",

    estimateButton: "Demander une estimation gratuite",
    galleryButton: "Voir les projets de terrasses",

    highlights: [
      "Teinture de terrasse",
      "Peinture de terrasse",
      "Finition de clôtures",
      "Préparation du bois",
    ],
  },
} as const;

interface DeckHeroProps {
  lang: "en" | "fr";
}

export default function DeckHero({
  lang,
}: DeckHeroProps) {
  const t = translations[lang];

  return (
    <section className="relative min-h-[88vh] overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-[url('/images/deck-hero.png')] bg-cover bg-center"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/82 to-[#152536]/25" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(139,46,53,0.35),transparent_36%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 pb-16 pt-48 lg:pt-44">
        <div className="max-w-4xl">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
          >
            <Trees size={16} />
            {t.badge}
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 34,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t.titleBefore}{" "}

            <span className="text-[#8B2E35]">
              {t.titleHighlight}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg"
          >
            {t.description}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href={`/${lang}/contact#contact`}
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-[#D35B66]"
            >
              {t.estimateButton}

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href={`/${lang}/gallery`}
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
            >
              {t.galleryButton}
            </Link>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {t.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
              >
                <CheckCircle
                  size={17}
                  className="text-[#8B2E35]"
                />

                {item}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}