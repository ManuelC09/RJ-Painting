"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GalleryBeforeAfter from "./GalleryBeforeAfter";

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




  // {
  //   title: "Bedroom Interior Painting",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681240/10_l52qq7.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Room Transformation",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681239/9_nletbm.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Hallway Painting",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681238/8_kmvbb2.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Painting Project",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681237/7_scugvh.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Interior Painting",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681236/6_wyaagx.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Wall Painting",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681236/5_dspj1d.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Painting Finish",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681235/3_e2q0j9.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Home Painting",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681235/4_nvig6v.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Colour Transformation",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681234/1_n9gh8o.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Interior Finish",
  //   category: "Interior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681234/2_rbhetk.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Painting Project",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681566/8_rujb5v.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Home Transformation",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681564/5_pl19ci.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Exterior Painting",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681563/6_tknec8.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Colour Upgrade",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681561/7_wgd7un.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Painting Finish",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681561/4_sjcyqo.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Residential Project",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681561/3_ss3ook.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Home Painting",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681559/2_fetpuo.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Painting Transformation",
  //   category: "Exterior Painting",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681558/1_hm8mbo.png",

  //   large: false,
  // },

  // {
  //   title: "Deck Staining Project",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681410/10_xiixlq.png",

  //   large: false,
  // },

  // {
  //   title: "Deck Restoration",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681409/9_kgh7hf.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Deck Staining",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681406/8_ix6heq.png",

  //   large: false,
  // },

  // {
  //   title: "Deck Colour Transformation",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681405/6_lokxc9.png",

  //   large: false,
  // },

  // {
  //   title: "Deck Staining Finish",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681405/7_vlwg35.png",

  //   large: false,
  // },

  // {
  //   title: "Exterior Deck Restoration",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681383/4_kvtahb.png",

  //   large: false,
  // },

  // {
  //   title: "Deck Refinishing",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681370/3_fpkqho.jpg",

  //   large: false,
  // },

  // {
  //   title: "Deck Staining Transformation",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681369/2_xfz4ux.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Deck Finish",
  //   category: "Deck Staining",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681368/1_vgvh5y.png",

  //   large: false,
  // },

  // {
  //   title: "Wall Plastering and Repair",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680952/8_brnukq.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Wall Repair",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680992/9_rkcfew.png",

  //   large: false,
  // },

  // {
  //   title: "Drywall and Plaster Repair",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680993/10_sjcnud.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Plaster Repair",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680951/3_pqlxlu.png",

  //   large: false,
  // },

  // {
  //   title: "Wall Surface Restoration",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680951/7_atuxcn.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Surface Repair",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680951/4_kz5eif.png",

  //   large: false,
  // },

  // {
  //   title: "Plastering Transformation",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680949/5_l4cr0b.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Wall Repair",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680948/6_pj817g.png",

  //   large: false,
  // },

  // {
  //   title: "Wall Repair and Painting",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680948/2_fiwwdf.png",

  //   large: false,
  // },

  // {
  //   title: "Plastering and Wall Restoration",
  //   category: "Plastering & Repairs",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680946/1_hdlstn.png",

  //   large: false,
  // },

  // {
  //   title: "Trim and Moulding Painting",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680302/8_gjq7op.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Moulding Finish",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680302/9_rpo3kj.png",

  //   large: false,
  // },

  // {
  //   title: "Trim Painting Project",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680302/10_ghu4jw.png",

  //   large: false,
  // },

  // {
  //   title: "Residential Trim Painting",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680271/5_jmsmwd.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Trim Restoration",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680270/3_aihsk6.png",

  //   large: false,
  // },

  // {
  //   title: "Trim and Moulding Transformation",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680270/4_qvm6dd.png",

  //   large: false,
  // },

  // {
  //   title: "Interior Moulding Painting",
  //   category: "Trim & Mouldings",

  //   beforeImage:
  //     "COLOCA_AQUI_LA_URL_DE_LA_IMAGEN_BEFORE",

  //   afterImage:
  //     "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680268/2_zaaqco.png",

  //   large: false,
  // },
];

const categories = [
  "All Projects",
  "Interior Painting",
  "Plastering & Surface Repairs",
  "Mouldings & Trim Finishing",
  "Exterior Painting",
  "Deck Staining & Painting",
  "Deck Cleaning & Protection",
  "Exterior Brick & Stucco",
];

export default function GalleryGrid() {
  const [selectedProject, setSelectedProject] =
    useState<GalleryItem | null>(null);

  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const filteredItems =
    activeCategory === "All Projects"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        );

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Encabezado */}
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
            Explore Our Work
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Real Homes. Professional Results.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Every project represents the level of preparation,
            cleanliness, and care RJ Painting brings to residential
            homes.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-sm font-semibold shadow-sm transition duration-300 ${
                  isActive
                    ? "border-[#8B2E35] bg-[#8B2E35] text-white shadow-md"
                    : "border-[#152536]/10 bg-white text-[#152536]/70 hover:border-[#8B2E35]/30 hover:text-[#8B2E35]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
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
            {filteredItems.map((item, index) => (
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
                  delay: Math.min(index * 0.04, 0.4),
                }}
                viewport={{
                  once: true,
                }}
                onClick={() => setSelectedProject(item)}
                aria-label={`Open before and after project: ${
                  item.title || item.category
                }`}
                className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-white text-left shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  item.large
                    ? "md:col-span-2 md:row-span-2"
                    : "row-span-1"
                }`}
              >
                <div className="relative h-full overflow-hidden">
                  {/* Miniatura: muestra el AFTER */}
                  <img
                    src={item.afterImage}
                    alt={`${item.title || item.category} after`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Categoría */}
                  <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {item.category}
                  </div>

                  {/* Indicador before/after
                  <div className="absolute right-5 top-5 rounded-full bg-[#8B2E35]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    Before / After
                  </div> */}

                  {/* Información inferior */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    {item.title?.trim() && (
                      <h3 className="max-w-xl text-2xl font-extrabold leading-tight text-white">
                        {item.title}
                      </h3>
                    )}

                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-[2px] w-10 bg-[#D35B66]" />

                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                        RJ Painting
                      </p>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
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
            onClick={() => setSelectedProject(null)}
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
              onClick={(event) => event.stopPropagation()}
            >
              {/* Cerrar */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-2xl font-light text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-black sm:right-5 sm:top-5"
                aria-label="Close project"
              >
                ×
              </button>

              {/* Before After */}
              <GalleryBeforeAfter
                beforeImage={selectedProject.beforeImage}
                afterImage={selectedProject.afterImage}
                title={selectedProject.title}
                category={selectedProject.category}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}