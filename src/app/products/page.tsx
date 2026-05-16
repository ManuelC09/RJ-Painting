import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const duluxProducts = [
  {
    brand: "Dulux",
    category: "Exterior",
    name: "DULUX® WEATHERGUARD® Exterior",
    description:
      "A premium quality 100% acrylic latex exterior paint, designed for use on most exterior surfaces.",
    image: "/images/products/dulux-weatherguard.png",
    },
  {
    brand: "Dulux",
    category: "Exterior Stains & Finishes",
    name: "DULUX® PROFESSIONAL WOOD FINISHES® Solid 100% Acrylic Stain",
    description:
      "Protects wood from moisture and sun damage while adding a rich, opaque color.",
    image: "/images/products/dulux-wood-solid-stain.png",
      },
  {
    brand: "Dulux",
    category: "Exterior Stains & Finishes",
    name: "DULUX® PROFESSIONAL WOOD FINISHES® Semi-Transparent Oil Finish",
    description:
      "A rich, oil-based formula that beautifies all exterior wood surfaces.",
    image: "/images/products/dulux-wood-oil-finish.png",
     },
  {
    brand: "Dulux",
    category: "Exterior Stains & Finishes",
    name: "DULUX® PROFESSIONAL WOOD FINISHES® Wood Stripper",
    description:
      "Removes previous coatings from wood surfaces and composite materials.",
    image: "/images/products/dulux-wood-stripper.png",
     },
  {
    brand: "Dulux",
    category: "Exterior Stains & Finishes",
    name: "DULUX® PROFESSIONAL WOOD FINISHES® All Purpose Deck Wash",
    description:
      "Cleans coated and uncoated wood and composite surfaces.",
    image: "/images/products/dulux-deck-wash.png",
      },
  {
    brand: "Dulux",
    category: "Exterior",
    name: "DULUX® DIAMOND® Exterior",
    description:
      "New 100% acrylic formula providing outstanding dirt and UV resistance to keep exterior colors looking like new for years to come.",
    image: "/images/products/dulux-diamond-exterior.png",
  },
];

const sherwinProducts = [
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "SuperPaint® Interior Acrylic Latex",
    description:
      "Paint and primer in one for fast and easy application, excellent hide, durability, and scrubbability. Available in Flat, Velvet, Satin, and Semi-Gloss.",
    image: "/images/products/sherwin-superpaint.jpg",
  },
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "SuperPaint® Interior Acrylic with Air Purifying Technology",
    description:
      "Interior acrylic latex paint designed to help reduce common household odors while delivering a smooth, durable finish.",
    image: "/images/products/sherwin-superpaint-air-purifying.png",
  },
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "Opulence® Interior Latex",
    description:
      "Smooth, easy application with a silky finish. Self-levelling formula helps reduce brush and roller marks and is scrubbable for easy cleaning.",
    image: "/images/products/sherwin-opulence.jpg",
  },
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "Scuff Tuff® Interior Waterbased Enamel",
    description:
      "Durable interior waterbased enamel that protects walls against scuffs and scratches, ideal for high-traffic areas.",
    image: "/images/products/sherwin-scuff-tuff.jpg",
  },
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "Duration Home® Interior Acrylic Latex",
    description:
      "Excellent durability and washability. Most stains wipe clean with soap and water, with reduced visible shine after washing.",
    image: "/images/products/sherwin-duration-home.webp",
  },
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "Emerald® Interior Acrylic Latex",
    description:
      "Premium interior paint with exceptional hide, coverage, durability, washability, and advanced stain-blocking technology.",
    image: "/images/products/sherwin-emerald.webp",
  },
  {
    brand: "Sherwin-Williams",
    category: "Interior",
    name: "ProMar® 400 Zero VOC Interior Latex Paint",
    description:
      "Professional interior latex paint designed for reliable coverage and a clean finish on interior wall surfaces.",
    image: "/images/products/sherwin-promar-400.webp",

  },
  {
    brand: "Sherwin-Williams",
    category: "Ceiling Paint",
    name: "ProMar® Interior Latex Ceiling Paint",
    description:
      "Interior flat latex ceiling paint designed for ceiling applications and smooth professional-looking results.",
    image: "/images/products/sherwin-promar-ceiling.webp",
  },
];

