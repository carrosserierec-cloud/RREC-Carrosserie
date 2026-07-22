"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Paperclip } from "lucide-react";

const vehicleTypes = [
  "Citadine",
  "Berline",
  "SUV / 4x4",
  "Utilitaire",
  "Cabriolet",
  "Moto",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fileNames, setFileNames] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("success");
      form.reset();
      setFileNames([]);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-noir mb-1.5">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-noir/15 px-4 py-3 focus:border-rouge focus:ring-1 focus:ring-rouge outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-noir mb-1.5">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-noir/15 px-4 py-3 focus:border-rouge focus:ring-1 focus:ring-rouge outline-none transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-noir mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-noir/15 px-4 py-3 focus:border-rouge focus:ring-1 focus:ring-rouge outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-noir mb-1.5">
            Type de véhicule
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            required
            defaultValue=""
            className="w-full rounded-sm border border-noir/15 px-4 py-3 focus:border-rouge focus:ring-1 focus:ring-rouge outline-none transition bg-white"
          >
            <option value="" disabled>
              Sélectionnez…
            </option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-noir mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre besoin : type de réparation, urgence, disponibilités…"
          className="w-full rounded-sm border border-noir/15 px-4 py-3 focus:border-rouge focus:ring-1 focus:ring-rouge outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="photos"
          className="flex items-center gap-2 text-sm font-medium text-noir mb-1.5 cursor-pointer w-fit"
        >
          <Paperclip size={16} className="text-rouge" />
          Photos du véhicule (facultatif)
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFileNames(Array.from(e.target.files ?? []).map((f) => f.name))}
          className="w-full text-sm file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 file:bg-noir file:text-white file:font-display file:uppercase file:tracking-wider file:text-xs hover:file:bg-anthraciteLight file:cursor-pointer"
        />
        {fileNames.length > 0 && (
          <ul className="text-xs text-gris mt-2 space-y-0.5">
            {fileNames.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rouge hover:bg-rouge-vif disabled:opacity-60 transition-colors text-white font-display uppercase tracking-wider px-8 py-3.5 rounded-sm"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        Envoyer ma demande de devis
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-green-700 text-sm">
          <CheckCircle2 size={18} /> Votre demande a bien été envoyée, nous revenons vers vous rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-rouge text-sm">
          <AlertCircle size={18} /> Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
        </p>
      )}
    </form>
  );
}
