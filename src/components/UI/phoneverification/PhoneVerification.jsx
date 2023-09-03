import React, { useEffect, useState } from 'react';
import cl from './PhoneVerification.module.css';
import { RxCross2 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Phone } from '../../../assets/phoneverification/phone.svg';
import { ReactComponent as Message } from '../../../assets/phoneverification/message.svg';

const PhoneVerification = ({visible, setVisible, onChange}) => {
    const { t } = useTranslation();

    const [seconds, setSeconds] = useState(59);
    const [timerCompleted, setTimerCompleted] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            setTimerCompleted(true)
        }
    },[seconds]);

    const handelReset = () => {
        setSeconds(0);
        setTimerCompleted(false)
    };

    const rootClasses = [cl.phoneVerification]
    if(visible) {
        rootClasses.push(cl.active)
    }

    const [values, setValues] = useState([]);

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
        <div className={rootClasses.join(' ')}>
            <div className={cl.phoneContainer}>
                <div className={cl.phoneTitle}>
                    <h2>{t("modalWindow.phoneverific.anemail")}</h2>
                    <RxCross2 className={cl.icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.phoneSection}>
                    <div className={cl.phoneImg}>
                        <Phone />
                        <Message className={cl.message}/>
                    </div>
                    <p>{t("modalWindow.phoneverific.thecode")}</p>
                <form action="" className={cl.phoneInput}>
                    <input className={cl.VeraficInput} placeholder='-' value={values[0] || ''} onChange={({ nativeEvent }) => handleChange(0, nativeEvent.data)} type='text' maxLength={1}/>
                    <input className={cl.VeraficInput} placeholder='-' value={values[1] || ''} onChange={({ nativeEvent }) => handleChange(1, nativeEvent.data)} type='text' maxLength={1}/>
                    <input className={cl.VeraficInput} placeholder='-' value={values[2] || ''} onChange={({ nativeEvent }) => handleChange(2, nativeEvent.data)} type='text' maxLength={1}/>
                    <input className={cl.VeraficInput} placeholder='-' value={values[3] || ''} onChange={({ nativeEvent }) => handleChange(3, nativeEvent.data)} type='text' maxLength={1}/>
                </form>
                <button className={cl.phoneBtn} onClick={() => setVisible(false)}>{t("modalWindow.phoneverific.button")}</button>
                <p className={cl.titleTimer}>{t("modalWindow.phoneverific.timer")} <span className={cl.timer}>0:{seconds}</span></p>
                {timerCompleted && (
                    <p className={cl.timerBtn} onClick={handelReset}>{t("modalWindow.phoneverific.resendcode")}</p>
                )}
                </div>
            </div>
        </div>
    );
};

export default PhoneVerification;