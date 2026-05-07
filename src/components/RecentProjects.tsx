"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images, Sparkles } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const projectCards = [
  {
    title: "Modern Interior Refresh",
    category: "Interior Painting",
    image: "/images/project-2.png",
  },
  {
    title: "Deck Restoration Project",
    category: "Deck Staining",
    image: "/images/project-3.png",
  },
  {
    title: "Detailed Trim Finishing",
    category: "Trim & Mouldings",
    image: "/images/project-4.png",
  },
];

export default function RecentProjects() {
  return (
    <section className="relative overflow-hidden bg-[#152536] py-28">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#8B2E35]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#263E5A]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <Images size={16} />
              Recent Painting Transformations
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              See The Difference{" "}
              <span className="text-[#D35B66]">Professional Painting Makes.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Compare before and after results from residential painting projects
              completed throughout Montreal’s West Island.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 self-start rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="mt-16">
          <BeforeAfterSlider
            beforeImage="/images/before-exterior.png"
            afterImage="/images/after-exterior.png"
            title="Exterior Brick Transformation in Montreal’s West Island"
            category="Exterior Before & After"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projectCards.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5"
            >
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {project.category}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-extrabold leading-tight text-white">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#D35B66]" />
                    <p className="text-xs font-semibold text-white/70">
                      RJ Painting
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10"
        >
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-5xl font-extrabold text-white">28+</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-5xl font-extrabold text-white">100+</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Residential Projects
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <p className="text-5xl font-extrabold text-white">100%</p>
                <Sparkles className="text-[#D35B66]" size={34} />
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Attention To Detail
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}