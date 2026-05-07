"use client";

import { motion } from "framer-motion";
import { Hammer, Layers, Paintbrush, ScanLine, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Wall Patching",
    description:
      "Repair holes, dents, and wall imperfections before painting begins.",
  },
  {
    icon: ShieldCheck,
    title: "Crack Repairs",
    description:
      "Restore cracked surfaces for cleaner, smoother, and more polished finishes.",
  },
  {
    icon: Layers,
    title: "Minor Drywall Repairs",
    description:
      "Correct surface damage and preparation issues before applying paint.",
  },
  {
    icon: ScanLine,
    title: "Surface Smoothing",
    description:
      "Improve uneven wall textures and imperfections for a cleaner final look.",
  },
  {
    icon: Paintbrush,
    title: "Plaster Touch-Ups",
    description:
      "Restore aging plaster surfaces with detailed repair work and preparation.",
  },
];

export default function PlasteringServices() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            Surface Repair Services Include
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Professional Repairs For Smoother Walls & Cleaner Finishes
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Proper surface repairs help improve the appearance, durability, and
            quality of the final painting result.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#8B2E35]/10 transition duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-[#152536]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#152536]/70">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}