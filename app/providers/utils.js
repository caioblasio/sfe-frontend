import request, { ResponseError } from "utils/request";
import { put } from "redux-saga/effects";
import { StatusActions } from "providers";

function* callApi(
  url,
  method,
  reqHeaders,
  body,
  onSuccess,
  onError = () => {},
  statuId = url
) {
  let response;

  try {
    let requestObj = {
      method,
      headers: reqHeaders,
    };

    // if (body) {
    //   requestObj = { ...requestObj, body };
    // }

    yield put(StatusActions.set(statuId, "PENDING"));

    response = yield request(url, requestObj, body);

    if (onSuccess) {
      yield onSuccess(response);
    }
  } catch (err) {
    console.log(err);
    yield put(StatusActions.set(statuId, "ERROR"));
    if (!(err instanceof ResponseError)) {
      console.error(err.message);
      return;
    }

    yield onError(err);
    return;
  }

  yield put(StatusActions.set(statuId, "SUCCESS"));
}

export function* callApiData(
  url,
  method,
  reqHeaders,
  body,
  onSuccess,
  onError,
  statusId
) {
  yield callApi(
    url,
    method,
    { ...reqHeaders, "Content-Type": "application/json" },
    //JSON.stringify(body),
    body,
    function* handleSuccess(response) {
      const { headers } = response;
      if (onSuccess) {
        // const data = yield response
        //   .text()
        //   .then((text) => (text ? JSON.parse(text) : undefined));
        const { data } = response;

        yield onSuccess(headers, data);
      }
    },
    onError,
    statusId
  );
}
