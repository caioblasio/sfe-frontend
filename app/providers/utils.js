import request, { ResponseError } from "utils/request";

function* callApi(
  url,
  method,
  reqHeaders,
  body,
  onSuccess,
  onError = () => {}
) {
  let response;

  try {
    let requestObj = {
      method,
      headers: reqHeaders,
    };

    if (body) {
      requestObj = { ...requestObj, body };
    }

    console.log("requestObj", requestObj);

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

export function* callApiData(
  url,
  method,
  reqHeaders,
  body,
  onSuccess,
  onError
) {
  yield callApi(
    url,
    method,
    { ...reqHeaders, "Content-Type": "application/json" },
    JSON.stringify(body),
    function* handleSuccess(response) {
      const { headers } = response;
      if (onSuccess) {
        const data = yield response
          .text()
          .then((text) => (text ? JSON.parse(text) : undefined));

        yield onSuccess(headers, data);
      }
    },
    onError
  );
}
