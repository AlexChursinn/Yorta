import React from 'react';
import s from './Form.module.css'; 

const Form = () => {
    return (
        <div className={s.form}>
            <div className={s.inputContainer}>
                <label htmlFor="accountNumber">Номер аккаунта</label>
                <input type="text" id="accountNumber" className={s.input} />
            </div>
            <div className={s.inputContainer}>
                <label htmlFor="orderNumber">Номер заказа</label>
                <input type="text" id="orderNumber" className={s.input} />
            </div>
            <div className={s.inputContainer}>
                <label htmlFor="paymentAmount">Сумма оплаты в тенге</label>
                <input type="text" id="paymentAmount" className={s.input} />
            </div>
        </div>
    );
}

export default Form;
