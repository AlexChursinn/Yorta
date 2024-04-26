import React from "react";
import s from "./Preloader.module.css";
import preloader from "./preloader.svg";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
