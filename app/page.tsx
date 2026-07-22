import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Wrench, Sparkles, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import BracketEyebrow from "@/components/BracketEyebrow";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import GoogleMap from "@/components/GoogleMap";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Carrossier à Réquista (Aveyron) — Carrosserie & Peinture Auto",
  description:
    "RREC Carrosseries, votre carrossier de confiance à Réquista : carrosserie, peinture automobile, smart repair, rénovation optique. Devis rapide et gratuit.",
  alternates: { canonical: "/" },
};

const strengths = [
  { icon: Wrench, label: "12 ans d'expérience du gérant" },
  { icon: ShieldCheck, label: "Travail soigné, garanti" },
  { icon: Sparkles, label: "Rapidité de réparation" },
  { icon: CheckCircle2, label: "Devis clair et transparent" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Présentation rapide */}
      <section className="section-pad bg-creme">
        <div className="container-max grid md:grid-cols-2 gap-14 items-center">
          <div>
            <BracketEyebrow>Qui sommes-nous</BracketEyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-noir mt-4 mb-6">
              Un carrossier artisanal, exigeant et rapide
            </h2>
            <p className="text-gris leading-relaxed mb-6">
              Installé à Réquista, au cœur de l&apos;Aveyron, RREC Carrosseries
              accompagne les particuliers et professionnels pour toute intervention
              sur carrosserie : réparation après choc, peinture, smart repair,
              rénovation et personnalisation. Chaque véhicule est traité avec la
              même exigence, du diagnostic jusqu&apos;à la remise des clés.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {strengths.map((s) => (
                <div key={s.label} className="flex items-start gap-2.5">
                  <s.icon size={20} className="text-rouge mt-0.5 shrink-0" />
                  <span className="text-sm text-noir">{s.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/a-propos"
              className="inline-block font-display uppercase tracking-wider text-rouge border-b-2 border-rouge pb-1 hover:text-rouge-vif hover:border-rouge-vif transition-colors"
            >
              En savoir plus sur l&apos;entreprise
            </Link>
          </div>
          <div className="relative h-[420px] rounded-sm overflow-hidden">
            <Image
              src="/images/home/hero-atelier.jpg"
              alt="Atelier RREC Carrosseries à Réquista"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Savoir-faire / prestations en avant */}
      <section className="section-pad bg-white panel-divider">
        <div className="container-max">
          <BracketEyebrow>Notre savoir-faire</BracketEyebrow>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-noir max-w-lg">
              Des prestations complètes pour tous véhicules
            </h2>
            <Link
              href="/prestations"
              className="font-display uppercase tracking-wider text-rouge hover:text-rouge-vif transition-colors shrink-0"
            >
              Toutes nos prestations →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Avant / après */}
      <section className="section-pad bg-creme">
        <div className="container-max">
          <BracketEyebrow>Résultats</BracketEyebrow>
          <h2 className="font-display text-3xl md:text-4xl text-noir mt-4 mb-12 max-w-xl">
            Avant / après : la différence RREC
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BeforeAfter
              label="Réparation carrosserie — exemple 1"
              before="/images/home/avant-apres-1-avant.jpg"
              after="/images/home/avant-apres-1-apres.jpg"
            />
            <BeforeAfter
              label="Réparation carrosserie — exemple 2"
              before="/images/home/avant-apres-2-avant.jpg"
              after="/images/home/avant-apres-2-apres.jpg"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Carte */}
      <section className="section-pad bg-white">
        <div className="container-max grid md:grid-cols-2 gap-10 items-center">
          <div>
            <BracketEyebrow>Nous trouver</BracketEyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-noir mt-4 mb-6">
              Au cœur de Réquista, facile d&apos;accès
            </h2>
            <p className="text-gris mb-2">
              {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
            <p className="text-gris">Aveyron — sur rendez-vous et en direct à l&apos;atelier.</p>
          </div>
          <GoogleMap />
        </div>
      </section>

      <CTASection />
    </>
  );
}
