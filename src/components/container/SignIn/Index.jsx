import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignIn from "./SignIn";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      inputErrors: {
        emailError: null,
        passwordError: null
      }
    };
  }
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default SignIn;
