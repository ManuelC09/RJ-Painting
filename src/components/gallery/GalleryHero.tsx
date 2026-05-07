"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#152536]">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/exterior-gallery-1.png')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/30" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pb-16 pt-48 lg:pt-44">
        <div className="max-w-4xl">
          <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <Images size={16} />
            RJ Painting Gallery
          </motion.div>

          <motion.h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Recent Residential Painting{" "}
            <span className="text-[#D35B66]">Transformations</span>
          </motion.h1>

          <motion.p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            Explore recent interior, exterior, deck, trim, and surface
            preparation projects completed throughout Montreal’s West Island.
          </motion.p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
            >
              Request a Free Estimate
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}