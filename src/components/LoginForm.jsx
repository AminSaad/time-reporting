import React from "react";
import { Link } from "react-router-dom";
import Joi from "@hapi/joi";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(3).required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit() {
    this.props.history.push("/calendar");
    // try {
    //   const { state } = this.props.location;

    //   await auth.login(this.state.data);
    //   window.location = state ? state.from.pathname : "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  }

  render() {
    return (
      <main className="container">
        <h1 style={{ margin: "10px" }}>Logga in</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Användarnamn")}
          {this.renderInput("password", "Lösenord", "password")}
          {this.renderButton("Logga in")}
          <Link to="/register" className="btn btn-primary m-2 btn-sm">
            Registrera
          </Link>
        </form>
      </main>
    );
  }
}

export default LoginForm;
