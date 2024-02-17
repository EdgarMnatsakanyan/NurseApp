import React, { useEffect, useState } from 'react';
import cl from './EmailAddress.module.css'
import { RxCross2 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';

const EmailAddress = ({visible, setVisible, onSubmitEmail, changeEmail}) => {
    const { t } = useTranslation();
    
    const [isEmail, setIsEmail] = useState([]);
    const [showBlock, setShowBlock] = useState(false);
    const [email, setEmail] = useState("yourmail@mail.com");
    const [message, setMessage] = useState(" ");

    function handleEmail(event) {
        let inputValue = event.target.value;
        setEmail(inputValue);

        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(inputValue)) {
            setMessage("Error! you have entered invalid email.");
        } else {
            setMessage("");
        }
    }

    const handleToggle = () => {
      setShowBlock(!showBlock);
      onSubmitEmail(isEmail);
    };

    const handleEmailChange = (e) => {
        e.preventDefault();
        changeEmail(isEmail);
        setVisible(!visible)
        setIsEmail({
            email: ''
        })
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
                    <input type="email" placeholder='Email*' value={isEmail.email} onChange={(e) => {
                        setIsEmail({...isEmail, email: e.target.value});
                        }}/>
                    <button className={cl.btnSection} onClick={handleEmailChange}>{t("modalWindow.emailaddress.button")}</button>
                    <button className={cl.btnVerific} onClick={handleToggle}>{t("modalWindow.emailaddress.verifiemail")}</button>
                </div>
            </div>
        </div>
    );
};

export default EmailAddress;