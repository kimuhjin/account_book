import { GOAL_TITLE, GOAL_INFO } from "./types";

export function GoalTitle(data) {
  return {
    type: GOAL_TITLE,
    payload: data,
  };
}
export function GoalInfo(data) {
  return {
    type: GOAL_INFO,
    payload: data,
  };
}
