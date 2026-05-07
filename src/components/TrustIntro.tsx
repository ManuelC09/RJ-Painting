"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Home,
  PaintRoller,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Owner-Operated Service",
    description:
      "Direct communication and hands-on project involvement from start to finish.",
  },
  {
    icon: PaintRoller,
    title: "Residential Specialists",
    description:
      "Focused primarily on residential painting throughout Montreal’s West Island.",
  },
  {
    icon: ShieldCheck,
    title: "Careful Preparation",
    description:
      "Professional preparation designed for smoother, cleaner, and longer-lasting finishes.",
  },
  {
    icon: Brush,
    title: "Attention To Detail",
    description:
      "Professional workmanship focused on refined finishes and clean execution.",
  },
];

export default function TrustIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
              A Local Painter Homeowners Can Trust
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
              Residential Painting Backed By{" "}
              <span className="text-[#8B2E35]">Experience & Quality</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#152536]/75">
              For more than 28 years, RJ Painting has helped homeowners
              throughout Montreal’s West Island improve and modernize their
              homes through clean workmanship, careful preparation, and
              professional residential painting services.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#152536]/70">
              Whether it’s refreshing interior spaces, improving curb appeal,
              restoring decks, or completing finishing details, every project is
              approached with professionalism, precision, and respect for your
              home.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-[#152536]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B2E35]/10 text-[#8B2E35]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#152536]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#152536]/70">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/rj-about.png"
                alt="RJ Painting"
                className="h-[650px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#152536]/60 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-[2rem] bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B2E35]">
                    Trusted Residential Experts
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#152536]">
                    28+ Years
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#152536]/70">
                    Providing professional residential painting services
                    throughout Montreal’s West Island.
                  </p>
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8B2E35] text-white">
                  <ShieldCheck size={36} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}