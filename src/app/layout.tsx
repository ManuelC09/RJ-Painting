import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rj-painting-zeta.vercel.app/"),

  title: {
    default:
      "RJ Painting | Residential Painting in Montreal’s West Island",
    template: "%s | RJ Painting",
  },

  description:
    "RJ Painting provides premium residential painting services throughout Montreal’s West Island including interior painting, exterior painting, deck staining, plastering, repairs, mouldings, and trim finishing.",

  keywords: [
    "RJ Painting",
    "Residential Painting Montreal",
    "Interior Painting",
    "Exterior Painting",
    "Deck Staining",
    "Deck Painting",
    "Plastering Services",
    "Wall Repairs",
    "Mouldings and Trim Finishing",
    "Painters Montreal West Island",
    "Home Painters Montreal",
    "Painting Contractors Montreal",
    "West Island Painting Services",
  ],

  authors: [
    {
      name: "RJ Painting",
    },
  ],

  creator: "RJ Painting",

  publisher: "RJ Painting",

  openGraph: {
    title:
      "RJ Painting | Residential Painting in Montreal’s West Island",

    description:
      "Professional residential painting services including interior painting, exterior painting, deck staining, plastering, repairs, and trim finishing.",

    url: "https://rjpainting.ca",

    siteName: "RJ Painting",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RJ Painting",
      },
    ],

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "RJ Painting | Residential Painting in Montreal’s West Island",

    description:
      "Premium residential painting services throughout Montreal’s West Island.",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://rjpainting.ca",
  },

  category: "Residential Painting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}