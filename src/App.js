import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainImage from "./components/MainImage/MainImage";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import OrderInfo from "./components/OrderInfo/OrderInfo";

function App() {
  const paymentMethods = [
    {
      "id": 2,
      "name": "Visa/Mc",
      "description": "Картой банка РК",
      "currency": "KZT",
      "amount": 1500,
      "conversion_rate": 1,
      "visaLogo": "путь_к_логотипу_visa_mc.svg"
    },
    {
      "id": 1,
      "name": "СБП",
      "description": "Сбп для россиян",
      "currency": "RUB",
      "amount": 353,
      "conversion_rate": 4.26,
      "sbpLogo": "путь_к_логотипу_sbp.svg"
    }
  ];

  return (
    <div>
      <div className="container">
        {/* Шапка */}
        <Header />
        {/* Основной контент */}
        <div className="content">
          <div className="block">
            {/* <PaymentMethod paymentMethods={paymentMethods} /> */}
            <OrderInfo orderNumber="123456" accountNumber="123456"/>
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
