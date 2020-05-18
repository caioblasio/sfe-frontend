import {
  FETCH_RESULTS,
  FETCH_RESULTS_WAITING,
  FETCH_RESULTS_FAILURE,
  FETCH_RESULTS_SUCCESS,
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

function fetchResultsWaiting() {
  return {
    type: FETCH_RESULTS_WAITING,
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

function fetchResultsFailure(message = "") {
  return {
    type: FETCH_RESULTS_FAILURE,
    payload: message,
  };
}

function resetResults() {
  return {
    type: RESET_RESULTS,
  };
}

export default {
  fetchResults,
  fetchResultsFailure,
  fetchResultsSuccess,
  fetchResultsWaiting,
  resetResults,
};
