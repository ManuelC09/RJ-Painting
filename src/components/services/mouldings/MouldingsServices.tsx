"use client";

import { motion } from "framer-motion";
import { DoorOpen, Frame, LayoutPanelTop, Sparkles, Square } from "lucide-react";

const services = [
  {
    icon: Square,
    title: "Baseboards",
    description: "Clean, sharp finishing details throughout living spaces.",
  },
  {
    icon: LayoutPanelTop,
    title: "Crown Mouldings",
    description: "Elegant finishing work that enhances ceilings and interiors.",
  },
  {
    icon: Frame,
    title: "Window Trim",
    description: "Detailed trim painting for polished window framing.",
  },
  {
    icon: DoorOpen,
    title: "Door Frames & Doors",
    description: "Professional finishing for interior architectural details.",
  },
  {
    icon: Sparkles,
    title: "Accent Trim",
    description: "Decorative trim work designed to modernize and refine interiors.",
  },
];

export default function MouldingsServices() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            Trim & Finishing Services Include
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Professional Trim Work For A Cleaner Interior Appearance
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Detailed finishing helps create polished, refined interiors with
            clean lines and professional presentation.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
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