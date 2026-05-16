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
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="hidden bg-[#152536] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Montreal’s West Island
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} />
              contact@rjpainting.ca
            </span>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/gallery" className="hover:text-[#C64A55]">
              Gallery
            </Link>
            <Link href="/about" className="hover:text-[#C64A55]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#C64A55]">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-4 mt-3 flex items-center justify-between bg-white px-5 py-3 shadow-2xl sm:mx-6 lg:mx-auto lg:mt-4 lg:max-w-7xl lg:px-6 lg:py-3"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/rj-og-logo.png"
            alt="RJ Painting Logo"
            width={140}
            height={60}
            priority
            className="h-[60px] w-auto object-contain sm:h-[68px] lg:h-[72px]"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#152536] lg:flex">
          <Link href="/" className="hover:text-[#8B2E35]">
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#8B2E35]">
              Services <ChevronDown size={16} />
            </button>

            <div className="invisible absolute left-0 top-8 w-72 rounded-xl bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-lg px-4 py-3 text-sm text-[#152536] hover:bg-[#F8F5F0] hover:text-[#8B2E35]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/gallery" className="hover:text-[#8B2E35]">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-[#8B2E35]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#8B2E35]">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:5146304638"
            className="flex items-center gap-2 text-sm font-bold text-[#152536]"
          >
            <Phone size={17} />
            (514) 630-4638
          </a>

          <Link
            href="/contact"
            className="rounded-md bg-[#8B2E35] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#263E5A]"
          >
            Request Estimate
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F5F0] text-[#152536] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 bg-white px-5 py-6 shadow-2xl sm:mx-6 lg:hidden"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold text-[#152536]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between text-left"
              >
                Services
                <ChevronDown
                  size={17}
                  className={`transition ${
                    servicesOpen ? "rotate-180" : "rotate-0"
                  }`}
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
                    <div className="mt-1 flex flex-col gap-3 border-l-2 border-[#8B2E35]/30 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="text-[#152536]/80"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <div className="mt-4 border-t border-[#152536]/10 pt-5">
                <a
                  href="tel:5146304638"
                  className="mb-4 flex items-center gap-2 font-bold"
                >
                  <Phone size={17} />
                  (514) 630-4638
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md bg-[#8B2E35] px-6 py-3 text-center font-bold text-white"
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