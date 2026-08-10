"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const brands = [
  {
    name: "Sherwin-Williams",
    logo: "/images/brands/sherwin-williams.jpg",
    href: "/products#sherwin-williams",
  },
  {
    name: "Dulux",
    logo: "/images/brands/dulux.png",
    href: "/products#dulux",
  },
  {
    name: "Sikkens",
    logo: "/images/brands/sikkens.jpg",
    href: "/products#sikkens",
  },
  {
    name: "PPG",
    logo: "/images/brands/ppg.png",
    href: "/products#ppg",
  },
];

const translations = {
  en: {
    badge: "Paint Products",

    title:
      "Professional Paint Brands Used By RJ Painting",

    description:
      "RJ Painting works with trusted paint brands and high-quality product lines selected for durability, finish quality, and long-lasting residential results.",

    viewProducts: "View Products",

    logoAlt: "logo",
  },

  fr: {
    badge: "Produits de peinture",

    title:
      "Marques de peinture professionnelles utilisées par RJ Painting",

    description:
      "RJ Painting travaille avec des marques de peinture reconnues et des gammes de produits de haute qualité sélectionnées pour leur durabilité, la qualité de leur finition et leurs résultats résidentiels durables.",

    viewProducts: "Voir les produits",

    logoAlt: "logo",
  },
} as const;

export default function ProductBrands() {
  const pathname = usePathname();

  const lang: "en" | "fr" =
    pathname.startsWith("/fr") ? "fr" : "en";

  const t = translations[lang];

  const localizedHref = (href: string) => {
    return `/${lang}${href}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#263E5A]/80">
            {t.description}
          </p>
        </motion.div>

        {/* BRANDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
            >
              <Link
                href={localizedHref(brand.href)}
                className="group flex h-full flex-col items-center justify-center rounded-[2rem] border border-[#152536]/10 bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} ${t.logoAlt}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                  {t.viewProducts}

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}