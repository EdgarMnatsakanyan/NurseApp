import './App.css';
import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from 'react-i18next';
import MySelect from './components/UI/select/MySelect';
import langEn from './langEn.json'
import langRu from './langRu.json'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from './components/Router/Router';

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
    i18n.changeLanguage(language.toLowerCase())};
  

  return (
    <div className="App">
      <Router>
        <Routes>
          {privateRoutes.map(route => 
            <Route 
              key={route.path}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />  
          )}

        </Routes>
        <Routes>
            {publicRoutes.map(route => 
                <Route 
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                  exact={route.exact}
                />
            )}
        </Routes>  
      </Router>
      <MySelect 
        className='my-selector' 
        onLanguageChange={changeLanguage}
      />
    </div>
  );
}

export default App;
