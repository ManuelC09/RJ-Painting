"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brush,
  Home,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Residential Specialists",
    description:
      "Focused on high-quality residential painting projects.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Preparation",
    description:
      "Clean preparation and detailed workmanship on every project.",
  },
  {
    icon: Brush,
    title: "Premium Finishes",
    description:
      "Interior, exterior, trim, deck, and repair services.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Local Service",
    description:
      "Serving homeowners throughout Montreal’s West Island.",
  },
];

export default function ContactTrust() {
  return (
    <section className="relative overflow-hidden bg-[#152536] py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            Why Homeowners Choose RJ Painting
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Professional Residential Painting With Attention To Detail
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                  <Icon size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}