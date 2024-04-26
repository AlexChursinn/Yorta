import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <span>© 2024 Yorta</span>
        <a href="offer.pdf" target="_blank">Оферта</a>
        <a href="privacy_policy.pdf" target="_blank">Политика конфиденциальности</a>
        <a href="/about">О сервисе</a>
      </div>
    </footer>
  );
};

export default Footer;
