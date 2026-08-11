"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GalleryBeforeAfter from "./GalleryBeforeAfter";

type Locale = "en" | "fr";

type GalleryItem = {
  title?: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  large?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    title: "",
    category: "Deck Cleaning & Protection",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1fc5gKFn755PuorPEY462Uk2qFLxYtkVJ&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1Q5vclKRnLiQoXJqk68k-TWEpI57xXxQ-&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Cleaning & Protection",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1BNuL09IAPwm5xaEZdSX7nTQy2zn2ETxh&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1emloj_9qUufLzxmSISSl4fWrocMmyoda&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Cleaning & Protection",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1xVFUZAkxUh4utaryuJbrc2vQnyR6JENQ&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1J_fS2FBqEJTI9Wg4JggcmlTUt-7LT0Jb&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Cleaning & Protection",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1KWmytMO0oJSqM50-B-0uoKgjn7nYLdUQ&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1OQd3dCeNuE8Q7XDtmZMCqHz2beVuiWhU&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Painting & Staining",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1X7EveOEPVsiOJ6y2_l3gIIBoSRBamUIj&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1QkvI3LfTQAmYbE2PdGUOjwEIxCDMzfQM&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Painting & Staining",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1ZxU4s3zy2784kzh0YPWRSnNn_DHoVkkf&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1bu1xojk8adUPzoSIzmAl8kof-N2VTrZe&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Painting & Staining",
    beforeImage:
      "https://drive.google.com/thumbnail?id=17fJHwnwarEpE77et7odbJlrtNTxd9NPo&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1BYGMOf5rfpotJITTBcpBeoP4_flolkUw&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Painting & Staining",
    beforeImage:
      "https://drive.google.com/thumbnail?id=185t3KEN52jAVczhy9i1mbZ7HZWW9NOzj&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1_euF1WukPI1jnbFe6yF0U7k9Ms_Q16L0&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Painting & Staining",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1omIM6MjiuUR1OyPocl85W1dJZvcuM2et&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1Nu6N0DBcv4R37raoKA2gCg5zPB4xR3VM&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Deck Painting & Staining",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1z3CkxQwjIoS0ITGE5R449NPGvLNUWUB7&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1TWnNDknOgMAR9CY8DDgvm0LK_rNXAfHU&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Brick & Stucco",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1fyiqqdbG3QWrQ7O_5Eykw0WY8Hjs6i9c&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1--I0V4xld4jiyFfD3hPAUbYyj8Nq5pFB&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Brick & Stucco",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1I5sSkNHVM1eXKRrRfjMaXlVeA7l22zUv&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=15-RHzID305y1MHeKgtK1oOZqaYfsw1pq&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Brick & Stucco",
    beforeImage:
      "https://drive.google.com/thumbnail?id=19vFjlbOnU4HZy6qO9Spue-eOdI5WHrg8&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1b8nPedlBVRUF2EJFBYgQE8U6zo8URz9l&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Brick & Stucco",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1vMl2-c1vQw6ao8t8sv7kUBCDOA9LBty0&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1gYmTvhC7bJbqBYUh-T9h95EXH6Og-S5c&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Brick & Stucco",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1Dfl4x07BvCPyw9eByPSuqGk9k2cL-SpM&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1paDKouTZuzyVjOcKN_7STPVwve_vN8ZO&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Brick & Stucco",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1PTiBtizr9ggyslKoF--JgTNAi1AYZWYR&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1GErK4WZGbacL9iuQIrjKUM6P77r9FP1Z&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=14AKuqWnWRVNlMVNSIU2FSmW1Wa2oiTdC&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1zCpmw5tafDt42Vf-OH1xdlSLZJi8J3qo&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1eZirLq56xLtNF-T-olJdGX-R6zeqGz8O&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=14BQULLHr03a_WkzUmCwWqNRj2qFgMjC7&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1c8zxR6biFr7nZruRF4o1tXG5GxqyZ-_H&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1BlCVPKWvADqcAeKQL6xx-YMee1JPjNcC&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=15Gm1E8j8a-GR_cbjbCcsGsGwx4XtaZ0W&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1_YMoN_DXRSFhhbWKAMSst5rXDlOPjj8I&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=102lPYZqPnpFDjbln9n4htySEecN7GJT4&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1Qcfaog4h8FCmRGTJMH7andNgiheWwcC0&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Exterior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1NPIEJaBcHz6oUjuxVkneeHm8k8SUdw6U&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1DkvKXkqfWUdJY8-v98UxIVuWEm8HmBJl&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Interior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1hoTBN5nt6dpVwpjypyRv1XpiZ0uAxGzW&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1ATaoJjrEUL8pVVrpdvWqfwfh_z67qACo&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Interior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1RJEGPAWgyPWj0jrxEImi3eJHvO6hXraE&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1sYc9D3DejUAnN1anYSuuyTq3cxWheE5C&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Interior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1juQ06iYij450KUS6C5e_fXdpHbaAdr2Y&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1nvpShDssahzxmrTqbCzdzNzu_FNNY6JB&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Interior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1gyCghPkAm9cgOC-h_ANHFLzEfwLVoPkH&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1zdi2MQ9o-Stdmna9-o4yahsWv5-8CMHC&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Interior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1LbGopVLFus-xlZwcjKee_O1Mhzhf7W0R&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=104fTq0sJRfK4fU-t21UMLPq7_cUbwWy8&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Interior Painting",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1CC-PhCLB1N9tJ34AhLQ2e28pWKnXax40&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1zR8hys9GqLeOgUSjnQHSzI36zR8cbfK6&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Plastering & Surface Repairs",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1UKfdFqy-IL95pIVE0jPWIhZSDzXZHewv&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1uTHNpHuAt_Or0dHVKYmSaB9w05UdOfq8&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Plastering & Surface Repairs",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1JeN55okOeVlWdMy3aIbIbwZTEckoD5hC&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=14t2hYMd6j029eTha8oKyDpnzjDCl8gXZ&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Plastering & Surface Repairs",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1sidtec0ks0I8bjQRv7iXAZrHAOx-0Ph9&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1ro8x0uuc40bSEz_xGQ_e_sN52ptsgM8P&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Plastering & Surface Repairs",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1-gl_9KhIVjph7uTXD88HPCXDHPklhWbO&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1UQCjAHbwjvkYqR373czxJtUdrDVjAvZb&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Plastering & Surface Repairs",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1GCMloGmRDVtGej5gByYDpxSwRW9Ln683&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1X4VneSb76Ecoiv3hwMreLRJq0cHmQ6ut&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Plastering & Surface Repairs",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1maYiA1Kdmb99eaT0aGHfCwIlUG74KDPn&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1UuqKHpQrqqqjh2XwARGLC82TA4EzW9Ha&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Mouldings & Trim Finishing",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1o8Bak7qZFtKTLzA2tzNpwtotfUUfDhOV&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1rnOe0BtEAdxWbW1vzB82TK9sC_k4G2aP&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Mouldings & Trim Finishing",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1_OMW9su65_IM_hhZUVekcnhAV3Y0dNII&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1QgDw23cesOyy47fUPYF8yOSyWhnK81XN&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Mouldings & Trim Finishing",
    beforeImage:
      "https://drive.google.com/thumbnail?id=18aESgdICBWrz2XNagY8dmhuzITQWPdTp&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1TO7kv7QAsvblhg8eeQYYX_ZG0AeSuuMO&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Mouldings & Trim Finishing",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1vIwtwhAzptfwidf8eb0AeHomN9_GmUKY&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1_QV9e2mP_gCoc3NDnaVfUBN7_Yd4m_ow&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Mouldings & Trim Finishing",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1qFRNNVErewCB6r322EwLyr55KCmr0Msb&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=130_0N3IlwJPX0eEaJtR9SU2QrEf34a7B&sz=w2000",
    large: false,
  },

  {
    title: "",
    category: "Mouldings & Trim Finishing",
    beforeImage:
      "https://drive.google.com/thumbnail?id=1ysEO3OTblcUZlDJUacIakFgSf1x5Z7Sv&sz=w2000",
    afterImage:
      "https://drive.google.com/thumbnail?id=1RJGE3ENS1P7LiRQESTMqhy7QxZhaiM0R&sz=w2000",
    large: false,
  },
];

