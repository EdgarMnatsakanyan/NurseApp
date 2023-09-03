import React from 'react';
import ImgContainer from './ImgContainer';
import ForgetPass from './UI/forgetpass/ForgetPass';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const ForgetPassword = () =>  {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const handleContinue = () => {
      navigate('/login')
    }
    
    return (
        <div className='forg-container'>
            <ImgContainer />
            <div className='forgetpass'>
            <Logo />
            <h2>{t("forgotpassword.h2")}</h2>
            <p>{t("forgotpassword.p")}</p>
            <ForgetPass />
            <a href="#" className='forget-btn' onClick={handleContinue}>{t("forgotpassword.a")}</a>
            </div>
        </div>
    );
};

export default ForgetPassword;