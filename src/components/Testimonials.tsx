"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "RJ Painting did an amazing job on our home. Very professional, clean, and detail-oriented from start to finish.",
    name: "West Island Homeowner",
  },
  {
    quote:
      "Our exterior repaint completely transformed the look of our house. We were extremely happy with the results.",
    name: "Pointe-Claire Homeowner",
  },
  {
    quote:
      "Reliable, honest, and easy to work with. The quality of work exceeded our expectations.",
    name: "Beaconsfield Homeowner",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            What Homeowners Say
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            Trusted By Homeowners Throughout Montreal’s West Island
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm"
            >
              <Quote className="text-[#8B2E35]" size={36} />

              <div className="mt-6 flex gap-1 text-[#8B2E35]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-lg font-semibold leading-8 text-[#152536]">
                “{item.quote}”
              </p>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#263E5A]/70">
                — {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}