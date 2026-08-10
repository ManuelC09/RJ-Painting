"use client";

import { motion } from "framer-motion";

const translations = {
  en: {
    badge: "Trusted Residential Painting",

    title: "Experience That Homeowners Trust",

    description:
      "RJ Painting has proudly served homeowners throughout Montreal’s West Island with professional residential painting services.",

    stats: [
      {
        number: "36+",
        label: "Years Experience",
      },
      {
        number: "1000+",
        label: "Projects Completed",
      },
      {
        number: "100%",
        label: "Residential Focus",
      },
      {
        number: "West Island",
        label: "Service Area",
      },
    ],
  },

  fr: {
    badge: "Peinture résidentielle de confiance",

    title: "Une expérience à laquelle les propriétaires font confiance",

    description:
      "RJ Painting est fier de servir les propriétaires de l’Ouest-de-l’Île de Montréal avec des services professionnels de peinture résidentielle.",

    stats: [
      {
        number: "36+",
        label: "Années d’expérience",
      },
      {
        number: "1000+",
        label: "Projets réalisés",
      },
      {
        number: "100%",
        label: "Expertise résidentielle",
      },
      {
        number: "Ouest-de-l’Île",
        label: "Zone de service",
      },
    ],
  },
} as const;

interface AboutExperienceProps {
  lang: "en" | "fr";
}

export default function AboutExperience({
  lang,
}: AboutExperienceProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#152536] py-24 sm:py-28">
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
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {t.description}
          </p>
        </motion.div>

        {/* STATS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.stats.map((stat, index) => (
            <motion.div
              key={`${stat.number}-${stat.label}`}
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
              className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
            >
              <h3 className="text-5xl font-extrabold text-[#8B2E35]">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg font-semibold text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}