"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Hammer,
  Home,
  PaintRoller,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: PaintRoller,
    title: "Interior Painting",
    description:
      "Clean, modern interior painting for living rooms, kitchens, bedrooms, hallways, basements, and full-home repaints.",
    href: "/services/interior-painting",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description:
      "Durable exterior painting designed to improve curb appeal and protect your home from Montreal’s changing seasons.",
    href: "/services/exterior-painting",
  },
  {
    icon: Brush,
    title: "Deck Painting & Staining",
    description:
      "Restore outdoor wood surfaces with professional deck staining, painting, and preparation.",
    href: "/services/deck-painting-staining",
  },
  {
    icon: Hammer,
    title: "Plastering & Surface Repairs",
    description:
      "Wall patching, crack repairs, minor drywall repair, plaster touch-ups, and smooth surface preparation.",
    href: "/services/plastering-surface-repairs",
  },
  {
    icon: Sparkles,
    title: "Mouldings & Trim Finishing",
    description:
      "Detailed finishing for baseboards, crown mouldings, window trim, door frames, and accent trim.",
    href: "/services/mouldings-trim-finishing",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            Residential Painting Services
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Complete Painting & Finishing Services For Your Home
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            RJ Painting provides complete residential painting and finishing
            services for homeowners throughout Montreal’s West Island and
            surrounding areas.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#8B2E35]/10 transition duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-[#152536]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#152536]/70">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#8B2E35]"
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}