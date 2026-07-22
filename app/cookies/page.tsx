import BracketEyebrow from "@/components/BracketEyebrow";

export const metadata = {
  title: "Gestion des cookies",
  description: "Politique de gestion des cookies de RREC Carrosseries.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <section className="section-pad bg-creme">
      <div className="container-max max-w-3xl">
        <BracketEyebrow>RGPD</BracketEyebrow>
        <h1 className="font-display text-4xl text-noir mt-4 mb-8">Gestion des cookies</h1>

        <div className="prose prose-neutral max-w-none text-gris space-y-6">
          <div>
            <h2 className="font-display text-xl text-noir">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la
              visite d&apos;un site, permettant par exemple de mesurer l&apos;audience
              ou de mémoriser vos préférences.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Cookies utilisés sur ce site</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cookies de mesure d&apos;audience</strong> (Google Analytics) :
                permettent de comprendre la fréquentation du site, de façon anonymisée.
              </li>
              <li>
                <strong>Cookies techniques</strong> : nécessaires au bon fonctionnement
                du site (affichage, navigation).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-noir">Gérer vos préférences</h2>
            <p>
              Vous pouvez à tout moment configurer votre navigateur pour refuser les
              cookies ou être averti avant leur dépôt. Le refus de certains cookies
              peut limiter certaines fonctionnalités du site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
