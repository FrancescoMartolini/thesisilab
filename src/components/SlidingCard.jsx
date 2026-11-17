import { forwardRef, useMemo } from "react";
import { deckleClip } from "../utils/deckle.js";

/** Cartoncino avorio: la posizione dipende da --p (scroll). Il nastro è dietro il cartoncino. */
const SlidingCard = forwardRef(function SlidingCard({ deckle = 0.25, children }, ref) {
  const clip = useMemo(() => deckleClip(deckle, deckle > 0.4 ? 60 : 30), [deckle]);
  return (
    <div className="cardw">
      <div className="rib" />
      <div className="card" ref={ref} style={{ clipPath: clip }}>{children}</div>
    </div>
  );
});
export default SlidingCard;
