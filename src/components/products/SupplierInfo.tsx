"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Store,
  Truck,
  ShieldCheck,
  PaintBucket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const supplierCards = [
  {
    icon: Store,
    title: "Trusted Paint Suppliers",
    description:
      "Products are sourced from reputable suppliers that carry professional-grade paint lines.",
  },
  {
    icon: Truck,
    title: "Reliable Availability",
    description:
      "Materials are selected with project timelines, product access, and consistency in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Finish Quality",
    description:
      "Paints and coatings are chosen for coverage, adhesion, protection, and long-term performance.",
  },
];

const supplierPoints = [
  "Professional-grade paint and coating suppliers",
  "Products selected based on surface condition and finish goals",
  "Interior, exterior, wood, deck, and masonry product options",
  "Reliable materials for residential repainting and restoration",
  "Finish recommendations based on durability, moisture, and exposure",
];

export default function SupplierInfo() {
  return (
    <section
      id="supplier-info"
      className="relative overflow-hidden bg-[#152536] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,46,53,0.28),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(221,243,248,0.10),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Preferred Supplier Information
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Sourced With Quality,{" "}
              <span className="text-[#8B2E35]">Durability</span> & Finish In
              Mind
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              RJ Painting works with trusted paint suppliers and professional
              product lines to make sure every project receives the right
              material for the surface, application, and expected durability.
            </p>

            <div className="mt-9 grid gap-4">
              {supplierPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur"
                >
                  <CheckCircle
                    size={19}
                    className="mt-1 shrink-0 text-[#8B2E35]"
                  />
                  <p className="text-sm font-semibold leading-7 text-white/85">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-[#D35B66]"
              >
                Ask About Products
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                View Product List
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/rj-about.png"
                  alt="Professional paint supplier materials"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#152536]/90 via-[#152536]/35 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-xl">
                    <PaintBucket size={28} />
                  </div>

                  <h3 className="mt-5 max-w-md text-3xl font-extrabold leading-tight text-white">
                    The right product makes the finish last longer.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
                    Product recommendations may vary depending on the surface,
                    previous coatings, weather exposure, moisture levels, color
                    selection, and the type of finish required.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {supplierCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8B2E35]/10 text-[#8B2E35]">
                        <Icon size={21} />
                      </div>

                      <h4 className="mt-4 text-base font-extrabold text-[#152536]">
                        {card.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-[#152536]/65">
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-5 hidden rounded-2xl bg-[#8B2E35] px-6 py-5 text-white shadow-2xl sm:block"
            >
              <p className="text-sm font-semibold">Paints • Stains • Coatings</p>
              <p className="mt-1 text-xs text-white/75">
                Selected for residential performance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}