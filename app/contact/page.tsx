import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BracketEyebrow from "@/components/BracketEyebrow";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact — Demandez votre devis à Réquista",
  description:
    "Contactez RREC Carrosseries à Réquista pour une demande de devis : formulaire en ligne, téléphone, email et adresse de l'atelier en Aveyron.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-noir section-pad">
        <div className="container-max">
          <BracketEyebrow>Contact</BracketEyebrow>
          <h1 className="font-display text-4xl md:text-5xl text-white mt-4 max-w-2xl">
            Demandez votre devis
          </h1>
          <p className="text-creme/60 mt-5 max-w-xl">
            Décrivez-nous votre besoin, ajoutez des photos si besoin : nous revenons
            vers vous rapidement avec un devis clair.
          </p>
        </div>
      </section>

      <section className="section-pad bg-creme">
        <div className="container-max grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-white p-6 md:p-10 rounded-sm border border-noir/5">
            <ContactForm />
          </div>

          <div id="coordonnees" className="lg:col-span-2 space-y-8 scroll-mt-28">
            <div>
              <h2 className="font-display text-xl text-noir mb-5">Nos coordonnées</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-rouge mt-0.5 shrink-0" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.region}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-rouge shrink-0" />
                  <a href={siteConfig.phoneHref} className="hover:text-rouge transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-rouge shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-rouge transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-noir mb-5">Horaires</h2>
              <ul className="space-y-3 text-sm">
                {siteConfig.hours.map((h) => (
                  <li key={h.days} className="flex items-start gap-3">
                    <Clock size={18} className="text-rouge mt-0.5 shrink-0" />
                    <span>
                      <span className="font-medium">{h.days}</span>
                      <br />
                      <span className="text-gris">{h.hours}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-64">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
