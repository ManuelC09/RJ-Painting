"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PaintRoller,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Free Estimate",
    description:
      "We discuss your project goals, surfaces, timelines, colors, and overall vision for your home.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Surface Preparation",
    description:
      "Professional preparation including sanding, patching, repairs, protection, cleaning, and priming.",
  },
  {
    number: "03",
    icon: PaintRoller,
    title: "Professional Painting",
    description:
      "Careful application using premium materials and professional residential painting techniques.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Final Walkthrough",
    description:
      "Detailed inspection to ensure clean finishes, quality workmanship, and homeowner satisfaction.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            Our Painting Process
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            A Professional Process Designed For Clean, High-Quality Results
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Every project follows a structured process focused on preparation,
            professionalism, attention to detail, and homeowner satisfaction.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#152536]/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#8B2E35]/5 transition duration-500 group-hover:scale-150" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
                            Step {step.number}
                          </p>

                          <h3 className="mt-4 text-3xl font-extrabold text-[#152536]">
                            {step.title}
                          </h3>
                        </div>

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                          <Icon size={28} />
                        </div>
                      </div>

                      <p className="mt-6 text-base leading-8 text-[#152536]/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}