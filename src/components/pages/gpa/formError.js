import React from "react";

const formError = ({ touched, messeage }) => {
  if (touched === false) {
    return (
      <label id="name-error" className="error" htmlFor="name">
        This field is required.
      </label>
    );
  }
  if (messeage) {
    return (
      <label id="name-error" className="error" htmlFor="name">
        This field is required.
      </label>
    );
  }
  return (
    <label id="name-success" className="sucess" htmlFor="name">
      This field is required.
    </label>
  );
};

export default formError;
