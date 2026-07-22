"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-noir overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-atelier.jpg"
          alt="Atelier de carrosserie moderne à Réquista"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/85 to-noir/40" />
        <div className="absolute inset-0 bg-spray-gradient" />
      </div>

      <div className="relative container-max px-6 md:px-10 lg:px-16 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bracket-eyebrow mb-5 text-rouge-vif"
        >
          Carrossier à Réquista, Aveyron
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-3xl"
        >
          Votre carrossier de confiance à Réquista
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-creme/70 max-w-xl"
        >
          Rapidité de réparation, peinture, rénovation optique, smart repair et remise
          en état de tous véhicules, toutes assurances.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="bg-rouge hover:bg-rouge-vif transition-colors shadow-red text-white font-display uppercase tracking-wider px-8 py-4 rounded-sm text-center"
          >
            Demander un devis
          </Link>
          <Link
            href="/contact#coordonnees"
            className="border border-white/25 hover:border-rouge text-white transition-colors font-display uppercase tracking-wider px-8 py-4 rounded-sm text-center"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>

      <div className="panel-divider" />
    </section>
  );
}
