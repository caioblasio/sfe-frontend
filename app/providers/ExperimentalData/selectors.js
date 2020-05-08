import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = ({ experimentalData }) => experimentalData || initialState;

const getModels = () =>
  createSelector(selectState, (state) => state.get("models").toJS());

const getValues = () =>
  createSelector(selectState, (state) => state.get("values").toJS());

const getCalculationValues = () =>
  createSelector(selectState, (state) => state.get("calculation").toJS());

export { getModels, getValues, getCalculationValues };
