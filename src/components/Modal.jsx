import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import { Button, Modal as BSMobal } from "react-bootstrap";
import Select from "./common/Select";

class Modal extends Component {
  state = {};

  activities = [
    {
      _id: 1,
      name: "Arbete"
    },
    {
      _id: 2,
      name: "Sjukdom"
    },
    {
      _id: 3,
      name: "VAB"
    },
    {
      _id: 4,
      name: "Ledighet"
    }
  ];

  hours = _.range(0, 25).map(hours => ({ _id: hours, name: hours }));
  minutes = _.range(0, 60).map(minutes => ({ _id: minutes, name: minutes }));

  render() {
    const { show, onClose, onSave } = this.props;

    return (
      <BSMobal show={show} onHide={onClose}>
        <BSMobal.Header closeButton>
          <BSMobal.Title>Lägg till pass</BSMobal.Title>
        </BSMobal.Header>
        <BSMobal.Body>
          <form>
            <Select
              name="activity"
              label="Aktivitet:"
              placeholder="Välj..."
              options={this.activities}
            />
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Heldag
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <Select
                  name="hours"
                  label="Från:"
                  placeholder="tim"
                  options={this.hours}
                />
              </div>
              <div className="form-group col-md-4">
                <Select
                  name="hours"
                  label="."
                  placeholder="min"
                  options={this.minutes}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <Select
                  name="hours"
                  label="Till:"
                  placeholder="tim"
                  options={this.hours}
                />
              </div>
              <div className="form-group col-md-4">
                <Select
                  name="hours"
                  label="."
                  placeholder="min"
                  options={this.minutes}
                />
              </div>
            </div>
          </form>
        </BSMobal.Body>
        <BSMobal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Stäng
          </Button>
          <Button variant="primary" onClick={onSave}>
            Bekräfta
          </Button>
        </BSMobal.Footer>
      </BSMobal>
    );
  }
}

export default Modal;
