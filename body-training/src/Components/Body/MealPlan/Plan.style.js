import styled, { css } from "styled-components";

export const MealPlan = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  background-color: inherit;
  flex-direction: column;
  background-color: inherit;
`;

export const TimeAndMeal = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  background-color: inherit;
  flex-direction: row;
  background-color: inherit;
`;

export const DayContainer = styled.div`
  height: 100%;
  width: 12.85%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #c0c1c1;

  ${(props) =>
    props.active &&
    css`
      border: 2px solid orange;
    `}
`;

export const Workout = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  background-color: inherit;
  flex-direction: row;
  background-color: #e4e4e4;
`;

export const WorkoutText = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  background-color: inherit;
  background-color: #e4e4e4;
  justify-content: space-evenly;
  align-items: center;
  color: grey;
  font-size: 12px;
`;

export const WorkoutIcon = styled.div`
  height: 100%;
  width: 12.85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: inherit;
  background-color: #e4e4e4;
`;
