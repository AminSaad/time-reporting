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
              <label htmlFor="Comment" className="col-form-label">
                Kommentar:
              </label>
              <textarea className="form-control" id="comment"></textarea>
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
