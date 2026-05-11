"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1fr_1fr]">
        <motion.div>
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/about-story.jpg"
              alt="RJ Painting Team"
              className="h-[650px] w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div>
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            Our Story
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Dedicated To Quality Residential Painting
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            RJ Painting focuses exclusively on residential painting services,
            delivering professional workmanship, careful preparation, and clean
            finishes tailored to each home.
          </p>

          <p className="mt-6 text-base leading-8 text-[#152536]/70">
            Over the years, we’ve built our reputation through reliability,
            attention to detail, and a commitment to helping homeowners create
            cleaner, brighter, and more modern living spaces.
          </p>

          <p className="mt-6 text-base leading-8 text-[#152536]/70">
            From interior painting to exterior transformations, deck staining,
            trim finishing, and surface repairs, every project is completed with
            professionalism and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}