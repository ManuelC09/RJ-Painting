"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const translations = {
  en: {
    badge: "Interior Residential Painting",

    title:
      "Transform Your Interior Spaces With Professional Painting",

    paragraphOne:
      "RJ Painting provides premium interior residential painting services designed to refresh, modernize, and elevate the appearance of your home with clean finishes and professional workmanship.",

    paragraphTwo:
      "Whether you’re repainting a single room or completing a full-home transformation, every project is approached with careful preparation, attention to detail, and respect for your home.",

    highlights: [
      "Living Rooms & Family Rooms",
      "Kitchens & Dining Areas",
      "Bedrooms & Hallways",
      "Accent Walls & Full Repaints",
    ],

    imageAlt: "Interior Painting",

    cardBadge: "Clean Professional Results",

    cardTitle: "Premium Interior Finishes",

    cardDescription:
      "Modern residential painting focused on detail, preparation, and long-lasting finishes.",
  },

  fr: {
    badge: "Peinture résidentielle intérieure",

    title:
      "Transformez vos espaces intérieurs grâce à une peinture professionnelle",

    paragraphOne:
      "RJ Painting offre des services haut de gamme de peinture résidentielle intérieure conçus pour rafraîchir, moderniser et mettre en valeur votre maison grâce à des finis propres et un travail professionnel.",

    paragraphTwo:
      "Que vous souhaitiez repeindre une seule pièce ou transformer l’ensemble de votre maison, chaque projet est réalisé avec une préparation minutieuse, un grand souci du détail et le respect de votre propriété.",

    highlights: [
      "Salons et salles familiales",
      "Cuisines et salles à manger",
      "Chambres et corridors",
      "Murs d’accent et peinture complète",
    ],

    imageAlt: "Peinture intérieure",

    cardBadge: "Résultats propres et professionnels",

    cardTitle: "Finis intérieurs haut de gamme",

    cardDescription:
      "Peinture résidentielle moderne axée sur le souci du détail, la préparation et des finis durables.",
  },
} as const;

interface InteriorIntroProps {
  lang: "en" | "fr";
}

export default function InteriorIntro({
  lang,
}: InteriorIntroProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

          {/* LEFT CONTENT */}
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
          >
            <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
              {t.badge}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#152536]/70">
              {t.paragraphOne}
            </p>

            <p className="mt-6 text-base leading-8 text-[#152536]/70">
              {t.paragraphTwo}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#152536]/10 bg-white px-5 py-4 shadow-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#8B2E35]"
                  />

                  <span className="text-sm font-semibold text-[#152536]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/interior-about.png"
                alt={t.imageAlt}
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[2rem] bg-white p-8 shadow-2xl lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                {t.cardBadge}
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#152536]">
                {t.cardTitle}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-7 text-[#152536]/70">
                {t.cardDescription}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}