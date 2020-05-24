import React from "react";

const FormError = ({ touched, message }) => {
  if (!touched) {
    return (
      <label id="name-error" className="error">
        {""}
      </label>
    );
  }
  if (message) {
    return (
      <label id="name-error" className="error">
        {message}
      </label>
    );
  }
  return (
    <label id="name-success" className="sucess">
      all good
    </label>
  );
};

export default FormError;
