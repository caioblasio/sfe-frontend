import { ADD_POINTS } from "./constants";

export function addPoints(points = []) {
  return {
    type: ADD_POINTS,
    payload: points,
  };
}
