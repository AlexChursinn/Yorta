import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span>© 2024 Yorta</span>
        <a
          href="https://www.yorta.kz/offer.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Оферта
        </a>
        <a
          href="https://www.yorta.kz/privacy_policy.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Политика конфиденциальности
        </a>
        <a href="/about">О сервисе</a>
      </div>
    </footer>
  );
};

export default Footer;
