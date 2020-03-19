import React, { Component } from "react";
import Modal from "./components/Modal";
import { Button } from "react-bootstrap";

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
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>
        <Modal
          onClose={this.handleClose}
          onClick={this.handleShow}
          show={this.state.show}
        ></Modal>
      </>
    );
  }
}

export default App;
