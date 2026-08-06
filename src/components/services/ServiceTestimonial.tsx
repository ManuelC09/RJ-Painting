"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type ServiceTestimonialProps = {
  testimonial: {
    service: string;
    name: string;
    quote: string;
  };
};

export default function ServiceTestimonial({
  testimonial,
}: ServiceTestimonialProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] px-6 py-16">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative bg-[#152536] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,46,53,0.55),transparent_40%)]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                <Star size={28} />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#D35B66]">
                Service Feature
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Trusted Results For {testimonial.service}
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                By choosing RJ Painting, you can expect a team of professionals who are dedicated to delivering exceptional results. Our commitment to quality and customer satisfaction ensures that your project will be completed to the highest standards.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            {/* <div className="flex gap-1 text-[#8B2E35]">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={20} fill="currentColor" />
              ))}
            </div> */}

            <blockquote className="mt-6 text-md font-semibold leading-9 text-[#152536] sm:text-lg sm:leading-10">
              {testimonial.quote}
            </blockquote>

            {/* <div className="mt-8 border-t border-[#152536]/10 pt-6">
              <p className="text-lg font-extrabold text-[#152536]">
                {testimonial.name}
              </p>

              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B2E35]">
                {testimonial.service}
              </p>
            </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}