"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Paintbrush,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const highlights = [
  "Paint brands",
  "Materials",
  "Products",
  "Coatings",
  "Preferred suppliers",
];

const productCards = [
  {
    icon: Paintbrush,
    title: "Paint Brands",
    description: "Trusted professional product lines.",
  },
  {
    icon: ShieldCheck,
    title: "Coatings",
    description: "Selected for protection and durability.",
  },
  {
    icon: PackageCheck,
    title: "Materials",
    description: "Chosen based on surface and finish.",
  },
];

const brands = [
  {
    name: "Sherwin-Williams",
    logo: "/images/brands/sherwin-williams.jpg",
    href: "/products#sherwin-williams",
  },
  {
    name: "Dulux",
    logo: "/images/brands/dulux.png",
    href: "/products#dulux",
  },
  {
    name: "Sikkens",
    logo: "/images/brands/sikkens.jpg",
    href: "/products#sikkens",
  },
  {
    name: "PPG",
    logo: "/images/brands/ppg.png",
    href: "/products#ppg",
  },
];

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-[#152536] pb-24 pt-44">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#8B2E35]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#DDF3F8]/5 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(139,46,53,0.22),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              Products We Use
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Professional Products For{" "}
              <span className="text-[#8B2E35]">Better Painting Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
            >
              RJ Painting uses trusted paint brands, professional-grade
              materials, and durable coatings selected for clean application,
              strong coverage, and long-lasting residential finishes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
                >
                  <CheckCircle size={15} className="text-[#8B2E35]" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-[#D35B66]"
              >
                View Products
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#supplier-info"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                Supplier Information
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.18 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8B2E35]">
                      Trusted Brands
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#152536]">
                      Paint products from brands homeowners recognize.
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {brands.map((brand, index) => (
                    <motion.a
                      key={brand.name}
                      href={brand.href}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.35 + index * 0.08,
                      }}
                      className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-[#152536]/10 bg-[#F8F5F0] p-5 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                    >
                      <div className="relative h-16 w-full">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8B2E35]">
                        View Products
                        <ArrowRight
                          size={14}
                          className="transition group-hover:translate-x-1"
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#152536] p-5">
                  <p className="text-sm font-semibold leading-7 text-white/80">
                    Product selection depends on the surface condition,
                    preparation required, interior or exterior exposure, and the
                    finish quality needed for the project.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-[#8B2E35] px-6 py-5 text-white shadow-xl sm:block">
              <p className="text-sm font-semibold">Paints • Stains • Coatings</p>
              <p className="mt-1 text-xs text-white/75">
                Selected for residential finishes
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.7,
              },
            },
          }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {productCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#152536]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B2E35] text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold">{card.title}</h3>

                <p className="mt-3 text-sm leading-7 opacity-75">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}