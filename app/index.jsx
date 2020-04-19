import React from "react";
import ReactDOM from "react-dom";
import Main from "components/Main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
