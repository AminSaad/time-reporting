import React from "react";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <>
      <div className="form-group m-2">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} className="form-control" />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
