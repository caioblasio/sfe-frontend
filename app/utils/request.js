import axios from "axios";
export class ResponseError extends Error {
  constructor(response) {
    super(`${response.status} - ${response.statusText}`);
    this.response = response;
  }
}

export default async (url, options = {}, data = {}) => {
  const response = await axios({ ...options, url, data });

  if (response.status !== 200) {
    throw new ResponseError(response);
  }

  return response;
};
