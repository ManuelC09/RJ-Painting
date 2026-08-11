import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProductHero from "@/components/products/ProductHero";
import ProductsOverview from "@/components/products/ProductsOverview";
import ProductSection from "@/components/products/ProductSection";
import SupplierInfo from "@/components/products/SupplierInfo";

import {
  duluxProducts,
  sherwinProducts,
  sikkensProducts,
  ppgProducts,
} from "@/components/products/productsData";

const translations = {
  en: {
    dulux: {
      label: "Dulux Product Line",
      title: "Dulux Paints, Stains & Wood Finishes",
      description:
        "Dulux products are commonly used for exterior painting, deck staining, wood protection, surface preparation, and durable residential finishes.",
    },

    sherwinWilliams: {
      label: "Sherwin-Williams Product Line",
      title: "Interior Paints, Wall Finishes & Ceiling Products",
      description:
        "Sherwin-Williams products are used for interior walls, ceilings, high-traffic areas, washable finishes, and professional residential repainting projects.",
    },

    sikkens: {
      label: "Sico ProLuxe Product Line",
      title: "Premium Exterior Wood Finishes",
      description:
        "Sico ProLuxe products are used for exterior wood protection, enhancing the natural beauty of wood while providing durable protection against weather exposure.",
    },

    ppg: {
      label: "PPG Product Line",
      title: "Masonry Sealers & Protective Coatings",
      description:
        "PPG products are used for sealing porous masonry surfaces, providing protection against water infiltration and improving the durability of the substrate.",
    },
  },

  fr: {
    dulux: {
      label: "Gamme de produits Dulux",
      title: "Peintures, teintures et finis pour le bois Dulux",
      description:
        "Les produits Dulux sont couramment utilisés pour la peinture extérieure, la teinture de terrasses, la protection du bois, la préparation des surfaces et les finis résidentiels durables.",
    },

    sherwinWilliams: {
      label: "Gamme de produits Sherwin-Williams",
      title: "Peintures intérieures, finis muraux et produits pour plafonds",
      description:
        "Les produits Sherwin-Williams sont utilisés pour les murs intérieurs, les plafonds, les zones très fréquentées, les finis lavables et les projets professionnels de peinture résidentielle.",
    },

    sikkens: {
      label: "Gamme de produits Sico ProLuxe",
      title: "Finis extérieurs haut de gamme pour le bois",
      description:
        "Les produits Sico ProLuxe sont utilisés pour protéger le bois extérieur, mettre en valeur sa beauté naturelle et offrir une protection durable contre les intempéries.",
    },

    ppg: {
      label: "Gamme de produits PPG",
      title: "Scellants pour maçonnerie et revêtements protecteurs",
      description:
        "Les produits PPG sont utilisés pour sceller les surfaces poreuses de maçonnerie, les protéger contre l’infiltration d’eau et améliorer la durabilité du support.",
    },
  },
} as const;

export default async function ProductsPage(
  props: PageProps<"/[lang]/products">
) {
  const { lang } = await props.params;

  const currentLang: "en" | "fr" =
    lang === "fr" ? "fr" : "en";

  const t = translations[currentLang];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <ProductHero lang={currentLang} />

      <ProductsOverview lang={currentLang} />

      <ProductSection
        lang={currentLang}
        id="dulux"
        label={t.dulux.label}
        title={t.dulux.title}
        description={t.dulux.description}
        products={duluxProducts}
      />

      <section className="bg-[#F8F5F0]">
        <ProductSection
          lang={currentLang}
          id="sherwin-williams"
          label={t.sherwinWilliams.label}
          title={t.sherwinWilliams.title}
          description={t.sherwinWilliams.description}
          products={sherwinProducts}
        />
      </section>

      <ProductSection
        lang={currentLang}
        id="sikkens"
        label={t.sikkens.label}
        title={t.sikkens.title}
        description={t.sikkens.description}
        products={sikkensProducts}
      />

      <section className="bg-[#F8F5F0]">
        <ProductSection
          lang={currentLang}
          id="ppg"
          label={t.ppg.label}
          title={t.ppg.title}
          description={t.ppg.description}
          products={ppgProducts}
        />
      </section>

      <SupplierInfo lang={currentLang} />

      <Footer />
    </main>
  );
}