export type Product = {
  brand: string;
  category: {
    en: string;
    fr: string;
  };
  name: string;
  description: {
    en: string;
    fr: string;
  };
  image: string;
};

export const duluxProducts: Product[] = [
  {
    brand: "Dulux",

    category: {
      en: "Exterior",
      fr: "Extérieur",
    },

    name: "DULUX® WEATHERGUARD® Exterior",

    description: {
      en: "A premium quality 100% acrylic latex exterior paint, designed for use on most exterior surfaces.",
      fr: "Une peinture extérieure au latex 100 % acrylique de qualité supérieure, conçue pour être utilisée sur la plupart des surfaces extérieures.",
    },

    image: "/images/products/dulux-weatherguard.png",
  },

  {
    brand: "Dulux",

    category: {
      en: "Exterior Stains & Finishes",
      fr: "Teintures et finis extérieurs",
    },

    name:
      "DULUX® PROFESSIONAL WOOD FINISHES® Solid 100% Acrylic Stain",

    description: {
      en: "Protects wood from moisture and sun damage while adding a rich, opaque color.",
      fr: "Protège le bois contre l’humidité et les dommages causés par le soleil tout en ajoutant une couleur riche et opaque.",
    },

    image: "/images/products/dulux-wood-solid-stain.png",
  },

  {
    brand: "Dulux",

    category: {
      en: "Exterior Stains & Finishes",
      fr: "Teintures et finis extérieurs",
    },

    name:
      "DULUX® PROFESSIONAL WOOD FINISHES® Semi-Transparent Oil Finish",

    description: {
      en: "A rich, oil-based formula that beautifies all exterior wood surfaces.",
      fr: "Une formule riche à base d’huile conçue pour embellir les surfaces extérieures en bois.",
    },

    image: "/images/products/dulux-wood-oil-finish.png",
  },

  {
    brand: "Dulux",

    category: {
      en: "Exterior Stains & Finishes",
      fr: "Teintures et finis extérieurs",
    },

    name:
      "DULUX® PROFESSIONAL WOOD FINISHES® Wood Stripper",

    description: {
      en: "Removes previous coatings from wood surfaces and composite materials.",
      fr: "Élimine les anciens revêtements des surfaces en bois et des matériaux composites.",
    },

    image: "/images/products/dulux-wood-stripper.png",
  },

  {
    brand: "Dulux",

    category: {
      en: "Exterior Stains & Finishes",
      fr: "Teintures et finis extérieurs",
    },

    name:
      "DULUX® PROFESSIONAL WOOD FINISHES® All Purpose Deck Wash",

    description: {
      en: "Cleans coated and uncoated wood and composite surfaces.",
      fr: "Nettoie les surfaces en bois et en matériaux composites, qu’elles soient recouvertes ou non.",
    },

    image: "/images/products/dulux-deck-wash.png",
  },

  {
    brand: "Dulux",

    category: {
      en: "Exterior",
      fr: "Extérieur",
    },

    name: "DULUX® DIAMOND® Exterior",

    description: {
      en: "New 100% acrylic formula providing outstanding dirt and UV resistance to keep exterior colors looking like new for years to come.",
      fr: "Une formule 100 % acrylique offrant une excellente résistance à la saleté et aux rayons UV afin de préserver l’apparence des couleurs extérieures pendant de nombreuses années.",
    },

    image: "/images/products/dulux-diamond-exterior.png",
  },
];

export const sherwinProducts: Product[] = [
  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name: "SuperPaint® Interior Acrylic Latex",

    description: {
      en: "Paint and primer in one for fast and easy application, excellent hide, durability, and scrubbability. Available in Flat, Velvet, Satin, and Semi-Gloss.",
      fr: "Peinture et apprêt en un pour une application rapide et facile, offrant un excellent pouvoir couvrant, une bonne durabilité et une excellente résistance au nettoyage. Disponible en finis mat, velours, satin et semi-lustré.",
    },

    image: "/images/products/sherwin-superpaint.jpg",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name:
      "SuperPaint® Interior Acrylic with Air Purifying Technology",

    description: {
      en: "Interior acrylic latex paint designed to help reduce common household odors while delivering a smooth, durable finish.",
      fr: "Peinture intérieure au latex acrylique conçue pour aider à réduire les odeurs domestiques courantes tout en offrant un fini lisse et durable.",
    },

    image:
      "/images/products/sherwin-superpaint-air-purifying.png",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name: "Opulence® Interior Latex",

    description: {
      en: "Smooth, easy application with a silky finish. Self-levelling formula helps reduce brush and roller marks and is scrubbable for easy cleaning.",
      fr: "Application facile et uniforme avec un fini soyeux. Sa formule autonivelante aide à réduire les marques de pinceau et de rouleau et offre une surface lavable pour faciliter l’entretien.",
    },

    image: "/images/products/sherwin-opulence.jpg",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name: "Scuff Tuff® Interior Waterbased Enamel",

    description: {
      en: "Durable interior waterbased enamel that protects walls against scuffs and scratches, ideal for high-traffic areas.",
      fr: "Émail intérieur durable à base d’eau qui protège les murs contre les éraflures et les rayures, idéal pour les zones très fréquentées.",
    },

    image: "/images/products/sherwin-scuff-tuff.jpg",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name: "Duration Home® Interior Acrylic Latex",

    description: {
      en: "Excellent durability and washability. Most stains wipe clean with soap and water, with reduced visible shine after washing.",
      fr: "Excellente durabilité et facilité de nettoyage. La plupart des taches peuvent être nettoyées avec de l’eau et du savon tout en limitant les variations de lustre après le lavage.",
    },

    image: "/images/products/sherwin-duration-home.webp",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name: "Emerald® Interior Acrylic Latex",

    description: {
      en: "Premium interior paint with exceptional hide, coverage, durability, washability, and advanced stain-blocking technology.",
      fr: "Peinture intérieure haut de gamme offrant un excellent pouvoir couvrant, une grande durabilité, une excellente lavabilité et une technologie avancée de blocage des taches.",
    },

    image: "/images/products/sherwin-emerald.webp",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Interior",
      fr: "Intérieur",
    },

    name: "ProMar® 400 Zero VOC Interior Latex Paint",

    description: {
      en: "Professional interior latex paint designed for reliable coverage and a clean finish on interior wall surfaces.",
      fr: "Peinture intérieure professionnelle au latex conçue pour offrir une couverture fiable et un fini propre sur les surfaces murales intérieures.",
    },

    image: "/images/products/sherwin-promar-400.jpeg",
  },

  {
    brand: "Sherwin-Williams",

    category: {
      en: "Ceiling Paint",
      fr: "Peinture pour plafonds",
    },

    name: "ProMar® Interior Latex Ceiling Paint",

    description: {
      en: "Interior flat latex ceiling paint designed for ceiling applications and smooth professional-looking results.",
      fr: "Peinture mate intérieure au latex conçue pour les plafonds afin d’obtenir un résultat uniforme et professionnel.",
    },

    image: "/images/products/sherwin-promar-ceiling.webp",
  },
];

