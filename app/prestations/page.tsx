import Image from "next/image";
import Link from "next/link";
import BracketEyebrow from "@/components/BracketEyebrow";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

export const metadata = {
  title: "Nos prestations de carrosserie et peinture à Réquista",
  description:
    "Carrosserie, peinture automobile, smart repair, rénovation, lustrage et personnalisation à Réquista, en Aveyron. Devis rapide pour chaque prestation.",
  alternates: { canonical: "/prestations" },
};

export default function PrestationsPage() {
  return (
    <>
      <section className="bg-noir section-pad">
        <div className="container-max">
          <BracketEyebrow>Nos prestations</BracketEyebrow>
          <h1 className="font-display text-4xl md:text-5xl text-white mt-4 max-w-2xl">
            Carrosserie, peinture et remise en état, de A à Z
          </h1>
          <p className="text-creme/60 mt-5 max-w-xl">
            Chaque intervention fait l&apos;objet d&apos;un diagnostic précis et d&apos;un
            devis clair avant tout démarrage des travaux.
          </p>
        </div>
      </section>

      <section className="section-pad bg-creme">
        <div className="container-max space-y-16">
          {services.map((service, i) => (
            <div
              id={service.slug}
              key={service.slug}
              className={`grid md:grid-cols-2 gap-10 items-center scroll-mt-28 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-72 md:h-96 rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} — RREC Carrosseries à Réquista`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="font-mono text-xs text-rouge tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-noir mt-2 mb-4">
                  {service.title}
                </h2>
                <p className="text-gris leading-relaxed mb-6">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-rouge hover:bg-rouge-vif transition-colors text-white font-display uppercase tracking-wider px-6 py-3 rounded-sm"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
