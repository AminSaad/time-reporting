import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
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

  hours = [
    {
      _id: 1,
      name: "13"
    },
    {
      _id: 2,
      name: "19"
    },
    {
      _id: 3,
      name: "22"
    }
  ];

  render() {
    const { show, onClose, onSave, onDelete } = this.props;

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
                <label className="form-check-label" for="gridCheck">
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
                  options={this.hours}
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
                  options={this.hours}
                />
              </div>
            </div>
          </form>
        </BSMobal.Body>
        <BSMobal.Footer>
          <Button variant="danger" onClick={() => onDelete(this.id)}>
            Ta bort
          </Button>
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