const categories = [
  "All Projects",
  "Interior Painting",
  "Plastering & Surface Repairs",
  "Mouldings & Trim Finishing",
  "Exterior Painting",
  "Deck Painting & Staining",
  "Deck Cleaning & Protection",
  "Exterior Brick & Stucco",
] as const;

const translations = {
  en: {
    badge: "Explore Our Work",
    title: "Real Homes. Professional Results.",
    description:
      "Every project represents the level of preparation, cleanliness, and care RJ Painting brings to residential homes.",

    beforeAfter: "Click to view Before / After",
    closeProject: "Close project",

    categories: {
      "All Projects": "All Projects",
      "Interior Painting": "Interior Painting",
      "Plastering & Surface Repairs":
        "Plastering & Surface Repairs",
      "Mouldings & Trim Finishing":
        "Mouldings & Trim Finishing",
      "Exterior Painting": "Exterior Painting",
      "Deck Painting & Staining":
        "Deck Painting & Staining",
      "Deck Cleaning & Protection":
        "Deck Cleaning & Protection",
      "Exterior Brick & Stucco":
        "Exterior Brick & Stucco",
    },
  },

  fr: {
    badge: "Découvrez nos réalisations",
    title: "De vraies maisons. Des résultats professionnels.",
    description:
      "Chaque projet reflète le niveau de préparation, de propreté et de soin que RJ Painting apporte aux maisons de ses clients.",

    beforeAfter: "Cliquez pour voir Avant / Après",
    closeProject: "Fermer le projet",

    categories: {
      "All Projects": "Tous les projets",
      "Interior Painting": "Peinture intérieure",
      "Plastering & Surface Repairs":
        "Plâtrage et réparation des surfaces",
      "Mouldings & Trim Finishing":
        "Moulures et finition",
      "Exterior Painting": "Peinture extérieure",
      "Deck Painting & Staining":
        "Peinture et teinture de terrasses",
      "Deck Cleaning & Protection":
        "Nettoyage et protection de terrasses",
      "Exterior Brick & Stucco":
        "Brique extérieure et stuc",
    },
  },
} as const;

