import { combineReducers } from "redux";
import User from "./user_reducer";
import Goal from "./goal_reducer";

const rootReducer = combineReducers({
  User,
  Goal,
});

export default rootReducer;
