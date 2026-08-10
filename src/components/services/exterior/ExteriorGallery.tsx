"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

const galleryConfig = [
  {
    key: "modernRepaint",
    image: "/images/exterior-gallery-1.png",
    large: true,
  },
  {
    key: "brickRefresh",
    image: "/images/exterior-gallery-2.png",
  },
  {
    key: "curbAppealUpgrade",
    image: "/images/exterior-gallery-3.png",
  },
  {
    key: "garageTrimFinish",
    image: "/images/exterior-gallery-4.jpg",
  },
] as const;

const translations = {
  en: {
    badge: "Recent Exterior Projects",

    title:
      "Exterior Painting Designed For Modern Curb Appeal",

    description:
      "Explore recent exterior painting projects completed throughout Montreal’s West Island featuring modern finishes, clean preparation, and professional exterior transformations.",

    galleryButton: "View Full Gallery",

    items: {
      modernRepaint: {
        title: "Modern Exterior Repaint",
        category: "Exterior Siding",
      },

      brickRefresh: {
        title: "Contemporary Brick Refresh",
        category: "Brick Painting",
      },

      curbAppealUpgrade: {
        title: "Luxury Curb Appeal Upgrade",
        category: "Exterior Transformation",
      },

      garageTrimFinish: {
        title: "Modern Garage & Trim Finish",
        category: "Garage Doors & Trim",
      },
    },
  },

  fr: {
    badge: "Projets extérieurs récents",

    title:
      "Une peinture extérieure conçue pour une apparence moderne",

    description:
      "Découvrez nos récents projets de peinture extérieure réalisés partout dans l’Ouest-de-l’Île de Montréal, avec des finis modernes, une préparation soignée et des transformations extérieures professionnelles.",

    galleryButton: "Voir toute la galerie",

    items: {
      modernRepaint: {
        title: "Nouvelle peinture extérieure moderne",
        category: "Revêtement extérieur",
      },

      brickRefresh: {
        title: "Rafraîchissement contemporain de la brique",
        category: "Peinture de brique",
      },

      curbAppealUpgrade: {
        title: "Transformation extérieure haut de gamme",
        category: "Transformation extérieure",
      },

      garageTrimFinish: {
        title: "Finition moderne du garage et des moulures",
        category: "Portes de garage et moulures",
      },
    },
  },
} as const;

interface ExteriorGalleryProps {
  lang: "en" | "fr";
}

export default function ExteriorGallery({
  lang,
}: ExteriorGalleryProps) {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
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

        {/* GALLERY */}
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

                  {/* CATEGORY */}
                  <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {itemText.category}
                  </div>

                  {/* TITLE */}
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