export const sikkensProducts: Product[] = [
  {
    brand: "Sico ProLuxe",

    category: {
      en: "Exterior Wood Finishes",
      fr: "Finis extérieurs pour le bois",
    },

    name: "SICO® ProLuxe® Premium Deck Wood Finish",

    description: {
      en: "Premium translucent exterior wood finish designed for decks. It enhances the natural beauty of wood while providing durable protection against weather exposure.",
      fr: "Fini translucide haut de gamme pour le bois extérieur conçu pour les terrasses. Il met en valeur la beauté naturelle du bois tout en offrant une protection durable contre les intempéries.",
    },

    image:
      "/images/products/sico-proluxe-premium-deck-wood-finish.webp",
  },

  {
    brand: "Sico ProLuxe",

    category: {
      en: "Exterior Wood Finishes",
      fr: "Finis extérieurs pour le bois",
    },

    name: "SICO® ProLuxe® 1 Primary Coat RE Wood Finish",

    description: {
      en: "A premium translucent exterior wood finish designed as a primary coat for siding, trim, doors, garage doors, logs, and other wood surfaces.",
      fr: "Un fini translucide haut de gamme pour le bois extérieur conçu comme couche primaire pour les revêtements, moulures, portes, portes de garage, rondins et autres surfaces en bois.",
    },

    image:
      "/images/products/sico-proluxe-primary-coat-re-wood-finish.jpg",
  },

  {
    brand: "Sico ProLuxe",

    category: {
      en: "Exterior Wood Finishes",
      fr: "Finis extérieurs pour le bois",
    },

    name: "SICO® ProLuxe® 23 Top Coat RE Wood Finish",

    description: {
      en: "A premium translucent top coat exterior wood finish designed for siding, trim, doors, garage doors, logs, and other wood surfaces.",
      fr: "Un fini extérieur translucide haut de gamme conçu comme couche de finition pour les revêtements, moulures, portes, portes de garage, rondins et autres surfaces en bois.",
    },

    image:
      "/images/products/sico-proluxe-top-coat-re-wood-finish.jpg",
  },
];

export const ppgProducts: Product[] = [
  {
    brand: "PPG",

    category: {
      en: "Interior / Exterior",
      fr: "Intérieur / Extérieur",
    },

    name: "PERMA-CRETE® Aqua-Pel",

    description: {
      en: "A high-performance water repellent coating designed to protect porous interior and exterior masonry surfaces.",
      fr: "Un revêtement hydrofuge haute performance conçu pour protéger les surfaces poreuses de maçonnerie intérieures et extérieures.",
    },

    image:
      "/images/products/ppg-perma-crete-aqua-pel.webp",
  },

  {
    brand: "PPG",

    category: {
      en: "Interior / Exterior Masonry",
      fr: "Maçonnerie intérieure / extérieure",
    },

    name: "PERMA-CRETE® 100% Acrylic Masonry Sealer",

    description: {
      en: "A fast-drying, waterborne clear or pigmented acrylic sealer used primarily to seal chalky or porous stucco, concrete, and masonry walls before coating.",
      fr: "Un scellant acrylique à base d’eau, transparent ou pigmenté, à séchage rapide, principalement utilisé pour sceller les surfaces de stuc, de béton et de maçonnerie poreuses ou poudreuses avant l’application d’un revêtement.",
    },

    image:
      "/images/products/ppg-perma-crete-acrylic-masonry-sealer.png",
  },
];

export const allProducts: Product[] = [
  ...duluxProducts,
  ...sherwinProducts,
  ...sikkensProducts,
  ...ppgProducts,
];