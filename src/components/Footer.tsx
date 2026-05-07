import Link from "next/link";
import {
  Mail,
  MapPin,
  Paintbrush,
  Phone,
} from "lucide-react";

const services = [
  {
    name: "Interior Painting",
    href: "/services/interior-painting",
  },
  {
    name: "Exterior Painting",
    href: "/services/exterior-painting",
  },
  {
    name: "Deck Painting & Staining",
    href: "/services/deck-painting-staining",
  },
  {
    name: "Plastering & Surface Repairs",
    href: "/services/plastering-surface-repairs",
  },
  {
    name: "Mouldings & Trim Finishing",
    href: "/services/mouldings-trim-finishing",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#152536] text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B2E35]">
              <Paintbrush size={21} />
            </div>

            <div>
              <p className="text-2xl font-extrabold">
                RJ<span className="text-[#D35B66]">Painting</span>
              </p>

              <p className="mt-1 text-xs font-semibold tracking-[0.24em] text-white/50">
                SINCE 1994
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            Professional residential painting services throughout Montreal’s
            West Island backed by over 28 years of experience, clean
            workmanship, and attention to detail.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
            <Link
              href="/"
              className="transition hover:text-[#D35B66]"
            >
              Home
            </Link>

            <Link
              href="/gallery"
              className="transition hover:text-[#D35B66]"
            >
              Gallery
            </Link>

            <Link
              href="/about"
              className="transition hover:text-[#D35B66]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-[#D35B66]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Services
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="transition hover:text-[#D35B66]"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Contact Information
          </h3>

          <div className="mt-6 flex flex-col gap-5 text-sm text-white/65">
            <a
              href="tel:5146304638"
              className="flex items-start gap-3 transition hover:text-[#D35B66]"
            >
              <Phone
                size={18}
                className="mt-[2px] shrink-0"
              />
              <span>(514) 630-4638</span>
            </a>

            <a
              href="mailto:contact@rjpainting.ca"
              className="flex items-start gap-3 transition hover:text-[#D35B66]"
            >
              <Mail
                size={18}
                className="mt-[2px] shrink-0"
              />
              <span>contact@rjpainting.ca</span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-[2px] shrink-0"
              />

              <span>
                Montreal’s West Island
                <br />
                & Surrounding Areas
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} RJ Painting. All Rights Reserved.
          </p>

          <a
            href="https://www.medianumbersproductions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Designed & Developed by{" "}
            <span className="font-semibold text-[#D35B66]">
              Media Numbers Productions
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}