"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const areas = [
  "Pointe-Claire",
  "Kirkland",
  "Beaconsfield",
  "Dorval",
  "Dollard-des-Ormeaux",
  "Baie-D’Urfé",
  "Sainte-Anne-de-Bellevue",
  "Vaudreuil",
];

export default function ServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-[#152536] py-28">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#8B2E35]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#263E5A]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <MapPin size={16} />
              Serving Montreal’s West Island
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Proudly Serving Homeowners Across The West Island
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              RJ Painting proudly provides professional residential painting
              services throughout Montreal’s West Island and surrounding
              communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  {area}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
              >
                Request Free Estimate
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="rounded-[2rem] bg-[#F8F5F0] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                  Residential Painting Experts
                </p>

                <h3 className="mt-5 text-4xl font-extrabold leading-tight text-[#152536]">
                  Trusted Local Service Backed By Experience
                </h3>

                <p className="mt-5 text-base leading-8 text-[#152536]/70">
                  With over 28 years of residential painting experience, RJ
                  Painting continues helping homeowners modernize, refresh, and
                  protect their homes with professional workmanship and attention
                  to detail.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-4xl font-extrabold text-[#8B2E35]">
                      28+
                    </p>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#152536]/60">
                      Years Experience
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-4xl font-extrabold text-[#263E5A]">
                      West Island
                    </p>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#152536]/60">
                      Local Business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#8B2E35] px-7 py-6 shadow-2xl lg:block">
              <p className="text-sm font-semibold text-white">
                Free Residential Estimates
              </p>

              <p className="mt-1 text-xs text-white/70">
                Montreal’s West Island
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}