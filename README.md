# MONARC Agency — Next.js

Port Next.js (App Router + TypeScript) de la landing page MONARC Agency.

## Démarrage

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

## Stack

- **Next.js 15** (App Router)
- **React 18 + TypeScript**
- **CSS global** avec variables CSS (tokens MONARC)
- **Polices Google** chargées via `next/font` : Playfair Display, Manrope, Space Grotesk

## Structure

```
src/
├── app/
│   ├── globals.css     # tokens, reset, styles partagés (port de header.css + sections.css)
│   ├── layout.tsx      # root layout, metadata, polices
│   └── page.tsx        # assemblage des sections
├── components/
│   ├── RevealRunner.tsx       # client component : timeline gate + IntersectionObserver
│   └── sections/
│       ├── Navbar.tsx         # client : scroll-spy, progress, drawer mobile
│       ├── Hero.tsx           # client : vidéo showreel, son, parallax
│       ├── Approche.tsx       # server
│       ├── About.tsx          # server
│       ├── Services.tsx       # server
│       ├── Process.tsx        # server
│       ├── Cases.tsx          # server
│       ├── Testimonials.tsx   # server
│       ├── Cta.tsx            # server
│       ├── Contact.tsx        # client : validation formulaire
│       └── Footer.tsx         # server
└── hooks/
    ├── useTimelineGate.ts     # ajoute .tl-live / .reveal-fallback à <html>
    └── useReveal.ts           # IntersectionObserver + count-up des stats
```

## Notes de portage

- `image-slot.js` (web component placeholder) → remplacé par un `<span class="avatar">` simple dans Testimonials.
- `tweaks-panel.jsx` (panneau de réglages React) — **non porté** (hors périmètre choisi).
- Variables CSS d'origine conservées (`--accent`, `--violet-light`, `--glow`...).
- Les animations d'entrée gardent leur logique watchdog : si rAF n'avance pas (timeline gelée, SSR), `reveal-fallback` rend tout visible par défaut.

## À adapter

- `metadataBase` dans `app/layout.tsx` (actuellement `https://monarc.agency`).
- Liens sociaux dans `Footer.tsx` et `Contact.tsx` (placeholders `#`).
- Endpoint du formulaire de contact — actuellement front-only, brancher Formspree/Resend/route API selon ton hébergeur.
- Source de la vidéo showreel dans `Hero.tsx` — actuellement Pexels.
