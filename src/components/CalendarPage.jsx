import React, { Component } from "react";
import Modal from "./Modal";
import Calendar from "./Calendar";
import { toast } from "react-toastify";
import {
  deleteTimeReport,
  saveTimeReport,
  getTimeReports,
} from "../services/timeReportService";

class CalendarPage extends Component {
  state = {
    show: false,
    selectedTimeReport: null,
    timeReports: [],
  };

  async componentDidMount() {
    const { data: timeReports } = await getTimeReports();
    this.setState({ timeReports });
  }

  handleDateSelect = (timeReport) =>
    this.setState({ selectedTimeReport: timeReport });

  handleClose = () => this.setState({ show: false, selectedTimeReport: null });

  handleShow = () => this.setState({ show: true });

  handleSave = (timeReport) => {
    saveTimeReport(timeReport);
    this.setState({ show: false });
  };

  handleDelete = async (timeReport) => {
    const originalTimeReports = this.state.timeReports;
    const timeReports = originalTimeReports.filter(
      (tr) => tr._id !== timeReport._id
    );
    this.setState({ timeReports });

    try {
      await deleteTimeReport(timeReport._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast("Denna rapport har redan tagits bort");
      this.setState({ timeReports: originalTimeReports });
    }
  };

  render() {
    console.log("Calendar PAGE", this.state.selectedTimeReport);
    return (
      <>
        {this.state.show && (
          <Modal
            onClose={this.handleClose}
            onClick={this.handleShow}
            onSave={this.handleSave}
            onDelete={this.handleDelete}
            show={this.state.show}
            timeReport={this.state.selectedTimeReport}
          ></Modal>
        )}
        <div className="App">
          <main>
            <Calendar
              timeReports={this.state.timeReports}
              onClick={this.handleShow}
              onDateSelect={this.handleDateSelect}
              selectedTimeReport={this.state.selectedTimeReport}
            />
          </main>
        </div>
      </>
    );
  }
}

export default CalendarPage;
