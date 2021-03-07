import { fromJS } from "immutable";
import {
  FETCH_RESULTS_SUCCESS,
  RESET_RESULTS,
  FETCH_RESULTS_START,
} from "./constants";

export const initialState = fromJS({});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RESULTS_SUCCESS:
      return state.set(payload.id, fromJS(payload.data));

    case FETCH_RESULTS_START:
      return state.set(payload.id, fromJS({}));

    case RESET_RESULTS:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
