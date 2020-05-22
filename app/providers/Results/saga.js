import { takeEvery, all, put } from "redux-saga/effects";
import { FETCH_RESULTS, apiResultsUrl } from "./constants";
import Actions from "./actions";
import { callApiData } from "providers/utils";

export function* fetchResults({ payload }) {
  const { models, data } = payload;

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
          yield put(Actions.fetchResultsSuccess(model, data));
        },
        null,
        model
      )
    )
  );
}

function* saga() {
  yield takeEvery(FETCH_RESULTS, fetchResults);
}

export default saga;
