import Link from "next/link";

export default function CTASection({
  title = "Un choc, une rayure, un projet de rénovation ?",
  subtitle = "Recevez un devis rapide et sans engagement pour la remise en état de votre véhicule.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-metal-gradient overflow-hidden">
      <div className="absolute inset-0 bg-spray-gradient pointer-events-none" />
      <div className="container-max section-pad relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <p className="bracket-eyebrow mb-3 text-rouge-vif">Devis gratuit</p>
          <h2 className="font-display text-3xl md:text-4xl text-white max-w-xl">{title}</h2>
          <p className="text-creme/60 mt-3 max-w-lg">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/contact"
            className="bg-rouge hover:bg-rouge-vif transition-colors text-white font-display uppercase tracking-wider px-7 py-3.5 rounded-sm text-center"
          >
            Demander un devis
          </Link>
          <a
            href="tel:+330565000000"
            className="border border-white/20 hover:border-rouge text-white transition-colors font-display uppercase tracking-wider px-7 py-3.5 rounded-sm text-center"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
