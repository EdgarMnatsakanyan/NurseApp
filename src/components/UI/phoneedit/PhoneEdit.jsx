import React, { useState } from 'react';
import cl from './PhoneEdit.module.css'
import { RxCross2 } from 'react-icons/rx';
import countriesData from '../input/index.json';

const PhoneEdit = ({visible, setVisible, onSubmitPhone, isChangePhone}) => {
    const [isPhone, setIsPhone] = useState([])
    const [showBlock, setShowBlock] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
        const inputPhoneNumber = event.target.value;
        setPhoneNumber(inputPhoneNumber);
        const phoneRegex = /^\d{3}-\d{2}-\d{3}-\d{3}$/;
        setIsValidPhoneNumber(phoneRegex.test(inputPhoneNumber));
    };

    const handleCountryChange = (event) => {
        const selectedCountryName = event.target.value;
        const country = countriesData.find((c) => c.name === selectedCountryName);
        setSelectedCountry(country);
    };

    const handleToggle = (e) => {
        e.preventDefault();
        setShowBlock(!showBlock);
        onSubmitPhone(isPhone);
        isChangePhone(isPhone);
        setVisible(!visible);
        setIsPhone({
            phone: ''
        })
    };

    const rootClasses = [cl.phoneContainer]
    if(visible) {
        rootClasses.push(cl.active)
    }


    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.phoneSection}>
                <div className={cl.phoneTitle}>
                    <h2>Edit phone number</h2>
                    <RxCross2 onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.PhoneNumberSection}>
                <div className={cl.phoneSelctor}>
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
                        value={phoneNumber || isPhone.phone}
                        onChange={handleChange}
                        onChangeCapture={(e) => setIsPhone({...isPhone, phone: e.target.value})}
                        placeholder="37494101010"
                    />
                </div>
                    <button className={cl.phoneBtn} onClick={handleToggle}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneEdit;