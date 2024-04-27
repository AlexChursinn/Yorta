import React from "react";
import s from "./OrderInfo.module.css";

const OrderInfo = ({ orderNumber, accountNumber }) => {
  return (
    <div className={s.orderInfo}>
      <p className={s.order}>
        Заказ <span className={s.orderNumber}>#{orderNumber}</span>
      </p>
      <p className={s.account}>
        Аккаунт <span className={s.accountNumber}>{accountNumber}</span>
      </p>
    </div>
  );
};

export default OrderInfo;
