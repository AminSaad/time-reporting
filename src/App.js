import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import CalendarPage from "./components/CalendarPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/" component={CalendarPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
