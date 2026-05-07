"use client";

import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Modern Living Room Refresh",
    category: "Interior Painting",
    image: "/images/interior-gallery-1.png",
    large: true,
  },
  {
    title: "Bright Kitchen Repaint",
    category: "Interior Painting",
    image: "/images/interior-gallery-2.png",
  },
  {
    title: "Residential Staircase Transformation",
    category: "Interior Painting",
    image: "/images/interior-gallery-3.png",
  },
  {
    title: "Clean Bedroom Finish",
    category: "Interior Painting",
    image: "/images/interior-gallery-4.png",
  },
  {
    title: "Modern Exterior Repaint",
    category: "Exterior Painting",
    image: "/images/exterior-gallery-1.png",
    large: true,
  },
  {
    title: "Contemporary Brick Refresh",
    category: "Exterior Painting",
    image: "/images/exterior-gallery-2.png",
  },
  {
    title: "Luxury Curb Appeal Upgrade",
    category: "Exterior Painting",
    image: "/images/exterior-gallery-3.png",
  },
  {
    title: "Garage & Trim Finish",
    category: "Exterior Painting",
    image: "/images/exterior-gallery-4.jpg",
  },
  {
    title: "Backyard Deck Restoration",
    category: "Deck Staining",
    image: "/images/deck-gallery-1.png",
    large: true,
  },
  {
    title: "Outdoor Wood Refresh",
    category: "Deck Staining",
    image: "/images/deck-gallery-2.png",
  },
  {
    title: "Fence Staining Project",
    category: "Deck Staining",
    image: "/images/deck-gallery-3.png",
  },
  {
    title: "Clean Patio Deck Finish",
    category: "Deck Staining",
    image: "/images/deck-gallery-4.png",
  },
  {
    title: "Detailed Trim Finishing",
    category: "Trim & Mouldings",
    image: "/images/project-4.png",
    large: true,
  },
  {
    title: "Surface Preparation",
    category: "Plastering & Repairs",
    image: "/images/rj-about.png",
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
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#152536]/10 bg-white px-5 py-3 text-sm font-semibold text-[#152536]/70 shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2rem] shadow-xl ${
                item.large ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.category}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-7">
                  <h3 className="max-w-xl text-3xl font-extrabold leading-tight text-white">
                    {item.title}
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
          ))}
        </div>
      </div>
    </section>
  );
}