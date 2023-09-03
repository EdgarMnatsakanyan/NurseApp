import React, { useState } from 'react';
import VerificInput from './UI/verafic/VeraficInput';
import { useTranslation } from 'react-i18next';
import ImgContainer from './ImgContainer';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Verification = () => {
    const { t } = useTranslation();
    
    const [code, setCode] = useState('');

    const btnDisabled = code.length !== 4;

    const navigate = useNavigate()
    const handleContinue = () => {
      navigate('/login')
    }

    return (
        <div className='verfic-container'>
        <ImgContainer />
        <div className='verification-selecter'>
            <Logo />
            <h2>{t('verification.signin')}</h2>
            <p>{t('verification.insertcode')}</p>
            <VerificInput onChange={(val) => setCode(val)} />
            <button className='verific-btn' disabled={btnDisabled}  onClick={handleContinue}>{t('verification.btnthree')}</button>
        </div>
        </div>
    );
};

export default Verification;