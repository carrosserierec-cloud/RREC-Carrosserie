import BracketEyebrow from "@/components/BracketEyebrow";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Galerie photos — Réparations et peintures automobile",
  description:
    "Découvrez nos réalisations : réparations, peintures et personnalisations de véhicules réalisées par RREC Carrosseries à Réquista.",
  alternates: { canonical: "/galerie" },
};

export default function GaleriePage() {
  return (
    <>
      <section className="bg-noir section-pad">
        <div className="container-max">
          <BracketEyebrow>Galerie</BracketEyebrow>
          <h1 className="font-display text-4xl md:text-5xl text-white mt-4 max-w-2xl">
            Nos réalisations en images
          </h1>
          <p className="text-creme/60 mt-5 max-w-xl">
            Filtrez par catégorie et cliquez sur une photo pour l&apos;agrandir.
          </p>
        </div>
      </section>

      <section className="section-pad bg-creme">
        <div className="container-max">
          <Gallery />
        </div>
      </section>

      <CTASection
        title="Votre véhicule mérite le même soin"
        subtitle="Contactez-nous pour un devis adapté à votre projet."
      />
    </>
  );
}
