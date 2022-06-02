import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../Reducer/reducer";
// import cors from "cors
let cors = require("cors");

export const store = createStore(
  reducer,
  // applyMiddleware(cors),
  applyMiddleware(thunk)
);
