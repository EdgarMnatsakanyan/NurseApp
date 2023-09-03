import React, { useState } from 'react';
import cl from './VerificEmail.module.css'
import { RxCross2 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';
import { ReactComponent as EmailIcon } from '../../..//assets/email.svg';

const VerificEmail = ({visible, setVisible, onChange}) => {
    const { t } = useTranslation();

    const [values, setValues] = useState([]);

    const verificEmail = [cl.verificEmail]
    if(visible) {
        verificEmail.push(cl.active)
    }

    const handleChange = (index, value) => {
        const number = (value || '').replace(/\D+/g, '');
        const newValues = [...values];
        newValues[index] = number;
        setValues(newValues);
        onChange && onChange(newValues.join(''));
        if (number && index < 3) {
        }
    };

    return (
        <div className={verificEmail.join(' ')}>
            <div className={cl.verificSection}>
                <div className={cl.verificTitle}>
                    <h2>{t("modalWindow.verificemail.wehave")}</h2>
                    <RxCross2 className={cl.icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.verificInput}>
                    <EmailIcon />
                <p>{t("modalWindow.verificemail.placeverifi")}</p>
                <form action="" className={cl.inputs}>
                    <input className={cl.VeraficInput} placeholder='-' value={values[0] || ''} onChange={({ nativeEvent }) => handleChange(0, nativeEvent.data)} type='text' maxLength={1}/>
                    <input className={cl.VeraficInput} placeholder='-' value={values[1] || ''} onChange={({ nativeEvent }) => handleChange(1, nativeEvent.data)} type='text' maxLength={1}/>
                    <input className={cl.VeraficInput} placeholder='-' value={values[2] || ''} onChange={({ nativeEvent }) => handleChange(2, nativeEvent.data)} type='text' maxLength={1}/>
                    <input className={cl.VeraficInput} placeholder='-' value={values[3] || ''} onChange={({ nativeEvent }) => handleChange(3, nativeEvent.data)} type='text' maxLength={1}/>
                </form>
                <button className={cl.verificBtn}>{t("modalWindow.verificemail.button")}</button>
                <a href="">{t("modalWindow.verificemail.resend")}</a>
                </div>
            </div>
        </div>
    );
};

export default VerificEmail;