import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { todoApp } from "./redux/reducers/conbinedReducers";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: todoApp,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
