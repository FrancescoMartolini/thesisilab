import { useCallback, useEffect, useState } from "react";
import HandwritingAnimation from "./HandwritingAnimation.jsx";
import useReducedMotion from "../hooks/useReducedMotion.js";

/** Velo vellum a tutto schermo + motto. Con movimento ridotto o "Salta introduzione" si chiude subito. */
export default function VellumIntro({ motto, duration = 3500, onDone }) {
  const reduced = useReducedMotion();
  const [gone, setGone] = useState(false);
  const finish = useCallback(() => setGone(true), []);

  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);
  useEffect(() => {
    if (reduced) { finish(); return; }
    const t = setTimeout(finish, duration + 1300);
    return () => clearTimeout(t);
  }, [reduced, duration, finish]);
  useEffect(() => {
    if (!gone) return;
    document.body.style.overflow = "";          // lo scroll si sblocca appena il velo inizia a dissolversi
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [gone, onDone]);

  return (
    <div className={"vellum" + (gone ? " gone" : "")}>
      {!reduced && <HandwritingAnimation text={motto} duration={duration} />}
      <button className="skip" onClick={finish}>Salta introduzione</button>
    </div>
  );
}
