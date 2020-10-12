import { GOAL_TITLE, GOAL_INFO, GOAL_TEMPIMAGE } from "./types";

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

export function GoalTempImage(data) {
  return {
    type: GOAL_TEMPIMAGE,
    payload: data,
  };
}
