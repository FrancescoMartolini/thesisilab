/**
 * CONFIGURAZIONE CENTRALE: tutto ciò che cambia (modalità, motto, colori, testi, contatti) sta qui.
 * La modalità si sceglie con la variabile VITE_SITE_MODE (vedi README), non con elementi nella pagina.
 */
export const MODE = import.meta.env.VITE_SITE_MODE === "fullWebsite" ? "fullWebsite" : "comingSoon";

export const SITE = {
  mode: MODE,                         // "comingSoon" | "fullWebsite"
  brand: "The Sisi Lab",
  motto: "Stationery for a more meaningful yes.",   // provvisorio
  pocketImage: "assets/monogramma.jpg",   // fronte della tasca (monogramma in rilievo su carta). null = tasca rosa
  pattern: "assets/pattern.webp",          // pattern dello sfondo del sito. null = sfondo beige liscio
  logo: null,                         // es. "assets/logo.svg" (in /public). null = logo tipografico
  palette: { rosa: "#D9BAD5", ciliegia: "#8B001A", antracite: "#2E2E2E", beige: "#EDE1D6", avorio: "#F7F1E8" },
  formEndpoint: "",                   // URL servizio email (es. Formspree). Vuoto = nessun invio
  privacyUrl: "",                     // [DA DEFINIRE]
  contact: { email: "info@thesisilab.com", phone: "", instagram: "" },   // telefono e IG: [DA INSERIRE]
  // img: percorso foto (es. "assets/about.jpg"); null = segnaposto. Testi provvisori da confermare.
  pages: [
    { id: "about", n: "01", label: "About", img: null,
      intro: "Siamo due creative unite dalla passione per la carta, per i dettagli che raccontano storie e per la bellezza delle cose autentiche.",
      note: "[DA INSERIRE] Nomi e biografie delle fondatrici, filosofia creativa, descrizione del laboratorio.",
      tiles: [{ cap: "Il laboratorio" }, { cap: "Making-of" }, { cap: "Le fondatrici" }] },
    { id: "stationery", n: "02", label: "Stationery", img: null,
      intro: "Carta artistica per matrimoni ed eventi: progetti su misura per raccontare la vostra storia con eleganza e personalità.",
      tiles: [{ cap: "Bespoke suites" }, { cap: "Custom works" }, { cap: "Paper" }] },
    { id: "events", n: "03", label: "Live Events", img: null,
      intro: "Esperienze dal vivo dove la carta incontra la condivisione.",
      note: "[DA INSERIRE] Per ogni evento: titolo, foto, testo, data, luogo, modalità di partecipazione.",
      tiles: [{ cap: "Live sketching" }, { cap: "Tarot reading" }] },
    { id: "contact", n: "04", label: "Contact", img: null,
      intro: "Raccontaci la tua idea. Saremo felici di conoscerti e creare insieme un progetto unico e su misura." },
  ],
};
