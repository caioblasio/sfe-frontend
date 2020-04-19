import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = ({ experimentalData }) => experimentalData || initialState;

const getModels = () =>
  createSelector(selectState, (state) => state.get("models").toJS());

export { getModels };
