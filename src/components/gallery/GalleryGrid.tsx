"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GalleryItem = {
  title?: string;
  category: string;
  image: string;
  large?: boolean;
};

const galleryItems: GalleryItem[] = [

  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681240/10_l52qq7.png",
    large: false,
  },

  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681239/9_nletbm.png",
    large: false,
  },


  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681238/8_kmvbb2.png",
    large: false,
  },


  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681237/7_scugvh.png",
    large: false,
  },


  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681236/6_wyaagx.png",
    large: false,
  },


  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681236/5_dspj1d.png",
    large: false,
  },

  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681235/3_e2q0j9.png",
    large: false,
  },

  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681235/4_nvig6v.png",
    large: false,
  },

  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681234/1_n9gh8o.png",
    large: false,
  },

  {
    title: " ",
    category: "Interior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681234/2_rbhetk.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681566/8_rujb5v.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681564/5_pl19ci.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681563/6_tknec8.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681561/7_wgd7un.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681561/4_sjcyqo.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681561/3_ss3ook.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681559/2_fetpuo.png",
    large: false,
  },

  {
    title: " ",
    category: "Exterior Painting",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681558/1_hm8mbo.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681410/10_xiixlq.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681409/9_kgh7hf.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681406/8_ix6heq.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681405/6_lokxc9.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681405/7_vlwg35.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681383/4_kvtahb.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681370/3_fpkqho.jpg",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681369/2_xfz4ux.png",
    large: false,
  },

  {
    title: " ",
    category: "Deck Staining",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779681368/1_vgvh5y.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680952/8_brnukq.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680992/9_rkcfew.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680993/10_sjcnud.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680951/3_pqlxlu.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680951/7_atuxcn.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680951/4_kz5eif.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680949/5_l4cr0b.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680948/6_pj817g.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680948/2_fiwwdf.png",
    large: false,
  },

  {
    title: " ",
    category: "Plastering & Repairs",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680946/1_hdlstn.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680302/8_gjq7op.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680302/9_rpo3kj.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680302/10_ghu4jw.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680271/5_jmsmwd.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680270/3_aihsk6.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680270/4_qvm6dd.png",
    large: false,
  },

  {
    title: " ",
    category: "Trim & Mouldings",
    image: "https://res.cloudinary.com/dackn5ysr/image/upload/v1779680268/2_zaaqco.png",
    large: false,
  },

];

const categories = [
  "All Projects",
  "Interior Painting",
  "Exterior Painting",
  "Deck Staining",
  "Trim & Mouldings",
  "Plastering & Repairs",
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredItems =
    activeCategory === "All Projects"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            Explore Our Work
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Real Homes. Professional Results.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Every project represents the level of preparation, cleanliness, and
            care RJ Painting brings to residential homes.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.image}-${index}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(item)}
                className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-white shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  item.large ? "md:col-span-2 md:row-span-2" : "row-span-1"
                }`}
              >
                <div className="relative h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title || item.category}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {item.category}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    {item.title && (
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-2xl font-light text-white backdrop-blur transition hover:bg-black"
                aria-label="Close image"
              >
                ×
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title || selectedImage.category}
                className="max-h-[85vh] w-full bg-black object-contain"
              />

              <div className="bg-white p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8B2E35]">
                  {selectedImage.category}
                </p>

                {selectedImage.title && (
                  <h3 className="mt-2 text-2xl font-extrabold text-[#152536]">
                    {selectedImage.title}
                  </h3>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}