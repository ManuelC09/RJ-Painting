"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function MouldingsHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#152536]">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/mouldings-hero.jpg')] bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/25" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 pb-16 pt-48 lg:pt-44">
        <div className="max-w-4xl">
          <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <Sparkles size={16} />
            Mouldings & Trim Finishing
          </motion.div>

          <motion.h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Professional Trim & Moulding Finishing For{" "}
            <span className="text-[#8B2E35]">Refined Interiors</span>
          </motion.h1>

          <motion.p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            Detailed trim work creates the clean finishing touches that elevate
            the appearance of your home with polished, refined interior detail.
          </motion.p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-[#D35B66]">
              Request a Free Estimate
              <ArrowRight size={18} />
            </Link>

            <Link href="/gallery" className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]">
              View Finished Projects
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Baseboards", "Crown Mouldings", "Window Trim", "Door Frames"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                <CheckCircle size={17} className="text-[#8B2E35]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}