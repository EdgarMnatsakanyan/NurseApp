import React, { useState } from 'react';
import cl from './MyButton.module.css'
import { useNavigate } from 'react-router-dom';

const PhoneNumberInput = () => {
  const navigate = useNavigate()
  const handleContinue = () => {
      navigate('/verification')
  }
  return (
    
    <div>
      <a href="#" className={cl.myButton} onClick={handleContinue}>Continue</a>
    </div>
  );
};

export default PhoneNumberInput;
