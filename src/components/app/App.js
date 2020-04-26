import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import Login from "../routes/login";
import Dasboard from "../routes/dashboard";
import Recover from "../routes/recover";
import ContactUs from "../routes/contact"
import FirstTimer from "../routes/first-timer"
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Helmet>
                  <title>Glory Plus Admin</title>
                </Helmet>
                <Login />
              </>
            )}
          />
          <Route path="/dashboard" component={Dasboard} />
          <Route path="/recover" component={Recover} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/first-timer" component={FirstTimer} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
