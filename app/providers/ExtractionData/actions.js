import { ADD_POINTS } from "./constants";

function addPoints(points = []) {
  return {
    type: ADD_POINTS,
    payload: points,
  };
}

export default {
  addPoints,
};
