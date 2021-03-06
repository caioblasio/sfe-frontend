import { fromJS } from "immutable";
import { ADD_POINTS, RESET_STATE } from "./constants";

export const initialState = fromJS({
  points: [{}],
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POINTS:
      return state.set("points", fromJS(payload));

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
