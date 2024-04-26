// App.js
import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Lead from "./components/Lead/Lead";
import MainImage from "./components/MainImage/MainImage";
import Button from "./components/Button/Button"; // Импортируем компоненту Button
import Form from "./components/Form/Form";

function App() {
  const handleConfirmOrder = () => {
    console.log("Order confirmed!"); // Пример обработчика нажатия кнопки
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Lead />
        <MainImage />
        <Form />
        <Button
          title="Подтвердить заказ"
          type="primary"
          status="default"
          onClick={handleConfirmOrder}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
