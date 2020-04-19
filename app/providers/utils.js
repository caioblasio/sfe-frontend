import request, { ResponseError } from "utils/request";

function* callApi(url, method, body, onSuccess, onError = () => {}) {
  let response;

  try {
    let requestObj = {
      method,
    };

    if (body) {
      requestObj = { ...requestObj, body };
    }

    response = yield request(url, requestObj);
  } catch (err) {
    if (!(err instanceof ResponseError)) {
      console.error(err.message);
      return;
    }

    yield onError(err);
    return;
  }

  if (onSuccess) {
    yield onSuccess(response);
  }
}

export function* callApiData(url, method, body, onSuccess, onError) {
  yield callApi(
    url,
    method,
    body,
    function* handleSuccess(response) {
      if (onSuccess) {
        const data = yield response
          .text()
          .then((text) => (text ? JSON.parse(text) : undefined));

        yield onSuccess(data);
      }
    },
    onError
  );
}
