import './App.css';
import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from 'react-i18next';
import Container from './components/Container';
import MySelect from './components/UI/select/MySelect';
import LoginWithEmail from './components/LoginWithEmail';
import Verification from './components/Verification';
import CreateAccount from './components/CreateAccount';
import ForgetPassword from './components/ForgetPassword';
import CreateNewPassword from './components/CreateNewPassword'
import langEn from './langEn.json'
import langRu from './langRu.json'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import VerificationPassword from './components/VerificationPassword';
import Profile from './components/Profile';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: langEn
      },
      ru: {
        translation: langRu
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    console.log('change', language)
    i18n.changeLanguage(language.toLowerCase())  };
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Container />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/login" element={<LoginWithEmail />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/verificationpassword" element={<VerificationPassword />} />
          <Route path="/createnewpassword" element={<CreateNewPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <MySelect className='my-selector' onLanguageChange={changeLanguage}/>
    </div>
  );
}

export default App;
