"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative select-none">
      <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
        <Image src={after} alt={`${label} — après intervention`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <Image
            src={before}
            alt={`${label} — avant intervention`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-rouge"
          style={{ left: `${pos}%` }}
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Curseur avant/après pour ${label}`}
        className="w-full mt-3 accent-rouge"
      />
      <p className="text-center text-sm font-display uppercase tracking-wider text-gris mt-1">
        {label}
      </p>
    </div>
  );
}
