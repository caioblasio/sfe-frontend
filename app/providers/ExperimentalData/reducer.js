import { fromJS } from "immutable";
import {
  CHANGE_VALUES,
  ADD_MODEL,
  CHANGE_CALCULATION_VALUES,
  RESET_VALUES,
} from "./constants";

export const initialState = fromJS({
  values: {
    aa: "",
    dsolid: "",
    dpa: "",
    msolid: "",
    dfluid: "",
    qq: "",
    solubility: "",
    eb: "",
    hc: "",
    dc: "",
  },
  models: [],
  calculation: {
    maxfun: "",
    nh: "",
    nt: "",
  },
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_VALUES:
      return state
        .setIn(["values", "aa"], payload.aa)
        .setIn(["values", "dsolid"], payload.dsolid)
        .setIn(["values", "dpa"], payload.dpa)
        .setIn(["values", "msolid"], payload.msolid)
        .setIn(["values", "dfluid"], payload.dfluid)
        .setIn(["values", "qq"], payload.qq)
        .setIn(["values", "solubility"], payload.solubility)
        .setIn(["values", "eb"], payload.eb)
        .setIn(["values", "hc"], payload.hc)
        .setIn(["values", "dc"], payload.dc);

    case ADD_MODEL:
      return state.set("models", fromJS(payload));

    case CHANGE_CALCULATION_VALUES:
      return state
        .setIn(["calculation", "maxfun"], payload.maxfun)
        .setIn(["calculation", "nh"], payload.nh)
        .setIn(["calculation", "nt"], payload.nt);

    case RESET_VALUES:
      return state
        .setIn(["values", "aa"], "")
        .setIn(["values", "dsolid"], "")
        .setIn(["values", "dpa"], "")
        .setIn(["values", "msolid"], "")
        .setIn(["values", "dfluid"], "")
        .setIn(["values", "qq"], "")
        .setIn(["values", "solubility"], "")
        .setIn(["values", "eb"], "")
        .setIn(["values", "hc"], "")
        .setIn(["values", "dc"], "");

    default:
      return state;
  }
};

export default reducer;
