import { ADD_POINTS, RESET_STATE } from "./constants";

function addPoints(points = []) {
  return {
    type: ADD_POINTS,
    payload: points,
  };
}

function resetState() {
  return {
    type: RESET_STATE,
  };
}

export default {
  addPoints,
  resetState,
};
