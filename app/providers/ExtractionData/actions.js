import { ADD_POINTS } from "./constants";

export function addModel(points = []) {
  return {
    type: ADD_POINTS,
    payload: points,
  };
}
