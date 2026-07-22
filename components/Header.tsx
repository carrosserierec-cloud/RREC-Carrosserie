"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-noir/95 backdrop-blur shadow-lg" : "bg-noir"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 md:px-10 lg:px-16 h-20">
        <Link href="/" className="font-display text-2xl tracking-wide text-white" aria-label="RREC Carrosseries — accueil">
          <span className="text-rouge">[</span>R<span className="mx-0.5" />REC<span className="text-rouge">]</span>
          <span className="hidden md:inline text-xs align-top ml-2 tracking-[0.3em] text-grisClair font-body">
            CARROSSERIE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider text-creme/80 hover:text-rouge transition-colors font-display"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm text-creme/90 hover:text-rouge transition-colors"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="bg-rouge hover:bg-rouge-vif transition-colors text-white text-sm font-display uppercase tracking-wider px-5 py-2.5 rounded-sm"
          >
            Demander un devis
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-noir border-t border-white/10 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-creme/90 uppercase tracking-wider font-display py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.phoneHref} className="text-creme/90 py-2 flex items-center gap-2">
              <Phone size={16} /> {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-rouge text-white text-center font-display uppercase tracking-wider px-5 py-3 rounded-sm mt-2"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
