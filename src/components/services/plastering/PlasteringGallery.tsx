"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

const galleryConfig = [
  {
    key: "surfacePreparation",
    image: "/images/plastering-gallery-1.jpg",
    large: true,
  },
  {
    key: "wallPatching",
    image: "/images/plastering-gallery-2.jpg",
  },
  {
    key: "crackRepair",
    image: "/images/plastering-gallery-3.jpg",
  },
  {
    key: "finishedSurface",
    image: "/images/plastering-gallery-4.jpg",
  },
] as const;

const translations = {
  en: {
    badge: "Surface Preparation Work",

    title:
      "Clean Repairs Designed For Better Painting Results",

    description:
      "Explore wall patching, plaster touch-ups, crack repairs, and surface preparation work completed before painting.",

    galleryButton: "View Full Gallery",

    items: {
      surfacePreparation: {
        title: "Smooth Wall Preparation",
        category: "Surface Repair",
      },

      wallPatching: {
        title: "Wall Patching Before Paint",
        category: "Wall Patching",
      },

      crackRepair: {
        title: "Crack Repair & Surface Smoothing",
        category: "Crack Repair",
      },

      finishedSurface: {
        title: "Clean Finished Surface",
        category: "Preparation",
      },
    },
  },

  fr: {
    badge: "Travaux de préparation des surfaces",

    title:
      "Des réparations soignées pour de meilleurs résultats de peinture",

    description:
      "Découvrez nos travaux de réparation de murs, retouches de plâtre, réparation de fissures et préparation des surfaces réalisés avant la peinture.",

    galleryButton: "Voir toute la galerie",

    items: {
      surfacePreparation: {
        title: "Préparation lisse des murs",
        category: "Réparation de surfaces",
      },

      wallPatching: {
        title: "Réparation des murs avant la peinture",
        category: "Réparation des murs",
      },

      crackRepair: {
        title: "Réparation des fissures et lissage des surfaces",
        category: "Réparation de fissures",
      },

      finishedSurface: {
        title: "Surface finie propre et uniforme",
        category: "Préparation",
      },
    },
  },
} as const;

interface PlasteringGalleryProps {
  lang: "en" | "fr";
}

export default function PlasteringGallery({
  lang,
}: PlasteringGalleryProps) {
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
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
              <Images size={16} />
              {t.badge}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#152536]/70">
              {t.description}
            </p>
          </div>

          <Link
            href={`/${lang}/gallery`}
            className="group inline-flex items-center gap-3 self-start rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#263E5A]"
          >
            {t.galleryButton}

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryConfig.map((item, index) => {
            const itemText = t.items[item.key];

            return (
              <motion.div
                key={item.key}
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
                className={`group relative overflow-hidden rounded-[2rem] shadow-xl ${
                  item.large ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={itemText.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {itemText.category}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-7">
                    <h3 className="max-w-xl text-3xl font-extrabold leading-tight text-white">
                      {itemText.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-[2px] w-10 bg-[#D35B66]" />

                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        RJ Painting
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}