import React, { useState } from 'react';
import cl from './EditName.module.css'
import { RxCross2 } from 'react-icons/rx'
import { useTranslation } from 'react-i18next';
import MyInput from '../addinput/MyInput';

const EditName = ({visible, setVisible, change }) => {
    const { t } = useTranslation();
    const [changeName, setChengeName] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setVisible(!visible)
        change(changeName)
        setChengeName({
            nameChange: ''
        })
    }

    const rootClasses = [cl.editContiner]
    if(visible) {
        rootClasses.push(cl.active)
    }
    
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.editSection}>
                <div className={cl.titles}>
                    <h2>{t("modalWindow.editnmae.name")}</h2>
                    <button onClick={() => setVisible(false)} ><RxCross2 /></button>
                </div>
                <hr />
                <div className={cl.btnSection}>
                    <MyInput 
                        placeholder='Full name/ Company name*'
                        value={changeName.nameChange}
                        onChange={(e) => setChengeName({...changeName, nameChange: e.target.value})}
                    />
                    <button onClick={handleChange}>{t("modalWindow.editnmae.button")}</button>

                </div>
            </div>
        </div>
    );
};

export default EditName;
