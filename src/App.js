import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import CalendarPage from "./components/CalendarPage";
import LoginForm from "./components/LoginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
