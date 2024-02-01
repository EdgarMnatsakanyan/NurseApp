import React, { useState } from 'react';
import cl from './PhoneEdit.module.css'
import { RxCross2 } from 'react-icons/rx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneEdit = ({visible, setVisible}) => {
    const [phone, setPhone] = useState('');

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
                    <PhoneInput 
                    country={'us'}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    />
                </div>
                    <button className={cl.phoneBtn}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneEdit;