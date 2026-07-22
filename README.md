# RREC Carrosseries — Site vitrine

Site vitrine professionnel pour **RREC Carrosseries** (Réquista, Aveyron),
construit avec **Next.js 14 (App Router)**, **React**, **TypeScript**,
**Tailwind CSS** et **Framer Motion**.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000

## Structure du projet

```
app/                 Pages (App Router) : accueil, prestations, galerie,
                     à propos, contact, mentions légales, confidentialité,
                     cookies, sitemap.ts, robots.ts, api/contact (formulaire)
components/          Composants réutilisables (Header, Footer, Hero,
                     ServiceCard, Gallery, ContactForm, GoogleMap, etc.)
lib/                 Données du site (services, coordonnées) — à adapter
```

## À personnaliser avant mise en ligne

1. **Coordonnées réelles** dans `lib/site-config.ts` : adresse exacte,
   téléphone, email, horaires, lien WhatsApp, liens réseaux sociaux,
   coordonnées GPS (`geo.lat` / `geo.lng`) et lien Google Maps.
2. **Photos** : vos propres photos sont déjà intégrées dans
   `public/images/` (atelier, prestations, avant/après, galerie), à
   partir du plan du site rempli dans PowerPoint. Deux points à vérifier :
   - `public/images/services/pare-chocs-STOCKPHOTO.jpg` est une photo de
     produit générique (pas une photo de votre atelier) — à remplacer par
     une vraie photo si possible, le nom du fichier le signale volontairement.
   - Pour ajouter ou changer une photo plus tard, déposez le fichier dans
     `public/images/...` et mettez à jour le chemin correspondant dans
     `lib/services.ts` (prestations), `components/Hero.tsx` (bandeau
     d'accueil), `components/Gallery.tsx` (galerie) ou `app/a-propos/page.tsx`.
3. **Logo** : le fichier logo fourni peut être placé dans `public/`
   (ex. `public/logo.svg` ou `.png`) et utilisé dans `components/Header.tsx`
   à la place du texte stylé `[R REC]`.
4. **Image Open Graph** : ajoutez une image `public/og-image.jpg`
   (1200×630px) pour un aperçu soigné sur les réseaux sociaux.
5. **Favicon** : ajoutez `public/favicon.ico`.
6. **SIRET / forme juridique** dans `app/mentions-legales/page.tsx`.
7. **Avis Google** : les avis dans `components/Testimonials.tsx` sont des
   exemples de démonstration. Pour afficher vos vrais avis Google, deux
   options :
   - le plus simple : remplacer le texte par vos avis copiés manuellement ;
   - dynamique : utiliser l'API Google Places (Place Details) côté serveur
     pour récupérer vos avis automatiquement (nécessite une clé API Google
     Cloud et le Place ID de l'établissement).
8. **Carte Google Maps** : dans `lib/site-config.ts`, `mapsEmbedSrc` utilise
   une recherche texte simple. Pour une carte pointant exactement sur
   l'atelier, remplacez par l'URL d'intégration générée depuis Google Maps
   (bouton Partager → Intégrer une carte).

## Formulaire de contact (envoi d'email)

Le formulaire envoie les données à `app/api/contact/route.ts`, qui utilise
l'API [Resend](https://resend.com) (plan gratuit disponible). Sur Vercel,
ajoutez ces variables d'environnement :

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=contact@rrec-carrosseries.fr
```

Sans ces variables, le site fonctionne quand même (mode développement) :
la demande est simplement affichée dans les logs serveur au lieu d'être
envoyée par email. Vous pouvez remplacer Resend par un autre service
(SendGrid, Nodemailer + SMTP, Formspree...) en adaptant uniquement ce
fichier ; le formulaire côté client n'a pas besoin de changer.

## SEO

- Balises title/description définies par page (`export const metadata`).
- Open Graph configuré dans `app/layout.tsx`.
- Données structurées `LocalBusiness` (type `AutoBodyShop`) injectées en
  JSON-LD dans `app/layout.tsx` — à compléter avec vos vraies coordonnées.
- `app/sitemap.ts` et `app/robots.ts` génèrent automatiquement
  `/sitemap.xml` et `/robots.txt`.
- Mots-clés ciblés : carrosserie Réquista, carrossier Réquista, peinture
  automobile Réquista, réparation carrosserie Aveyron, débosselage
  Réquista, garage carrosserie Réquista, carrosserie automobile Aveyron.

## Google Analytics / Search Console

- **Search Console** : une fois déployé, ajoutez la propriété avec l'URL
  du site et vérifiez via le fichier `sitemap.xml` généré automatiquement.
- **Analytics** : ajoutez votre ID de mesure (GA4) via le composant
  `next/third-parties/google` (`<GoogleAnalytics gaId="G-XXXXXXX" />`)
  dans `app/layout.tsx`, ou tout autre gestionnaire de balises (GTM).

## Déploiement sur Vercel

1. Poussez ce projet sur un dépôt Git (GitHub/GitLab/Bitbucket).
2. Importez le dépôt sur [vercel.com](https://vercel.com).
3. Renseignez les variables d'environnement (`RESEND_API_KEY`,
   `CONTACT_TO_EMAIL`).
4. Déployez — Vercel détecte automatiquement Next.js.

## Accessibilité et performance

- Navigation clavier et focus visibles.
- Contrastes respectant les couleurs de marque (noir / blanc / rouge).
- Images optimisées via `next/image` (formats AVIF/WebP automatiques).
- Respecte `prefers-reduced-motion` pour les animations.
