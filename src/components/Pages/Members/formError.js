import React from "components/custom/Members/node_modules/react";

const FormError = ({ touched, message }) => {
  if (!touched) {
    return <div className="is-valid valid-feedback"></div>;
  }
  if (message) {
    return <div className="is-invalid invalid-feedback">{message}</div>;
  }
  return <div className="is-valid valid-feedback">all good</div>;
};

export default FormError;
