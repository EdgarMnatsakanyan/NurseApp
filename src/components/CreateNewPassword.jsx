import React, { useState } from 'react';
import ImgContainer from './ImgContainer';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const CreateNewPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const handleContinue = () => {
    navigate('/login')
  }
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log('Password confirmed:', password);
    } else {
      setPasswordMatch(false);
    }
  };

  

  return (
    <div className='createnewpassword'>
        <ImgContainer />
        <div className='create-container'>
        <Logo />
        <h2>{t("createnewpassword.h2")}</h2>
        <p>{t("createnewpassword.p")}</p>
        <form className='create-container'> 
          <input type="password" value={password} onChange={handlePasswordChange} placeholder='New Password*'/>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Confirm New Password*'/>
          {!passwordMatch && <p style={{color: 'red'}}>Password don't match.</p>}
          <button className='create-btn' onClickCapture={handleSubmit} onClick={handleContinue}>{t("createnewpassword.btnseven")}</button>
        </form>
        </div>
    </div>
  );
}

export default CreateNewPassword;
