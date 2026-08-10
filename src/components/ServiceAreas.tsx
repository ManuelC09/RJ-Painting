"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const areas = [
  "Pointe-Claire",
  "Kirkland",
  "Beaconsfield",
  "Dorval",
  "Dollard-des-Ormeaux",
  "Baie-D’Urfé",
  "Sainte-Anne-de-Bellevue",
  "Vaudreuil",
  "Saint-Lazare",
  "Senneville",
  "Hudson",
  "Pincourt",
  "L’Île-Perrot",
];

const translations = {
  en: {
    badge: "Serving Montreal’s West Island",

    title:
      "Proudly Serving Homeowners Across The West Island",

    description:
      "RJ Painting proudly provides professional residential painting services throughout Montreal’s West Island and surrounding communities.",

    estimateButton: "Request Free Estimate",
    galleryButton: "View Gallery",

    cardBadge: "Residential Painting Experts",

    cardTitle:
      "Trusted Local Service Backed By Experience",

    cardDescription:
      "With over 36 years of residential painting experience, RJ Painting continues helping homeowners modernize, refresh, and protect their homes with professional workmanship and attention to detail.",

    yearsExperience: "Years Experience",
    westIsland: "West Island",
    localBusiness: "Local Business",

    floatingTitle: "Free Residential Estimates",
    floatingLocation: "Montreal’s West Island",
  },

  fr: {
    badge: "Au service de l’Ouest-de-l’Île de Montréal",

    title:
      "Au service des propriétaires partout dans l’Ouest-de-l’Île",

    description:
      "RJ Painting offre des services professionnels de peinture résidentielle partout dans l’Ouest-de-l’Île de Montréal ainsi que dans les communautés environnantes.",

    estimateButton: "Demander une estimation gratuite",
    galleryButton: "Voir la galerie",

    cardBadge: "Experts en peinture résidentielle",

    cardTitle:
      "Un service local de confiance, soutenu par l’expérience",

    cardDescription:
      "Avec plus de 36 ans d’expérience en peinture résidentielle, RJ Painting aide les propriétaires à moderniser, rafraîchir et protéger leur maison grâce à un travail professionnel, soigné et attentif aux moindres détails.",

    yearsExperience: "Années d’expérience",
    westIsland: "Ouest-de-l’Île",
    localBusiness: "Entreprise locale",

    floatingTitle: "Estimations résidentielles gratuites",
    floatingLocation: "Ouest-de-l’Île de Montréal",
  },
} as const;

export default function ServiceAreas() {
  const pathname = usePathname();

  const lang: "en" | "fr" =
    pathname.startsWith("/fr") ? "fr" : "en";

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-[#152536] py-24 sm:py-28">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#8B2E35]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#263E5A]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <MapPin size={16} />
              {t.badge}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {t.description}
            </p>

            {/* AREAS */}
            <div className="mt-10 flex flex-wrap gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
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

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
              >
                {t.estimateButton}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={`/${lang}/gallery`}
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
              >
                {t.galleryButton}
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="rounded-[2rem] bg-[#F8F5F0] p-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                  {t.cardBadge}
                </p>

                <h3 className="mt-5 text-4xl font-extrabold leading-tight text-[#152536]">
                  {t.cardTitle}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#152536]/70">
                  {t.cardDescription}
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-4xl font-extrabold text-[#8B2E35]">
                      36+
                    </p>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#152536]/60">
                      {t.yearsExperience}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-4xl font-extrabold text-[#263E5A]">
                      {t.westIsland}
                    </p>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#152536]/60">
                      {t.localBusiness}
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#8B2E35] px-7 py-6 shadow-2xl lg:block">

              <p className="text-sm font-semibold text-white">
                {t.floatingTitle}
              </p>

              <p className="mt-1 text-xs text-white/70">
                {t.floatingLocation}
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}