"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Bouton d'appel mobile, sticky en bas d'écran */}
      <a
        href={siteConfig.phoneHref}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-rouge text-white flex items-center justify-center gap-2 py-4 font-display uppercase tracking-wider text-sm shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
        aria-label="Appeler RREC Carrosseries"
      >
        <Phone size={18} /> Appeler maintenant
      </a>

      {/* WhatsApp flottant */}
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-24 lg:bottom-6 right-4 md:right-6 z-40 bg-[#25D366] hover:brightness-110 transition text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </a>

      {/* Retour en haut */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut de page"
          className="fixed bottom-44 lg:bottom-24 right-4 md:right-6 z-40 bg-noir hover:bg-anthraciteLight transition text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg border border-white/10"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
