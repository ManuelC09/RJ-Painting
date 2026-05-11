"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#152536]">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/about-hero.png')] bg-cover bg-center lg:bg-[center_35%]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#152536]/70" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-44 lg:pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
          >
            About RJ Painting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Residential Painting Built On{" "}
            <span className="text-[#D35B66]">Experience & Detail</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/85"
          >
            RJ Painting has been helping homeowners throughout Montreal’s West
            Island transform and maintain their homes with professional
            residential painting services for over 28 years.
          </motion.p>
        </div>
      </div>
    </section>
  );
}