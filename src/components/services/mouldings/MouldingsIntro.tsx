"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Baseboards",
  "Crown Mouldings",
  "Window Trim",
  "Door Frames & Doors",
];

export default function MouldingsIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">
          <motion.div>
            <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
              Clean Finishing Details
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              Finishing Details That Transform Interior Spaces
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#152536]/70">
              Freshly painted trim and mouldings help define spaces, improve
              contrast, and create a cleaner overall appearance throughout the
              home.
            </p>

            <p className="mt-6 text-base leading-8 text-[#152536]/70">
              Whether modernizing existing trim or refreshing detailed finishing
              work, RJ Painting delivers careful workmanship and refined results.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-[#152536]/10 bg-white px-5 py-4 shadow-sm">
                  <CheckCircle size={18} className="text-[#8B2E35]" />
                  <span className="text-sm font-semibold text-[#152536]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/mouldings-about.jpg"
                alt="Mouldings and trim finishing"
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[2rem] bg-white p-8 shadow-2xl lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                Refined Interior Detail
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#152536]">
                Clean Trim Finishes
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-7 text-[#152536]/70">
                Professional finishing details designed to elevate the look of
                your home.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}