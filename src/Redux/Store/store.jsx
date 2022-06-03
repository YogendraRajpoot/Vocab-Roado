import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../Reducer/reducer";

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
