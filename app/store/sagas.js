import { all } from "redux-saga/effects";
import resultsSaga from "providers/Results/saga";

export default function* () {
  yield all([resultsSaga()]);
}
