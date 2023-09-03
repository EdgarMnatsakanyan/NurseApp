import React from 'react'
import MyEmailInput from './UI/pageemail/input/MyEmailInput';
import { useNavigate } from 'react-router-dom';
import ImgContainer from './ImgContainer';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../assets/logo.svg';

const LoginWithEmail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const handleContinue = () => {
    navigate('/profile')
  }
  const handelPass = () => {
    navigate('/forgetpassword')
  }
    return (
      <div className='email-container'>
      <ImgContainer />
      <div className='email-selector'>
        <Logo />
        <h2>{t('loginwithemail.email')}</h2>
        <p>{t('loginwithemail.type')}</p>
        <MyEmailInput />
        <a href='#' className='forgetBtn' onClick={handelPass}>{t('loginwithemail.forgetpass')}</a>
      </div>
      </div>
    )
  }

export default LoginWithEmail;