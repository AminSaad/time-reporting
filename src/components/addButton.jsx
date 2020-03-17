import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

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

        <div
          className="modal fade"
          id="timeModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Lägg till pass</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="Activity" className="col-form-label">
                      Aktivitet:
                    </label>
                    <select className="form-control" id="activity" label="Välj">
                      <option selected>Välj...</option>
                      <option value="1">Arbete</option>
                      <option value="2">Sjukdom</option>
                      <option value="3">Ledighet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="Comment" className="col-form-label">
                      Kommentar:
                    </label>
                    <textarea className="form-control" id="comment"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Stäng
                </button>
                <button type="button" className="btn btn-primary">
                  Bekräfta
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default addButton;
