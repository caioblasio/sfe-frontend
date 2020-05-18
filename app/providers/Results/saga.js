import { takeEvery, all, call, put } from "redux-saga/effects";
import { FETCH_RESULTS, apiResultsUrl } from "./constants";
import { fetchResultsSuccess, fetchResultsWaiting } from "./actions";
import { callApiData } from "providers/utils";

export function* fetchResults({ payload }) {
  const { models, data } = payload;

  console.log(MODELS);

  yield put(fetchResultsWaiting());

  yield all(
    models.map((model) =>
      callApiData(
        apiResultsUrl,
        "POST",
        {
          Model: MODELS[model].option,
        },
        data,
        function* onSuccess(_headers, data) {
          yield put(fetchResultsSuccess(model, data));
        }
      )
    )
  );

  // yield callApiData(apiResultsUrl(), "POST", data, function* onSuccess(data) {
  //   yield put(fetchResultsSuccess(id, data));
  // });
}

function* saga() {
  yield takeEvery(FETCH_RESULTS, fetchResults);
}

export default saga;
