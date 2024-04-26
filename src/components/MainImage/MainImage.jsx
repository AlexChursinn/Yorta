import React from 'react';
import s from './MainImage.module.css'; 
import mainImageOne from "../../img/mainLogoOne.svg"; 

const MainImage = ({ imageSrc }) => {
    return (
        <div className={s.mainImageContainer}>
            <img src={mainImageOne} alt="Main" className={s.mainImage} />
        </div>
    );
}

export default MainImage;
