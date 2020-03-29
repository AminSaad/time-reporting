import React, { Component } from "react";
import Modal from "./components/Modal";
import Calendar from "./components/Calendar";
import {
  deleteTimeReport,
  saveTimeReport,
  getTimeReports
} from "./services/fakeTimeReportService";
import "./App.css";

class App extends Component {
  state = {
    show: false
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSave = timeReport => {
    saveTimeReport(timeReport);
    this.setState({ show: false });
  };
  handleDelete = id => {
    deleteTimeReport(id);
  };

  render() {
    return (
      <>
        <Modal
          onClose={this.handleClose}
          onClick={this.handleShow}
          onSave={this.handleSave}
          onDelete={this.handleDelete}
          show={this.state.show}
        ></Modal>
        <div className="App">
          <main>
            <Calendar onClick={this.handleShow} />
          </main>
        </div>
      </>
    );
  }
}

export default App;
