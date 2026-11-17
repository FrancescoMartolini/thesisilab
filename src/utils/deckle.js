const rnd = (a, b) => a + Math.random() * (b - a);

/** clip-path poligonale con bordi irregolari "a mano". amp in % del lato, n = punti sul lato corto. */
export function deckleClip(amp, n = 30) {
  const q = [];
  for (let i = 0; i <= n; i++) q.push([(i / n) * 100, rnd(0, amp)]);
  for (let i = 1; i <= n * 2; i++) q.push([100 - rnd(0, amp * 0.6), (i / (n * 2)) * 100]);
  for (let i = n; i >= 0; i--) q.push([(i / n) * 100, 100 - rnd(0, amp)]);
  for (let i = n * 2 - 1; i > 0; i--) q.push([rnd(0, amp * 0.6), (i / (n * 2)) * 100]);
  return "polygon(" + q.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(",") + ")";
}
