"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brush,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Brush,
    title: "Professional Workmanship",
    description:
      "Careful preparation and detailed painting for high-quality residential finishes.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Clear communication, punctuality, and professionalism throughout every project.",
  },
  {
    icon: Sparkles,
    title: "Clean Finishes",
    description:
      "Modern, polished painting results designed to elevate your home.",
  },
  {
    icon: BadgeCheck,
    title: "28+ Years Experience",
    description:
      "Trusted residential painting experience throughout Montreal’s West Island.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            What We Stand For
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Residential Painting With Professional Standards
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                className="rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                  <Icon size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-[#152536]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#152536]/70">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}