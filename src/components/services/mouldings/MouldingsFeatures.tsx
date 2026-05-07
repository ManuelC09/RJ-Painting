"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Home, Sparkles, WandSparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Cleaner Overall Appearance",
    description: "Fresh trim instantly improves interior presentation.",
  },
  {
    icon: Home,
    title: "Modernized Interiors",
    description: "Bright, updated trim creates a more modern atmosphere.",
  },
  {
    icon: WandSparkles,
    title: "Enhanced Architectural Detail",
    description: "Detailed finishing highlights the design of your home.",
  },
  {
    icon: BadgeCheck,
    title: "Refined Professional Finishes",
    description: "Careful workmanship designed for premium residential appearance.",
  },
];

export default function MouldingsFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#152536] py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div>
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              The Impact of Professional Trim Work
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Small Details That Create A More Finished Interior
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Trim and moulding finishing adds definition, contrast, and polish
              to residential interiors.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}