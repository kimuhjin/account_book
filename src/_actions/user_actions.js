import { USER_INFO } from "./types";

export function UserInfo(status) {
  const getUserData = JSON.parse(window.localStorage.getItem("UserValue"));
  return {
    type: USER_INFO,
    payload: getUserData,
  };
}
