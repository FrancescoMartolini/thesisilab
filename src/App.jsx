import { useCallback, useEffect, useRef, useState } from "react";
import { SITE } from "./config/site.js";
import useScrollProgress from "./hooks/useScrollProgress.js";
import VellumIntro from "./components/VellumIntro.jsx";
import InvitationStage from "./components/InvitationStage.jsx";
import PagePanel from "./components/PagePanel.jsx";

export default function App() {
  const full = SITE.mode === "fullWebsite";
  const done = useScrollProgress();
  const [introDone, setIntroDone] = useState(false);
  const [view, setView] = useState(null);   // { id, rect } pagina corrente (resta durante la chiusura)
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null), trigger = useRef(null);

  useEffect(() => {
    const r = document.documentElement.style;
    if (SITE.pattern) r.setProperty("--pattern", `url(${SITE.pattern})`);
    return () => r.removeProperty("--pattern");
  }, []);
  useEffect(() => { document.title = full ? "The Sisi Lab — Stationery per matrimoni ed eventi" : "The Sisi Lab — Coming Soon"; }, [full]);

  const openPage = (id, el) => {
    const r = cardRef.current.getBoundingClientRect();
    trigger.current = el;
    setView({ id, rect: { top: Math.max(0, r.top), left: r.left, right: Math.max(0, innerWidth - r.right), bottom: Math.max(0, innerHeight - r.bottom) } });
    setOpen(true);
  };
  const close = useCallback(() => { setOpen(false); trigger.current?.focus(); }, []);
  const onDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      <h1 className="sr">The Sisi Lab — stationery artistica per matrimoni ed eventi</h1>
      <div className="spacer" />
      <InvitationStage ref={cardRef} done={done} onOpen={openPage} />
      {full && <PagePanel view={view} open={open} onNavigate={(id) => setView((v) => ({ ...v, id }))} onClose={close} />}
      {!introDone && <VellumIntro motto={SITE.motto} onDone={onDone} />}
    </>
  );
}
