import {
  CHANGE_VALUES,
  ADD_MODEL,
  CHANGE_CALCULATION_VALUES,
} from "./constants";

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

export function changeCalculationValues(data = {}) {
  return {
    type: CHANGE_CALCULATION_VALUES,
    payload: data,
  };
}
