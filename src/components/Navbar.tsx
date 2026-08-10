"use client";

import Link from "next/link";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const services = [
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
    location: "Montreal’s West Island",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    home: "Home",
    services: "Services",
    products: "Products We Use",

    serviceNames: {
      interiorPainting: "Interior Painting",
      plasteringSurfaceRepairs: "Plastering & Surface Repairs",
      mouldingsTrimFinishing: "Mouldings & Trim Finishing",
      exteriorPainting: "Exterior Painting",
      deckPaintingStaining: "Deck Painting & Staining",
      deckCleaningProtection: "Deck Cleaning & Protection",
      exteriorBrickStucco: "Exterior Brick & Stucco",
    },
  },

  fr: {
    location: "Ouest-de-l’Île de Montréal",
    gallery: "Galerie",
    about: "À propos",
    contact: "Contact",
    home: "Accueil",
    services: "Services",
    products: "Produits utilisés",

    serviceNames: {
      interiorPainting: "Peinture intérieure",
      plasteringSurfaceRepairs: "Plâtrage et réparation des surfaces",
      mouldingsTrimFinishing: "Moulures et finition",
      exteriorPainting: "Peinture extérieure",
      deckPaintingStaining: "Peinture et teinture de terrasses",
      deckCleaningProtection: "Nettoyage et protection de terrasses",
      exteriorBrickStucco: "Brique extérieure et stuc",
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  const lang: "en" | "fr" = pathname.startsWith("/fr")
    ? "fr"
    : "en";

  const t = translations[lang];

  const localizedHref = (href: string) => {
    if (href === "/") {
      return `/${lang}`;
    }

    return `/${lang}${href}`;
  };

  const changeLanguage = (newLang: "en" | "fr") => {
    const pathWithoutLang = pathname.replace(
      /^\/(en|fr)/,
      ""
    );

    return `/${newLang}${pathWithoutLang || ""}`;
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      {/* TOP BAR */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between rounded-t-2xl border-b border-white/10 bg-[#152536]/95 px-6 py-2.5 text-sm text-white shadow-xl backdrop-blur lg:flex">

        <div className="flex items-center gap-8">

          <span className="flex items-center gap-2 text-white/85">
            <MapPin size={15} />
            {t.location}
          </span>

          <a
            href="mailto:rjspaintingcontractors@gmail.com"
            className="flex items-center gap-2 text-white/85 transition hover:text-white"
          >
            <Mail size={15} />

            rjspaintingcontractors@gmail.com
          </a>

          <a
            href="tel:+15146304638"
            className="flex items-center gap-2 text-white/85 transition hover:text-white"
          >
            <Phone size={15} />

            Rick: (514) 630-4638
          </a>

        </div>

        <div className="flex items-center gap-7 font-medium">

          {/* LANGUAGE SELECTOR */}

          <div className="flex items-center gap-2">

            <Link
              href={changeLanguage("en")}
              className={`transition ${
                lang === "en"
                  ? "font-bold text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </Link>

            <span className="text-white/30">
              |
            </span>

            <Link
              href={changeLanguage("fr")}
              className={`transition ${
                lang === "fr"
                  ? "font-bold text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              FR
            </Link>

          </div>

          <Link
            href={localizedHref("/gallery")}
            className="text-white/85 transition hover:text-white"
          >
            {t.gallery}
          </Link>

          <Link
            href={localizedHref("/about")}
            className="text-white/85 transition hover:text-white"
          >
            {t.about}
          </Link>

          <Link
            href={`${localizedHref("/contact")}#contact`}
            className="text-white/85 transition hover:text-white"
          >
            {t.contact}
          </Link>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{
          y: -24,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/95 px-4 py-4 shadow-[0_24px_80px_rgba(21,37,54,0.18)] backdrop-blur-xl lg:rounded-t-none lg:px-5"
      >

        {/* LOGO */}
        <Link
          href={localizedHref("/")}
          className="flex items-center gap-3 rounded-xl px-1.5 py-1 transition hover:opacity-90"
        >
          <div className="flex h-[70px] w-[150px] items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgba(21,37,54,0.10)] ring-1 ring-[#152536]/5 sm:h-[74px] sm:w-[165px] lg:h-[78px] lg:w-[175px]">

            <Image
              src="/rj-og-logo.png"
              alt="RJ Painting Logo"
              width={175}
              height={78}
              priority
              className="h-[62px] w-auto object-contain sm:h-[66px] lg:h-[70px]"
            />

          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-2 rounded-full bg-[#F8F5F0] px-2 py-2 text-sm font-bold text-[#152536] lg:flex">

          <Link
            href={localizedHref("/")}
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            {t.home}
          </Link>

          {/* SERVICES */}
          <div className="group relative">

            <button className="flex items-center gap-1 rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm">

              {t.services}

              <ChevronDown size={16} />

            </button>

            <div className="invisible absolute left-1/2 top-12 w-80 -translate-x-1/2 rounded-2xl border border-[#152536]/10 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:top-14 group-hover:opacity-100">

              {services.map((service) => (

                <Link
                  key={service.href}
                  href={localizedHref(service.href)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#152536]/80 transition hover:bg-[#F8F5F0] hover:text-[#8B2E35]"
                >
                  {t.serviceNames[service.key]}
                </Link>

              ))}

            </div>
          </div>

          <Link
            href={localizedHref("/gallery")}
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            {t.gallery}
          </Link>

          <Link
            href={localizedHref("/about")}
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            {t.about}
          </Link>

          <Link
            href={`${localizedHref("/contact")}#contact`}
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            {t.contact}
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 lg:flex">

          <a
            href="tel:5146304638"
            className="flex items-center gap-2 rounded-full border border-[#152536]/10 bg-white px-4 py-3 text-sm font-extrabold text-[#152536] shadow-sm transition hover:border-[#8B2E35]/30 hover:text-[#8B2E35]"
          >

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0]">
              <Phone size={16} />
            </span>

            Rick: (514) 630-4638

          </a>

          <Link
            href={localizedHref("/products")}
            className="rounded-full bg-[#8B2E35] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(139,46,53,0.28)] transition hover:-translate-y-0.5 hover:bg-[#263E5A] hover:shadow-[0_18px_45px_rgba(38,62,90,0.25)]"
          >
            {t.products}
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setIsOpen((prev) => !prev)
          }
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#152536] text-white shadow-lg lg:hidden"
          aria-label="Toggle menu"
        >

          {isOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}

        </button>

      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.25,
            }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/70 bg-white/95 px-5 py-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >

            <div className="flex flex-col gap-2 text-sm font-bold text-[#152536]">

              {/* MOBILE LANGUAGE */}

              <div className="mb-3 flex items-center justify-center gap-4 rounded-xl bg-[#F8F5F0] px-4 py-3">

                <Link
                  href={changeLanguage("en")}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={
                    lang === "en"
                      ? "font-extrabold text-[#8B2E35]"
                      : "text-[#152536]/60"
                  }
                >
                  EN
                </Link>

                <span className="text-[#152536]/20">
                  |
                </span>

                <Link
                  href={changeLanguage("fr")}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={
                    lang === "fr"
                      ? "font-extrabold text-[#8B2E35]"
                      : "text-[#152536]/60"
                  }
                >
                  FR
                </Link>

              </div>

              <Link
                href={localizedHref("/")}
                onClick={() =>
                  setIsOpen(false)
                }
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                {t.home}
              </Link>

              {/* MOBILE SERVICES */}
              <button
                onClick={() =>
                  setServicesOpen(
                    (prev) => !prev
                  )
                }
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left transition hover:bg-[#F8F5F0]"
              >

                {t.services}

                <ChevronDown
                  size={17}
                  className={`transition ${
                    servicesOpen
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />

              </button>

              <AnimatePresence>

                {servicesOpen && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="mx-4 mb-2 mt-1 flex flex-col gap-1 rounded-xl bg-[#F8F5F0] p-2">

                      {services.map(
                        (service) => (

                          <Link
                            key={
                              service.href
                            }
                            href={localizedHref(
                              service.href
                            )}
                            onClick={() =>
                              setIsOpen(
                                false
                              )
                            }
                            className="rounded-lg px-4 py-3 text-[#152536]/80 transition hover:bg-white hover:text-[#8B2E35]"
                          >

                            {
                              t.serviceNames[
                                service.key
                              ]
                            }

                          </Link>

                        )
                      )}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

              <Link
                href={localizedHref("/gallery")}
                onClick={() =>
                  setIsOpen(false)
                }
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                {t.gallery}
              </Link>

              <Link
                href={localizedHref("/about")}
                onClick={() =>
                  setIsOpen(false)
                }
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                {t.about}
              </Link>

              <Link
                href={`${localizedHref(
                  "/contact"
                )}#contact`}
                onClick={() =>
                  setIsOpen(false)
                }
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                {t.contact}
              </Link>

              <div className="mt-5 border-t border-[#152536]/10 pt-5">

                <a
                  href="tel:5146304638"
                  className="mb-4 flex items-center gap-3 rounded-xl bg-[#F8F5F0] px-4 py-4 font-extrabold"
                >

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8B2E35] shadow-sm">
                    <Phone size={17} />
                  </span>

                  Rick: (514) 630-4638

                </a>

                <Link
                  href={localizedHref("/products")}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="block rounded-full bg-[#8B2E35] px-6 py-4 text-center font-extrabold text-white shadow-[0_14px_35px_rgba(139,46,53,0.25)]"
                >
                  {t.products}
                </Link>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}