import BracketEyebrow from "@/components/BracketEyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données de RREC Carrosseries.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <section className="section-pad bg-creme">
      <div className="container-max max-w-3xl">
        <BracketEyebrow>RGPD</BracketEyebrow>
        <h1 className="font-display text-4xl text-noir mt-4 mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-neutral max-w-none text-gris space-y-6">
          <div>
            <h2 className="font-display text-xl text-noir">Données collectées</h2>
            <p>
              Le formulaire de contact de ce site collecte : nom, téléphone, email,
              type de véhicule, message, et le cas échéant des photos jointes. Ces
              données sont utilisées uniquement pour répondre à votre demande de devis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Finalité et base légale</h2>
            <p>
              Les données sont traitées sur la base de votre consentement, dans le seul
              but de traiter votre demande de contact ou de devis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Conservation des données</h2>
            <p>
              Les données transmises via le formulaire sont conservées le temps
              nécessaire au traitement de votre demande commerciale, puis supprimées.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données. Pour l&apos;exercer, contactez-nous à{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-rouge">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Destinataires</h2>
            <p>
              Les données du formulaire sont transmises uniquement à {siteConfig.name}
              et à ses prestataires techniques (hébergement, envoi d&apos;email),
              tenus à une obligation de confidentialité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
