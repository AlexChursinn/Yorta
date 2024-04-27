import React from "react";
import s from "./PaymentMethod.module.css";
import mps from "./mps.svg";
import sbp from "./sbp.svg";

const PaymentMethod = ({ paymentMethods }) => {
  return (
    <div className={s.payment}>
      <h2 className={s.title}>Способ оплаты</h2>
      <div className={s.buttonsContainer}>
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`${s.button} ${
              method.currency === "RUB" ? s.buttonRub : ""
            }`}
          >
            <img
              src={method.currency === "RUB" ? sbp : mps}
              alt={method.name}
              className={s.logo}
            />
            <div className={s.details}>
              <span className={s.amountTitle}>
                {method.amount} {method.currency === "RUB" ? "рублей" : "тенге"}
              </span>
              <span className={s.amountSubtitle}>{method.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
