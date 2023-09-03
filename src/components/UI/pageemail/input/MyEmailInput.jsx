import React, { useState } from 'react'
import cl from './MyEmailInput.module.css';
import {FaEye, FaEyeSlash} from 'react-icons/fa6';
import ValidationMessage from '../../../ValidationMassage';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MyEmailInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrrors] = useState({});
  const { t } = useTranslation();
  
  const navigate = useNavigate()
  const handleContinue = () => {
    navigate('/profile')
  }
  
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if(!email) {
    errors.email = 'Email is required';
    }
    if(!password) {
      errors.password = 'Password is required'
    }

    setErrrors(errors);

    if(Object.keys(errors).length === 0){
      
    }
  };

    return (
        <div className={cl.allSection}>
          <div className={cl.emailSection}>
            <input 
                className={cl.emailInput}
                type='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='Email*'
            />
            {errors.email && <ValidationMessage massage={errors.email}/>}
          </div>
          <div>
            <input className={cl.passInput}
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password*'
                onChange={handlePasswordChange}
             />
             {errors.password && <ValidationMessage massage={errors.password}/>}
             
          </div>
              <button className={cl.emailBtn} onClick={togglePasswordVisibility }>
                {showPassword ? <FaEye /> : <FaEyeSlash/>}
              </button>
              <button className='login-btn' onClickCapture={handleSubmit} onClick={handleContinue}>{t('loginwithemail.btnone')}</button>
      </div>
    )
  }

export default MyEmailInput;