import React, { useState } from 'react';
import cl from './EmailAddress.module.css'
import { RxCross2 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';

const EmailAddress = ({visible, setVisible, onSubmitEmail}) => {
    const { t } = useTranslation();
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);
    const [showBlock, setShowBlock] = useState(false);

    const handleToggle = () => {
      setShowBlock(!showBlock);
    };
    
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z(2,8)])?/g;
        if (regEx.test(email)) {
            setMessage('Email verified');
            onSubmitEmail(email)
        } else if (!regEx.test(email)) {
            setMessage('Not verified')
        } else {
            setMessage('')
        }
    };

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }
    const rootClasses = [cl.emailContainer]
    if(visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.sectionEmail}>
                <div className={cl.sectionTitile}>
                    <h3>{t("modalWindow.emailaddress.editemail")}</h3>
                    <RxCross2 onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.sectionInput}>
                    <input type="email" placeholder='Email*' value={email} onChange={handleOnChange}/>
                    <button className={cl.btnSection} onClick={emailValidation}>{t("modalWindow.emailaddress.button")}</button>
                    <p style={{color: "red"}}>{message}</p>
                    <button className={cl.btnVerific} onClick={handleToggle}>{t("modalWindow.emailaddress.verifiemail")}</button>
                </div>
            </div>
        </div>
    );
};

export default EmailAddress;