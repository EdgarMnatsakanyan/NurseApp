import React, { useState } from 'react';
import cl from './styles/MyProgile.module.css';
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { ReactComponent as EditPen } from '../../assets/personaldata/editpen.svg';
import EditName from '../UI/editname/EditName';
import CountryAddress from '../UI/countryaddress/CountryAddress';
import EmailAddress from '../UI/emailaddress/EmailAddress';
import VerificEmail from '../UI/verifiemail/VerificEmail';
import PhoneEdit from '../UI/phoneedit/PhoneEdit';
import EditLanguage from '../UI/editlanguage/EditLanguage';
import PhoneVerification from '../UI/phoneverification/PhoneVerification';


const MyProfile = () => {
    const [editNameModal, setEditNameModal] = useState(false);
    const [editCountryModal, setEditCountryModal] = useState(false);
    const [editEmailModal, setEditEmailModal] = useState(false);
    const [editPhoneModal, setEditPhoneModal] = useState(false);
    const [showVerification, setShowVerification] = useState(false);
    const [showPhone, setShowPhone] = useState(false)
    const [editLanguageModal, setEditLanguageModal] = useState(false);

    const [changeName, setChangeName] = useState([]);
    const [changeStreet, setChangeStreet] = useState([]);
    const [changeEmail, setChangeEmail] = useState([]);
    const [changePhone, setChangePhone] = useState([]);

    const nameChangeing = (newName) => {
        if (changeName === false){
            setChangeName([...changeName, newName])
        } else {
            changeName[0] = newName
        }
    }

    const changeCountry = (newCountry) => {
        if (changeStreet === false) {
            setChangeStreet([...changeStreet, newCountry])
        } else {
            changeStreet[0] = newCountry
        }
    }

    const changeMail = (newEmail) => {
        if (changeEmail === false) {
            setChangeEmail([...changeEmail, newEmail])
        } else {
            changeEmail[0] = newEmail
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
        <>
            <a href="/profilemenu"></a>
        <div className={cl.container}>
            <div className={cl.sections}>
                <div className={cl.iconTitle}>
                    <div className={cl.containerIcons}>
                        <IoPersonOutline className={cl.icons}/>
                    </div>
                    <p>Full name/Company name</p>
                    {changeName.map((type) =>
                        <span className={cl.title}>{type.nameChange}</span>
                    )}
                </div>
                <EditPen 
                    className={cl.editIcon}
                    onClick={() => setEditNameModal(true)}
                />
            </div>
                <EditName 
                    change={nameChangeing}
                    visible={editNameModal} 
                    setVisible={setEditNameModal}
                />

            <div className={cl.sections}>
                <div className={cl.iconTitle}>
                    <div className={cl.containerIcons}>
                        <IoLocationOutline className={cl.icons}/>
                    </div>
                    <p>Address</p>
                    {changeStreet.map((type) => 
                        <span className={cl.title}>{type.nameStreet} {type.address}</span>

                    )}
                </div>
                <EditPen 
                onClick={() => setEditCountryModal(true)}
                    className={cl.editIcon}
                />
            </div>
                <CountryAddress 
                    changeCity={changeCountry}
                    visible={editCountryModal}
                    setVisible={setEditCountryModal}
                />

            <div className={cl.sections}>
                <div className={cl.iconTitle}>
                    <div className={cl.containerIcons}>
                        <MdOutlineEmail className={cl.icons}/>
                    </div>
                    <p>Email</p>
                    {changeEmail.map((type) => 
                        <span className={cl.title}>{type.email}</span>
                    )}
                </div>
                <EditPen 
                    className={cl.editIcon}
                    onClick={() => setEditEmailModal(true)}
                />
            </div>
            {showVerification ? (
                <VerificEmail 
                    setVisible={() => {
                        setShowVerification(false);
                        setChangeEmail(false);
                    }} />
                ) : (
                <EmailAddress 
                    changeEmail={changeMail}
                    visible={editEmailModal}
                    setVisible={setEditEmailModal}
                    onSubmitEmail={() => {
                        setShowVerification(true);
                    }}
                />
            )}

            <div className={cl.sections}>
                <div className={cl.iconTitle}>
                    <div className={cl.containerIcons}>
                        <RiPhoneLine className={cl.icons}/>
                    </div>
                    <p>Phone</p>
                    {changePhone.map((type) => 
                        <span className={cl.title}>{type.phone}</span>
                    )}
                </div>
                <EditPen 
                    onClick={() => setEditPhoneModal(true)}
                    className={cl.editIcon}
                />
            </div>
            {showPhone ? (
                <PhoneVerification setVisible={() => {
                    setShowPhone(false);
                    setEditPhoneModal(false);
                }}/>
            ) : (
                <PhoneEdit visible={editPhoneModal} setVisible={setEditPhoneModal} onSubmitPhone={() => {
                    setShowPhone(true);
                }} isChangePhone={changePhoneValue} />
            )}

            <div className={cl.sections}>
                <div className={cl.iconTitle}>
                    <div className={cl.containerIcons}>
                        <TfiWorld className={cl.icons}/>
                    </div>
                    <p>Language</p>
                    <span className={cl.title}>English, Russian</span>

                </div>
                <EditPen 
                    className={cl.editIcon}
                    onClick={() => setEditLanguageModal(true)}
                />
            </div>
            <EditLanguage visible={editLanguageModal} setVisible={setEditLanguageModal}/>
        </div>
        </>
    );
};

export default MyProfile;