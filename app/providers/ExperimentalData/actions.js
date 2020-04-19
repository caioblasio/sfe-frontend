import { CHANGE_VALUES, ADD_MODEL } from "./constants";

export function changeValues(data = {}) {
  return {
    type: CHANGE_VALUES,
    payload: data,
  };
}

export function addModel(model = []) {
  return {
    type: ADD_MODEL,
    payload: model,
  };
}
