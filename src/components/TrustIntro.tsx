"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Home,
  PaintRoller,
  ShieldCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";

const translations = {
  en: {
    badge: "A Local Painter Homeowners Can Trust",

    titleBefore: "Residential Painting Backed By",
    titleHighlight: "Experience & Quality",

    paragraphOne:
      "For more than 36 years, RJ Painting has helped homeowners throughout Montreal’s West Island improve and modernize their homes through clean workmanship, careful preparation, and professional residential painting services.",

    paragraphTwo:
      "Whether it’s refreshing interior spaces, improving curb appeal, restoring decks, or completing finishing details, every project is approached with professionalism, precision, and respect for your home.",

    features: [
      {
        key: "ownerOperated",
        title: "Owner-Operated Service",
        description:
          "Direct communication and hands-on project involvement from start to finish.",
      },
      {
        key: "residentialSpecialists",
        title: "Residential Specialists",
        description:
          "Focused primarily on residential painting throughout Montreal’s West Island.",
      },
      {
        key: "carefulPreparation",
        title: "Careful Preparation",
        description:
          "Professional preparation designed for smoother, cleaner, and longer-lasting finishes.",
      },
      {
        key: "residentialFocus",
        title: "Residential Focus",
        description:
          "Professional workmanship focused on refined finishes and clean execution.",
      },
    ],

    trustedExperts: "Trusted Residential Experts",
    years: "36+ Years",

    bottomDescription:
      "Providing professional residential painting services throughout Montreal’s West Island.",

    imageAlt: "RJ Painting",
  },

  fr: {
    badge: "Un peintre local digne de confiance",

    titleBefore: "Une peinture résidentielle soutenue par",
    titleHighlight: "l’expérience et la qualité",

    paragraphOne:
      "Depuis plus de 36 ans, RJ Painting aide les propriétaires de l’Ouest-de-l’Île de Montréal à améliorer et moderniser leur maison grâce à un travail soigné, une préparation minutieuse et des services professionnels de peinture résidentielle.",

    paragraphTwo:
      "Qu’il s’agisse de rafraîchir les espaces intérieurs, d’améliorer l’apparence extérieure, de restaurer une terrasse ou de réaliser des travaux de finition, chaque projet est exécuté avec professionnalisme, précision et respect de votre maison.",

    features: [
      {
        key: "ownerOperated",
        title: "Service assuré par le propriétaire",
        description:
          "Communication directe et implication personnelle dans votre projet, du début à la fin.",
      },
      {
        key: "residentialSpecialists",
        title: "Spécialistes résidentiels",
        description:
          "Principalement spécialisés en peinture résidentielle dans l’Ouest-de-l’Île de Montréal.",
      },
      {
        key: "carefulPreparation",
        title: "Préparation minutieuse",
        description:
          "Une préparation professionnelle conçue pour obtenir des finis plus lisses, plus propres et plus durables.",
      },
      {
        key: "residentialFocus",
        title: "Expertise résidentielle",
        description:
          "Un travail professionnel axé sur des finis raffinés et une exécution propre.",
      },
    ],

    trustedExperts: "Experts résidentiels de confiance",
    years: "36+ ans",

    bottomDescription:
      "Services professionnels de peinture résidentielle dans tout l’Ouest-de-l’Île de Montréal.",

    imageAlt: "RJ Painting",
  },
} as const;

const featureIcons = [
  Home,
  PaintRoller,
  ShieldCheck,
  Brush,
];

export default function TrustIntro() {
  const pathname = usePathname();

  const lang: "en" | "fr" = pathname.startsWith("/fr")
    ? "fr"
    : "en";

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
              {t.badge}
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              {t.titleBefore}{" "}
              <span className="text-[#8B2E35]">
                {t.titleHighlight}
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#152536]/75">
              {t.paragraphOne}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#152536]/70">
              {t.paragraphTwo}
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];

                return (
                  <motion.div
                    key={feature.key}
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-[#152536]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B2E35]/10 text-[#8B2E35]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#152536]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#152536]/70">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/rj-about.png"
                alt={t.imageAlt}
                className="h-[650px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#152536]/60 via-transparent to-transparent" />
            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-[2rem] bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B2E35]">
                    {t.trustedExperts}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#152536]">
                    {t.years}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#152536]/70">
                    {t.bottomDescription}
                  </p>
                </div>

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#8B2E35] text-white">
                  <ShieldCheck size={36} />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}