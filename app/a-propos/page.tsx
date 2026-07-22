import Image from "next/image";
import { Award, Clock3, MapPinned, MessageSquareHeart, ThumbsUp } from "lucide-react";
import BracketEyebrow from "@/components/BracketEyebrow";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "À propos — RREC Carrosseries à Réquista",
  description:
    "12 ans d'expérience, qualité du travail, proximité et conseils personnalisés : découvrez RREC Carrosseries, carrossier à Réquista en Aveyron.",
  alternates: { canonical: "/a-propos" },
};

const points = [
  {
    icon: Award,
    title: "12 ans d'expérience",
    text: "Le gérant cumule 12 ans d'expérience en carrosserie et peinture automobile, sur toutes marques et tous types d'interventions.",
  },
  {
    icon: ThumbsUp,
    title: "Qualité et rapidité",
    text: "Un travail soigné, avec des délais de réparation courts pour limiter l'immobilisation de votre véhicule.",
  },
  {
    icon: MapPinned,
    title: "Proximité",
    text: "Un atelier ancré à Réquista, à l'écoute des particuliers et professionnels de tout l'Aveyron.",
  },
  {
    icon: MessageSquareHeart,
    title: "Conseils personnalisés",
    text: "Chaque devis est expliqué clairement, avec des conseils adaptés à votre véhicule et à votre budget.",
  },
  {
    icon: Clock3,
    title: "Satisfaction client",
    text: "La confiance et la satisfaction des clients sont au cœur de chaque intervention, du premier contact à la restitution du véhicule.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-noir section-pad">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <div>
            <BracketEyebrow>À propos</BracketEyebrow>
            <h1 className="font-display text-4xl md:text-5xl text-white mt-4">
              RREC Carrosseries, l&apos;artisanat au service de votre véhicule
            </h1>
            <p className="text-creme/60 mt-5 leading-relaxed">
              Basé à Réquista, en plein cœur de l&apos;Aveyron, RREC Carrosseries est
              né de la volonté d&apos;offrir un service de carrosserie rapide,
              rigoureux et humain. Chaque véhicule qui entre à l&apos;atelier repart
              avec le même niveau d&apos;exigence : celui d&apos;un travail fait dans les
              règles de l&apos;art.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-sm overflow-hidden">
            <Image
              src="/images/home/a-propos-atelier.jpg"
              alt="Atelier RREC Carrosseries à Réquista"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-creme">
        <div className="container-max grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p) => (
            <div key={p.title} className="bg-white p-7 rounded-sm border border-noir/5">
              <p.icon size={26} className="text-rouge mb-4" />
              <h3 className="font-display text-lg text-noir mb-2">{p.title}</h3>
              <p className="text-sm text-gris leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Confiez-nous votre véhicule"
        subtitle="Contactez RREC Carrosseries pour un diagnostic et un devis rapide."
      />
    </>
  );
}
