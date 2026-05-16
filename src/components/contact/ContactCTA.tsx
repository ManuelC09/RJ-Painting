"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div className="relative overflow-hidden rounded-[2rem] bg-[#152536] px-8 py-20 text-center shadow-2xl sm:px-12 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,46,53,0.55),transparent_35%)]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B2E35]">
              Let’s Get Started
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Request Your Free Residential Painting Estimate Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Contact RJ Painting to discuss your upcoming painting or surface
              preparation project.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
              >
                Request Estimate
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}