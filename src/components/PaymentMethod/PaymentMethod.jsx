import React, { useState } from "react";
import s from "./PaymentMethod.module.css";
import mps from "./mps.svg";
import sbp from "./sbp.svg";
import preloader from "./preloader.svg";

const PaymentMethod = ({ paymentMethods }) => {
  const [loadingButtonId, setLoadingButtonId] = useState(null);
  const [errorButtonId, setErrorButtonId] = useState(null); // Состояние для отслеживания ошибок кнопок

  const handleButtonClick = async (method) => {
    if (loadingButtonId !== null) {
      // Если уже идет обработка запроса, выходим из функции
      return;
    }
    setLoadingButtonId(method.id);
    // Имитация отправки запроса с задержкой для теста
    setTimeout(() => {
      setLoadingButtonId(null);
      // Имитация получения ошибки случайным образом (50% вероятность) ДЛЯ ТЕСТА
      if (Math.random() < 0.9) {
        setErrorButtonId(method.id); // Устанавливаем состояние ошибки для текущей кнопки
      } else {
        setErrorButtonId(null); // Сбрасываем состояние ошибки, если запрос обработан успешно
      }
    }, 3000);
  };

  const currencySymbols = {
    RUB: "₽",
    KZT: "₸",
  };

  return (
    <div className={s.payment}>
      <h2 className={s.title}>Способ оплаты</h2>
      <div className={s.buttonsContainer}>
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`${s.button} ${
              method.currency === "RUB" ? s.buttonRub : ""
            } ${
              loadingButtonId === method.id ? s.activeButton : ""
            } ${
              errorButtonId === method.id ? s.errorButton : "" // Добавляем стиль для кнопок с ошибкой после обработки запроса
            } ${
              loadingButtonId !== null ? s.disabledButton : ""
            }`}
            disabled={loadingButtonId !== null}
            onClick={() => {
              // Сбрасываем состояние ошибки для предыдущей кнопки при новом клике
              setErrorButtonId(null);
              handleButtonClick(method);
            }}
          >
            {loadingButtonId === method.id && (
              <div className={s.preloaderContainer}>
                <img
                  src={preloader}
                  alt="preloader"
                  className={s.preloader}
                />
              </div>
            )}
            <img
              src={method.currency === "RUB" ? sbp : mps}
              alt={method.name}
              className={s.logo}
            />
            <div className={s.details}>
              <span className={s.amountTitle}>
                {currencySymbols[method.currency]} {method.amount}
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
