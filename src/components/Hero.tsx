"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const translations = {
  en: {
    ownerBadge: "Home by the Owner",

    titleBefore: "Transform Your Home With",
    titleHighlight: "Professional Painting",

    description: `Here at RJ Painting, I don't claim to paint mansions or large companies or take jobs that cost tens of thousands of dollars. I specialize mostly in everyday West Island residential homes.

I feel that when taking on too many different projects, like commercial and industrial, the quality level that a home should receive is lost. I know when I hire a company to do work with regard to my home, I expect them to treat the job like it was their own home.

That's what RJ Painting brings to you. I have been in this business for 36 years and RJ Painting has been around for over 28 of them.`,

    estimateButton: "Request a Free Estimate",

    reviewsBefore: "Check",
    reviewsAfter: "Reviews",

    stats: [
      "36+ Years Experience",
      "West Island Local Business",
      "Free Estimates",
    ],

    cardTitle:
      "Clean workmanship. Professional preparation. Beautiful finishes.",

    cardDescription:
      "Helping homeowners modernize, refresh, and protect their homes with reliable residential painting services.",

    years: "Years of residential painting experience",

    freeEstimates: "Free Estimates",

    location: "West Island & nearby areas",
  },

  fr: {
    ownerBadge: "Service par le propriétaire",

    titleBefore: "Transformez votre maison avec une",
    titleHighlight: "peinture professionnelle",

    description: `Chez RJ Painting, je ne prétends pas peindre des manoirs ou de grandes entreprises, ni accepter des travaux qui coûtent des dizaines de milliers de dollars. Je me spécialise principalement dans les maisons résidentielles de tous les jours de l'Ouest-de-l'Île.

Je crois que lorsqu'une entreprise accepte trop de types de projets différents, comme des travaux commerciaux et industriels, le niveau de qualité qu'une maison devrait recevoir peut se perdre. Lorsque j'engage une entreprise pour effectuer des travaux chez moi, je m'attends à ce qu'elle traite le projet comme s'il s'agissait de sa propre maison.

C'est exactement ce que RJ Painting vous offre. Je travaille dans ce domaine depuis 36 ans et RJ Painting existe depuis plus de 28 ans.`,

    estimateButton: "Demander une estimation gratuite",

    reviewsBefore: "Voir les",
    reviewsAfter: "avis",

    stats: [
      "36+ ans d'expérience",
      "Entreprise locale de l'Ouest-de-l'Île",
      "Estimations gratuites",
    ],

    cardTitle:
      "Travail soigné. Préparation professionnelle. Finitions impeccables.",

    cardDescription:
      "Nous aidons les propriétaires à moderniser, rafraîchir et protéger leur maison grâce à des services de peinture résidentielle fiables.",

    years: "Années d'expérience en peinture résidentielle",

    freeEstimates: "Estimations gratuites",

    location: "Ouest-de-l'Île et environs",
  },
};

function GoogleWordmark() {
  return (
    <span className="font-semibold tracking-tight">
      <span>G</span>
      <span>o</span>
      <span>o</span>
      <span>g</span>
      <span>l</span>
      <span>e</span>
    </span>
  );
}

export default function Hero() {
  const pathname = usePathname();

  const lang: "en" | "fr" = pathname.startsWith("/fr")
    ? "fr"
    : "en";

  const t = translations[lang];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-[url('/images/rj-hero.png')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/35" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,46,53,0.35),transparent_35%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-48 sm:pt-44 lg:px-6 lg:pt-40">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT SIDE */}
          <div className="max-w-3xl">

            {/* OWNER BADGE */}
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
              className="mb-2 mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              <Home size={16} />

              {t.ownerBadge}
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
              className="max-w-2xl whitespace-pre-line text-base leading-8 text-white/82 sm:text-lg"
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
                href="#reviews"
                className="inline-flex items-center justify-center gap-1 rounded-md border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                <span>
                  {t.reviewsBefore}
                </span>

                <GoogleWordmark />

                <span>
                  {t.reviewsAfter}
                </span>
              </Link>

            </motion.div>

            {/* STATS */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.55,
                  },
                },
              }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {t.stats.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 18,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  <CheckCircle
                    size={17}
                    className="text-[#8B2E35]"
                  />

                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
            }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">

              <div className="rounded-[1.5rem] bg-white p-6">

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
                  RJ Painting
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#152536]">
                  {t.cardTitle}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#152536]/70">
                  {t.cardDescription}
                </p>

                <div className="mt-6 rounded-2xl bg-[#F8F5F0] p-5">

                  <p className="text-4xl font-extrabold text-[#263E5A]">
                    36+
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#152536]/70">
                    {t.years}
                  </p>

                </div>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#8B2E35] px-6 py-5 text-white shadow-xl">

                <p className="text-sm font-semibold">
                  {t.freeEstimates}
                </p>

                <p className="mt-1 text-xs text-white/75">
                  {t.location}
                </p>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}