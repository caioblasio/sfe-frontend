import { fromJS } from "immutable";
import { ADD_POINTS } from "./constants";

export const initialState = fromJS({
  points: [{}],
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POINTS:
      return state.set("points", fromJS(payload));

    default:
      return state;
  }
};

export default reducer;
