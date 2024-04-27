// OrderInfo.js

import React from "react";
import styles from "./OrderInfo.module.css"; // Импорт модульных стилей CSS

const OrderInfo = ({ orderNumber, accountNumber }) => {
  return (
    <div className={styles.orderInfo}>
      <span>Заказ </span>
      <span className={styles.orderNumber}>#{orderNumber}</span>
      <span> Аккаунт </span>
      <span className={styles.account}>{accountNumber}</span>
    </div>
  );
};

export default OrderInfo;
