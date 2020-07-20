import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./Redux/store";
import history from "./Components/history";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router forceRefresh={true} history={history}>
        <Routes />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
