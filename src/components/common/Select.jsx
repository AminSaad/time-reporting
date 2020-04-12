import React from "react";

function Select({ name, label, placeholder, options, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" name={name} id={name} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
