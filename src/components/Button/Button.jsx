import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, type = "primary", status = "default", onClick }) => {
  const buttonClass = `${styles.button} ${styles[type]} ${styles[status]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
