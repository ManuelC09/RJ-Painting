"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Layers,
  PaintBucket,
  Package,
  Truck,
} from "lucide-react";

const overviewConfig = [
  {
    key: "paintBrands",
    icon: Building2,
  },
  {
    key: "materials",
    icon: Layers,
  },
  {
    key: "products",
    icon: Package,
  },
  {
    key: "coatings",
    icon: PaintBucket,
  },
  {
    key: "preferredSuppliers",
    icon: Truck,
  },
] as const;

const translations = {
  en: {
    badge: "Products We Use",

    titleBefore: "Paint Brands, Materials, Products &",
    titleHighlight: "Coatings",

    description:
      "RJ Painting selects products based on the project surface, environment, durability requirements, and the finish homeowners want to achieve.",

    items: {
      paintBrands: {
        title: "Paint Brands",
        description:
          "Trusted professional brands including Dulux, Sherwin-Williams, Sico ProLuxe, and PPG.",
      },

      materials: {
        title: "Materials",
        description:
          "Materials are selected based on surface type, condition, preparation needs, and finish goals.",
      },

      products: {
        title: "Products",
        description:
          "Interior paints, exterior paints, stains, deck finishes, ceiling paints, and masonry sealers.",
      },

      coatings: {
        title: "Coatings",
        description:
          "Acrylic latex paints, waterbased enamels, translucent wood finishes, and protective sealers.",
      },

      preferredSuppliers: {
        title: "Preferred Suppliers",
        description:
          "Products sourced from reputable suppliers for quality, consistency, and availability.",
      },
    },
  },

  fr: {
    badge: "Produits que nous utilisons",

    titleBefore: "Marques de peinture, matériaux, produits et",
    titleHighlight: "revêtements",

    description:
      "RJ Painting sélectionne les produits en fonction de la surface du projet, de l’environnement, des exigences de durabilité et du fini recherché par les propriétaires.",

    items: {
      paintBrands: {
        title: "Marques de peinture",
        description:
          "Des marques professionnelles reconnues, notamment Dulux, Sherwin-Williams, Sico ProLuxe et PPG.",
      },

      materials: {
        title: "Matériaux",
        description:
          "Les matériaux sont sélectionnés selon le type de surface, son état, les besoins de préparation et le fini recherché.",
      },

      products: {
        title: "Produits",
        description:
          "Peintures intérieures, peintures extérieures, teintures, finis pour terrasses, peintures pour plafonds et scellants pour maçonnerie.",
      },

      coatings: {
        title: "Revêtements",
        description:
          "Peintures au latex acrylique, émaux à base d’eau, finis translucides pour le bois et scellants protecteurs.",
      },

      preferredSuppliers: {
        title: "Fournisseurs privilégiés",
        description:
          "Des produits provenant de fournisseurs réputés afin d’assurer qualité, constance et disponibilité.",
      },
    },
  },
} as const;

interface ProductsOverviewProps {
  lang: "en" | "fr";
}

export default function ProductsOverview({
  lang,
}: ProductsOverviewProps) {
  const t = translations[lang];

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F8F5F0] py-24"
    >
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#8B2E35]/5 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
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
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            {t.badge}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#152536] sm:text-5xl">
            {t.titleBefore}{" "}

            <span className="text-[#8B2E35]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#152536]/75">
            {t.description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {overviewConfig.map((item, index) => {
            const Icon = item.icon;
            const itemText = t.items[item.key];

            return (
              <motion.article
                key={item.key}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="rounded-[1.75rem] border border-[#152536]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B2E35]/10 text-[#8B2E35]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#152536]">
                  {itemText.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#152536]/70">
                  {itemText.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}