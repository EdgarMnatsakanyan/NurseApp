import React, { useState, useEffect, useRef } from 'react';
import cl from './CountryAddress.module.css';
import { RxCross2 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';
import { FaAngleDown , FaAngleUp, FaRegCheckCircle  } from "react-icons/fa";

import MyInput from '../addinput/MyInput';

const CountryAddress = ({visible, setVisible, changeCity}) => {
    const { t } = useTranslation();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [changeStreet, setChangeStreet] = useState([])
    const [selected, setIsSelected] = useState("Country*");
    function handleBlur(e) {
      console.log(e);
    }
    const handleChange = (e) => {
        setVisible(false)
        e.preventDefault();
        changeCity(changeStreet)
        setChangeStreet({
            nameStreet: '',
            address: ''
        })
    }

    const toggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    };
    

    const [postal, setPostal] = useState('');
    const rootClasses = [cl.countryContainer]
    if(visible) {
        rootClasses.push(cl.active)
    };

    return (
        <div className={rootClasses.join(' ')} >
            <div className={cl.countrySection}>
                <div className={cl.title} >
                    <h2>{t("modalWindow.country.address")}</h2>
                    <button className={cl.icon} onClick={() => setVisible(false)}><RxCross2/></button>
                </div>
                <hr />
                <div className={cl.countryInputContiner}>
                    <div className={cl.index}>
                        <MyInput type="text" className={cl.street} placeholder='Street 1*'
                            value={changeStreet.nameStreet}
                            onChange={(e) => setChangeStreet({...changeStreet, nameStreet: e.target.value})}
                        />
                        <MyInput 
                        type="text" 
                        className={cl.zip} 
                        placeholder='15/20' 
                        pattern='[0-9]*' 
                        value={changeStreet.address} 
                        onChange={(e) => setChangeStreet({...changeStreet, address: e.target.value})}
                        maxLength={5}
                        />
                    </div>
                    <input type="text" placeholder='Street 2(optional)'/>
                    <input type="text" placeholder='City*'/>
                    <input type="text" placeholder='State*'/>
                    <input type="text" placeholder='Postal code*'  pattern='[0-9]*' value={postal} onChange={(e) => setPostal((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={4}/>
                    <div className={cl.selectSection} onClick={(e) => setIsMenuOpen(!isMenuOpen)}> 
                        <p>{selected}</p>
                        <span onClick={toggleMenu}>
                            {isMenuOpen ? <FaAngleUp  /> : <FaAngleDown  />}
                        </span>
                    </div>
                    <button className={cl.btnSave} onClick={handleChange}>{t("modalWindow.country.btn")}</button>
                </div>
                
            </div>
            {isMenuOpen && (
                <div className={cl.countryInput}>
                    <div className={cl.inputSection} onClick={() => setIsMenuOpen(false)}>
                        <h4 onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        >Yerevan</h4>
                        <h4 onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        >Vanadzor</h4>
                        <h4 onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        >Shamshadin</h4>
                        <h4 onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        >Vaiq</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryAddress;