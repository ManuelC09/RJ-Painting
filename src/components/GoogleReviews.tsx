"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const googleReviews = [
  {
    quote:
      "Rick at RJ Painting did a fantastic job refinishing our deck. He pressure washed off the old stain, sanded thoroughly, and applied a fresh coat of stain that turned out exactly how we wanted. The quality of his work was excellent, with great attention to detail.",
    name: "Dave Lapointe",
    location: "Google Review",
  },
  {
    quote:
      "Rick just finished a really complicated and exacting paint job at my house and, as with previous work he did for me, the quality and execution have been flawless. He responds in a timely fashion, shows up on time, and finishes as promised.",
    name: "Rene Wenker",
    location: "Google Review",
  },
  {
    quote:
      "Excellent work. This is the fourth time we have hired RJ Painting for our home. The work included painting, plastering, and repairing cracked walls and joints. The house is always left clean after the job.",
    name: "Linda Dubeau",
    location: "Google Review",
  },
  {
    quote:
      "We hired Rick to paint the interior of our home and we are very happy with his work. He arrived on time, was a pleasure to deal with, left everything clean, and the result was excellent. He also completed several plaster wall repairs perfectly.",
    name: "Josh",
    location: "Google Review",
  },
  {
    quote:
      "Rick is very professional, detail-oriented, punctual, clean, and an excellent proactive communicator. He is straightforward and easy to work with. I would recommend him to anyone.",
    name: "J David",
    location: "Google Review",
  },
  {
    quote:
      "Rick did an amazing job painting the interior of my house. He was very helpful, kind, reliable, always on time, and worked hard. We are very happy and would definitely recommend him.",
    name: "Elaine Arsenault",
    location: "Google Review",
  },
  {
    quote:
      "Rick did an excellent job and the deck looked spectacular. He kept us informed despite unpredictable summer weather and completed an amazing job.",
    name: "Steven Davis",
    location: "Google Review",
  },
  {
    quote:
      "It was a pleasure having Rick work in my home. He was respectful and very professional. His painting work was impeccable, and he made sure no detail was overlooked for a high-quality finish.",
    name: "Diane Besner",
    location: "Google Review",
  },
  {
    quote:
      "We called Rick after having problems with the stain on our deck. He arrived on time, kept us informed, and gave excellent suggestions. He is friendly, knowledgeable, efficient, and very tidy.",
    name: "Barbara Davey",
    location: "Google Review",
  },
//   {
//     quote:
//       "Rick has completed several projects for me over the past eight years. He is very professional and courteous, explains things clearly, and always finds the best solution to any problem.",
//     name: "Isabelle Plourde",
//     location: "Google Review",
//   },
];

export default function GoogleReviews() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

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

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#263E5A]/80">
            Real feedback from local homeowners who trusted RJ Painting with
            their residential painting projects.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex h-full flex-col rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#263E5A]/70">
                    {item.location}
                  </p>

                  <div className="mt-4 flex gap-1 text-[#8B2E35]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg font-extrabold text-[#8B2E35] shadow-sm">
                  G
                </div>
              </div>

              <p className="mt-6 flex-1 text-lg font-semibold leading-8 text-[#152536]">
                “{item.quote}”
              </p>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#263E5A]/70">
                — {item.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mt-16 overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] shadow-sm"
>
  <div className="p-6 text-center">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#263E5A]/70">
      Find RJ Painting On Google Maps
    </p>

    <h3 className="mt-3 text-2xl font-extrabold text-[#152536] sm:text-3xl">
      See The Business Profile And Review Location
    </h3>
  </div>

  <div className="h-[420px] w-full">
    <iframe
      src="https://www.google.com/maps?q=R%20J%20Painting%20Montreal%20West%20Island&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="RJ Painting Google Maps Location"
    />
  </div>
</motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://maps.app.goo.gl/jRzCZyBTixsXUhAt9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-[#D35B66]"
            >
            Check Google Reviews
            <ExternalLink
                size={18}
                className="transition group-hover:translate-x-1"
            />
            </a>
        </motion.div>
      </div>
    </section>
  );
}