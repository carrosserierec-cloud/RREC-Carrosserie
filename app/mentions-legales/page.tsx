import BracketEyebrow from "@/components/BracketEyebrow";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales de RREC Carrosseries, Réquista, Aveyron.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-pad bg-creme">
      <div className="container-max max-w-3xl">
        <BracketEyebrow>Informations légales</BracketEyebrow>
        <h1 className="font-display text-4xl text-noir mt-4 mb-8">Mentions légales</h1>

        <div className="prose prose-neutral max-w-none text-gris space-y-6">
          <div>
            <h2 className="font-display text-xl text-noir">Éditeur du site</h2>
            <p>
              {siteConfig.name} — {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
              {siteConfig.address.city}, {siteConfig.address.region}, France.
              <br />
              Téléphone : {siteConfig.phone}
              <br />
              Email : {siteConfig.email}
              <br />
              Forme juridique et numéro SIRET à compléter par l&apos;éditeur.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Directeur de la publication</h2>
            <p>Le gérant de {siteConfig.name}.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
              États-Unis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logo,
              identité visuelle) est la propriété de {siteConfig.name}, sauf mention
              contraire. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Limitation de responsabilité</h2>
            <p>
              {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude des
              informations diffusées sur ce site mais ne saurait être tenu responsable
              d&apos;éventuelles erreurs ou omissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
