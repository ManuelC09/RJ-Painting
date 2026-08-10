"use client";

import { motion } from "framer-motion";

const translations = {
  en: {
    badge: "Our Story",

    title:
      "Dedicated To Quality Residential Painting",

    paragraphOne:
      "RJ Painting focuses exclusively on residential painting services, delivering professional workmanship, careful preparation, and clean finishes tailored to each home.",

    paragraphTwo:
      "Over the years, we’ve built our reputation through reliability, attention to detail, and a commitment to helping homeowners create cleaner, brighter, and more modern living spaces.",

    paragraphThree:
      "From interior painting to exterior transformations, deck staining, trim finishing, and surface repairs, every project is completed with professionalism and care.",
  },

  fr: {
    badge: "Notre histoire",

    title:
      "Un engagement envers la qualité en peinture résidentielle",

    paragraphOne:
      "RJ Painting se consacre exclusivement aux services de peinture résidentielle, en offrant un travail professionnel, une préparation minutieuse et des finis propres adaptés à chaque maison.",

    paragraphTwo:
      "Au fil des années, nous avons bâti notre réputation grâce à notre fiabilité, notre souci du détail et notre engagement à aider les propriétaires à créer des espaces de vie plus propres, plus lumineux et plus modernes.",

    paragraphThree:
      "De la peinture intérieure aux transformations extérieures, en passant par la teinture de terrasses, la finition des moulures et la réparation des surfaces, chaque projet est réalisé avec professionnalisme et soin.",
  },
} as const;

interface AboutStoryProps {
  lang: "en" | "fr";
}

export default function AboutStory({
  lang,
}: AboutStoryProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
                src="/images/rj-about.png"
                alt="RJ Painting"
                className="h-[620px] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
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

            <p className="mt-6 text-base leading-8 text-[#152536]/70">
              {t.paragraphThree}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}