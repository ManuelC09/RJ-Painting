"use client";

import { motion } from "framer-motion";
import {
  Home,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Professional Surface Preparation",
    description:
      "Proper preparation helps create smoother finishes and longer-lasting interior painting results.",
  },
  {
    icon: Home,
    title: "Clean & Respectful Worksites",
    description:
      "Your home is carefully protected throughout every stage of the painting process.",
  },
  {
    icon: Sparkles,
    title: "Experienced Residential Specialists",
    description:
      "Focused primarily on residential homes throughout Montreal’s West Island.",
  },
  {
    icon: UserCheck,
    title: "Owner-Operated Service",
    description:
      "Direct communication and hands-on attention from start to finish.",
  },
];

export default function InteriorFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#152536] py-28">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#8B2E35]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#263E5A]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Why Homeowners Choose RJ Painting
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Interior Painting With Care, Preparation & Detail
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Every interior painting project is completed with professional
              preparation, clean execution, and respect for the home from start
              to finish.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
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