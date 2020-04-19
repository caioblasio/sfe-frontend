import React from "react";
import ReactDOM from "react-dom";
import Main from "components/Main";
import { Provider } from "react-redux";
import configureStore from "store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
