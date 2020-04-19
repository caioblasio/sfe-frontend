import { fromJS } from "immutable";
import {
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE,
  FETCH_RESULTS_WAITING,
  RESET_RESULTS,
} from "./constants";

export const initialState = fromJS({
  isWating: false,
  data: {},
  error: {},
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RESULTS_WAITING:
      return state.set("isWaiting", true);

    case FETCH_RESULTS_SUCCESS:
      return state
        .set("isWaiting", false)
        .setIn(["data", payload.id], fromJS(payload.data));

    case FETCH_RESULTS_FAILURE:
      return state
        .set("isWaiting", false)
        .setIn(["error", payload.id], fromJS(payload.data));

    case RESET_RESULTS:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
