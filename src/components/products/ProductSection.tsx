"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "./productsData";

type ProductSectionProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  products: Product[];
};

export default function ProductSection({
  id,
  label,
  title,
  description,
  products,
}: ProductSectionProps) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
              {label}
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-[#152536] sm:text-5xl">
              {title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-xl text-base leading-8 text-[#152536]/70"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex min-h-[320px] items-center justify-center bg-[#F8F5F0] p-8">
                <div className="relative h-72 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#8B2E35]">
                    {product.category}
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#263E5A]/45">
                    {product.brand}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold leading-tight text-[#152536]">
                  {product.name}
                </h3>

                <p className="mt-4 flex-1 text-base leading-8 text-[#152536]/70">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}