"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  "28+ Years Experience",
  "West Island Local Business",
  "Free Estimates",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#152536]">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/rj-hero.png')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,46,53,0.35),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-48 sm:pt-44 lg:px-6 lg:pt-40">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
            >
              <Star size={16} className="fill-white" />
              Premium Residential Painting
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Transform Your Home With{" "}
              <span className="text-[#D35B66]">Professional Painting</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg"
            >
              Interior, exterior, deck, trim, and plastering services backed by
              over 28 years of hands-on residential painting experience in
              Montreal’s West Island.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-[#D35B66]"
              >
                Request a Free Estimate
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                View Recent Projects
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.55,
                  },
                },
              }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {stats.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  <CheckCircle size={17} className="text-[#D35B66]" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
                  RJ Painting
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#152536]">
                  Clean workmanship. Professional preparation. Beautiful
                  finishes.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#152536]/70">
                  Helping homeowners modernize, refresh, and protect their homes
                  with reliable residential painting services.
                </p>

                <div className="mt-6 rounded-2xl bg-[#F8F5F0] p-5">
                  <p className="text-4xl font-extrabold text-[#263E5A]">28+</p>
                  <p className="mt-1 text-sm font-semibold text-[#152536]/70">
                    Years of residential painting experience
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#8B2E35] px-6 py-5 text-white shadow-xl">
                <p className="text-sm font-semibold">Free Estimates</p>
                <p className="mt-1 text-xs text-white/75">
                  West Island & nearby areas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}