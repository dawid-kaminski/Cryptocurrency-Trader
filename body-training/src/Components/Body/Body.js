import React from "react";
import NavBar from "./NavBar/NavBar";
import Plan from "./MealPlan/Plan";
import { BodyContainer, Body } from "./Body.style";

function DietPlan() {
  return (
    <BodyContainer>
      <Body>
        <NavBar />
        <Plan />
      </Body>
    </BodyContainer>
  );
}
export default DietPlan;
