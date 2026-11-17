import { useState } from "react";
import { SITE } from "../config/site.js";
import PageLayout from "./PageLayout.jsx";

function ContactInfo() {
  const { email, phone, instagram } = SITE.contact;
  return (
    <>
      <p>Email: <a href={`mailto:${email}`}>{email}</a><br />Telefono: {phone || "[DA INSERIRE]"}<br />Instagram: {instagram || "[DA INSERIRE]"}</p>
      <p><a className="btn" style={{ display: "inline-block", textDecoration: "none" }} href={`mailto:${email}?subject=Request%20portfolio`}>Request portfolio</a></p>
    </>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget, d = Object.fromEntries(new FormData(form)), er = {};
    if (!d.nome?.trim()) er.nome = "Inserisci nome e cognome.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email || "")) er.email = "Inserisci un indirizzo email valido.";
    if (!d.msg?.trim()) er.msg = "Scrivi un messaggio.";
    if (!d.pv) er.pv = "Il consenso privacy è necessario per inviare.";
    setErrors(er);
    if (Object.keys(er).length) return setStatus("Controlla i campi evidenziati.");
    if (!SITE.formEndpoint) return setStatus("Modulo non ancora collegato a un servizio email: nessun messaggio è stato inviato.");
    try {
      const res = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      setStatus(res.ok ? "Messaggio inviato. Ti risponderemo presto." : "Invio non riuscito. Riprova o scrivici direttamente.");
      if (res.ok) form.reset();
    } catch { setStatus("Invio non riuscito. Controlla la connessione e riprova."); }
  }

  const Err = ({ k }) => (errors[k] ? <span className="err">{errors[k]}</span> : null);
  return (
    <form onSubmit={onSubmit} noValidate>
      <label>Nome e cognome<input name="nome" autoComplete="name" aria-invalid={!!errors.nome} /><Err k="nome" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} /><Err k="email" /></label>
      <label>Data dell'evento<input name="data" type="date" /></label>
      <label>Tipologia di progetto
        <select name="tipo"><option>Bespoke suites</option><option>Custom works</option><option>Paper</option><option>Live Events</option></select>
      </label>
      <label>Messaggio<textarea name="msg" rows="5" aria-invalid={!!errors.msg} /><Err k="msg" /></label>
      <div className="row">
        <input type="checkbox" id="pv" name="pv" />
        <label htmlFor="pv">Ho letto l'informativa privacy {SITE.privacyUrl ? <a href={SITE.privacyUrl}>(leggi)</a> : "[DA DEFINIRE]"} e acconsento al trattamento dei dati.</label>
      </div>
      <Err k="pv" />
      <button className="btn" type="submit">Invia messaggio</button>
      {status && <div id="st" role="status" style={{ display: "block" }}>{status}</div>}
    </form>
  );
}

export default function ContactPage({ page }) {
  return <PageLayout page={page} extra={<ContactInfo />} aside={<ContactForm />} />;
}
