import { Bow, Floral } from "./Decor.jsx";

/** Le voci sul cartoncino (solo fullWebsite). Raggiungibili da tastiera solo a estrazione completa. */
export default function InvitationNavigation({ pages, onOpen, tabbable }) {
  return (
    <>
      <ul className="menu reveal">
        <li><span className="vl vl-top" /></li>
        {pages.map((p) => (
          <li key={p.id}><button tabIndex={tabbable ? 0 : -1} onClick={(e) => onOpen(p.id, e.currentTarget)}>{p.label}</button></li>
        ))}
      </ul>
      <div className="reveal bow-wrap"><Bow /></div>
      <Floral className="tl" /><Floral className="br" /><Floral className="bl" />
    </>
  );
}
