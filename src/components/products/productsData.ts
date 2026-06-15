export type Product = {
  brand: string;
  category: string;
  name: string;
  description: string;
  image: string;
};

export const duluxProducts: Product[] = [
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

export const sherwinProducts: Product[] = [
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
    image: "/images/products/sherwin-promar-400.jpeg",
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

export const sikkensProducts: Product[] = [
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

export const ppgProducts: Product[] = [
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

export const allProducts = [
  ...duluxProducts,
  ...sherwinProducts,
  ...sikkensProducts,
  ...ppgProducts,
];