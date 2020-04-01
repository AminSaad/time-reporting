import React, { Component } from "react";
import Modal from "./Modal";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";
import {
  deleteTimeReport,
  saveTimeReport,
  getTimeReports
} from "../services/fakeTimeReportService";

class CalendarPage extends Component {
  state = {
    show: false,
    selectedDate: new Date()
  };

  handleDateSelect = date => this.setState({ selectedDate: date });
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSave = timeReport => {
    saveTimeReport(timeReport);
    console.log("Saved", getTimeReports());
    this.setState({ show: false });
  };
  handleDelete = id => {
    deleteTimeReport(id);
    console.log("Deleted");
  };

  render() {
    return (
      <div>
        <Link
          style={{ margin: "5px" }}
          className="btn btn-primary"
          to="/register"
        >
          Registrera
        </Link>
        <p>Tillfällig registrera knapp</p>
        <Modal
          onClose={this.handleClose}
          onClick={this.handleShow}
          onSave={this.handleSave}
          onDelete={this.handleDelete}
          show={this.state.show}
          selectedDate={this.state.selectedDate}
        ></Modal>
        <div className="App">
          <main>
            <Calendar
              timeReports={this.state.timeReports}
              onClick={this.handleShow}
              onDateSelect={this.handleDateSelect}
              selectedDate={this.state.selectedDate}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default CalendarPage;
