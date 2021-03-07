const API_ENVIRONMENTS_URL = {
  development: "http://localhost:3002",
  production: "http://ec2-3-129-70-128.us-east-2.compute.amazonaws.com",
  productionSecure: "https://api.lapeamathmodels.xyz",
};

export const SCOPE = "providers/Results";

export const FETCH_RESULTS = `${SCOPE}/FETCH_RESULTS`;
export const FETCH_RESULTS_START = `${SCOPE}/FETCH_RESULTS_START`;
export const FETCH_RESULTS_SUCCESS = `${SCOPE}/FETCH_RESULTS_SUCCESS`;
export const RESET_RESULTS = `${SCOPE}/RESET_RESULTS`;

export const apiResultsUrl = `${
  API_ENVIRONMENTS_URL[
    IS_UNICAMP_BUILD === "true" ? "productionSecure" : ENVIRONMENT
  ]
}/api/fortran`;
