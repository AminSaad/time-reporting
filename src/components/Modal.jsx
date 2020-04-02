import React from "react";
import { Button, Modal as BSMobal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Joi from "@hapi/joi";
import _ from "lodash";
import { format } from "date-fns";
import { sv } from "date-fns/esm/locale";
import Form from "./common/Form";
import { getTimeReports } from "../services/fakeTimeReportService";

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

  getTimeArray(start, end) {
    return _.range(start, end + 1).map(time => {
      const name = time < 10 ? "0" + time : time;
      return { _id: time, name };
    });
  }

  render() {
    const { show, onClose, onSave, onDelete, selectedDate } = this.props;
    console.log(getTimeReports());
    return (
      <BSMobal show={show} onHide={onClose}>
        <BSMobal.Header closeButton>
          <BSMobal.Title>
            Lägg till pass {format(selectedDate, "do MMMM", { locale: sv })}
          </BSMobal.Title>
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
                {this.renderSelect(
                  "startHours",
                  "Från:",
                  this.getTimeArray(0, 23),
                  "tim..."
                )}
              </div>
              <div className="form-group col-md-4">
                {this.renderSelect(
                  "startMinutes",
                  ".",
                  this.getTimeArray(0, 59),
                  "min..."
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                {this.renderSelect(
                  "endHour",
                  "Till:",
                  this.getTimeArray(0, 23),
                  "tim..."
                )}
              </div>
              <div className="form-group col-md-4">
                {this.renderSelect(
                  "endMinutes",
                  ".",
                  this.getTimeArray(0, 59),
                  "min..."
                )}
              </div>
            </div>
          </form>
        </BSMobal.Body>
        <BSMobal.Footer>
          <Button
            variant="danger"
            onClick={() => onDelete(format(selectedDate, "yyyy-MM-dd"))}
          >
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
