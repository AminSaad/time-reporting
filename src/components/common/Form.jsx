import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "./Input";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate() {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  }

  validateInput({ name, value }) {
    const obj = { [name]: value };
    const schema = Joi.object({ [name]: this.schema.extract(name) });
    const { error } = schema.validate(obj);

    return error ? error.message : null;
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateInput(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary m-2 btn-sm">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options, placeholder = "") {
    const { data, errors } = this.state;
    return (
      <Select
        label={label}
        name={name}
        options={options}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
      />
    );
  }
}

export default Form;
