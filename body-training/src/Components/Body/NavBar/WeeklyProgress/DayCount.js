import React from "react";
import { DayCount } from "./WeeklyProgress.style";

function Day(props) {
  return <DayCount>{props.day}</DayCount>;
}

export default Day;
