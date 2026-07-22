import { NextRequest, NextResponse } from "next/server";

// Ce endpoint reçoit le formulaire de contact et envoie un email.
// Il utilise l'API Resend (https://resend.com) — service simple, fiable,
// avec un généreux plan gratuit, pensé pour ce type de formulaire sur Vercel.
//
// Configuration nécessaire (variables d'environnement sur Vercel) :
//   RESEND_API_KEY   -> clé API Resend
//   CONTACT_TO_EMAIL -> adresse qui reçoit les demandes de devis (ex: contact@rrec-carrosseries.fr)
//
// Si vous préférez un autre service (SendGrid, Nodemailer + SMTP, Formspree...),
// seule cette fonction a besoin d'être adaptée : le formulaire côté client
// (components/ContactForm.tsx) n'a pas à changer.

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const vehicleType = formData.get("vehicleType")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";
    const photos = formData.getAll("photos") as File[];

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      // Pas de clé configurée : on log pour ne pas bloquer en développement local.
      console.warn(
        "RESEND_API_KEY / CONTACT_TO_EMAIL non configurés — email non envoyé.",
        { name, phone, email, vehicleType, message, nbPhotos: photos.length }
      );
      return NextResponse.json({ ok: true, warning: "Email non configuré (mode dev)" });
    }

    const attachments = await Promise.all(
      photos
        .filter((f) => f && f.size > 0)
        .slice(0, 5)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()).toString("base64"),
        }))
    );

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Site RREC Carrosseries <site@rrec-carrosseries.fr>",
        to: [to],
        reply_to: email,
        subject: `Nouvelle demande de devis — ${name}`,
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Type de véhicule :</strong> ${vehicleType}</p>
          <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
        attachments,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Erreur Resend:", errText);
      return NextResponse.json({ error: "Échec de l'envoi de l'email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
