import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';


//the app have two middleware
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );

const persistConfig = {
  key: 'User',
  storage: storage,
  whitelist: ['User'] // which reducer want to store
};
const initialState = {};

const middleware = [logger, thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

const persistor = persistStore(store);

export {
  store,
  persistor,
};

