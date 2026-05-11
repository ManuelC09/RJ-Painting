"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "28+",
    label: "Years Experience",
  },
  {
    number: "100+",
    label: "Projects Completed",
  },
  {
    number: "100%",
    label: "Residential Focus",
  },
  {
    number: "West Island",
    label: "Service Area",
  },
];

export default function AboutExperience() {
  return (
    <section className="relative overflow-hidden bg-[#152536] py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            Trusted Residential Painting
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Experience That Homeowners Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            RJ Painting has proudly served homeowners throughout Montreal’s West
            Island with professional residential painting services.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
            >
              <h3 className="text-5xl font-extrabold text-[#D35B66]">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg font-semibold text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}