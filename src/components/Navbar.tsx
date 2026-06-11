"use client";

import Link from "next/link";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Deck Painting & Staining", href: "/services/deck-painting-staining" },
  {
    name: "Plastering & Surface Repairs",
    href: "/services/plastering-surface-repairs",
  },
  {
    name: "Mouldings & Trim Finishing",
    href: "/services/mouldings-trim-finishing",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto hidden max-w-7xl items-center justify-between rounded-t-2xl border-b border-white/10 bg-[#152536]/95 px-6 py-2.5 text-sm text-white shadow-xl backdrop-blur lg:flex">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2 text-white/85">
            <MapPin size={15} />
            Montreal’s West Island
          </span>

          <a
            href="mailto:contact@rjpainting.ca"
            className="flex items-center gap-2 text-white/85 transition hover:text-white"
          >
            <Mail size={15} />
            contact@rjpainting.ca
          </a>

          <a
            href="tel:+15146304638"
            className="flex items-center gap-2 text-white/85 transition hover:text-white"
          >
            <Phone size={15} />
            Richard: (514) 630-4638
          </a>

        </div>

        <div className="flex items-center gap-7 font-medium">
          <Link href="/gallery" className="text-white/85 transition hover:text-white">
            Gallery
          </Link>
          <Link href="/about" className="text-white/85 transition hover:text-white">
            About
          </Link>
          <Link href="/contact#contact" className="text-white/85 transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_24px_80px_rgba(21,37,54,0.18)] backdrop-blur-xl lg:rounded-t-none lg:px-5"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-1.5 py-1 transition hover:opacity-90"
        >
          <div className="flex h-[58px] w-[112px] items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgba(21,37,54,0.10)] ring-1 ring-[#152536]/5 sm:h-[62px] sm:w-[122px] lg:h-[64px] lg:w-[128px]">
            <Image
              src="/rj-og-logo.png"
              alt="RJ Painting Logo"
              width={128}
              height={64}
              priority
              className="h-[48px] w-auto object-contain sm:h-[52px] lg:h-[54px]"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full bg-[#F8F5F0] px-2 py-2 text-sm font-bold text-[#152536] lg:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm">
              Services <ChevronDown size={16} />
            </button>

            <div className="invisible absolute left-1/2 top-12 w-80 -translate-x-1/2 rounded-2xl border border-[#152536]/10 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:top-14 group-hover:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#152536]/80 transition hover:bg-[#F8F5F0] hover:text-[#8B2E35]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/gallery"
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            About
          </Link>

          <Link
            href="/contact#contact"
            className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[#8B2E35] hover:shadow-sm"
          >
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:5146304638"
            className="flex items-center gap-2 rounded-full border border-[#152536]/10 bg-white px-4 py-3 text-sm font-extrabold text-[#152536] shadow-sm transition hover:border-[#8B2E35]/30 hover:text-[#8B2E35]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0]">
              <Phone size={16} />
            </span>
            (514) 630-4638
          </a>

          <Link
            href="/products"
            className="rounded-full bg-[#8B2E35] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(139,46,53,0.28)] transition hover:-translate-y-0.5 hover:bg-[#263E5A] hover:shadow-[0_18px_45px_rgba(38,62,90,0.25)]"
          >
            Products We Use
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#152536] text-white shadow-lg lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/70 bg-white/95 px-5 py-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 text-sm font-bold text-[#152536]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                Home
              </Link>

              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left transition hover:bg-[#F8F5F0]"
              >
                Services
                <ChevronDown
                  size={17}
                  className={`transition ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mx-4 mb-2 mt-1 flex flex-col gap-1 rounded-xl bg-[#F8F5F0] p-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="rounded-lg px-4 py-3 text-[#152536]/80 transition hover:bg-white hover:text-[#8B2E35]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                Gallery
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                About
              </Link>

              <Link
                href="/contact#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-[#F8F5F0]"
              >
                Contact
              </Link>

              <div className="mt-5 border-t border-[#152536]/10 pt-5">
                <a
                  href="tel:5146304638"
                  className="mb-4 flex items-center gap-3 rounded-xl bg-[#F8F5F0] px-4 py-4 font-extrabold"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8B2E35] shadow-sm">
                    <Phone size={17} />
                  </span>
                  (514) 630-4638
                </a>

                <Link
                  href="/contact#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-[#8B2E35] px-6 py-4 text-center font-extrabold text-white shadow-[0_14px_35px_rgba(139,46,53,0.25)]"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}