"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PaintRoller,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";

const stepConfig = [
  {
    number: "01",
    key: "estimate",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    key: "preparation",
    icon: ShieldCheck,
  },
  {
    number: "03",
    key: "painting",
    icon: PaintRoller,
  },
  {
    number: "04",
    key: "walkthrough",
    icon: Sparkles,
  },
] as const;

const translations = {
  en: {
    badge: "Our Painting Process",

    title:
      "A Professional Process Designed For Clean, High-Quality Results",

    description:
      "Every project follows a structured process focused on preparation, professionalism, residential painting quality, and homeowner satisfaction.",

    stepLabel: "Step",

    steps: {
      estimate: {
        title: "Free Estimate",
        description:
          "We discuss your project goals, surfaces, timelines, colors, and overall vision for your home.",
      },

      preparation: {
        title: "Surface Preparation",
        description:
          "Professional preparation including sanding, patching, repairs, protection, cleaning, and priming.",
      },

      painting: {
        title: "Professional Painting",
        description:
          "Careful application using premium materials and professional residential painting techniques.",
      },

      walkthrough: {
        title: "Final Walkthrough",
        description:
          "Detailed inspection to ensure clean finishes, quality workmanship, and homeowner satisfaction.",
      },
    },
  },

  fr: {
    badge: "Notre processus de peinture",

    title:
      "Un processus professionnel conçu pour des résultats propres et de haute qualité",

    description:
      "Chaque projet suit un processus structuré axé sur la préparation, le professionnalisme, la qualité de la peinture résidentielle et la satisfaction du propriétaire.",

    stepLabel: "Étape",

    steps: {
      estimate: {
        title: "Estimation gratuite",
        description:
          "Nous discutons de vos objectifs, des surfaces à peindre, des délais, des couleurs et de votre vision globale pour votre maison.",
      },

      preparation: {
        title: "Préparation des surfaces",
        description:
          "Préparation professionnelle comprenant le ponçage, le rebouchage, les réparations, la protection, le nettoyage et l’application d’un apprêt.",
      },

      painting: {
        title: "Peinture professionnelle",
        description:
          "Application soignée à l’aide de matériaux de qualité et de techniques professionnelles de peinture résidentielle.",
      },

      walkthrough: {
        title: "Inspection finale",
        description:
          "Inspection détaillée afin d’assurer des finis propres, un travail de qualité et la satisfaction du propriétaire.",
      },
    },
  },
} as const;

export default function ProcessSection() {
  const pathname = usePathname();

  const lang: "en" | "fr" = pathname.startsWith("/fr")
    ? "fr"
    : "en";

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            {t.description}
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#152536]/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-2">
            {stepConfig.map((step, index) => {
              const Icon = step.icon;
              const stepText = t.steps[step.key];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10">

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#8B2E35]/5 transition duration-500 group-hover:scale-150" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-6">

                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
                            {t.stepLabel} {step.number}
                          </p>

                          <h3 className="mt-4 text-3xl font-extrabold text-[#152536]">
                            {stepText.title}
                          </h3>
                        </div>

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                          <Icon size={28} />
                        </div>

                      </div>

                      <p className="mt-6 text-base leading-8 text-[#152536]/70">
                        {stepText.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}