"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const translations = {
  en: {
    contactInformation: "Contact Information",
    getInTouch: "Get In Touch",

    intro:
      "Request your free residential painting estimate and we’ll get back to you as soon as possible.",

    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    serviceArea: "Service Area",
    availability: "Availability",

    location: "Montreal’s West Island",

    mondayFriday: "Monday – Friday 8:00 AM – 8:00 PM",
    saturday: "Saturday 9:00 AM – 4:00 PM",

    fullName: "Full Name",
    serviceNeeded: "Service Needed",
    otherServiceLabel: "Please tell us what you need",
    projectDetails: "Project Details",

    otherPlaceholder:
      "Example: wallpaper removal, cabinet painting, garage painting...",

    sending: "Sending...",
    submit: "Submit Request",

    success:
      "Your request has been submitted successfully.",

    error:
      "Something went wrong. Please try again.",

    services: {
      interiorPainting: "Interior Painting",
      plastering: "Plastering & Surface Repairs",
      mouldings: "Mouldings & Trim Finishing",
      exteriorPainting: "Exterior Painting",
      deckPainting: "Deck Painting & Staining",
      deckCleaning: "Deck Cleaning & Protection",
      brickStucco: "Exterior Brick & Stucco",
      other: "Other",
    },
  },

  fr: {
    contactInformation: "Coordonnées",
    getInTouch: "Contactez-nous",

    intro:
      "Demandez votre estimation gratuite de peinture résidentielle et nous vous répondrons dès que possible.",

    phoneNumber: "Numéro de téléphone",
    emailAddress: "Adresse courriel",
    serviceArea: "Zone de service",
    availability: "Disponibilités",

    location: "Ouest-de-l’Île de Montréal",

    mondayFriday: "Lundi – Vendredi 8 h – 20 h",
    saturday: "Samedi 9 h – 16 h",

    fullName: "Nom complet",
    serviceNeeded: "Service requis",
    otherServiceLabel: "Veuillez nous préciser ce dont vous avez besoin",
    projectDetails: "Détails du projet",

    otherPlaceholder:
      "Exemple : retrait de papier peint, peinture d’armoires, peinture de garage...",

    sending: "Envoi en cours...",
    submit: "Envoyer la demande",

    success:
      "Votre demande a été envoyée avec succès.",

    error:
      "Une erreur s’est produite. Veuillez réessayer.",

    services: {
      interiorPainting: "Peinture intérieure",
      plastering: "Plâtrage et réparation des surfaces",
      mouldings: "Moulures et finition",
      exteriorPainting: "Peinture extérieure",
      deckPainting: "Peinture et teinture de terrasses",
      deckCleaning: "Nettoyage et protection de terrasses",
      brickStucco: "Brique extérieure et stuc",
      other: "Autre",
    },
  },
} as const;

interface ContactFormSectionProps {
  lang: "en" | "fr";
}

export default function ContactFormSection({
  lang,
}: ContactFormSectionProps) {
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Interior Painting",
    otherService: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    const dataToSubmit = {
      ...formData,
      service:
        formData.service === "Other"
          ? formData.otherService
          : formData.service,
    };

    delete (dataToSubmit as any).otherService;

    try {
      console.log("Submitting form:", dataToSubmit);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setMessage(t.success);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Interior Painting",
        otherService: "",
        details: "",
      });
    } catch (error) {
      console.error(error);
      setMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#F8F5F0] py-28"
      id="contact"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">

        {/* CONTACT INFORMATION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            {t.contactInformation}
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536]">
            {t.getInTouch}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            {t.intro}
          </p>

          <div className="mt-10 space-y-6">

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  {t.phoneNumber}
                </h3>

                <p className="mt-1 text-[#152536]/70">
                  Rick: (514) 630-4638
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  {t.emailAddress}
                </h3>

                <p className="mt-1 text-[#152536]/70">
                  rjspaintingcontractors@gmail.com
                </p>
              </div>
            </div>

            {/* AREA */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  {t.serviceArea}
                </h3>

                <p className="mt-1 text-[#152536]/70">
                  {t.location}
                </p>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <Clock3 size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  {t.availability}
                </h3>

                <p className="mt-1 text-[#152536]/70">
                  {t.mondayFriday}
                </p>

                <p className="mt-1 text-[#152536]/70">
                  {t.saturday}
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* NAME */}
            <div className="grid gap-6 md:grid-cols-1">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  {t.fullName}{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  {t.emailAddress}
                </label>

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  {t.phoneNumber}{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>

            </div>

            {/* SERVICE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-[#152536]">
                {t.serviceNeeded}{" "}
                <span className="text-red-500">
                  *
                </span>
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
              >
                {/*
                  IMPORTANTE:
                  Los value NO se traducen.
                  La API sigue recibiendo los mismos valores.
                */}

                <option value="Interior Painting">
                  {t.services.interiorPainting}
                </option>

                <option value="Plastering & Surface Repairs">
                  {t.services.plastering}
                </option>

                <option value="Mouldings & Trim Finishing">
                  {t.services.mouldings}
                </option>

                <option value="Exterior Painting">
                  {t.services.exteriorPainting}
                </option>

                <option value="Deck Painting & Staining">
                  {t.services.deckPainting}
                </option>

                <option value="Deck Cleaning & Protection">
                  {t.services.deckCleaning}
                </option>

                <option value="Exterior Brick & Stucco">
                  {t.services.brickStucco}
                </option>

                <option value="Other">
                  {t.services.other}
                </option>
              </select>
            </div>

            {/* OTHER SERVICE */}
            {formData.service === "Other" && (
              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  {t.otherServiceLabel}{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  name="otherService"
                  type="text"
                  required
                  value={formData.otherService}
                  onChange={handleChange}
                  placeholder={t.otherPlaceholder}
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>
            )}

            {/* DETAILS */}
            <div>
              <label className="mb-2 block text-sm font-bold text-[#152536]">
                {t.projectDetails}
              </label>

              <textarea
                name="details"
                rows={6}
                value={formData.details}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#8B2E35] px-8 py-5 text-sm font-bold text-white transition hover:bg-[#D35B66] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? t.sending
                : t.submit}
            </button>

            {message && (
              <p className="text-center text-sm font-semibold text-[#152536]/70">
                {message}
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}