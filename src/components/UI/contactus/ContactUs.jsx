import React, { useState } from 'react';
import cl from './ContactUs.module.css'
import { RxCross2 } from 'react-icons/rx'
import countriesData from '../input/index.json';

const ContactUs = ({visible, setVisible}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [showSecondContent, setShowSecondContent] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
    
    const contactUs = [cl.contactUsContainer]
    if(visible) {
        contactUs.push(cl.active)
    }

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
    return (
        <div className={contactUs.join(' ')}>
            <div className={cl.contactContainer}>
                <div className={cl.exitTitle}>
                <p>Contact us</p>
                <RxCross2 className={cl.icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.containerInputs}>
                        <input type="text" className={cl.inputs} placeholder='Name'/>
                        <input type="email" className={cl.inputs} placeholder='Email'/>
                        <div className={cl.phoneSlector}>
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
                                maxLength={12}
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                                placeholder="37494101010"
                            />
                        </div>
                        <input type="text" className={cl.inputs} placeholder='Subject'/>
                        <textarea cols="39" rows="5" placeholder='Message' className={cl.inputMassage}></textarea>
                        <button className={cl.btnContact}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;