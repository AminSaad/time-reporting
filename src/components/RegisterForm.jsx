import React from "react";
import Joi from "@hapi/joi";
import Form from "./common/Form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
      title: ""
    },
    errors: {}
  };

  schema = Joi.object({
    username: Joi.string()
      .email({ tlds: false })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string().label("Name"),
    title: Joi.string().label("Title")
  });

  doSubmit() {
    console.log("Registrerad");
    // try {
    //   const response = await userService.register(this.state.data);
    //   authServices.loginWithJwt(response.headers["x-auth-token"]);
    //   window.location = "/";
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
      <>
        <h1 style={{ margin: "25px" }}>Skapa ny användare</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Användarnamn")}
          {this.renderInput("password", "Lösenord", "password")}
          {this.renderInput("name", "Namn")}
          {this.renderInput("title", "Titel")}
          {this.renderButton("Registrera")}
        </form>
      </>
    );
  }
}

export default RegisterForm;
