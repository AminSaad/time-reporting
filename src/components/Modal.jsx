import React from "react";
import { Button, Modal as BSMobal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Joi from "@hapi/joi";
import _ from "lodash";
import Form from "./common/Form";

class Modal extends Form {
  state = {
    data: {
      date: "",
      startHours: "",
      endHour: "",
      startMinutes: "",
      endMinutes: "",
      activity: ""
    },
    errors: {}
  };

  schema = Joi.object({
    _id: Joi.string(),
    date: Joi.date()
      .required()
      .label("Datum"),
    startHours: Joi.number()
      .required()
      .label("Start timme"),
    endHour: Joi.number()
      .required()
      .label("Slut timme"),
    startMinutes: Joi.number()
      .required()
      .label("Start minut"),
    endMinutes: Joi.number()
      .required()
      .label("Slut minut"),
    activity: Joi.string()
      .required()
      .label("Aktivitet")
  });

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
    const { show, onClose, onSave, onDelete } = this.props;
    return (
      <BSMobal show={show} onHide={onClose}>
        <BSMobal.Header closeButton>
          <BSMobal.Title>Lägg till pass</BSMobal.Title>
        </BSMobal.Header>
        <BSMobal.Body>
          <form>
            {this.renderSelect(
              "activity",
              "Aktivitet:",
              this.activities,
              "Välj..."
            )}
            <div className="form-row">
              <div className="form-group col-md-4">
                {this.renderSelect("startHours", "Från:", this.hours, "tim...")}
              </div>
              <div className="form-group col-md-4">
                {this.renderSelect("startMinutes", ".", this.minutes, "min...")}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                {this.renderSelect("endHour", "Till:", this.hours, "tim...")}
              </div>
              <div className="form-group col-md-4">
                {this.renderSelect("endMinutes", ".", this.minutes, "min...")}
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
          <Button variant="primary" onClick={() => onSave(this.state.data)}>
            Bekräfta
          </Button>
        </BSMobal.Footer>
      </BSMobal>
    );
  }
}

export default Modal;
