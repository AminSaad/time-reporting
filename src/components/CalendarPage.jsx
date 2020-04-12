import React, { Component } from "react";
import Modal from "./Modal";
import Calendar from "./Calendar";
import { toast } from "react-toastify";
import {
  deleteTimeReport,
  saveTimeReport,
  getTimeReports,
  getActivities,
} from "../services/timeReportService";

class CalendarPage extends Component {
  state = {
    show: false,
    selectedTimeReport: null,
    selectedDate: null,
    timeReports: [],
    activities: [],
  };

  async componentDidMount() {
    const { data: timeReports } = await getTimeReports();
    const { data: activities } = await getActivities();

    this.setState({ timeReports, activities });
  }

  handleDateSelect = (date) => this.setState({ selectedDate: date });

  handleTimeReportSelect = (timeReport) =>
    this.setState({ selectedTimeReport: timeReport });

  handleClose = () => this.setState({ show: false, selectedTimeReport: null });

  handleShow = () => this.setState({ show: true });

  handleSave = async (timeReport) => {
    try {
      await saveTimeReport(timeReport);
      toast.success("Raporten har sparats");
      this.setState({ show: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 400)
        toast.error("Rapporten sparades ej");
    }
  };

  handleDelete = async (timeReport) => {
    const originalTimeReports = this.state.timeReports;
    const timeReports = originalTimeReports.filter(
      (tr) => tr._id !== timeReport._id
    );

    this.setState({ timeReports, show: false });

    try {
      await deleteTimeReport(timeReport);
      toast.success("Raporten har tagits bort");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("Denna rapport har redan tagits bort");
      this.setState({ timeReports: originalTimeReports });
    }
  };

  render() {
    return (
      <>
        {this.state.show && (
          <Modal
            show={this.state.show}
            onSave={this.handleSave}
            onClick={this.handleShow}
            onClose={this.handleClose}
            onDelete={this.handleDelete}
            activities={this.state.activities}
            selectedDate={this.state.selectedDate}
            timeReport={this.state.selectedTimeReport}
          ></Modal>
        )}
        <div className="App">
          <main>
            <Calendar
              timeReports={this.state.timeReports}
              onClick={this.handleShow}
              onDateSelect={this.handleDateSelect}
              onTimeReportSelect={this.handleTimeReportSelect}
              selectedTimeReport={this.state.selectedTimeReport}
            />
          </main>
        </div>
      </>
    );
  }
}

export default CalendarPage;
