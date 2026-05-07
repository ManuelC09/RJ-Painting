"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-[#152536] px-8 py-20 text-center shadow-2xl sm:px-12 lg:px-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,46,53,0.55),transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(38,62,90,0.8),transparent_40%)]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D35B66]">
              Ready To Transform Your Home?
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bring Professional Painting Results To Your Own Home
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Whether you’re planning an interior refresh, exterior repaint,
              deck restoration, or finishing project, RJ Painting is ready to
              help.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
              >
                Request a Free Estimate
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:5146304638"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}