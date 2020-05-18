import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = ({ extractionData }) => extractionData || initialState;

const getPoints = () =>
  createSelector(selectState, (state) => state.get("points").toJS());

export default { getPoints };
