"use client";

import { motion } from "framer-motion";
import {
  Star,
  ExternalLink,
  MapPin,
  Quote,
} from "lucide-react";
import { usePathname } from "next/navigation";

const googleReviews = [
  {
    quote: {
      en: "Rick at RJ Painting did a fantastic job refinishing our deck. He pressure washed off the old stain, sanded thoroughly, and applied a fresh coat of stain that turned out exactly how we wanted. The quality of his work was excellent, with great Residential Focus.",
      fr: "Rick de RJ Painting a fait un travail fantastique pour restaurer notre terrasse. Il a nettoyé à haute pression l'ancienne teinture, soigneusement poncé la surface et appliqué une nouvelle couche de teinture qui correspondait exactement à ce que nous voulions. La qualité de son travail était excellente, avec un grand souci du détail.",
    },
    name: "Dave Lapointe",
  },
  {
    quote: {
      en: "Rick just finished a really complicated and exacting paint job at my house and, as with previous work he did for me, the quality and execution have been flawless. He responds in a timely fashion, shows up on time, and finishes as promised.",
      fr: "Rick vient de terminer un travail de peinture particulièrement complexe et exigeant chez moi et, comme pour les travaux précédents qu'il avait réalisés, la qualité et l'exécution ont été impeccables. Il répond rapidement, arrive à l'heure et termine les travaux comme prévu.",
    },
    name: "Rene Wenker",
  },
  {
    quote: {
      en: "Excellent work. This is the fourth time we have hired RJ Painting for our home. The work included painting, plastering, and repairing cracked walls and joints. The house is always left clean after the job.",
      fr: "Excellent travail. C'est la quatrième fois que nous faisons appel à RJ Painting pour notre maison. Les travaux comprenaient de la peinture, du plâtrage ainsi que la réparation de murs et de joints fissurés. La maison est toujours laissée propre une fois les travaux terminés.",
    },
    name: "Linda Dubeau",
  },
  {
    quote: {
      en: "We hired Rick to paint the interior of our home and we are very happy with his work. He arrived on time, was a pleasure to deal with, left everything clean, and the result was excellent. He also completed several plaster wall repairs perfectly.",
      fr: "Nous avons engagé Rick pour peindre l'intérieur de notre maison et nous sommes très satisfaits de son travail. Il est arrivé à l'heure, a été très agréable à côtoyer, a tout laissé propre et le résultat était excellent. Il a également effectué à la perfection plusieurs réparations de murs en plâtre.",
    },
    name: "Josh",
  },
  {
    quote: {
      en: "Rick is very professional, detail-oriented, punctual, clean, and an excellent proactive communicator. He is straightforward and easy to work with. I would recommend him to anyone.",
      fr: "Rick est très professionnel, attentif aux détails, ponctuel et propre, en plus d'être un excellent communicateur qui prend les devants. Il est franc et très facile de travailler avec lui. Je le recommanderais sans hésitation.",
    },
    name: "J David",
  },
  {
    quote: {
      en: "Rick did an amazing job painting the interior of my house. He was very helpful, kind, reliable, always on time, and worked hard. We are very happy and would definitely recommend him.",
      fr: "Rick a fait un travail remarquable en peignant l'intérieur de ma maison. Il a été très serviable, gentil et fiable, toujours ponctuel et travaillant. Nous sommes très satisfaits et nous le recommandons sans hésitation.",
    },
    name: "Elaine Arsenault",
  },
  {
    quote: {
      en: "Rick did an excellent job and the deck looked spectacular. He kept us informed despite unpredictable summer weather and completed an amazing job.",
      fr: "Rick a fait un excellent travail et la terrasse était spectaculaire. Il nous a tenus informés malgré les conditions météorologiques estivales imprévisibles et a réalisé un travail remarquable.",
    },
    name: "Steven Davis",
  },
  {
    quote: {
      en: "It was a pleasure having Rick work in my home. He was respectful and very professional. His painting work was impeccable, and he made sure no detail was overlooked for a high-quality finish.",
      fr: "Ce fut un plaisir d'avoir Rick pour effectuer les travaux chez moi. Il a été respectueux et très professionnel. Son travail de peinture était impeccable et il s'est assuré qu'aucun détail ne soit négligé afin d'obtenir une finition de grande qualité.",
    },
    name: "Diane Besner",
  },
  {
    quote: {
      en: "We called Rick after having problems with the stain on our deck. He arrived on time, kept us informed, and gave excellent suggestions. He is friendly, knowledgeable, efficient, and very tidy.",
      fr: "Nous avons appelé Rick après avoir rencontré des problèmes avec la teinture de notre terrasse. Il est arrivé à l'heure, nous a tenus informés et nous a donné d'excellentes suggestions. Il est sympathique, compétent, efficace et très soigneux.",
    },
    name: "Barbara Davey",
  },
];

