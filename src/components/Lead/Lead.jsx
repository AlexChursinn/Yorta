import React from "react";
import s from "./Lead.module.css"; 

const Lead = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Оплачивай заказы не выходя из дома</h1>
      <h2 className={s.subtitle}>Плати банковской картой или QR-кодом</h2>
    </div>
  );
};

export default Lead;
