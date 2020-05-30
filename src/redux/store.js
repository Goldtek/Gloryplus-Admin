import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
//the app have two middleware
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );
const initialState = {};

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
