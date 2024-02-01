import React, { useState } from 'react';
import ValidationMessage from '../../ValidationMassage';
import cl from './ForgetPass.module.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const [email, setEmail] = useState('')
    const [errors, setErrrors] = useState('')
    
    const handleContinue = () => {
        navigate('/verificationpassword')
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const errors = {};
        if(!email) {
            errors.email = 'Email is required';
        } else {
            setErrrors(errors);
        }
    };
    return (
        <div>
            <form >
                <div className={cl.forgetContainer}>
                <input 
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email*"
                    />
                    <button className={cl.forgetBtn} onClick={handleContinue}>{t("forgotpassword.btnfive")}</button>
                    {errors.email && <ValidationMessage massage={errors.email}/>}
                </div>
            </form>
        </div>
    );
};

export default ForgetPass;