const sikkensProducts = [
  {
    brand: "Sico ProLuxe",
    category: "Exterior Wood Finishes",
    name: "SICO® ProLuxe® Premium Deck Wood Finish",
    description:
      "Premium translucent exterior wood finish designed for decks. It enhances the natural beauty of wood while providing durable protection against weather exposure.",
    image: "/images/products/sico-proluxe-premium-deck-wood-finish.webp",
  },
  {
    brand: "Sico ProLuxe",
    category: "Exterior Wood Finishes",
    name: "SICO® ProLuxe® 1 Primary Coat RE Wood Finish",
    description:
      "A premium translucent exterior wood finish designed as a primary coat for siding, trim, doors, garage doors, logs, and other wood surfaces.",
    image: "/images/products/sico-proluxe-primary-coat-re-wood-finish.jpg",
  },
  {
    brand: "Sico ProLuxe",
    category: "Exterior Wood Finishes",
    name: "SICO® ProLuxe® 23 Top Coat RE Wood Finish",
    description:
      "A premium translucent top coat exterior wood finish designed for siding, trim, doors, garage doors, logs, and other wood surfaces.",
    image: "/images/products/sico-proluxe-top-coat-re-wood-finish.jpg",
  },
];

const ppgProducts = [
  {
    brand: "PPG",
    category: "Interior / Exterior",
    name: "PERMA-CRETE® Aqua-Pel",
    description:
      "A high-performance water repellent coating designed to protect porous interior and exterior masonry surfaces.",
    image: "/images/products/ppg-perma-crete-aqua-pel.webp",
  },
  {
    brand: "PPG",
    category: "Interior / Exterior Masonry",
    name: "PERMA-CRETE® 100% Acrylic Masonry Sealer",
    description:
      "A fast-drying, waterborne clear or pigmented acrylic sealer used primarily to seal chalky or porous stucco, concrete, and masonry walls before coating.",
    image: "/images/products/ppg-perma-crete-acrylic-masonry-sealer.png",
  },
];

function ProductSection({
  id,
  label,
  title,
  description,
  products,
}: {
  id: string;
  label: string;
  title: string;
  description: string;
  products: typeof duluxProducts;
}) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
              {label}
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#152536]">
              {title}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#263E5A]/75">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#152536]/10 bg-[#F8F5F0] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex min-h-[320px] items-center justify-center bg-white p-8">
                <div className="relative h-72 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <span className="inline-flex rounded-2xl bg-[#DDF3F8] px-4 py-2 text-sm font-bold text-[#152536]">
                    {product.category}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B2E35]">
                  {product.brand}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#152536]">
                  {product.name}
                </h3>

                <p className="mt-4 flex-1 text-lg leading-8 text-[#263E5A]/80">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#F8F5F0] py-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8B2E35]"
          >
            <ArrowLeft
              size={18}
              className="transition group-hover:-translate-x-1"
            />
            Back Home
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="inline-flex rounded-full bg-[#263E5A]/10 px-4 py-2 text-sm font-semibold text-[#263E5A]">
              Paint Products
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#152536] sm:text-6xl">
              Professional Paint Products Used By RJ Painting
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#263E5A]/80">
              RJ Painting works with trusted paint brands selected for smooth
              application, long-lasting finishes, strong coverage, durability,
              and residential-quality results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#dulux"
                className="rounded-md bg-[#8B2E35] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#74262c]"
              >
                Dulux Products
              </a>

              <a
                href="#sherwin-williams"
                className="rounded-md border border-[#152536]/15 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#152536] shadow-sm transition hover:bg-[#F8F5F0]"
              >
                Sherwin-Williams Products
              </a>

               <a
                href="#sikkens"
                className="rounded-md bg-[#8B2E35] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#74262c]"
              >
                Sikkens Products
              </a>

              <a
                href="#ppg"
                className="rounded-md border border-[#152536]/15 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#152536] shadow-sm transition hover:bg-[#F8F5F0]"
              >
                PPG Products
              </a>

              
            </div>
          </div>
        </div>
      </section>

      <ProductSection
        id="dulux"
        label="Dulux Product Line"
        title="Exterior Paints, Stains & Wood Finishes"
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

       <section className="bg-[#F8F5F0]">
        <ProductSection
          id="sikkens"
          label="Sikkens Product Line"
          title="Exterior Wood Finishes"
          description="Sikkens products are used for exterior wood protection, enhancing the natural beauty of wood while providing durable protection against weather exposure."
          products={sikkensProducts}
        />
      </section>

      <section className="bg-[#F8F5F0]">
        <ProductSection
          id="ppg"
          label="PPG Product Line"
          title="Masonry Sealers"
          description="PPG products are used for sealing porous masonry surfaces, providing protection against water infiltration and improving the durability of the substrate."
          products={ppgProducts}
        />
      </section>

    </main>
  );
}