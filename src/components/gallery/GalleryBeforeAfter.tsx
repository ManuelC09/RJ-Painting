"use client";

import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type GalleryBeforeAfterProps = {
  lang: "en" | "fr";
  beforeImage: string;
  afterImage: string;
  title?: string;
  category: string;
};

const translations = {
  en: {
    before: "Before",
    after: "After",

    ariaLabel: (name: string) =>
      `Before and after comparison for ${name}`,

    beforeAlt: (name: string) =>
      `${name} before`,

    afterAlt: (name: string) =>
      `${name} after`,
  },

  fr: {
    before: "Avant",
    after: "Après",

    ariaLabel: (name: string) =>
      `Comparaison avant et après pour ${name}`,

    beforeAlt: (name: string) =>
      `${name} avant`,

    afterAlt: (name: string) =>
      `${name} après`,
  },
} as const;

export default function GalleryBeforeAfter({
  lang,
  beforeImage,
  afterImage,
  title = "",
  category,
}: GalleryBeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  const displayName = title.trim() || category;

  const updatePosition = (clientX: number): void => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const rect = slider.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const percentage = (relativeX / rect.width) * 100;

    const limitedPercentage = Math.max(
      0,
      Math.min(100, percentage),
    );

    setPosition(limitedPercentage);
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ): void => {
    setIsDragging(true);

    event.currentTarget.setPointerCapture(event.pointerId);

    updatePosition(event.clientX);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ): void => {
    if (!isDragging) {
      return;
    }

    updatePosition(event.clientX);
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ): void => {
    setIsDragging(false);

    if (
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }
  };

  const handleKeyboard = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (event.key === "ArrowLeft") {
      setPosition((currentPosition) =>
        Math.max(0, currentPosition - 5),
      );
    }

    if (event.key === "ArrowRight") {
      setPosition((currentPosition) =>
        Math.min(100, currentPosition + 5),
      );
    }
  };

  return (
    <div
      ref={sliderRef}
      role="slider"
      tabIndex={0}
      aria-label={t.ariaLabel(displayName)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyboard}
      className="relative h-[360px] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-black outline-none sm:h-[500px] lg:h-[620px]"
    >
      {/* AFTER IMAGE */}
      <img
        src={afterImage}
        alt={t.afterAlt(displayName)}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* BEFORE IMAGE */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={t.beforeAlt(displayName)}
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>

      {/* DIVIDER */}
      <div
        className="pointer-events-none absolute top-0 z-20 h-full w-[3px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)]"
        style={{
          left: `${position}%`,
        }}
      />

      {/* CENTER BUTTON */}
      <div
        className="pointer-events-none absolute top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#8B2E35] text-white shadow-2xl sm:h-16 sm:w-16"
        style={{
          left: `${position}%`,
        }}
      >
        <MoveHorizontal size={26} />
      </div>

      {/* BEFORE LABEL */}
      <div className="pointer-events-none absolute left-4 top-4 z-30 rounded-full bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-6 sm:top-6">
        {t.before}
      </div>

      {/* AFTER LABEL */}
      <div className="pointer-events-none absolute right-4 top-4 z-30 rounded-full bg-[#8B2E35]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:right-6 sm:top-6">
        {t.after}
      </div>

      {/* BOTTOM INFORMATION */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5 pt-24 sm:p-8 sm:pt-28">
        <div className="w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {category}
        </div>

        {title.trim() && (
          <h3 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {title}
          </h3>
        )}
      </div>
    </div>
  );
}