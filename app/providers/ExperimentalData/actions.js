import {
  CHANGE_VALUES,
  ADD_MODEL,
  CHANGE_CALCULATION_VALUES,
  RESET_VALUES,
  RESET_STATE,
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

function resetState() {
  return {
    type: RESET_STATE,
  };
}

export default {
  changeValues,
  addModel,
  changeCalculationValues,
  resetValues,
  resetState,
};
