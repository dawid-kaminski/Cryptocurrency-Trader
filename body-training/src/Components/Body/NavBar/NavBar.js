import React from "react";
import Progress from "./WeeklyProgress/WeeklyProgress";
import WeekCounter from "./WeekCounter/WeekCounter";
import Protein from "./ProteinOptions/ProteinOptions";
import { NavbarContainer } from "./NavBar.style";

function NavBar() {
  return (
    <NavbarContainer>
      <Progress />
      <WeekCounter />
      <Protein />
    </NavbarContainer>
  );
}

export default NavBar;
