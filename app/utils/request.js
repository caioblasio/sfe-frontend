export class ResponseError extends Error {
  constructor(response) {
    super(`${response.status} - ${response.statusText}`);
    this.response = response;
  }
}

export default async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new ResponseError(response);
  }

  return response;
};
