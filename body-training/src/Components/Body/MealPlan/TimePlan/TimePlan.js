import React from "react";
import { TimeContainer, Breakfast, DayMeal, Supper } from "./TimePlan.style";

function Time() {
  return (
    <TimeContainer>
      <Breakfast>6:00 AM</Breakfast>
      <DayMeal>9:00 AM</DayMeal>
      <DayMeal>12:00 AM</DayMeal>
      <DayMeal>3:00 PM</DayMeal>
      <Supper>6:00 PM</Supper>
    </TimeContainer>
  );
}

export default Time;
