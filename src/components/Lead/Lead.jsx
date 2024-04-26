import React from "react";
import s from "./Lead.module.css"; 

const Lead = () => {
  return (
    <div className={s.leadContainer}>
      <h1 className={s.leadTitle}>Оплачивай заказы не выходя из дома</h1>
      <h2 className={s.leadSubtitle}>Плати банковской картой или QR-кодом</h2>
    </div>
  );
};

export default Lead;
