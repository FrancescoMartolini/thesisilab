import { forwardRef } from "react";
import { SITE } from "../config/site.js";
import Logo from "./Logo.jsx";
import InvitationSleeve from "./InvitationSleeve.jsx";
import SlidingCard from "./SlidingCard.jsx";
import ComingSoon from "./ComingSoon.jsx";
import InvitationNavigation from "./InvitationNavigation.jsx";

/** Stesso palcoscenico per entrambe le modalità: cambia solo il contenuto del cartoncino. */
const InvitationStage = forwardRef(function InvitationStage({ done, onOpen }, cardRef) {
  const full = SITE.mode === "fullWebsite";
  return (
    <div className={"stage" + (done ? " done" : "")}>
      <div className="assembly">
        <InvitationSleeve />
        <SlidingCard ref={cardRef} deckle={full ? 0.55 : 0.25}>
          <Logo />
          {full ? <InvitationNavigation pages={SITE.pages} onOpen={onOpen} tabbable={done} /> : <ComingSoon />}
        </SlidingCard>
      </div>
      <p className="hint">Scorri verso il basso</p>
    </div>
  );
});
export default InvitationStage;
