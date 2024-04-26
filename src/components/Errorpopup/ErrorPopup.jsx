import React from "react";
import s from "./ErrorPopup.module.css";

const ErrorPopup = ({ errorMessage }) => {
  return <div className={s.popup}>{errorMessage}</div>;
};

export default ErrorPopup;
