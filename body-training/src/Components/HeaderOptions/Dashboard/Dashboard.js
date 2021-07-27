import React from "react";
import { HeaderOption } from "../HeaderOption.style";
import { HeaderOptionOpen } from "../HeaderOptionOpen.style";

function Dashboard(props) {
  return props.isActive ? (
    <HeaderOptionOpen onClick={props.onClickItem}>Dashboard</HeaderOptionOpen>
  ) : (
    <HeaderOption onClick={props.onClickItem}>Dashboard</HeaderOption>
  );
}

export default Dashboard;
