import { SITE } from "../config/site.js";
import Logo from "./Logo.jsx";

/** Tasca: resta ferma. Con SITE.pocketImage il fronte è la foto del monogramma in rilievo su carta (incavo semicircolare in alto). */
export default function InvitationSleeve() {
  const img = SITE.pocketImage;
  return (
    <>
      <div className={"back" + (img ? " paper" : "")} style={img ? { "--paper": `url(${img})` } : undefined} />
      <div className="pocketw">
        <div className={"pocket" + (img ? " photo" : "")}>
          {img ? <img src={img} alt={SITE.brand + " — monogramma TSL"} decoding="async" /> : <Logo />}
        </div>
      </div>
    </>
  );
}
