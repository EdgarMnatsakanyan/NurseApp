import React from 'react';
import MyInput from './UI/input/MyInput.jsx';
import { useTranslation } from 'react-i18next';
import ImgContainer from './ImgContainer.jsx';
import { useNavigate } from 'react-router-dom';
 const Container = () => {
  const navigate = useNavigate()
  const handleContinue = () => {
      navigate('/login')
  }
 
  const { t } = useTranslation('');
    return (
      <div className='conatiner'>
        <div className='child-container'>
          <ImgContainer />
          <div className='reg-cont'>
            <div className='reg-img'></div>
            <h2>{t("signupor.signup")}</h2>
            <p>{t("signupor.type")}</p>
            <MyInput className="reg-input" />
            <a href='#' className='login-with' onClick={handleContinue}>{t("signupor.btntwo")}</a>
          </div>
          <div className='my-selector'></div>
        </div>
      </div>
    )
}

export default Container;