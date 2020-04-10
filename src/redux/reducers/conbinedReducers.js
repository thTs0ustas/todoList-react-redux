import { combineReducers } from "redux";
import { visibilityFilter, todos } from "./reducers";

export const todoApp = combineReducers({
  visibilityFilter,
  todos,
});
