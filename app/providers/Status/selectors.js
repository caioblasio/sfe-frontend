import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = (state) => state.status || initialState;

const getStatus = (name) =>
  createSelector(selectState, (statusState) => statusState.get(name));

const isPending = (name) =>
  createSelector(getStatus(name), (status) => status === "PENDING");

const isSuccess = (name) =>
  createSelector(getStatus(name), (status) => status === "SUCCESS");

const isError = (name) =>
  createSelector(getStatus(name), (status) => status === "ERROR");

const isLoading = () =>
  createSelector(selectState, (statusState) =>
    statusState.some((status) => status === "PENDING")
  );

export default { isPending, isSuccess, isError, isLoading };
