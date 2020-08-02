import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import { history } from "./_helpers";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: "top right",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router forceRefresh={true} history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <AlertProvider template={AlertTemplate} {...options}>
            <Routes />
          </AlertProvider>
        </PersistGate>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
