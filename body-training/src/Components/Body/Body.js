import React, { useState } from "react";
import {
  BodyContainer,
  Body,
  NavBar,
  WeeklyProgress,
  WeekCounter,
  Button,
  ProteinOptions,
} from "./Body.style";
import { ReactComponent as Shake } from "../../images/shake.svg";

function DietPlan() {
  const [weekCounter, setWeekCounter] = useState(7);

  const onClickWeekNumberIncrement = () => {
    return setWeekCounter(weekCounter + 1);
  };

  const onClickWeekNumberDecrement = () => {
    return setWeekCounter(weekCounter - 1);
  };

  return (
    <BodyContainer>
      <Body>
        <NavBar>
          <WeeklyProgress></WeeklyProgress>
          <WeekCounter>
            <Button onClick={onClickWeekNumberIncrement}>Increment</Button>
            Week {weekCounter}
            <Button onClick={onClickWeekNumberDecrement}>Decrement</Button>
          </WeekCounter>
          <ProteinOptions>
            <Shake />
          </ProteinOptions>
        </NavBar>
      </Body>
    </BodyContainer>
  );
}
export default DietPlan;
