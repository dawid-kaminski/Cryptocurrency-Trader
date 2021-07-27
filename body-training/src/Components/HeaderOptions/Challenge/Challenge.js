import React from "react";
import { HeaderOption } from "../HeaderOption.style";
import { HeaderOptionOpen } from "../HeaderOptionOpen.style";

function Challenge(props) {
  return props.isActive ? (
    <HeaderOptionOpen onClick={props.onClickItem}>Challenge</HeaderOptionOpen>
  ) : (
    <HeaderOption onClick={props.onClickItem}>Challenge</HeaderOption>
  );
}

export default Challenge;
