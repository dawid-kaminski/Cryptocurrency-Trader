import React from "react";
import ProteinItem from "./ProteinIcon";
import {
  ProteinOptions,
  ProteinOptionChoiceText,
  ProteinOptionItems,
} from "./ProteinOptions.style";
import {
  faFish,
  faCarrot,
  faDrumstickBite,
  faCheese,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";

function Protein() {
  return (
    <ProteinOptions>
      <ProteinOptionChoiceText>
        Select your protein options
      </ProteinOptionChoiceText>
      <ProteinOptionItems>
        <ProteinItem icon={faFish} size="2x" />
        <ProteinItem icon={faCarrot} size="2x" />
        <ProteinItem icon={faDrumstickBite} size="2x" />
        <ProteinItem icon={faCheese} size="2x" />
        <ProteinItem icon={faEgg} size="2x" />
      </ProteinOptionItems>
    </ProteinOptions>
  );
}

export default Protein;
