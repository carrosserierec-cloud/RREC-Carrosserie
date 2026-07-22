import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-noir text-creme/80">
      <div className="container-max px-6 md:px-10 lg:px-16 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl text-white mb-3">
            <span className="text-rouge">[</span>R REC<span className="text-rouge">]</span>
          </div>
          <p className="text-sm text-creme/60 max-w-xs">
            Carrosserie, peinture et remise en état de véhicules à Réquista, en Aveyron.
            Un savoir-faire artisanal, un travail rapide et soigné.
          </p>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-wider text-white mb-4 text-sm">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-rouge transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-wider text-white mb-4 text-sm">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-rouge mt-0.5 shrink-0" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-rouge shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-rouge transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-rouge shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-rouge transition-colors">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-wider text-white mb-4 text-sm">Horaires</h3>
          <ul className="space-y-2 text-sm">
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex items-start gap-2">
                <Clock size={16} className="text-rouge mt-0.5 shrink-0" />
                <span>
                  {h.days} <br /> <span className="text-creme/60">{h.hours}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-creme/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-rouge transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-rouge transition-colors">Confidentialité</Link>
            <Link href="/cookies" className="hover:text-rouge transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
