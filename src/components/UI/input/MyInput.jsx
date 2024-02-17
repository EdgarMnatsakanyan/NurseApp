import React, { useState } from 'react';
import cl from './MyInput.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import countriesData from './index.json'

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const { t } = useTranslation('');

  const navigate = useNavigate()
 
  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    setIsValidPhoneNumber(phoneRegex.test(inputPhoneNumber));
  };

  const handleCountryChange = (event) => {
    const selectedCountryName = event.target.value;
    const country = countriesData.find((c) => c.name === selectedCountryName);
    setSelectedCountry(country);
  };

  const handleContinue = () => {
      navigate('/verification')
    }

  return (
    <div className={cl.inputContaner}>
      <div className={cl.inputSection}>
      <select value={selectedCountry.name} className={cl.mySelect} onChange={handleCountryChange}>
          {countriesData.map((country) => (
            <option key={country.name} value={country.name}>
              <div>
                {country.emoji}
              </div>
            </option>
          ))}
        </select>
        <input
          className={cl.myInput}
          type="text"
          maxLength={'12'}
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="37494101010"
        />

      </div>
      <button className={cl.button} onClick={handleContinue}>{t("signupor.btnone")}</button>
    </div>
  );
};

export default PhoneNumberInput;
