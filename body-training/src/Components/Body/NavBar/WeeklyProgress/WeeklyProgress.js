import React from "react";
import Day from "./DayCount";
import {
  WeeklyProgress,
  WeeklyProgressText,
  WeeklyProgressTracker,
  DotIcon,
  DailyProgressHyphenContainer,
  DailyProgressHyphen,
  DayCountContainer,
} from "./WeeklyProgress.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";

function Progress() {
  return (
    <WeeklyProgress>
      <WeeklyProgressText>YOUR 12 WEEK PROGRESS</WeeklyProgressText>
      <WeeklyProgressTracker>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faDotCircle} color="green" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen notCompleted>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="#C0C1C1" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen notCompleted>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="#C0C1C1" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen notCompleted>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="#C0C1C1" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen notCompleted>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="#C0C1C1" />
          <DailyProgressHyphenContainer>
            <DailyProgressHyphen notCompleted>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
        <DotIcon>
          <FontAwesomeIcon icon={faCircle} color="#C0C1C1" />
          <DailyProgressHyphenContainer none>
            <DailyProgressHyphen>-</DailyProgressHyphen>
          </DailyProgressHyphenContainer>
        </DotIcon>
      </WeeklyProgressTracker>
      <DayCountContainer>
        <Day day="1" />
        <Day day="2" />
        <Day day="3" />
        <Day day="4" />
        <Day day="5" />
        <Day day="6" />
        <Day day="7" />
        <Day day="8" />
        <Day day="9" />
        <Day day="10" />
        <Day day="11" />
        <Day day="12" />
      </DayCountContainer>
    </WeeklyProgress>
  );
}

export default Progress;
