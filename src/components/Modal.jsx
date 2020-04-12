import React from "react";
import { Button, Modal as BSMobal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Joi from "@hapi/joi";
import _ from "lodash";
import { format } from "date-fns";
import { sv } from "date-fns/esm/locale";
import Form from "./common/Form";

class Modal extends Form {
  state = {
    data: {
      date: this.props.selectedDate,
      startHours: "",
      endHour: "",
      startMinutes: "",
      endMinutes: "",
      activityId: "",
    },
    errors: {},
  };

  schema = Joi.object({
    _id: Joi.string(),
    startHours: Joi.number().required().label("Start timme"),
    endHour: Joi.number().required().label("Slut timme"),
    startMinutes: Joi.number().required().label("Start minut"),
    endMinutes: Joi.number().required().label("Slut minut"),
    activityId: Joi.string().required().label("Aktivitet"),
  });

  getTimeArray(start, end) {
    return _.range(start, end + 1).map((time) => {
      const name = time < 10 ? "0" + time : time;
      return { _id: time, name };
    });
  }

  async componentDidMount() {
    const { timeReport } = this.props;
    if (timeReport)
      this.setState({
        data: this.mapToViewModel(timeReport),
      });
  }

  mapToViewModel(timeReport) {
    return {
      startHours: timeReport.startHours,
      endHour: timeReport.endHour,
      startMinutes: timeReport.startMinutes,
      endMinutes: timeReport.endMinutes,
      activityId: timeReport.activity._id,
    };
  }

  render() {
    const {
      show,
      onClose,
      onSave,
      onDelete,
      timeReport,
      selectedDate,
    } = this.props;
    const currentDate = selectedDate
      ? format(new Date(selectedDate), "do MMMM", { locale: sv })
      : "";
    return (
      <BSMobal show={show} onHide={onClose}>
        <BSMobal.Header closeButton>
          <BSMobal.Title>Lägg till pass {currentDate}</BSMobal.Title>
        </BSMobal.Header>
        <BSMobal.Body>
          <form>
            {this.renderSelect(
              "activityId",
              "Aktivitet:",
              this.props.activities,
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
          {timeReport && (
            <Button variant="danger" onClick={() => onDelete(timeReport)}>
              Ta bort
            </Button>
          )}
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
