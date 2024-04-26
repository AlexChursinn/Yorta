import React from 'react';
import s from './MainImage.module.css'; 
import mainImagePrimory from "./mainImagePrimory.svg"; /* Пока просто подгрузил с локальной папки */

const MainImage = ({ imageSrc }) => {
    return (
        <div className={s.container}>
            <img src={mainImagePrimory} alt="Главная картинка страницы" className={`${s.image}`} />
        </div>
    );
}

export default MainImage;
