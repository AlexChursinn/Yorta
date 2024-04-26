import React from 'react';
import s from './MainImage.module.css'; 
import mainImageOne from "../../img/mainLogoOne.svg"; /* Пока просто подгрузил с локальной папки */

const MainImage = ({ imageSrc }) => {
    return (
        <div className={s.mainImageContainer}>
            <img src={mainImageOne} alt="Главная картинка страницы" className={`${s.mainImage}`} />
        </div>
    );
}

export default MainImage;
