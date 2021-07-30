import styled, { css } from "styled-components";

export const WeeklyProgress = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
`;

export const WeeklyProgressText = styled.div`
  height: 40%;
  width: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #7a7e7e;
`;

export const WeeklyProgressTracker = styled.div`
  height: 40%;
  width: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const DotIcon = styled.div`
  height: 100%;
  width: 8.33%;
  display: flex;
  align-items: center;
`;

export const DailyProgressHyphenContainer = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.none &&
    css`
      display: none;
    `}
`;

export const DailyProgressHyphen = styled.div`
  height: 70%;
  width: 100%;
  color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
  border-top: 5px solid green;

  ${(props) =>
    props.notCompleted &&
    css`
      border-top: 5px solid #c0c1c1;
    `}
`;

export const DayCountContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: start;
  font-size: 15px;
`;

export const DayCount = styled.div`
  height: 100%;
  width: 8.33%;
  display: flex;
  color: #c0c1c1;
`;
