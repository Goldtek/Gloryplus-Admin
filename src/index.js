import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import history from "./Components/history";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'Redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router forceRefresh={true} history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
