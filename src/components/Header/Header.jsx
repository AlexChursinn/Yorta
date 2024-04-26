import React from "react";
import s from "./Header.module.css";
import logo from "../../img/logo.svg"; // Путь к вашему логотипу

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="Логотип Yorta" className={s.logo} />
    </header>
  );
};

export default Header;
