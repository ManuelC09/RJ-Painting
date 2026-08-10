"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const projectConfig = [
  {
    key: "modernInteriorRefresh",
    image: "/images/project-2.png",
  },
  {
    key: "deckRestorationProject",
    image: "/images/project-3.png",
  },
  {
    key: "detailedTrimFinishing",
    image: "/images/project-4.png",
  },
] as const;

const translations = {
  en: {
    badge: "Recent Painting Transformations",

    titleBefore: "See The Difference",
    titleHighlight: "Professional Painting Makes.",

    description:
      "Compare before and after results from residential painting projects completed throughout Montreal’s West Island.",

    galleryButton: "View Full Gallery",

    slider: {
      title: "Exterior Brick Transformation in Montreal’s West Island",
      category: "Exterior Before & After",
    },

    projects: {
      modernInteriorRefresh: {
        title: "Modern Interior Refresh",
        category: "Interior Painting",
      },

      deckRestorationProject: {
        title: "Deck Restoration Project",
        category: "Deck Staining",
      },

      detailedTrimFinishing: {
        title: "Detailed Trim Finishing",
        category: "Trim & Mouldings",
      },
    },

    stats: {
      years: "Years Experience",
      residential: "Residential Focus",
      projects: "Projects Completed",
    },
  },

  fr: {
    badge: "Transformations récentes en peinture",

    titleBefore: "Découvrez la différence",
    titleHighlight: "qu’une peinture professionnelle peut faire.",

    description:
      "Comparez les résultats avant et après de projets de peinture résidentielle réalisés dans l’Ouest-de-l’Île de Montréal.",

    galleryButton: "Voir toute la galerie",

    slider: {
      title: "Transformation de brique extérieure dans l’Ouest-de-l’Île de Montréal",
      category: "Extérieur avant et après",
    },

    projects: {
      modernInteriorRefresh: {
        title: "Rafraîchissement intérieur moderne",
        category: "Peinture intérieure",
      },

      deckRestorationProject: {
        title: "Projet de restauration de terrasse",
        category: "Teinture de terrasse",
      },

      detailedTrimFinishing: {
        title: "Finition détaillée des moulures",
        category: "Moulures et boiseries",
      },
    },

    stats: {
      years: "Années d’expérience",
      residential: "Expertise résidentielle",
      projects: "Projets réalisés",
    },
  },
} as const;

export default function RecentProjects() {
  const pathname = usePathname();

  const lang: "en" | "fr" = pathname.startsWith("/fr")
    ? "fr"
    : "en";

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#152536] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <Images size={16} />
              {t.badge}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {t.titleBefore}{" "}
              <span className="text-[#8B2E35]">
                {t.titleHighlight}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {t.description}
            </p>
          </div>

          <Link
            href={`/${lang}/gallery`}
            className="inline-flex items-center gap-3 self-start rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
          >
            {t.galleryButton}
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* BEFORE / AFTER */}
        <div className="mt-16">
          <BeforeAfterSlider
            beforeImage="/images/before-exterior.png"
            afterImage="/images/after-exterior.png"
            title={t.slider.title}
            category={t.slider.category}
          />
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projectConfig.map((project, index) => {
            const projectText = t.projects[project.key];

            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/5"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={projectText.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {projectText.category}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-extrabold leading-tight text-white">
                      {projectText.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-[2px] w-10 bg-[#D35B66]" />

                      <p className="text-xs font-semibold text-white/70">
                        RJ Painting
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10"
        >
          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <p className="text-5xl font-extrabold text-white">
                36+
              </p>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.stats.years}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <p className="text-5xl font-extrabold text-white">
                  100%
                </p>

                <Sparkles
                  className="text-[#8B2E35]"
                  size={34}
                />
              </div>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.stats.residential}
              </p>
            </div>

            <div>
              <p className="text-5xl font-extrabold text-white">
                1000+
              </p>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.stats.projects}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}