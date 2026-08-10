"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Hammer,
  Home,
  PaintRoller,
  Sparkles,
  Frame,
  Building2,
} from "lucide-react";
import { usePathname } from "next/navigation";

const servicesConfig = [
  {
    key: "interiorPainting",
    icon: PaintRoller,
    href: "/services/interior-painting",
    featured: true,
  },
  {
    key: "exteriorPainting",
    icon: Home,
    href: "/services/exterior-painting",
    featured: false,
  },
  {
    key: "deckPaintingStaining",
    icon: Brush,
    href: "/services/deck-painting-staining",
    featured: false,
  },
  {
    key: "deckCleaningProtection",
    icon: Sparkles,
    href: "/services/deck-cleaning-protection",
    featured: false,
  },
  {
    key: "plasteringSurfaceRepairs",
    icon: Hammer,
    href: "/services/plastering-surface-repairs",
    featured: false,
  },
  {
    key: "mouldingsTrimFinishing",
    icon: Frame,
    href: "/services/mouldings-trim-finishing",
    featured: false,
  },
  {
    key: "exteriorBrickStucco",
    icon: Building2,
    href: "/services/exterior-brick-stucco",
    featured: false,
  },
] as const;

const translations = {
  en: {
    badge: "Residential Painting Services",

    title:
      "Complete Painting & Finishing Services For Your Home",

    description:
      "RJ Painting provides complete residential painting and finishing services for homeowners throughout Montreal’s West Island and surrounding areas.",

    learnMore: "Learn More",

    services: {
      interiorPainting: {
        title: "Interior Painting",
        description:
          "Clean, modern interior painting for living rooms, kitchens, bedrooms, hallways, basements, and full-home repaints.",
      },

      exteriorPainting: {
        title: "Exterior Painting",
        description:
          "Durable exterior painting designed to improve curb appeal and protect your home from Montreal’s changing seasons.",
      },

      deckPaintingStaining: {
        title: "Deck Painting & Staining",
        description:
          "Restore outdoor wood surfaces with professional deck staining, painting, and preparation.",
      },

      deckCleaningProtection: {
        title: "Deck Cleaning & Protection",
        description:
          "Clean, refresh, and protect outdoor deck surfaces from weather, moisture, dirt, and seasonal wear.",
      },

      plasteringSurfaceRepairs: {
        title: "Plastering & Surface Repairs",
        description:
          "Wall patching, crack repairs, minor drywall repair, plaster touch-ups, and smooth surface preparation.",
      },

      mouldingsTrimFinishing: {
        title: "Mouldings & Trim Finishing",
        description:
          "Detailed finishing for baseboards, crown mouldings, window trim, door frames, and accent trim.",
      },

      exteriorBrickStucco: {
        title: "Exterior Brick & Stucco",
        description:
          "Modernize brick and stucco surfaces with professional exterior painting and curb appeal upgrades.",
      },
    },
  },

  fr: {
    badge: "Services de peinture résidentielle",

    title:
      "Services complets de peinture et de finition pour votre maison",

    description:
      "RJ Painting offre des services complets de peinture et de finition résidentielle aux propriétaires de l’Ouest-de-l’Île de Montréal et des environs.",

    learnMore: "En savoir plus",

    services: {
      interiorPainting: {
        title: "Peinture intérieure",
        description:
          "Peinture intérieure propre et moderne pour les salons, cuisines, chambres, couloirs, sous-sols et repeints complets de la maison.",
      },

      exteriorPainting: {
        title: "Peinture extérieure",
        description:
          "Une peinture extérieure durable conçue pour améliorer l’apparence de votre maison et la protéger contre les saisons changeantes de Montréal.",
      },

      deckPaintingStaining: {
        title: "Peinture et teinture de terrasses",
        description:
          "Redonnez vie aux surfaces extérieures en bois grâce à une préparation, une peinture et une teinture professionnelles.",
      },

      deckCleaningProtection: {
        title: "Nettoyage et protection de terrasses",
        description:
          "Nettoyez, rafraîchissez et protégez les surfaces de votre terrasse contre les intempéries, l’humidité, la saleté et l’usure saisonnière.",
      },

      plasteringSurfaceRepairs: {
        title: "Plâtrage et réparation des surfaces",
        description:
          "Réparation de murs, fissures, petits dommages de cloison sèche, retouches de plâtre et préparation de surfaces lisses.",
      },

      mouldingsTrimFinishing: {
        title: "Moulures et finition",
        description:
          "Finition soignée des plinthes, moulures couronnées, contours de fenêtres, cadres de portes et moulures décoratives.",
      },

      exteriorBrickStucco: {
        title: "Brique extérieure et stuc",
        description:
          "Modernisez les surfaces de brique et de stuc grâce à une peinture extérieure professionnelle et améliorez l’apparence de votre maison.",
      },
    },
  },
} as const;

export default function ServicesPreview() {
  const pathname = usePathname();

  const lang: "en" | "fr" =
    pathname.startsWith("/fr") ? "fr" : "en";

  const t = translations[lang];

  const localizedHref = (href: string) => {
    return `/${lang}${href}`;
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            {t.description}
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesConfig.map((service, index) => {
            const Icon = service.icon;
            const serviceText = t.services[service.key];

            return (
              <motion.div
                key={service.key}
                initial={{
                  opacity: 0,
                  y: 34,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  service.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#8B2E35]/10 transition duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white shadow-lg">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-[#152536]">
                    {serviceText.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#152536]/70">
                    {serviceText.description}
                  </p>

                  <Link
                    href={localizedHref(service.href)}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#8B2E35]"
                  >
                    {t.learnMore}

                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}