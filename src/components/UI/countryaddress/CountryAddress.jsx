import React, { useState, useEffect, useRef } from 'react';
import cl from './CountryAddress.module.css';
import { RxCross2 } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';

const CountryAddress = ({visible, setVisible}) => {
    const { t } = useTranslation();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const [val, setVal] = useState('');
    const [postal, setPostal] = useState('');
    const rootClasses = [cl.countryContainer]
    if(visible) {
        rootClasses.push(cl.active)
    };

    return (
        <div className={rootClasses.join(' ')} >
            <div className={cl.countrySection} onClick={() => setVisible(false)}>
                <div className={cl.title} >
                    <h2>{t("modalWindow.country.address")}</h2>
                    <button className={cl.icon} onClick={() => setVisible(false)}><RxCross2/></button>
                </div>
                <hr />
                <div className={cl.countryInputContiner}>
                    <div className={cl.index}>
                        <input type="text" className={cl.street} placeholder='Street 1*' />
                        <input type="text" className={cl.zip} placeholder='Number*' pattern='[0-9]*' value={val} onChange={(e) => setVal((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={3}/>
                    </div>
                    <input type="text" placeholder='Street 2(optional)'/>
                    <input type="text" placeholder='City*'/>
                    <input type="text" placeholder='State*'/>
                    <input type="text" placeholder='Postal code*'  pattern='[0-9]*' value={postal} onChange={(e) => setPostal((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={4}/>
                    <input type="text" placeholder='Country*' onClick={toggleMenu}/>
                    <button className={cl.btnSave} onClick={() => setVisible(false)}>{t("modalWindow.country.btn")}</button>
                </div>
                
            </div>
            {isMenuOpen && (
                <div className={cl.countryInput} >
                    <div className={cl.inputSection}>
                        <h4>Yerevan</h4>
                        <h4>Vanadzor</h4>
                        <h4>Shamshadin</h4>
                        <h4>Vaiq</h4>
                    </div>
                </div>
                )}
        </div>
    );
};

export default CountryAddress;