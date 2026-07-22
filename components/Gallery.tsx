"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "Tous" | "Avant / Après" | "Réparations" | "Peinture" | "Personnalisation";

type Photo = {
  src: string;
  alt: string;
  category: Exclude<Category, "Tous">;
};

function buildCategory(prefix: string, count: number, category: Photo["category"], alt: string): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/gallery/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${alt} — RREC Carrosseries ${i + 1}`,
    category,
  }));
}

const photos: Photo[] = [
  ...buildCategory("avant-apres", 16, "Avant / Après", "Avant / après réparation"),
  ...buildCategory("peinture", 9, "Peinture", "Peinture automobile"),
  ...buildCategory("reparations", 10, "Réparations", "Réparation carrosserie"),
  ...buildCategory("personnalisation", 9, "Personnalisation", "Personnalisation véhicule"),
];

const categories: Category[] = ["Tous", "Avant / Après", "Réparations", "Peinture", "Personnalisation"];

export default function Gallery() {
  const [active, setActive] = useState<Category>("Tous");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Tous" ? photos : photos.filter((p) => p.category === active);

  function openAt(idx: number) {
    setLightbox(idx);
  }
  function close() {
    setLightbox(null);
  }
  function next() {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }
  function prev() {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`font-display uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-sm border transition-colors ${
              active === c
                ? "bg-rouge border-rouge text-white"
                : "border-noir/15 text-noir hover:border-rouge hover:text-rouge"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {filtered.map((photo, idx) => (
          <button
            key={photo.src + idx}
            onClick={() => openAt(idx)}
            className="relative block w-full rounded-sm overflow-hidden break-inside-avoid group"
            aria-label={`Agrandir : ${photo.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <span className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors" />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-noir/95 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Fermer"
            className="absolute top-6 right-6 text-white hover:text-rouge transition-colors"
          >
            <X size={32} />
          </button>
          <button
            onClick={prev}
            aria-label="Image précédente"
            className="absolute left-4 md:left-8 text-white hover:text-rouge transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]">
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            onClick={next}
            aria-label="Image suivante"
            className="absolute right-4 md:right-8 text-white hover:text-rouge transition-colors"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
