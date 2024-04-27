import React from "react";
import s from "./PaymentMethod.module.css";
import mps from "./mps.svg";
import sbp from "./sbp.svg";

const PaymentMethod = ({ kzt, rub }) => {
  return (
    <div className={s.payment}>
      <h2 className={s.title}>Способ оплаты</h2>
      <div className={s.buttonsContainer}>
        <button className={s.button}>
          <img src={mps} alt="Логотим Visa/Mastercard" className={s.logo} />
          <div className={s.details}>
            <span className={s.amountTitle}>{kzt} тенге</span>
            <span className={s.amountSubtitle}>картой банка Казахстан</span>
          </div>
        </button>
        <button className={`${s.button} ${s.buttonRub}`}>
          <img src={sbp} alt="Логотим СБР" className={s.logo} />
          <div className={s.details}>
            <span className={s.amountTitle}>{rub} рублей</span>
            <span className={s.amountSubtitle}>системой быстрых платежей</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
