import React, { useEffect, useState } from 'react';
import cl from './PersonalData.module.css';
import EditName from '../editname/EditName';
import CountryAddress from '../countryaddress/CountryAddress'
import EmailAddress from '../emailaddress/EmailAddress';
import PhoneEdit from '../phoneedit/PhoneEdit';
import VerificEmail from '../verifiemail/VerificEmail';
import PhoneVerification from '../phoneverification/PhoneVerification';
import EditLanguage from '../editlanguage/EditLanguage';
import { useTranslation } from 'react-i18next';
import { ReactComponent as EditPen } from '../../../assets/personaldata/editpen.svg';
import { ReactComponent as Person } from '../../../assets/personaldata/person.svg';
import { ReactComponent as Location } from '../../../assets/personaldata/location.svg';
import { ReactComponent as Email } from '../../../assets/personaldata/email.svg';
import { ReactComponent as Phone } from '../../../assets/personaldata/phone.svg';
import { ReactComponent as Language } from '../../../assets/personaldata/language.svg';

const PersonalData = () => {
    const { t } = useTranslation();

    const [modal, setModal] = useState(false);
    const [country, setCountry] = useState(false);
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [language, setLanguage] = useState(false);
    const [showVerification, setShowVerification] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    
    const [changeName, setChengeName] = useState([])    
    const [changeStreet, setChangeStreet] = useState([])
    const [changePhone, setChangePhone] = useState([])
    const [isEmail, setIsEmail] = useState([])
    const [isPhone, setIsPhone] = useState([])


    const nameChangeing = (newName) => {
        if (changeName === false){
            setChengeName([...changeName, newName])
        } else {
            changeName[0] = newName
        }
    }

    const streetChange = (newStreet) => {
        if (changeStreet === false) {
            setChangeStreet([...changeStreet, newStreet])
        } else {
            changeStreet[0] = newStreet
        }
    }

    const changeEmail = (newEmail) => {
        if (isEmail === false) {
            setIsEmail([...isEmail, newEmail])
        } else {
            isEmail[0] = newEmail
        }
    }

    const changePhoneNumebr = (newPhoneNumber) => {
        if (isPhone === false) {
            setIsPhone([...isPhone, newPhoneNumber])
        } else {
            isPhone[0] = newPhoneNumber
        }
    }

    const changePhoneValue = (newPhone) => {
        if(changePhone === false) {
            setChangePhone([...changePhone, newPhone])
        } else {
            changePhone[0] = newPhone
        }
    }


    return (


        <div className={cl.container}>
            <div className={cl.sectionContainers}>
            <div className={cl.accoutn}>
                <img src="./person.png" alt='123' className={cl.img}/>
                <div className={cl.personalName}>
                    <h4>Edgar Mnatsakanyan</h4>
                    <p>{t("myProfile.personalData.day")}</p>
                </div>
                <button className={cl.changeBtn}>{t("myProfile.personalData.button")}</button>
            </div>
            <div className={cl.line}/>

            <div className={cl.section}>
                <a href="#">{t("myProfile.personalData.personal")}</a>
                <div className={cl.personalSection}>
                <div className={cl.content}>
                    <div className={cl.icon}>
                        <Person />
                    </div>
                    <div className={cl.contentAbout}>
                    <p>{t("myProfile.personalData.name")}</p>
                    
                    {changeName.map((data) => {
                        return (
                            <h4>{data.nameChange}</h4>
                        )
                    })}
                    </div>
                    <div className={cl.editor} onClick={() => setModal(true)}>
                        <EditPen className={cl.editpen}/>
                    </div>
                    <div className={cl.contentAll}>
                    <EditName change={nameChangeing} visible={modal} setVisible={setModal}/>
                    </div>
                </div>
                <div className={cl.content}>
                    <div className={cl.icon}>
                        <Location />
                    </div>
                    <div className={cl.contentAbout}>
                        <p>{t("myProfile.personalData.address")}</p>
                        {changeStreet.map((type) => {
                            return (
                                <h4>{type.nameStreet} {type.address}</h4>
                            )
                        })}
                    </div>
                    <div className={cl.editor} onClick={() => setCountry(true)}>
                    <EditPen className={cl.editpen}/>
                    </div>
                    <div className={cl.contentAll}>
                    <CountryAddress changeCity={streetChange} visible={country} setVisible={setCountry}/>
                    </div>
                </div>
                <div className={cl.content}>
                    <div className={cl.icon}>
                        <Email />
                    </div>
                    <div className={cl.contentAbout}>
                        <p>{t("myProfile.personalData.email")}</p>
                        {isEmail.map((type) => 
                                <h4>{type.email}</h4>
                        )}
                    </div>
                    <div className={cl.editor} onClick={() => setEmail(true)}>
                    <EditPen className={cl.editpen}/>
                    </div>
                    <div className={cl.contentAll}>
                    {showVerification ? (
                    <VerificEmail setVisible={() => {
                        setShowVerification(false);
                        setEmail(false);
                    }} />
                    ) : (
                    <EmailAddress changeEmail={changeEmail} visible={email} setVisible={setEmail} onSubmitEmail={() => {
                        setShowVerification(true);
                    }}/>
                    )}
                    </div>
                </div>
                <div className={cl.content}>
                    <div className={cl.icon}>
                        <Phone />
                    </div>
                    <div className={cl.contentAbout}>
                        <p>{t("myProfile.personalData.phone")}</p>
                        {changePhone.map((type) => 
                            <h4>{type.phone}</h4>
                        )}
                    </div>
                    <div className={cl.editor} onClick={() => setPhone(true)}>
                    <EditPen className={cl.editpen}/>
                    </div>
                    <div className={cl.contentAll}>
                    {showPhone ? (
                        <PhoneVerification setVisible={() => {
                            setShowPhone(false);
                            setPhone(false);
                        }}/>
                        ) : (
                        <PhoneEdit visible={phone} chnagePhone={changePhoneNumebr} setVisible={setPhone} onSubmitPhone={() => {
                            setShowPhone(true)
                        }} isChangePhone={changePhoneValue} />
                    )}
                    </div>
                </div>
                <div className={cl.content}>
                    <div className={cl.icon}>
                        <Language />
                    </div>
                    <div className={cl.contentAbout}>
                        <p>{t("myProfile.personalData.language")}</p>
                        <h4>{t("myProfile.personalData.enRu")}</h4>
                    </div>
                    <div className={cl.editor} onClick={() => setLanguage(true)}>
                    <EditPen className={cl.editpen}/>
                    </div>
                    <div className={cl.contentAll}>
                    <EditLanguage visible={language} setVisible={setLanguage}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default PersonalData;