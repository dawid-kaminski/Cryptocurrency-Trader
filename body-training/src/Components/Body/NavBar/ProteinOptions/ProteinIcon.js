import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProteinItem(props) {
  const [isProteinOptionChosen, setisProteinOptionChosen] = useState(true);

  const setProteinChoiceActive = () => {
    setisProteinOptionChosen(!isProteinOptionChosen);
  };

  return isProteinOptionChosen === true ? (
    <FontAwesomeIcon
      onClick={setProteinChoiceActive}
      icon={props.icon}
      size={props.size}
      color="green"
    />
  ) : (
    <FontAwesomeIcon
      onClick={setProteinChoiceActive}
      icon={props.icon}
      size={props.size}
      color="grey"
    />
  );
}

export default ProteinItem;
