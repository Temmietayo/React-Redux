import React from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import PropTypes from "prop-types";

const Signin = props => (
  <div className="app-ui">
    <div className="app-layout-canvas">
      <div className="app-layout-container">
        <main className="app-layout-content">
          <div className="container-fluid p-y-md">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-6 ">
                  <img
                    className="img img-responsive"
                    src="assets/img/photos/unsplash.jpg"
                  />
                </div>
                <div className="col-sm-6">
                  <div className="card-block login-top ">
                    <form
                      className="form-horizontal m-t-xs"
                      action="#"
                      method="post"
                      onsubmit="return false;"
                    >
                      <a className="login-head">Welcome Back!</a>
                      <h4 className=" form-title">Management Sign In</h4>
                      <p className="form-text">
                        {" "}
                        Don't have a RealDrip management account?{" "}
                        <span className="login-head">Sign Up</span>
                      </p>{" "}
                      <br />
                      <div className="form-group">
                        <label
                          className="col-sm-5 form-label"
                          for="center-email"
                        >
                          Medical Center Email
                        </label>
                        <label
                          className="col-sm-5 form-label"
                          for="center-password"
                        >
                          Password
                          <Link to="/ForgotPassword">
                            <span className=" pull-right pass-forget m-r-sm">
                              Forgot password?
                            </span>
                          </Link>
                        </label>
                        <div className="col-sm-5">
                          <input
                            className="form-control"
                            type="email"
                            id="centerEmail"
                            name="centerEmail"
                            placeholder=""
                            onChange={props.getInput}
                          />
                        </div>
                        <div className="col-sm-5">
                          <input
                            className="form-control"
                            type="password"
                            id="centerPassword"
                            name="centerPassword"
                            placeholder=""
                            onChange={props.getInput}
                          />
                        </div>
                      </div>
                      <div className="form-group m-b-0">
                        <div className="col-xs-8">
                          <button
                            className="btn form-btn"
                            type="submit"
                            disabled={props.loggingUserStarted}
                            onClick={props.login}
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);
View.defaultProps = {
  loggingUserError: "",
  inputErrors: {}
};

/* eslint-disable react/forbid-prop-types */
View.propTypes = {
  loggingUserStarted: PropTypes.bool.isRequired,
  loggingUserError: PropTypes.string,
  inputErrors: PropTypes.object,
  getInput: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default Signin;
