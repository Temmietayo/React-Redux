import React from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import { createStore } from "redux";
import ForgotPassword from "./components/container/ForgotPassword/ForgotPassword";
import SignIn from "./components/container/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={SignIn}></Route>
          <Route
            exact
            path="/ForgotPassword"
            component={ForgotPassword}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
