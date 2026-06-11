"use client";

import { motion } from "framer-motion";
import { Building2, Layers, PaintBucket, Package, Truck } from "lucide-react";

const overviewItems = [
  {
    icon: Building2,
    title: "Paint Brands",
    description:
      "Trusted professional brands including Dulux, Sherwin-Williams, Sico ProLuxe, and PPG.",
  },
  {
    icon: Layers,
    title: "Materials",
    description:
      "Materials are selected based on surface type, condition, preparation needs, and finish goals.",
  },
  {
    icon: Package,
    title: "Products",
    description:
      "Interior paints, exterior paints, stains, deck finishes, ceiling paints, and masonry sealers.",
  },
  {
    icon: PaintBucket,
    title: "Coatings",
    description:
      "Acrylic latex paints, waterbased enamels, translucent wood finishes, and protective sealers.",
  },
  {
    icon: Truck,
    title: "Preferred Suppliers",
    description:
      "Products sourced from reputable suppliers for quality, consistency, and availability.",
  },
];

export default function ProductsOverview() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#F8F5F0] py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            Products We Use
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#152536] sm:text-5xl">
            Paint Brands, Materials, Products &{" "}
            <span className="text-[#8B2E35]">Coatings</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#152536]/75">
            RJ Painting selects products based on the project surface,
            environment, durability requirements, and the finish homeowners want
            to achieve.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {overviewItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[1.75rem] border border-[#152536]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B2E35]/10 text-[#8B2E35]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#152536]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#152536]/70">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}