import { SITE } from "../config/site.js";

export default function Logo() {
  if (SITE.logo) return <img className="logo" src={SITE.logo} alt={SITE.brand} />;
  return (
    <div className="lg" role="img" aria-label={SITE.brand}>
      <i>THE SISI LAB</i>
    </div>
  );
}
