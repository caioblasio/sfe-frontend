import { fromJS } from "immutable";
import {
  CHANGE_VALUES,
  ADD_MODEL,
  CHANGE_CALCULATION_VALUES,
} from "./constants";

export const initialState = fromJS({
  values: {
    aa: "",
    dsolid: "",
    dpa: "",
    msolid: "",
    ep: "",
    dfluid: "",
    qq: "",
    ttcer: "",
    solubility: "",
    viscosity: "",
    dabf: "",
    bb: "",
    eb: "",
    hc: "",
    dc: "",
    temperature: "",
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
        .setIn(["values", "ep"], payload.ep)
        .setIn(["values", "dfluid"], payload.dfluid)
        .setIn(["values", "qq"], payload.qq)
        .setIn(["values", "ttcer"], payload.ttcer)
        .setIn(["values", "solubility"], payload.solubility)
        .setIn(["values", "viscosity"], payload.viscosity)
        .setIn(["values", "dabf"], payload.dabf)
        .setIn(["values", "bb"], payload.bb)
        .setIn(["values", "eb"], payload.eb)
        .setIn(["values", "hc"], payload.hc)
        .setIn(["values", "dc"], payload.dc)
        .setIn(["values", "temperature"], payload.temperature);

    case ADD_MODEL:
      return state.set("models", fromJS(payload));

    case CHANGE_CALCULATION_VALUES:
      return state
        .setIn(["calculation", "maxfun"], payload.maxfun)
        .setIn(["calculation", "nh"], payload.nh)
        .setIn(["calculation", "nt"], payload.nt);

    default:
      return state;
  }
};

export default reducer;
