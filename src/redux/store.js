import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const middlewares = [thunk];
const enhancers = applyMiddleware(...middlewares);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(enhancers));
const persistor = persistStore(store);

export {
  store,
  persistor,
};
