export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "carrosserie",
    title: "Carrosserie",
    short: "Redressage, remplacement d'éléments et remise en forme après choc.",
    description:
      "Redressage de carrosserie, remplacement d'éléments endommagés et remise en forme de la structure après un choc, toutes marques, toutes assurances.",
    image: "/images/services/carrosserie.jpg",
  },
  {
    slug: "peinture-automobile",
    title: "Peinture automobile",
    short: "Mise en peinture en cabine, teinte identifiée à l'origine.",
    description:
      "Mise en peinture en cabine, recherche de teinte d'origine, finitions haut de gamme pour un raccord invisible.",
    image: "/images/services/peinture-automobile.jpg",
  },
  {
    slug: "smart-repair",
    title: "Smart Repair",
    short: "Réparations rapides et localisées, sans repeindre tout l'élément.",
    description:
      "Réparations rapides et localisées des micro-rayures, éclats et petits impacts, sans repeindre tout l'élément.",
    image: "/images/services/smart-repair.jpg",
  },
  {
    slug: "reparation-choc",
    title: "Réparation après petit choc",
    short: "Diagnostic et remise en état après un accrochage léger.",
    description:
      "Diagnostic et remise en état après un accrochage léger : parking, rayure profonde, pare-choc fissuré.",
    image: "/images/services/reparation-choc.jpg",
  },
  {
    slug: "pare-chocs",
    title: "Remplacement de pare-chocs",
    short: "Fourniture et pose de pare-chocs, peints et ajustés à votre véhicule.",
    description:
      "Fourniture et pose de pare-chocs neufs ou d'occasion, peints et ajustés à votre véhicule.",
    image: "/images/services/pare-chocs-STOCKPHOTO.jpg",
  },
  {
    slug: "renovation-vehicules",
    title: "Rénovation de véhicules",
    short: "Remise à neuf complète, carrosserie et présentation extérieure.",
    description:
      "Remise à neuf complète de la carrosserie, pour un projet de restauration ou avant revente.",
    image: "/images/services/renovation-vehicules.jpg",
  },
  {
    slug: "lustrage",
    title: "Lustrage",
    short: "Redonner de la profondeur et de la brillance à la peinture.",
    description:
      "Traitement professionnel pour raviver l'éclat de la peinture et effacer les micro-marques d'usage.",
    image: "/images/services/lustrage.jpg",
  },
  {
    slug: "personnalisation-peinture",
    title: "Personnalisation peinture",
    short: "Changement de couleur, jantes, toit, rétroviseurs.",
    description:
      "Changement de couleur intégral ou partiel : jantes, toit, rétroviseurs, bandes et déco personnalisées.",
    image: "/images/services/personnalisation-peinture.jpg",
  },
];
