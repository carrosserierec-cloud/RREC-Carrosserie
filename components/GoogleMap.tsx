import { siteConfig } from "@/lib/site-config";

export default function GoogleMap() {
  return (
    <div className="w-full h-full min-h-[320px] rounded-sm overflow-hidden border border-noir/10">
      <iframe
        title={`Localisation ${siteConfig.name} à Réquista`}
        src={siteConfig.mapsEmbedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "320px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