const translations = {
  en: {
    customerReviews: "Customer Reviews",

    title:
      "Trusted By Homeowners Throughout Montreal’s West Island",

    description:
      "Real Google feedback from local homeowners who trusted RJ Painting with their residential painting projects.",

    rating: "Google Rating",
    location: "Montreal West Island",
    reviewSource: "Google Review",
    verifiedReview: "Verified Review",

    mapsTitle:
      "See RJ Painting directly on Google Maps",

    mapsDescription:
      "View the business profile, location, and customer feedback from homeowners in the Montreal West Island area.",

    mapsButton: "Check Google Reviews",

    mapTitle: "RJ Painting Google Maps Location",
  },

  fr: {
    customerReviews: "Avis des clients",

    title:
      "La confiance des propriétaires de l’Ouest-de-l’Île de Montréal",

    description:
      "De véritables avis Google de propriétaires locaux ayant confié leurs projets de peinture résidentielle à RJ Painting.",

    rating: "Note Google",
    location: "Ouest-de-l’Île de Montréal",
    reviewSource: "Avis Google",
    verifiedReview: "Avis vérifié",

    mapsTitle:
      "Voir RJ Painting directement sur Google Maps",

    mapsDescription:
      "Consultez le profil de l’entreprise, son emplacement et les avis des propriétaires de l’Ouest-de-l’Île de Montréal.",

    mapsButton: "Voir les avis Google",

    mapTitle:
      "Emplacement de RJ Painting sur Google Maps",
  },
} as const;

function GoogleLogoMark() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
      <span className="text-2xl font-black tracking-[-0.08em]">
        <span className="text-[#4285F4]">
          G
        </span>
      </span>
    </div>
  );
}

function GoogleWordmark() {
  return (
    <span className="inline-flex items-center text-xl font-bold tracking-[-0.04em]">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#DB4437]">o</span>
      <span className="text-[#F4B400]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#0F9D58]">l</span>
      <span className="text-[#DB4437]">e</span>
    </span>
  );
}

export default function GoogleReviews() {
  const pathname = usePathname();

  const lang: "en" | "fr" =
    pathname.startsWith("/fr") ? "fr" : "en";

  const t = translations[lang];

  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFD] py-28"
      id="reviews"
    >
      {/* GOOGLE BACKGROUND ACCENTS */}
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#4285F4]/10 blur-3xl" />

      <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-[#DB4437]/10 blur-3xl" />

      <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-[#F4B400]/10 blur-3xl" />

      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-[#0F9D58]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">

            <GoogleWordmark />

            <span className="h-5 w-px bg-slate-200" />

            <span className="text-sm font-semibold text-slate-700">
              {t.customerReviews}
            </span>

          </div>

          <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {t.description}
          </p>

          {/* RATING */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">

              <span className="text-2xl font-extrabold text-slate-950">
                5.0
              </span>

              <div className="flex gap-1 text-[#F4B400]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span className="text-sm font-semibold text-slate-500">
                {t.rating}
              </span>

            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">

              <MapPin
                size={17}
                className="text-[#4285F4]"
              />

              {t.location}

            </div>

          </div>
        </motion.div>

        {/* GOOGLE REVIEWS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {googleReviews.map((item, index) => (

            <motion.div
              key={`${item.name}-${index}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
              viewport={{
                once: true,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* GOOGLE COLOR BAR */}
              <div className="absolute left-0 top-0 grid h-1.5 w-full grid-cols-4">
                <div className="bg-[#4285F4]" />
                <div className="bg-[#DB4437]" />
                <div className="bg-[#F4B400]" />
                <div className="bg-[#0F9D58]" />
              </div>

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  <GoogleLogoMark />

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      {item.name}
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-slate-500">
                      {t.reviewSource}
                    </p>
                  </div>

                </div>

                <Quote
                  size={28}
                  className="text-slate-200 transition group-hover:text-[#4285F4]/30"
                />

              </div>

              {/* STARS */}
              <div className="mt-5 flex gap-1 text-[#F4B400]">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              {/* TRANSLATED REVIEW */}
              <p className="mt-5 flex-1 text-base font-medium leading-7 text-slate-700">
                “{item.quote[lang]}”
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {t.verifiedReview}
                </span>

                <span className="rounded-full bg-[#4285F4]/10 px-3 py-1 text-xs font-bold text-[#4285F4]">
                  Google
                </span>

              </div>

            </motion.div>

          ))}

        </div>

        {/* GOOGLE MAPS */}
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
          className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="flex flex-col justify-center p-8 sm:p-10">

              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-[#F8FAFD] px-4 py-2">
                <GoogleWordmark />
              </div>

              <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                {t.mapsTitle}
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                {t.mapsDescription}
              </p>

              <a
                href="https://maps.app.goo.gl/jRzCZyBTixsXUhAt9"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#4285F4] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#4285F4]/20 transition hover:bg-[#3367D6]"
              >
                {t.mapsButton}

                <ExternalLink
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* MAP */}
            <div className="h-[240px] w-full border-t border-slate-200 sm:h-[300px] md:h-[360px] lg:h-[420px] lg:border-l lg:border-t-0">

              <iframe
                src="https://www.google.com/maps?q=R%20J%20Painting%20Montreal%20West%20Island&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}