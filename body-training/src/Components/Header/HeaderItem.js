import React from "react";
import { HeaderOption } from "../HeaderOptions/HeaderOption.style";
import {
  HeaderOptionOpen,
  HeaderText,
  HeaderDash,
  HeaderBorder,
} from "../HeaderOptions/HeaderOptionOpen.style";

function HeaderItem(props) {
  return props.isActive ? (
    <HeaderOptionOpen onClick={props.onClickItem}>
      <HeaderText>{props.text}</HeaderText>
      <HeaderBorder>
        <HeaderDash />
      </HeaderBorder>
    </HeaderOptionOpen>
  ) : (
    <HeaderOption onClick={props.onClickItem}>{props.text}</HeaderOption>
  );
}

export default HeaderItem;
