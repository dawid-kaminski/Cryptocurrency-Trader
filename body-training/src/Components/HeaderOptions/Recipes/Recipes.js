import React from "react";
import { HeaderOption } from "../HeaderOption.style";
import { HeaderOptionOpen } from "../HeaderOptionOpen.style";

function Recipes(props) {
  return props.isActive ? (
    <HeaderOptionOpen onClick={props.onClickItem}>Recipes</HeaderOptionOpen>
  ) : (
    <HeaderOption onClick={props.onClickItem}>Recipes</HeaderOption>
  );
}

export default Recipes;
