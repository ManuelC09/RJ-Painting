"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const translations = {
  en: {
    eyebrow: "Let’s Get Started",

    title:
      "Request Your Free Residential Painting Estimate Today",

    description:
      "Contact RJ Painting to discuss your upcoming painting or surface preparation project.",

    button: "Request Estimate",
  },

  fr: {
    eyebrow: "Commençons votre projet",

    title:
      "Demandez dès aujourd’hui votre estimation gratuite de peinture résidentielle",

    description:
      "Contactez RJ Painting pour discuter de votre prochain projet de peinture ou de préparation de surfaces.",

    button: "Demander une estimation",
  },
} as const;

interface ContactCTAProps {
  lang: "en" | "fr";
}

export default function ContactCTA({
  lang,
}: ContactCTAProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
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
          className="relative overflow-hidden rounded-[2rem] bg-[#152536] px-8 py-20 text-center shadow-2xl sm:px-12 lg:px-20"
        >
          {/* BACKGROUND ACCENTS */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#8B2E35]/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#263E5A]/40 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
              {t.eyebrow}
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {t.description}
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href={`/${lang}/contact`}
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
              >
                {t.button}

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}