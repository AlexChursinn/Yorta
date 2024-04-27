import React from "react";
import s from "./PaymentStatus.module.css";
import Button from "../Button/Button";

const PaymentStatus = ({ amount, success }) => {
  return (
    <div className={s.container}>
      <h2 className={success ? s.successTitle : s.errorTitle}>
        {success ? "Оплачено" : "Ошибка оплаты"}
      </h2>
      <p className={s.amount}>₽ {amount} </p>
      <p className={s.subtitle}>
        {success
          ? "Проверьте статус оплаты в вашем личном кабинете"
          : "Платеж не проведен. Повторите оплату или обратитесь в техническую поддержку"}
      </p>
      <Button title="На главную" type={success ? "success" : "error"} />
    </div>
  );
};

export default PaymentStatus;
