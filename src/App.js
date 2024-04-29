import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainImage from "./components/MainImage/MainImage";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import Lead from "./components/Lead/Lead";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";
import ErrorPopup from "./components/Errorpopup/ErrorPopup";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";

function App() {
  const paymentMethods = [
    {
      id: 2,
      name: "Visa/Mc",
      description: "картой банка Казахстан",
      currency: "KZT",
      amount: 1500,
      conversion_rate: 1,
      visaLogo: "путь_к_логотипу_visa_mc.svg",
    },
    {
      id: 1,
      name: "СБП",
      description: "системой быстрых платежей",
      currency: "RUB",
      amount: 353,
      conversion_rate: 4.26,
      sbpLogo: "путь_к_логотипу_sbp.svg",
    },
  ];

  const success = true;

  return (
    <div>
      <div className="container">
        {/* Шапка */}
        <Header />
        {/* Основной контент */}
        <div className="content">
          <div className="block">
            <Lead />
            <Form />
            <Button title="Подтвердить заказ" />
            <OrderInfo orderNumber="123456" accountNumber="123456" />
            <PaymentMethod paymentMethods={paymentMethods} />
            <PaymentStatus amount="1000" success={success} />
            <ErrorPopup />
          </div>
          <div className="block">
            <MainImage />
          </div>
        </div>
      </div>
      {/* Подвал */}
      <Footer />
    </div>
  );
}

export default App;
