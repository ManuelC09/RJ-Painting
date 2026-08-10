"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const translations = {
  en: {
    badge: "Request Your Free Estimate",

    titleBefore: "Let’s Transform Your",
    titleHighlight: "Home",

    description:
      "RJ Painting provides professional residential painting services throughout Montreal’s West Island including interior, exterior, decks, trim finishing, and surface repairs.",

    callButton: "Call Now",
    textButton: "Text Us",
    emailButton: "Email Us",
  },

  fr: {
    badge: "Demandez votre estimation gratuite",

    titleBefore: "Transformons votre",
    titleHighlight: "maison",

    description:
      "RJ Painting offre des services professionnels de peinture résidentielle partout dans l’Ouest-de-l’Île de Montréal, notamment pour les intérieurs, les extérieurs, les terrasses, la finition des moulures et la réparation des surfaces.",

    callButton: "Appelez maintenant",
    textButton: "Envoyez-nous un texto",
    emailButton: "Envoyez-nous un courriel",
  },
} as const;

interface ContactHeroProps {
  lang: "en" | "fr";
}

export default function ContactHero({
  lang,
}: ContactHeroProps) {
  const t = translations[lang];

  return (
    <section className="relative min-h-[65vh] overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/images/about-hero.png')] bg-cover bg-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#152536] via-[#152536]/85 to-[#152536]/30" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 pb-8 pt-48">
        <div className="max-w-4xl">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
          >
            {t.badge}
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t.titleBefore}{" "}

            <span className="text-[#8B2E35]">
              {t.titleHighlight}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/80"
          >
            {t.description}
          </motion.p>

          {/* CONTACT BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:5146304638"
              className="inline-flex items-center gap-3 rounded-md bg-[#8B2E35] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D35B66]"
            >
              <Phone size={18} />
              {t.callButton}
            </a>

            <a
              href="sms:5146304638"
              className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
            >
              <MessageCircle size={18} />
              {t.textButton}
            </a>

            <a
              href="mailto:rjspaintingcontractors@gmail.com"
              className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#152536]"
            >
              <Mail size={18} />
              {t.emailButton}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}