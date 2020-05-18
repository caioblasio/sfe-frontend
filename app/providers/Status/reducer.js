import { fromJS } from "immutable";
import { SET } from "./constants";

export const initialState = fromJS({});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET:
      return state.set(payload.name, payload.status);
    default:
      return state;
  }
};

export default reducer;
