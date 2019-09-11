import React, { Component } from "react";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <div
          id="forget-modal"
          className="modal fade"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-sm modal-dialog modal-dialog-top">
            <div className="modal-content">
              <div className="">
                <a className="forget-card" href="javascript:void(0)">
                  <div className="card-block clearfix">
                    <div className="text-center">
                      <p
                        style="padding-bottom: 10px; font-weight: bold;"
                        className="h3 text-realdrip m-t-sm m-b-0"
                      >
                        ***
                      </p>
                      <p className="h6 dashboard-color text-muted m-t-0 m-b-xs">
                        Password Recovery
                      </p>
                    </div>

                    <form
                      className="form-horizontal m-t-xs"
                      action="#"
                      method="post"
                      onsubmit="return false;"
                    >
                      <div className=" text-center form-group">
                        <label className="modal-label" for="center-email">
                          Medical Center Email
                        </label>

                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            type="email"
                            id="centerEmail"
                            name="centerEmail"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className=" text-center form-group m-b-0">
                        <div className="col-sm-12">
                          <button>
                            className="btn form-btn" type="submit">Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="recovery-modal"
          className="modal fade"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-sm modal-dialog modal-dialog-top">
            <div className="modal-content">
              <div className="">
                <a className="forget-card" href="javascript:void(0)">
                  <div className="card-block clearfix">
                    <div className="text-center">
                      <p
                        style="padding-bottom: 10px; font-weight: bold;"
                        className="h3 text-realdrip m-t-sm m-b-0"
                      >
                        ***
                      </p>
                      <p className="h6 dashboard-color text-muted m-t-0 m-b-xs">
                        Password Recovery
                      </p>
                    </div>

                    <form
                      className="form-horizontal m-t-xs"
                      action="#"
                      method="post"
                      onsubmit="return false;"
                    >
                      <div className=" text-center form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            type="email"
                            id="centerEmail"
                            name="centerEmail"
                            placeholder="Password recovery email sent"
                            readonly
                          />
                        </div>
                      </div>

                      <div className=" text-center form-group m-b-0">
                        <div className="col-sm-12">
                          <button className="btn form-btn" type="submit">
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="app-ui-mask-modal"></div>
      </div>
    );
  }
}
