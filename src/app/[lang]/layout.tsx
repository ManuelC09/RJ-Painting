import type { Metadata } from "next";

const seo = {
  en: {
    title:
      "RJ Painting | Residential Painting in Montreal’s West Island",

    description:
      "RJ Painting provides professional residential painting services throughout Montreal’s West Island, including interior painting, exterior painting, deck painting and staining, plastering, surface repairs, mouldings, and trim finishing.",

    keywords: [
      "RJ Painting",
      "Residential Painting Montreal",
      "West Island Painters",
      "Painters Montreal West Island",
      "Interior Painting Montreal",
      "Exterior Painting Montreal",
      "Deck Painting Montreal",
      "Deck Staining Montreal",
      "Plastering Montreal",
      "Wall Repairs Montreal",
      "Mouldings Montreal",
      "Trim Painting Montreal",
      "Residential Painters West Island",
      "Home Painters Montreal",
      "Painting Contractors Montreal",
      "West Island Painting Services",
    ],

    ogLocale: "en_CA",
  },

  fr: {
    title:
      "RJ Painting | Peinture résidentielle dans l’Ouest-de-l’Île de Montréal",

    description:
      "RJ Painting offre des services professionnels de peinture résidentielle dans l’Ouest-de-l’Île de Montréal, notamment la peinture intérieure et extérieure, la peinture et la teinture de terrasses, le plâtrage, la réparation de surfaces ainsi que la finition de moulures et boiseries.",

    keywords: [
      "RJ Painting",
      "Peinture résidentielle Montréal",
      "Peintre Ouest-de-l'Île Montréal",
      "Peintres Ouest-de-l'Île",
      "Peinture intérieure Montréal",
      "Peinture extérieure Montréal",
      "Peinture terrasse Montréal",
      "Teinture terrasse Montréal",
      "Plâtrage Montréal",
      "Réparation murs Montréal",
      "Réparation surfaces Montréal",
      "Peinture moulures Montréal",
      "Peinture boiseries Montréal",
      "Peintre résidentiel Montréal",
      "Entrepreneur peinture Montréal",
      "Services peinture Ouest-de-l'Île",
    ],

    ogLocale: "fr_CA",
  },
} as const;

export async function generateMetadata(
  props: LayoutProps<"/[lang]">
): Promise<Metadata> {
  const { lang } = await props.params;

  const currentLang = lang === "fr" ? "fr" : "en";
  const t = seo[currentLang];

  return {
    title: {
      default: t.title,
      template: "%s | RJ Painting",
    },

    description: t.description,

    keywords: [...t.keywords],

    alternates: {
      canonical: `/${currentLang}`,

      languages: {
        "en-CA": "/en",
        "fr-CA": "/fr",
        "x-default": "/en",
      },
    },

    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${currentLang}`,
      siteName: "RJ Painting",

      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt:
            currentLang === "fr"
              ? "RJ Painting - Services de peinture résidentielle"
              : "RJ Painting - Residential Painting Services",
        },
      ],

      locale: t.ogLocale,

      alternateLocale:
        currentLang === "fr"
          ? ["en_CA"]
          : ["fr_CA"],

      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/images/og-image.png"],
    },
  };
}

export default async function LanguageLayout(
  props: LayoutProps<"/[lang]">
) {
  const { lang } = await props.params;

  return (
    <div lang={lang === "fr" ? "fr-CA" : "en-CA"}>
      {props.children}
    </div>
  );
}