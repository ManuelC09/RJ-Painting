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

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <ProductHero />

      <ProductsOverview />

      <ProductSection
        id="dulux"
        label="Dulux Product Line"
        title="Dulux Paints, Stains & Wood Finishes"
        description="Dulux products are commonly used for exterior painting, deck staining, wood protection, surface preparation, and durable residential finishes."
        products={duluxProducts}
      />

      <section className="bg-[#F8F5F0]">
        <ProductSection
          id="sherwin-williams"
          label="Sherwin-Williams Product Line"
          title="Interior Paints, Wall Finishes & Ceiling Products"
          description="Sherwin-Williams products are used for interior walls, ceilings, high-traffic areas, washable finishes, and professional residential repainting projects."
          products={sherwinProducts}
        />
      </section>

      <ProductSection
        id="sikkens"
        label="Sico ProLuxe Product Line"
        title="Premium Exterior Wood Finishes"
        description="Sico ProLuxe products are used for exterior wood protection, enhancing the natural beauty of wood while providing durable protection against weather exposure."
        products={sikkensProducts}
      />

      <section className="bg-[#F8F5F0]">
        <ProductSection
          id="ppg"
          label="PPG Product Line"
          title="Masonry Sealers & Protective Coatings"
          description="PPG products are used for sealing porous masonry surfaces, providing protection against water infiltration and improving the durability of the substrate."
          products={ppgProducts}
        />
      </section>

      <SupplierInfo />

      <Footer />
    </main>
  );
}