# The Sisi Lab

Sito React (Vite) con un'unica base di codice per due modalità:

| Modalità | Cosa mostra |
|---|---|
| `comingSoon` | invito con "Coming Soon", nessun menu |
| `fullWebsite` | invito con le 4 voci → About, Stationery, Live Events, Contact |

## Avvio
```bash
npm install
npm run dev          # Coming Soon
npm run dev:site     # sito completo
npm run build:coming-soon   # oppure build:site  (output in dist/)
```
La modalità si imposta con `VITE_SITE_MODE` (`comingSoon` | `fullWebsite`). Senza variabile: `comingSoon`.

## Pubblicazione su GitHub Pages
1. Settings → Pages → Source: **GitHub Actions**.
2. Settings → Secrets and variables → Actions → **Variables** → `SITE_MODE` = `comingSoon` (o `fullWebsite` al lancio).
3. Push su `main`: il workflow `.github/workflows/deploy.yml` costruisce e pubblica. Per passare al sito completo basta cambiare la variabile e rilanciare il workflow, senza toccare il codice.

## Struttura
```
src/
  config/site.js        motto, palette, testi, contatti, modalità  ← qui si modifica quasi tutto
  components/           VellumIntro, HandwritingAnimation, InvitationSleeve, SlidingCard,
                        ComingSoon, InvitationNavigation, InvitationStage, PagePanel, Logo, Decor
  pages/                AboutPage, StationeryPage, EventsPage, ContactPage (+ PageLayout condiviso)
  hooks/                useScrollProgress (scroll → --p), useReducedMotion
  utils/deckle.js       bordi irregolari della carta
  styles/               base.css (token, tipografia), invitation.css, pages.css
public/assets/          logo, foto, illustrazioni
```

## Come sostituire i contenuti
- **Motto**: `SITE.motto`. **Colori**: `SITE.palette`. **Contatti**: `SITE.contact`.
- **Tasca (monogramma)**: `SITE.pocketImage` (default `assets/monogramma.jpg`); `null` = tasca rosa. **Pattern sfondo**: `SITE.pattern` (default `assets/pattern.webp`); `null` = beige liscio. Intensità del pattern: opacità incorporata nel file, dimensione in `base.css` (`body`, `background-size`).
- **Logo**: copia il file in `public/assets/` e imposta `SITE.logo = "assets/logo.svg"`.
- **Foto**: in `SITE.pages`, campo `img` della pagina o delle singole miniature (`"assets/foto.jpg"`).
- **Fiori/fiocco**: i disegni in `components/Decor.jsx` sono provvisori, sostituibili con le illustrazioni originali.

## Form contatti
Imposta `SITE.formEndpoint` con l'URL di un servizio email (es. Formspree, che accetta POST JSON). Finché è vuoto il form non simula nessun invio. Da definire anche `SITE.privacyUrl`.

## Accessibilità e prestazioni
Navigazione da tastiera, focus visibili, `prefers-reduced-motion` (intro saltata), "Salta introduzione", animazioni solo con transform/opacity/clip-path, scroll mai bloccato oltre l'intro.
