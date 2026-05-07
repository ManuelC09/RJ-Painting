"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
  category?: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  category = "Before & After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.touches[0].clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2rem] bg-[#152536] shadow-2xl"
    >
      <div
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        className="relative h-[360px] cursor-ew-resize overflow-hidden sm:h-[460px] lg:h-[560px]"
      >
        <img
          src={afterImage}
          alt={`${title} after`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt={`${title} before`}
            className="h-full w-full object-cover"
            style={{
              width: "100vw",
              maxWidth: "none",
            }}
          />
        </div>

        <div
          className="absolute top-0 h-full w-[3px] bg-white shadow-2xl"
          style={{ left: `${position}%` }}
        />

        <div
          className="absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#8B2E35] text-white shadow-2xl"
          style={{ left: `${position}%` }}
        >
          <MoveHorizontal size={24} />
        </div>

        <div className="absolute left-5 top-5 rounded-full bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
          Before
        </div>

        <div className="absolute right-5 top-5 rounded-full bg-[#8B2E35]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
          After
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-7">
          <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur w-fit">
            {category}
          </div>

          <h3 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}