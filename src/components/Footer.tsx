"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const serviceConfig = [
  {
    key: "interiorPainting",
    href: "/services/interior-painting",
  },
  {
    key: "plasteringSurfaceRepairs",
    href: "/services/plastering-surface-repairs",
  },
  {
    key: "mouldingsTrimFinishing",
    href: "/services/mouldings-trim-finishing",
  },
  {
    key: "exteriorPainting",
    href: "/services/exterior-painting",
  },
  {
    key: "deckPaintingStaining",
    href: "/services/deck-painting-staining",
  },
  {
    key: "deckCleaningProtection",
    href: "/services/deck-cleaning-protection",
  },
  {
    key: "exteriorBrickStucco",
    href: "/services/exterior-brick-stucco",
  },
] as const;

const translations = {
  en: {
    description:
      "Professional residential painting services throughout Montreal’s West Island, backed by over 36 years of experience, clean workmanship, and residential focus.",

    quickLinks: "Quick Links",

    home: "Home",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",

    servicesTitle: "Services",

    services: {
      interiorPainting: "Interior Painting",
      plasteringSurfaceRepairs: "Plastering & Surface Repairs",
      mouldingsTrimFinishing: "Mouldings & Trim Finishing",
      exteriorPainting: "Exterior Painting",
      deckPaintingStaining: "Deck Painting & Staining",
      deckCleaningProtection: "Deck Cleaning & Protection",
      exteriorBrickStucco: "Exterior Brick & Stucco",
    },

    contactInformation: "Contact Information",

    locationLineOne: "Montreal’s West Island",
    locationLineTwo: "& Surrounding Areas",

    rights: "All Rights Reserved.",

    designedBy: "Designed & Developed by",
  },

  fr: {
    description:
      "Services professionnels de peinture résidentielle dans l’Ouest-de-l’Île de Montréal, soutenus par plus de 36 ans d’expérience, un travail soigné et une expertise résidentielle.",

    quickLinks: "Liens rapides",

    home: "Accueil",
    gallery: "Galerie",
    about: "À propos",
    contact: "Contact",

    servicesTitle: "Services",

    services: {
      interiorPainting: "Peinture intérieure",
      plasteringSurfaceRepairs: "Plâtrage et réparation des surfaces",
      mouldingsTrimFinishing: "Moulures et finition",
      exteriorPainting: "Peinture extérieure",
      deckPaintingStaining: "Peinture et teinture de terrasses",
      deckCleaningProtection: "Nettoyage et protection de terrasses",
      exteriorBrickStucco: "Brique extérieure et stuc",
    },

    contactInformation: "Coordonnées",

    locationLineOne: "Ouest-de-l’Île de Montréal",
    locationLineTwo: "et régions environnantes",

    rights: "Tous droits réservés.",

    designedBy: "Conçu et développé par",
  },
} as const;

export default function Footer() {
  const pathname = usePathname();

  const lang: "en" | "fr" =
    pathname.startsWith("/fr") ? "fr" : "en";

  const t = translations[lang];

  const localizedHref = (href: string) => {
    if (href === "/") {
      return `/${lang}`;
    }

    return `/${lang}${href}`;
  };

  return (
    <footer className="bg-[#0F1C29] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <Link
            href={localizedHref("/")}
            className="inline-block"
          >
            <div className="flex h-[76px] w-[165px] items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
              <Image
                src="/rj-og-logo.png"
                alt="RJ Painting Logo"
                width={175}
                height={78}
                className="h-[64px] w-auto object-contain"
              />
            </div>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            {t.description}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-white">
            {t.quickLinks}
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
            <Link
              href={localizedHref("/")}
              className="transition hover:text-[#8B2E35]"
            >
              {t.home}
            </Link>

            <Link
              href={localizedHref("/gallery")}
              className="transition hover:text-[#8B2E35]"
            >
              {t.gallery}
            </Link>

            <Link
              href={localizedHref("/about")}
              className="transition hover:text-[#8B2E35]"
            >
              {t.about}
            </Link>

            <Link
              href={localizedHref("/contact")}
              className="transition hover:text-[#8B2E35]"
            >
              {t.contact}
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-bold text-white">
            {t.servicesTitle}
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
            {serviceConfig.map((service) => (
              <Link
                key={service.href}
                href={localizedHref(service.href)}
                className="transition hover:text-[#8B2E35]"
              >
                {t.services[service.key]}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-white">
            {t.contactInformation}
          </h3>

          <div className="mt-6 flex flex-col gap-5 text-sm text-white/65">
            <a
              href="tel:5146304638"
              className="flex items-start gap-3 transition hover:text-[#8B2E35]"
            >
              <Phone
                size={18}
                className="mt-[2px] shrink-0"
              />

              <span>
                Rick: (514) 630-4638
              </span>
            </a>

            <a
              href="mailto:rjspaintingcontractors@gmail.com"
              className="flex items-start gap-3 transition hover:text-[#8B2E35]"
            >
              <Mail
                size={18}
                className="mt-[2px] shrink-0"
              />

              <span>
                rjspaintingcontractors@gmail.com
              </span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-[2px] shrink-0"
              />

              <span>
                {t.locationLineOne}
                <br />
                {t.locationLineTwo}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/50 md:flex-row">

          <p>
            © {new Date().getFullYear()} RJ Painting.{" "}
            {t.rights}
          </p>

          <a
            href="https://www.medianumbersproductions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            {t.designedBy}{" "}

            <span className="font-semibold text-[#8B2E35]">
              Media Numbers Productions
            </span>
          </a>

        </div>
      </div>
    </footer>
  );
}