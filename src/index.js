import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor }  from "./redux/store";
// import App from "./components/App";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <BrowserRouter forceRefresh={true}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
