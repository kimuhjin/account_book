import { GOAL_INFO, GOAL_TITLE } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case GOAL_TITLE:
      return { ...state, GoalTitle: action.payload };
    case GOAL_INFO:
      return { ...state, GoalInfo: action.payload };
    default:
      return state;
  }
}
