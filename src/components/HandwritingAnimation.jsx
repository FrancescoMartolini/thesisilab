import { useMemo } from "react";

/** Scrittura a mano: ogni lettera si svela con un tratto di durata irregolare (non è un effetto macchina da scrivere). */
export default function HandwritingAnimation({ text, duration = 3500 }) {
  const letters = useMemo(() => {
    const chars = [...text];
    const w = chars.map((c) => (c === " " ? 0.5 : c === "." ? 0.4 : 0.7 + Math.random() * 0.6));
    const tot = w.reduce((a, b) => a + b, 0);
    let acc = 0;
    return chars.map((c, i) => {
      const t = ((acc / tot) * duration) / 1000 * 0.92;
      const d = ((w[i] / tot) * duration) / 1000 * 1.6 + 0.12;
      acc += w[i];
      return { c, t, d };
    });
  }, [text, duration]);

  return (
    <p className="motto script" aria-label={text}>
      {letters.map((l, i) => (
        <span key={i} aria-hidden="true" style={{ "--t": `${l.t.toFixed(3)}s`, "--d": `${l.d.toFixed(3)}s` }}>{l.c}</span>
      ))}
    </p>
  );
}
