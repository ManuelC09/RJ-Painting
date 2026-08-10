"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

const galleryConfig = [
  {
    key: "baseboards",
    image: "/images/mouldings-gallery-1.jpg",
    large: true,
  },
  {
    key: "crownMouldings",
    image: "/images/mouldings-gallery-2.jpg",
    large: false,
  },
  {
    key: "windowTrim",
    image: "/images/mouldings-gallery-3.jpg",
    large: false,
  },
  {
    key: "doorFrames",
    image: "/images/mouldings-gallery-4.jpg",
    large: false,
  },
] as const;

const translations = {
  en: {
    badge: "Detailed Interior Finishing Work",

    title:
      "Clean Trim, Moulding & Interior Detail Finishes",

    description:
      "Explore baseboards, crown mouldings, window trim, door frames, and detailed finishing work.",

    galleryButton: "View Full Gallery",

    items: {
      baseboards: {
        title: "Detailed Baseboard Finishing",
        category: "Baseboards",
      },

      crownMouldings: {
        title: "Crown Moulding Refresh",
        category: "Crown Mouldings",
      },

      windowTrim: {
        title: "Window Trim Detail",
        category: "Window Trim",
      },

      doorFrames: {
        title: "Interior Door Frame Finish",
        category: "Door Frames",
      },
    },
  },

  fr: {
    badge: "Travaux de finition intérieure détaillés",

    title:
      "Finitions soignées de moulures, boiseries et détails intérieurs",

    description:
      "Découvrez nos travaux sur les plinthes, moulures couronnées, encadrements de fenêtres, cadres de portes et autres détails de finition intérieure.",

    galleryButton: "Voir toute la galerie",

    items: {
      baseboards: {
        title: "Finition détaillée des plinthes",
        category: "Plinthes",
      },

      crownMouldings: {
        title: "Rafraîchissement des moulures couronnées",
        category: "Moulures couronnées",
      },

      windowTrim: {
        title: "Finition des encadrements de fenêtres",
        category: "Encadrements de fenêtres",
      },

      doorFrames: {
        title: "Finition des cadres de portes intérieures",
        category: "Cadres de portes",
      },
    },
  },
} as const;

interface MouldingsGalleryProps {
  lang: "en" | "fr";
}

export default function MouldingsGallery({
  lang,
}: MouldingsGalleryProps) {
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