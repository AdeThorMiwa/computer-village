import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleWares = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWares))
);

export default store;
