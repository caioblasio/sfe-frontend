import {
  FETCH_RESULTS,
  FETCH_RESULTS_WAITING,
  FETCH_RESULTS_FAILURE,
  FETCH_RESULTS_SUCCESS,
} from "./constants";

export function fetchResults(id, data) {
  return {
    type: FETCH_RESULTS,
    payload: {
      id,
      data,
    },
  };
}

export function fetchResultsWaiting() {
  return {
    type: FETCH_RESULTS_WAITING,
  };
}

export function fetchResultsSuccess(id, data) {
  return {
    type: FETCH_RESULTS_SUCCESS,
    payload: {
      id,
      data,
    },
  };
}

export function fetchResultsFailure(message = "") {
  return {
    type: FETCH_RESULTS_FAILURE,
    payload: message,
  };
}

export function resetResults() {
  return {
    type: RESET_RESULTS,
  };
}
