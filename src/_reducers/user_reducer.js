import { USER_INFO } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case USER_INFO:
      return { ...state, UserInfo: action.payload };
    default:
      return state;
  }
}
