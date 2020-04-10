import React from "react";
import { createStore } from "redux";
import { todoApp } from "../src/reducers/conbinedReducers";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from "./actions/actionCreators";
import { VisibilityFilters } from "./helperData/helperData";

const store = createStore(todoApp);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
