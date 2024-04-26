import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Lead from "./components/Lead/Lead";
import MainImage from "./components/MainImage/MainImage";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import ErrorPopup from "./components/Errorpopup/ErrorPopup";

function App() {
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
            <Button
              title="Подтвердить заказ"
              type="primary"
              status="default"
              /* onClick={} */
            />
            <ErrorPopup errorMessage="Ошибка! Аккаунт с таким номером не зарегистрирован" /> {/* Для теста передал текст ошибки */}
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
