import React, { useState } from 'react';
import cl from './ContactUs.module.css'
import { RxCross2 } from 'react-icons/rx'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactUs = ({visible, setVisible}) => {
    const [phone, setPhone] = useState('')
    const contactUs = [cl.contactUsContainer]
    if(visible) {
        contactUs.push(cl.active)
    }
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
                            <PhoneInput 
                                country={'am'}
                                value={phone}
                                onChange={(e) => setPhone(e)}
                                inputClass={cl.formControl}
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