import React from "react";
import errorMessageStyles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message, red }) => {
  return (
    <section
      className={`${errorMessageStyles.error} ${
        red ? errorMessageStyles.red : ""
      }`}
    >
      {message}
    </section>
  );
};

export default ErrorMessage;
