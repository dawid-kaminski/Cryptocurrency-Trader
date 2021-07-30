import React from "react";
import Time from "./TimePlan/TimePlan";
import {
  MealPlan,
  TimeAndMeal,
  Workout,
  WorkoutText,
  WorkoutIcon,
} from "./Plan.style";
import {
  DayContainer,
  DayNumber,
  ShakeBreakfast,
  Meal,
  Supper,
  Carbs,
  Print,
} from "./DayPlan/DayPlan.style";
import { ReactComponent as Shake } from "../../../images/shake.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faDumbbell,
  faCheckCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Plan() {
  return (
    <MealPlan>
      <TimeAndMeal>
        <Time />
        <DayContainer inactive>
          <DayNumber>Day 64</DayNumber>
          <ShakeBreakfast>
            Bode Shake
            <Shake />
          </ShakeBreakfast>
          <Meal>Ham and Swiss Roll Ups</Meal>
          <Meal>Turkey Melt</Meal>
          <Meal>Bode Burn with Mozzarella and Tomato Slices</Meal>
          <Supper>Turkey Melt</Supper>
          <Carbs>LOW-CARB</Carbs>
        </DayContainer>
        <DayContainer active>
          <DayNumber>Day 65</DayNumber>
          <ShakeBreakfast>
            Bode Shake
            <Shake />
          </ShakeBreakfast>
          <Meal>Ham and Swiss Roll Ups</Meal>
          <Meal>Turkey Melt</Meal>
          <Meal>Bode Burn with Mozzarella and Tomato Slices</Meal>
          <Supper>Turkey Melt</Supper>
          <Carbs>LOW-CARB</Carbs>
        </DayContainer>
        <DayContainer inactive>
          <DayNumber>Day 66</DayNumber>
          <ShakeBreakfast>
            Bode Shake
            <Shake />
          </ShakeBreakfast>
          <Meal>Grilled Steak (HC)</Meal>
          <Meal>
            Bode Shake
            <Shake />
          </Meal>
          <Meal>
            Bode Burn and Whole-Wheat English Muffin with Butter Spray
          </Meal>
          <Supper>Garlic Lime Chicken (HC)</Supper>
          <Carbs>HIGH-CARB</Carbs>
        </DayContainer>
        <DayContainer inactive>
          <DayNumber>Day 67</DayNumber>
          <ShakeBreakfast>
            Bode Shake
            <Shake />
          </ShakeBreakfast>
          <Meal>Ham and Swiss Roll Ups</Meal>
          <Meal>Turkey Melt</Meal>
          <Meal>Bode Burn with Mozzarella and Tomato Slices</Meal>
          <Supper>Turkey Melt</Supper>
          <Carbs>LOW-CARB</Carbs>
        </DayContainer>
        <DayContainer inactive>
          <DayNumber>Day 68</DayNumber>
          <ShakeBreakfast>
            Bode Shake
            <Shake />
          </ShakeBreakfast>
          <Meal>Ham and Swiss Roll Ups</Meal>
          <Meal>
            Bode Shake
            <Shake />
          </Meal>
          <Meal>Bode Burn with Mozzarella and Tomato Slices</Meal>
          <Supper>Turkey Melt</Supper>
          <Carbs>LOW-CARB</Carbs>
        </DayContainer>
        <DayContainer inactive>
          <DayNumber>Day 69</DayNumber>
          <ShakeBreakfast>
            Bode Shake
            <Shake />
          </ShakeBreakfast>
          <Meal>Grilled Steak (HC)</Meal>
          <Meal>
            Bode Shake
            <Shake />
          </Meal>
          <Meal>
            Bode Burn and Whole-Wheat English Muffin with Butter Spray
          </Meal>
          <Supper>Garlic Lime Chicken (HC)</Supper>
          <Carbs>HIGH-CARB</Carbs>
        </DayContainer>
        <DayContainer inactive>
          <DayNumber>Day 70</DayNumber>
          Guilt Free Day!
          <Print>
            <FontAwesomeIcon icon={faPrint} color="#7a7e7e" />
            Print
          </Print>
        </DayContainer>
      </TimeAndMeal>
      <Workout>
        <WorkoutText>
          Workout
          <FontAwesomeIcon icon={faChevronRight} color="#7a7e7e" />
        </WorkoutText>
        <WorkoutIcon>
          <FontAwesomeIcon icon={faDumbbell} color="orange" />
          <FontAwesomeIcon icon={faCheckCircle} color="orange" />
        </WorkoutIcon>
        <WorkoutIcon>
          <FontAwesomeIcon icon={faDumbbell} color="orange" />
          <FontAwesomeIcon icon={faCheckCircle} color="orange" />
        </WorkoutIcon>
        <WorkoutIcon>
          <FontAwesomeIcon icon={faDumbbell} color="#7a7e7e" />
        </WorkoutIcon>
        <WorkoutIcon>
          <FontAwesomeIcon icon={faDumbbell} color="#7a7e7e" />
        </WorkoutIcon>
        <WorkoutIcon>
          <FontAwesomeIcon icon={faDumbbell} color="#7a7e7e" />
        </WorkoutIcon>
        <WorkoutIcon>
          <FontAwesomeIcon icon={faDumbbell} color="#7a7e7e" />
        </WorkoutIcon>
      </Workout>
    </MealPlan>
  );
}

export default Plan;
