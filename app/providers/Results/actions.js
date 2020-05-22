import {
  FETCH_RESULTS,
  FETCH_RESULTS_SUCCESS,
  RESET_RESULTS,
} from "./constants";

function fetchResults(models, data) {
  return {
    type: FETCH_RESULTS,
    payload: {
      models,
      data,
    },
  };
}

function fetchResultsSuccess(id, data) {
  return {
    type: FETCH_RESULTS_SUCCESS,
    payload: {
      id,
      data,
    },
  };
}

function resetResults() {
  return {
    type: RESET_RESULTS,
  };
}

export default {
  fetchResults,
  fetchResultsSuccess,
  resetResults,
};
