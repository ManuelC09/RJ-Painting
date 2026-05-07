"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DoorOpen,
  Home,
  PaintRoller,
  PanelsTopLeft,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Exterior Siding",
    description:
      "Professional exterior siding painting designed to modernize and protect your home.",
  },
  {
    icon: Building2,
    title: "Brick Painting",
    description:
      "Modern brick repainting solutions that dramatically improve curb appeal and visual style.",
  },
  {
    icon: Warehouse,
    title: "Garage Doors",
    description:
      "Clean and durable garage door finishes that complement the overall appearance of your home.",
  },
  {
    icon: PanelsTopLeft,
    title: "Shutters & Trim",
    description:
      "Detailed painting for shutters, trim, fascia, soffits, and exterior accents.",
  },
  {
    icon: DoorOpen,
    title: "Entryways & Doors",
    description:
      "Front door and entrance repainting designed to create a polished first impression.",
  },
  {
    icon: PaintRoller,
    title: "Exterior Wood Surfaces",
    description:
      "Professional repainting and refinishing for outdoor wood details and surfaces.",
  },
];

export default function ExteriorServices() {
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
            Exterior Painting Services Include
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Exterior Painting Designed For Long-Term Protection & Style
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Professional exterior residential painting focused on curb appeal,
            durability, preparation, and long-lasting finishes.
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
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
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