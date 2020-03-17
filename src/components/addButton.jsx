import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class addButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary m-2"
          data-toggle="modal"
          data-target="#timeModal"
        >
          +
        </button>

        <div className="modal" id="timeModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Please confirm!</h2>
                <button type="button" className="close">
                  <span>&times;</span>
                </button>
                <div className="modal-body">
                  <p>This is the modal body</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default addButton;
