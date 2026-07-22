import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-white border border-noir/5 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} — RREC Carrosseries Réquista`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-noir mb-2">{service.title}</h3>
        <p className="text-sm text-gris mb-5">{service.short}</p>
        <Link
          href={`/prestations#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-rouge font-display uppercase tracking-wider text-sm hover:gap-2.5 transition-all"
        >
          Demander un devis <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
