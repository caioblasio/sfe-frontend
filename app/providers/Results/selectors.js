import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = ({ results }) => results || initialState;

const getResults = () =>
  createSelector(selectState, (resultsState) => resultsState.toJS());

export default { getResults };