interface GalleryGridProps {
  lang: Locale;
}

export default function GalleryGrid({
  lang,
}: GalleryGridProps) {
  const t = translations[lang];

  const [selectedProject, setSelectedProject] =
    useState<GalleryItem | null>(null);

  /*
   * IMPORTANTE:
   * activeCategory siempre conserva el valor interno
   * en inglés. Solo traducimos lo que mostramos.
   */
  const [activeCategory, setActiveCategory] =
    useState<string>("All Projects");

  const filteredItems =
    activeCategory === "All Projects"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        );

  const getCategoryLabel = (category: string) => {
    return (
      t.categories[
        category as keyof typeof t.categories
      ] ?? category
    );
  };

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (
      event: KeyboardEvent,
    ): void => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [selectedProject]);

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

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
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            {t.description}
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-full border px-5 py-3 text-sm font-semibold shadow-sm transition duration-300 ${
                  isActive
                    ? "border-[#8B2E35] bg-[#8B2E35] text-white shadow-md"
                    : "border-[#152536]/10 bg-white text-[#152536]/70 hover:border-[#8B2E35]/30 hover:text-[#8B2E35]"
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -18,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map(
              (item, index) => {
                const translatedCategory =
                  getCategoryLabel(
                    item.category,
                  );

                return (
                  <motion.button
                    key={`${item.afterImage}-${index}`}
                    type="button"
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
                      delay: Math.min(
                        index * 0.04,
                        0.4,
                      ),
                    }}
                    viewport={{
                      once: true,
                    }}
                    onClick={() =>
                      setSelectedProject(item)
                    }
                    aria-label={`${t.beforeAfter}: ${
                      item.title ||
                      translatedCategory
                    }`}
                    className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-white text-left shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                      item.large
                        ? "md:col-span-2 md:row-span-2"
                        : "row-span-1"
                    }`}
                  >
                    <div className="relative h-full overflow-hidden">

                      {/* AFTER IMAGE */}
                      <img
                        src={item.afterImage}
                        alt={`${
                          item.title ||
                          translatedCategory
                        } ${
                          lang === "fr"
                            ? "après"
                            : "after"
                        }`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* CATEGORY */}
                      {/* <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {translatedCategory}
                      </div> */}

                      {/* BEFORE / AFTER */}
                      <div className="absolute right-5 top-5 rounded-full bg-[#8B2E35]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                        {t.beforeAfter}
                      </div>

                      {/* BOTTOM INFO */}
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        {item.title?.trim() && (
                          <h3 className="max-w-xl text-2xl font-extrabold leading-tight text-white">
                            {item.title}
                          </h3>
                        )}

                        <div className="mt-4 flex items-center gap-3">
                          <span className="h-[2px] w-10 bg-[#D35B66]" />

                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                            {translatedCategory}
                          </p>
                        </div>
                      </div>

                    </div>
                  </motion.button>
                );
              },
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-6 backdrop-blur-sm"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedProject(null)
            }
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-black shadow-2xl sm:rounded-[2rem]"
              initial={{
                scale: 0.92,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
                y: 30,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* CLOSE */}
              <button
                type="button"
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-2xl font-light text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-black sm:right-5 sm:top-5"
                aria-label={t.closeProject}
              >
                ×
              </button>

              {/* BEFORE / AFTER COMPONENT */}
              <GalleryBeforeAfter
                lang={lang}
                
                beforeImage={
                  selectedProject.beforeImage
                }
                afterImage={
                  selectedProject.afterImage
                }
                title={
                  selectedProject.title
                }
                category={getCategoryLabel(
                  selectedProject.category,
                )}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}