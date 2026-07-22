import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const reviews = [
  {
    name: "Julien M.",
    text: "Travail impeccable sur ma portière, raccord de peinture invisible et délai tenu. Je recommande.",
    rating: 5,
  },
  {
    name: "Sandra F.",
    text: "Accueil sérieux, devis clair et rapide. Le véhicule est ressorti comme neuf.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    text: "Réparation smart repair sur un pare-chocs, résultat très propre et prix correct.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-anthracite">
      <div className="container-max">
        <p className="bracket-eyebrow mb-3 text-rouge-vif">Avis clients</p>
        <h2 className="font-display text-3xl md:text-4xl text-white mb-12 max-w-xl">
          Ce que disent nos clients
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-anthraciteLight rounded-sm p-6 border border-white/5">
              <div className="flex gap-1 mb-4" aria-label={`${r.rating} étoiles sur 5`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-rouge text-rouge" />
                ))}
              </div>
              <p className="text-creme/70 text-sm mb-4">« {r.text} »</p>
              <p className="font-display text-white text-sm tracking-wide">{r.name}</p>
            </div>
          ))}
        </div>

        <a
          href={siteConfig.social.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 text-rouge-vif hover:text-white transition-colors font-display uppercase tracking-wider text-sm"
        >
          Voir tous les avis Google →
        </a>
      </div>
    </section>
  );
}
