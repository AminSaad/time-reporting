import React, { Component } from "react";
import Modal from "./components/Modal";
import Calendar from "./components/Calendar";
import "./App.css";

class App extends Component {
  state = {
    show: false
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSave = () => {
    console.log("Saved");
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Modal
          onClose={this.handleClose}
          onClick={this.handleShow}
          onSave={this.handleSave}
          show={this.state.show}
        ></Modal>
        <div className="App">
          <header>
            <div id="logo">
              <span className="icon">date_range</span>
            </div>
          </header>
          <main>
            <Calendar onClick={this.handleShow} />
          </main>
        </div>
      </>
    );
  }
}

export default App;
