import {
  CHANGE_VALUES,
  ADD_MODEL,
  CHANGE_CALCULATION_VALUES,
  RESET_VALUES,
} from "./constants";

function changeValues(data = {}) {
  return {
    type: CHANGE_VALUES,
    payload: data,
  };
}

function addModel(model = []) {
  return {
    type: ADD_MODEL,
    payload: model,
  };
}

function changeCalculationValues(data = {}) {
  return {
    type: CHANGE_CALCULATION_VALUES,
    payload: data,
  };
}

function resetValues() {
  return {
    type: RESET_VALUES,
  };
}

export default {
  changeValues,
  addModel,
  changeCalculationValues,
  resetValues,
};
