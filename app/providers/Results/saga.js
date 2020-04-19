import { takeLatest, put } from "redux-saga/effects";
import { FETCH_RESULTS, apiResultsUrl } from "./constants";
import { fetchResultsSuccess, fetchResultsWaiting } from "./actions";
import { callApiData } from "providers/utils";

export function* fetchResults({ id, data }) {
  yield put(fetchResultsWaiting());
  yield callApiData(apiResultsUrl(), "POST", data, function* onSuccess(data) {
    yield put(fetchResultsSuccess(id, data));
  });
}

function* saga() {
  yield takeLatest(FETCH_RESULTS, fetchResults);
}

export default saga;
