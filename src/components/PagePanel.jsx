import { useEffect, useRef, useState } from "react";
import { SITE } from "../config/site.js";
import { PAGE_COMPONENTS } from "../pages/index.js";

/** Il cartoncino si espande a schermo intero (clip-path dal rettangolo del cartoncino). Header minimale solo qui. */
export default function PagePanel({ view, open, onNavigate, onClose }) {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) { setShown(false); return; }
    const a = setTimeout(() => setShown(true), 30);
    const b = setTimeout(() => ref.current?.querySelector("#pt")?.focus(), 600);
    const esc = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", esc);
    return () => { clearTimeout(a); clearTimeout(b); removeEventListener("keydown", esc); };
  }, [open, onClose]);

  const go = (id) => { onNavigate(id); ref.current.scrollTop = 0; setTimeout(() => ref.current?.querySelector("#pt")?.focus(), 0); };
  const Page = view && PAGE_COMPONENTS[view.id];
  const r = view?.rect;
  const style = r && { "--ct": r.top + "px", "--cl": r.left + "px", "--cr": r.right + "px", "--cb": r.bottom + "px" };

  return (
    <section ref={ref} className={"panel" + (shown ? " open" : "")} role="dialog" aria-modal="true" aria-labelledby="pt" tabIndex={-1} style={style}>
      {view && (
        <>
          <header>
            <span className="brand">THE SISI LAB</span>
            <nav aria-label="Sezioni">
              {SITE.pages.map((p) => (
                <button key={p.id} aria-current={p.id === view.id ? "page" : undefined} onClick={() => go(p.id)}>{p.label}</button>
              ))}
            </nav>
            <button className="close" onClick={onClose}>Torna all'invito</button>
          </header>
          <main><Page page={SITE.pages.find((p) => p.id === view.id)} /></main>
        </>
      )}
    </section>
  );
}
