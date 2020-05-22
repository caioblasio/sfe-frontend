const API_ENVIRONMENTS_URL = {
  development: "http://localhost:3002",
  production: "http://ec2-3-15-186-246.us-east-2.compute.amazonaws.com",
};

export const SCOPE = "providers/Results";

export const FETCH_RESULTS = `${SCOPE}/FETCH_RESULTS`;
export const FETCH_RESULTS_SUCCESS = `${SCOPE}/FETCH_RESULTS_SUCCESS`;
export const RESET_RESULTS = `${SCOPE}/RESET_RESULTS`;

export const apiResultsUrl = `${API_ENVIRONMENTS_URL[ENVIRONMENT]}/api/fortran`;
