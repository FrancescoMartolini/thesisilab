import { useEffect, useState } from "react";

/** Scrive --p (0→1, con easing) su <html>: il CSS muove il cartoncino senza re-render React. Ritorna true a estrazione completa. */
export default function useScrollProgress(threshold = 0.97) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - innerHeight;
      const raw = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      document.documentElement.style.setProperty("--p", (1 - Math.pow(1 - raw, 1.6)).toFixed(4));
      setDone(raw > threshold);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
  }, [threshold]);
  return done;
}
