import React, { Component } from "react";
import Modal from "./Modal";
import Calendar from "./Calendar";
import {
  deleteTimeReport,
  saveTimeReport,
  getTimeReports
} from "../services/fakeTimeReportService";

class CalendarPage extends Component {
  state = {
    show: false,
    selectedDate: null
  };

  handleDateSelect = date => this.setState({ selectedDate: date });

  handleClose = () => this.setState({ show: false, selectedDate: null });

  handleShow = () => this.setState({ show: true });

  handleSave = timeReport => {
    saveTimeReport(timeReport);
    this.setState({ show: false });
  };

  handleDelete = id => deleteTimeReport(id);

  render() {
    return (
      <>
        {this.state.selectedDate && (
          <Modal
            onClose={this.handleClose}
            onClick={this.handleShow}
            onSave={this.handleSave}
            onDelete={this.handleDelete}
            show={this.state.show}
            selectedDate={this.state.selectedDate}
          ></Modal>
        )}
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
      </>
    );
  }
}

export default CalendarPage;
