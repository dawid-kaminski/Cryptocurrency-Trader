import React, { useState } from "react";
import {
  WeekCounterContainer,
  Button,
  ButtonContainer,
  TextContainer,
} from "./WeekCounter.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function WeekCounter() {
  const [weekCounter, setWeekCounter] = useState(7);

  const onClickWeekNumberIncrement = () => {
    return setWeekCounter(weekCounter + 1);
  };

  const onClickWeekNumberDecrement = () => {
    return setWeekCounter(weekCounter - 1);
  };

  return (
    <WeekCounterContainer>
      <ButtonContainer>
        <Button onClick={onClickWeekNumberDecrement}>
          <FontAwesomeIcon icon={faChevronLeft} color="#7a7e7e" />
        </Button>
      </ButtonContainer>
      <TextContainer>Week {weekCounter}</TextContainer>
      <ButtonContainer>
        <Button onClick={onClickWeekNumberIncrement}>
          <FontAwesomeIcon icon={faChevronRight} color="#7a7e7e" />
        </Button>
      </ButtonContainer>
    </WeekCounterContainer>
  );
}

export default WeekCounter;
