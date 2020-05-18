import { SET } from "./constants";

function set(name, status) {
  return {
    type: SET,
    payload: {
      name,
      status,
    },
  };
}

export default {
  set,
};
