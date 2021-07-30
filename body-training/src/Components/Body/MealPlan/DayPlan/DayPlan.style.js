import styled, { css } from "styled-components";

export const DayContainer = styled.div`
  height: 100%;
  width: 12.85%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  color: grey;
  font-size: 20px;
  font-weight: 600;
  justify-content: space-between;

  ${(props) =>
    props.inactive &&
    css`
      border-right: 2px solid #c0c1c1;
    `}

  ${(props) =>
    props.active &&
    css`
      border: 2px solid orange;
    `}
`;

export const DayNumber = styled.div`
  height: 10%;
  width: 100%;
  background-color: inherti;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #c0c1c1;
  color: green;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

export const ShakeBreakfast = styled.div`
  height: calc(17.5% - 10px);
  width: 100%;
  margin-top: 10px;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid #c0c1c1;
  color: grey;
  font-size: 12px;
  font-weight: 600;
`;

export const Meal = styled.div`
  height: calc(13.8% - 10px);
  width: 100%;
  margin-top: 10px;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid #c0c1c1;
  color: grey;
  font-size: 10px;
  font-weight: 600;
`;

export const Supper = styled.div`
  height: calc(21% - 10px);
  width: 100%;
  margin-top: 10px;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: grey;
  font-size: 12px;
  font-weight: 600;
`;

export const Carbs = styled.div`
  height: 7%;
  width: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  color: grey;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  background-color: #e4e4e4;
  border: none;
  border-bottom: 2px solid #c0c1c1;
`;

export const Print = styled.div`
  height: 7%;
  width: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  color: grey;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e4e4e4;
`;
