import React from 'react';
import CreateAccountInputs from './UI/createaccount/CreateAccountInputs';
import ImgContainer from './ImgContainer';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../assets/logo.svg';

function CreateAccount() {
  const { t } = useTranslation();
  
    return (
        <div className='create-account'>
          <ImgContainer />
          <div className='create-contianer'>
              <Logo />
              <h2>{t("createanaccoutn.h2")}</h2>
              <p>{t("createanaccoutn.p")}</p>
              <CreateAccountInputs />
            </div>
        </div>
    );
};

export default CreateAccount;