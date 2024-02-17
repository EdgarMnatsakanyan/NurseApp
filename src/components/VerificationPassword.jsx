import React, { useState } from 'react';
import ImgContainer from './ImgContainer';
import { useTranslation } from 'react-i18next';
import VerificPass from './UI/verificpass/VerificPass';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const VerificationPassword = () => {
    const { t } = useTranslation();
    
    const [code, setCode] = useState('');

    const btnDisabled = code.length !== 4;

    const navigate = useNavigate()
    const handleContinue = () => {
      navigate('/createnewpassword')
    }

    return (
        <div className='verific-pass'>
            <ImgContainer />
            <div className='verific-container'>
            <Logo />
            <h2>{t("insercode.h2")}</h2>
            <p>{t("insercode.p")}</p>
            <VerificPass onChange={(val) => setCode(val)}  />
            <button className='verific-btn' disabled={btnDisabled} onClick={handleContinue}>{t("insercode.btnsix")}</button>
            <a href="#">{t("insercode.a")}</a>
            </div>
            
        </div>
    );
};

export default VerificationPassword;